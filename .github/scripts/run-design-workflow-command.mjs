import { existsSync, readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { relative, resolve, sep } from 'node:path';

const cwd = process.cwd();
const requestPath = resolve(cwd, '.workflow-command.json');
const cliPath = resolve(cwd, 'docs/implementation-workflow/cli/design-workflow.mjs');
const recordPath = resolve(cwd, '.workflow/workflow-record.json');

const allowedCommands = new Set([
  'init',
  'context',
  'status',
  'next',
  'validate',
  'sync',
  'migrate',
  'stage.check',
  'stage.review',
  'stage.advance',
  'stage.rewind',
  'architecture.decide',
  'profile.upgrade.start',
  'profile.upgrade.finish',
  'snapshot.add',
  'snapshot.verify',
  'snapshot.supersede',
  'artifact.adopt',
  'artifact.scaffold',
  'artifact.review',
  'artifact.approve',
  'artifact.reopen',
  'artifact.supersede',
  'artifact.baseline',
  'trace.define',
  'trace.update',
  'trace.supersede',
  'trace.show',
  'task.create',
  'task.validation.set',
  'task.ready',
  'task.start',
  'task.block',
  'task.unblock',
  'task.complete',
  'review.set-result',
  'mode.set',
]);

function fail(message) {
  console.error(`Executor error: ${message}`);
  process.exit(1);
}

function commandKey(argv) {
  const [first, second, third] = argv;
  if (['init', 'context', 'status', 'next', 'validate', 'sync', 'migrate'].includes(first)) return first;
  if (first === 'stage' && second) return `stage.${second}`;
  if (first === 'architecture' && second) return `architecture.${second}`;
  if (first === 'profile' && second === 'upgrade' && third) return `profile.upgrade.${third}`;
  if (first === 'snapshot' && second) return `snapshot.${second}`;
  if (first === 'artifact' && second) return `artifact.${second}`;
  if (first === 'trace' && second) return `trace.${second}`;
  if (first === 'task' && second === 'validation' && third) return `task.validation.${third}`;
  if (first === 'task' && second) return `task.${second}`;
  if (first === 'review' && second) return `review.${second}`;
  if (first === 'mode' && second) return `mode.${second}`;
  return null;
}

function optionValue(argv, option) {
  const index = argv.indexOf(option);
  if (index === -1) return null;
  const value = argv[index + 1];
  if (!value || value.startsWith('--')) fail(`${option} requires a value.`);
  return value;
}

function ensurePathInsideRepository(value, option) {
  const target = resolve(cwd, value);
  const rel = relative(cwd, target);
  if (rel === '' || (!rel.startsWith(`..${sep}`) && rel !== '..')) return;
  fail(`${option} must resolve inside the repository checkout.`);
}

function run(args, label) {
  console.log(`\n==> ${label}`);
  const result = spawnSync(process.execPath, [cliPath, ...args], {
    cwd,
    stdio: 'inherit',
    env: process.env,
  });
  if (result.error) fail(`${label} could not start: ${result.error.message}`);
  if (result.status !== 0) fail(`${label} exited with status ${result.status ?? 'unknown'}.`);
}

if (!existsSync(requestPath)) fail('.workflow-command.json does not exist.');
if (!existsSync(cliPath)) fail(`Workflow CLI not found at ${relative(cwd, cliPath)}.`);

let request;
try {
  request = JSON.parse(readFileSync(requestPath, 'utf8'));
} catch (error) {
  fail(`Could not parse .workflow-command.json: ${error instanceof Error ? error.message : String(error)}`);
}

if (!request || typeof request !== 'object' || Array.isArray(request)) fail('Command request must be a JSON object.');
if (typeof request.id !== 'string' || !request.id.trim()) fail('Command request requires a non-empty string id.');
if (!Array.isArray(request.argv) || request.argv.length === 0) fail('Command request requires a non-empty argv array.');
if (!request.argv.every((item) => typeof item === 'string' && item.length > 0 && !item.includes('\0') && !item.includes('\n'))) {
  fail('Every argv item must be a non-empty single-line string without NUL bytes.');
}

const key = commandKey(request.argv);
if (!key || !allowedCommands.has(key)) fail(`Command is not allowlisted: ${key ?? request.argv.join(' ')}`);
if (request.argv.includes('--record')) fail('--record is not allowed; the canonical repository record must be used.');

const repository = optionValue(request.argv, '--repository');
if (repository && resolve(cwd, repository) !== cwd) fail('--repository must point to the current repository checkout.');

const artifactPath = optionValue(request.argv, '--path');
if (artifactPath) ensurePathInsideRepository(artifactPath, '--path');

const control = optionValue(request.argv, '--control');
if (key === 'init' && control && control !== 'cli-managed') fail('The executor only supports cli-managed initialization.');

if (existsSync(recordPath) && key !== 'context') {
  run(['context', '--json'], 'Read canonical workflow context');
}

run(request.argv, `Execute request ${request.id}: ${key}`);

if (existsSync(recordPath)) {
  run(['context', '--json'], 'Read resulting canonical workflow context');
  run(['validate'], 'Validate workflow record');
  run(['sync', '--check'], 'Check generated workflow state');
}
