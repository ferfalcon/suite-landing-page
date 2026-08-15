---
artifact: PROJECT-CONTEXT
project: Suite landing page
profile: Standard
execution_mode: Gated
created: 2026-08-14
updated: 2026-08-14
---

# Project Context

## 1. Project

- Project name: Suite landing page
- Goal: Implement the approved Suite landing page from the scoped Figma design in the existing Astro frontend with high visual fidelity, responsive behavior, accessibility, maintainability, and traceable verification.
- Project type: Static landing page
- Profile rationale: Standard is appropriate because the source contains three responsive product compositions, reusable component/state families, design-system documentation, and enough implementation surface to require separate requirements, specification, planning, task, and review artifacts.
- Created: 2026-08-14
- Last updated: 2026-08-14

## 2. Active Source Baseline

- Source baseline: `SOURCE-BASELINE.md`
- Design snapshots: `SRC-DS-001`
- Repository snapshots: `SRC-REPO-001`
- Runtime snapshots: None
- Documentation snapshots: None registered as active inputs
- Asset snapshots: None

The workflow record owns active status and verification state for these IDs.

## 3. Design Scope

- Included pages, frames, nodes, screens, files, URLs, or regions: Figma page `🤖 Workflow` (`2140:147`), specifically its `Product Screens`, `Components`, and `Design System Documentation` sections. Supplied product compositions include desktop (`2140:148`), tablet (`2140:330`), and mobile (`2140:289`).
- Explicitly excluded areas: All other Figma pages. Structural or visual changes outside `🤖 Workflow` require explicit user approval; file-global design-system resources are limited by the exception in root `AGENTS.md`.
- Access limitations: Stage 0 used connected Figma metadata and library inspection. No named immutable Figma version was identified and no design mutation was performed.
- Known design-source dependencies: The file has community libraries subscribed, but material dependency usage inside the scoped page remains to be established during design audit rather than assumed from subscription alone.

## 4. Repository Scope

- Target branch: `main` is production state; workflow and implementation changes use dedicated `agent/**` branches and pull requests according to root `AGENTS.md`.
- Relevant application, package, or directory: `frontend/`
- Existing implementation state: Astro starter application. `frontend/src/pages/index.astro` still renders the stock `Welcome` component, so the Suite design is not yet implemented.
- Known technical constraints: Astro + TypeScript, pnpm, Node `>=22.12.0`; code edits are forbidden by the implementation workflow until Stage 10 with an active task. Frontend work must follow `frontend/AGENTS.md` and the repository modern-web guidance skill.
- Access or tooling limitations: The session-local container could not resolve GitHub over direct network access, so authoritative repository operations and comparisons use the connected GitHub interface and the repository's GitHub Actions workflow executor.

## 5. Runtime References

- Production snapshot: Not available as an active Stage 0 snapshot
- Preview or staging snapshot: Not available
- Local runtime snapshot: Not available

Runtime and Vercel evidence will be captured when a later stage requires rendered implementation verification.

## 6. Scope

### Included

- Implement the single Suite landing page represented by the scoped desktop, tablet, and mobile Figma compositions.
- Preserve and translate the supplied design system, component variants, states, typography, spacing, colors, imagery, and content into maintainable Astro implementation decisions.
- Define responsive behavior between supplied compositions rather than treating the three frame widths as automatic CSS breakpoints.
- Provide semantic HTML, keyboard/focus behavior, accessible names/relationships, appropriate reduced-motion behavior, and other implementation accessibility requirements that Figma cannot independently prove.
- Validate implementation against both the scoped Figma source and the rendered application, and use Vercel preview verification before merge when implementation work begins.

### Excluded

- Other Figma pages or unrelated design work.
- Unrelated repository refactors or dependency changes.
- Backend, authentication, persistence, or application features not established by the approved landing-page scope.
- Direct implementation pushes to `main` or manual production promotion unless explicitly requested.

### Deferred

- Detailed design audit findings and gaps: Stage 1.
- Formal requirements, design decisions, specification, and plan: later documentation stages.
- Architecture-required/not-required decision: Stage 6.
- Implementation decomposition and code changes: Stages 9–10.
- Final rendered and deployment acceptance: Stage 11.

## 7. Authoritative Sources

| Snapshot ID | Authority | Scope | Notes |
|---|---|---|---|
| `SRC-DS-001` | Design | `🤖 Workflow` page only | Authoritative for visible composition, supplied responsive examples, component states, content, and design-system intent; mutable/time-bound source. |
| `SRC-REPO-001` | Current implementation baseline / technical constraint | `frontend/` at pinned commit | Authoritative starting implementation baseline. Later workflow-only commits do not change the inspected frontend entry point. |

## 8. Quality Baseline

- Accessibility standard or expectations: Implement semantic structure, complete keyboard/focus behavior, accessible naming/relationships, contrast and target-size checks where applicable, reduced-motion handling, and responsive reflow. WCAG conformance level will not be invented where the source does not explicitly prescribe one; audit/spec stages will state testable criteria.
- Responsive coverage: Must account for the supplied 1440, 768, and 375 compositions and define reasonable behavior between and beyond those examples from evidence and implementation constraints.
- Browser or device coverage: No explicit browser matrix is established at Stage 0; use standards-based modern web behavior and make unsupported assumptions visible in later requirements/specification.
- Performance expectations: Preserve efficient static-page delivery and avoid unnecessary client JavaScript or premature dependencies.
- Security and privacy expectations: No application data or sensitive workflow is in scope; do not add unnecessary tracking or data collection.
- Testing expectations: Repository/build checks plus visual, responsive, accessibility, and interaction verification appropriate to each task.
- Deployment expectations: Branch → pull request → Vercel preview → verification → merge. Production promotion is not manually triggered unless explicitly requested.

## 9. Constraints and Dependencies

| ID | Constraint or dependency | Evidence or snapshot | Impact | Status |
|---|---|---|---|---|
| `REQ-CON-001` | Figma edits are limited to `🤖 Workflow`; other pages are protected by the repository contract. | `SRC-DS-001` + root `AGENTS.md` | Constrains design normalization and audit actions. | Confirmed |
| `REQ-CON-002` | The design URL is mutable and lacks named-version evidence in Stage 0. | `SRC-DS-001` | Requires re-verification before later stages/tasks; cannot be treated as immutable. | Confirmed |
| `REQ-CON-003` | Implementation code edits are forbidden until workflow Stage 10 with an active task. | Workflow control contract | Prevents premature coding during audit/documentation/planning. | Confirmed |
| `REQ-CON-004` | Current frontend is the Astro starter and has no Suite implementation yet. | `SRC-REPO-001` | Establishes a clean implementation starting point. | Confirmed |
| `REQ-CON-005` | Figma library subscriptions do not prove actual project-node dependency usage. | `SRC-DS-001` | Stage 1 must inspect actual usage before implementation dependency decisions. | Confirmed |

## 10. Known Decisions

| Decision | Owner | Evidence or snapshot | Status |
|---|---|---|---|
| Use the Standard workflow profile in Gated mode. | Project owner / workflow initialization | Workflow record | Confirmed |
| Treat `🤖 Workflow` as the only primary Figma editing scope. | Project owner / repository contract | `SRC-DS-001` | Confirmed |
| Keep `main` as production and use branch/PR/preview verification for changes. | Repository contract | `SRC-REPO-001` | Confirmed |

## 11. Initial Risks and Questions

### Blocking

- None identified after Stage 0 source inspection; canonical snapshot verification remains to be recorded by the workflow executor before stage closure.

### Non-blocking

- The Figma source is time-bound rather than a named immutable version, so later stages must re-verify it.
- Actual use of the subscribed external/community Figma libraries in scoped nodes has not yet been established.
- No runtime/Vercel snapshot is active at Stage 0; rendered behavior must be captured later rather than assumed from repository state.
- Browser-specific requirements are not yet sourced and must not be invented.

## 12. Stage 0 Completion

- [x] Scope is explicit.
- [x] `SOURCE-BASELINE.md` exists and contains design/repository evidence.
- [x] Every active snapshot ID exists and its pin strength is honest.
- [x] Design and repository scope are recorded.
- [x] The repository baseline uses a commit SHA.
- [x] Workflow profile is selected and justified.
- [x] Quality expectations are evidence-based or explicitly left for later definition.
- [x] Blocking questions and source limitations are visible.
- [x] `WORKFLOW-STATE.md` references the same active baseline.
- [ ] Canonical input verifications and workflow executor validation remain to be recorded after narrative updates.
