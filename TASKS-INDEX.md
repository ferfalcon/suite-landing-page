---
artifact: TASKS-INDEX
  design:
    - SRC-DS-001
  repository:
    - SRC-REPO-001
created: 2026-08-15
updated: 2026-08-15
project: Suite landing page
profile: Standard
execution_mode: Gated
---

# Tasks Index

## 2. Document Information

- Version: 1.0
- Last updated: 2026-08-15
- Project: Suite landing page
- Source plan: approved `PLAN.md` (`ART-PLAN`)
- Plan review: approved `PLAN-REVIEW.md` (`ART-PLAN-REVIEW`)
- Architecture document: not applicable; Stage 6 canonically decided architecture is not required.
- Active inputs: `SRC-DS-001`, `SRC-REPO-001`
- Latest Stage 8 source verification: `VER-010 — Unchanged` (Figma), `VER-011 — Unchanged` (repository)

## 3. Scope

### Included

- Resolve implementation-input readiness and establish the static Astro page foundation.
- Implement the approved Header, Hero, Metrics, Testimonial, and Footer sections.
- Integrate approved CTA/social behavior, semantics, image treatment, keyboard/focus behavior, responsive transformations, reduced-motion behavior, and static/no-data boundaries.
- Perform final build, responsive, accessibility, visual, browser/runtime, and Vercel preview acceptance work.
- Record implementation-output and validation-runtime evidence through canonical workflow tooling during Stage 10.

### Excluded

- Any landing-page implementation during Stage 9.
- New routes, backend/API/data/auth/form behavior, analytics/tracking, production link destinations, or invented SEO/social metadata.
- Figma changes or design-system work outside the approved `🤖 Workflow` scope.
- Unrelated dependency upgrades, framework changes, repository refactors, or workflow-package fixes.

## 4. Execution Rules

- Execute only tasks whose canonical prerequisites are satisfied.
- Before each task starts, verify relevant source snapshots and classify any change using the workflow rebaseline protocol.
- Treat task IDs, canonical task state, prerequisites, references, validation definitions, and output lineage in `.workflow/workflow-record.json` as authoritative.
- Do not silently update tasks to newer design/repository content under existing snapshot IDs.
- A material upstream change pauses affected work and returns to the earliest invalidated approved artifact.
- Keep accessibility, responsive behavior, state handling, image semantics, and validation inside the task that owns the affected UI rather than deferring them to cleanup.
- Do not consume a candidate asset until authoritative Figma/repository evidence establishes its intended use, or explicit owner confirmation resolves the remaining ambiguity.
- Do not mark a task complete until all required canonical validation is Passed and the implementation-output snapshot/commit lineage is recorded.
- Stage 10 implementation must follow the root `AGENTS.md` branch → PR → preview/verification → merge policy; no direct push to `main`.

## 5. Phase Summary

| Phase | Objective | Depends on | Parallel work | Completion criteria |
|---|---|---|---|---|
| Phase 01 | Verify implementation inputs and establish the accessible static Astro foundation. | None | None | `P01-T01` complete; required assets used by later work are verified; build passes. |
| Phase 02 | Implement the complete approved page content and section-level responsive/accessibility behavior. | Phase 01 | Sequential in this workflow because both tasks touch page composition/shared styles. | `P02-T01` and `P02-T02` complete with section validation passing. |
| Phase 03 | Close integration defects and produce full implementation acceptance evidence. | Phase 02 | None | `P03-T01` complete with build, responsive/a11y/visual/runtime/preview evidence recorded. |

## 6. Phase Details

### Phase 01 — Input readiness and foundation

- Entry: Stage 9 task set approved; active inputs remain valid.
- Task: `P01-T01` — verify inputs and establish the accessible page foundation.
- Main coordination point: asset mapping/provenance must be resolved before dependent UI consumes candidate files.
- Exit: static foundation is buildable; no unsupported metadata/dependencies/runtime behavior are introduced; downstream tasks have verified assets/tokens/defaults.

### Phase 02 — Page implementation

- Entry: `P01-T01` complete.
- Task order: `P02-T01` → `P02-T02`.
- `P02-T01` owns Header, Hero, Metrics, primary/secondary CTA behavior, and upper-page responsive composition.
- `P02-T02` owns Testimonial, Footer, social links, starter cleanup, and lower-page/page-level integration.
- Exit: all approved sections exist in correct source/content order with required responsive and accessibility behavior; section-level validation passes.

### Phase 03 — Integrated acceptance

- Entry: `P02-T01` and `P02-T02` complete.
- Task: `P03-T01` — integrated responsive, accessibility, visual, browser/runtime, and Vercel preview acceptance.
- Validation-discovered defects are fixed in their owning implementation files without adding product scope.
- Exit: required acceptance evidence and runtime snapshot are recorded; implementation is ready for Stage 11 final review.

## 7. Plan Coverage

| `PLAN.md` item | Task or tasks | Coverage status | Notes |
|---|---|---|---|
| `PLAN-001` | `P01-T01` | Complete | Input/source/asset readiness, document defaults, shared styles/tokens, static build foundation. |
| `PLAN-002` | `P02-T01` | Complete | Header, Hero, Metrics, CTAs, imagery semantics, responsive transformations. |
| `PLAN-003` | `P02-T02` | Complete | Testimonial, Footer, social links, lower-page integration and starter cleanup. |
| `PLAN-004` | `P03-T01` | Complete | Full build/browser/responsive/a11y/visual/runtime/Vercel preview acceptance. |

## 8. Requirement and Specification Coverage

| Requirement or specification | Priority | Task or tasks | Validation task | Coverage status |
|---|---|---|---|---|
| `REQ-FR-001`–`REQ-FR-004`; `SPEC-BEH-001`–`003` | Must | `P02-T01` | `P02-T01`, `P03-T01` | Complete |
| `REQ-FR-005`–`REQ-FR-006`; `SPEC-BEH-004`–`005`, `SPEC-INT-004` | Must | `P02-T02` | `P02-T02`, `P03-T01` | Complete |
| `REQ-FR-007`; `REQ-AR-004`; `SPEC-RWD-001`–`004` | Must | `P02-T01`, `P02-T02` | `P03-T01` | Complete |
| `REQ-FR-008`; `REQ-AR-002`, `REQ-AR-006`; `SPEC-INT-001`–`003` | Must | `P02-T01` | `P02-T01`, `P03-T01` | Complete |
| `REQ-AR-001`, `REQ-AR-003`; `SPEC-ACC-001`, `SPEC-ACC-003` | Must | `P02-T01`, `P02-T02` | `P03-T01` | Complete |
| `REQ-AR-005`; `SPEC-ACC-004`, `SPEC-VAL-004` | Must | `P02-T01`, `P02-T02` | `P03-T01` | Complete |
| `REQ-DR-001`–`002`; `REQ-SEC-001`; `REQ-NFR-002` | Must | `P01-T01`–`P03-T01` | `P03-T01` | Complete |
| `REQ-NFR-001`, `REQ-NFR-003` and approved design fidelity | Must | `P02-T01`, `P02-T02` | `P03-T01` | Complete |

## 9. Cross-Cutting Coverage

| Concern | Integrated tasks | Final validation | Gap |
|---|---|---|---|
| Source verification and rebaseline | All tasks | `P03-T01` | None |
| Accessibility | `P01-T01`, `P02-T01`, `P02-T02` | `P03-T01` | None |
| Responsive behavior | `P02-T01`, `P02-T02` | `P03-T01` | None |
| Loading/empty/error/success states | All tasks explicitly preserve static/no-dynamic-state scope | `P03-T01` | N/A by approved scope |
| Security and privacy | `P01-T01` static/no-data boundary; all implementation tasks | `P03-T01` | None |
| Performance | Asset sizing/static Astro/no unnecessary JS in implementation tasks | `P03-T01` browser/runtime inspection | No numeric budget approved |
| Documentation/source integrity | All tasks record discoveries/deviations | `P03-T01` | None |
| Regression protection | Build after each task; starter cleanup in `P02-T02` | `P03-T01` | No repo-defined automated browser/a11y suite |

## 10. Blocked Work and Coordination Risks

| Task | Blocker or coordination risk | Decision owner | Required action | Impact | Status |
|---|---|---|---|---|---|
| `P01-T01` | Candidate assets are not an active asset snapshot and some mappings/provenance may need confirmation. | Implementation task; project owner only if authoritative evidence remains insufficient | Match candidates to approved Figma/repository evidence; escalate unresolved assets before use. | Blocks only dependent asset consumption. | Open, controlled |
| `P03-T01` | No approved browser support matrix exists. | Project owner if stricter coverage is desired | Use broadly supported HTML/CSS and record actual browser coverage; minimum stable Chromium available to the environment. | Limits breadth of compatibility claim. | Open, non-blocking |
| `P03-T01` | Known Vercel deployment rate limit may affect later implementation preview creation. | Deployment/runtime environment | Attempt preview only when Stage 10 implementation requires it; record actual blocker if still present. | May block final preview evidence, not task decomposition. | Open, non-blocking for Stage 9 |
| Task artifacts | The current workflow renderer derives TASK filenames from `T##` and hard-codes `Phase-01`, causing cross-phase path collisions. | Workflow package, outside current product scope | Stage 9 used supported explicit paths for missing `P02-T01`/`P03-T01` artifacts; task IDs remain canonical. Do not change workflow-package source in this product task set. | Documentation naming only; no task-state corruption. | Controlled |

## 11. Source-change Log

| Date | Changed snapshot | Affected tasks | Impact and action | Status |
|---|---|---|---|---|
| 2026-08-15 | `SRC-DS-001` verified as `VER-010 — Unchanged` | All | Stage 8 design source remained current for task decomposition. Reverify when Stage 10 starts if time/source drift warrants it. | Complete |
| 2026-08-15 | `SRC-REPO-001` verified as `VER-011 — Unchanged` | All | Pinned implementation baseline remains valid; later workflow/docs/Vercel-policy commits are not landing-page implementation output. | Complete |

## 12. Overall Completion Criteria

- [ ] Every task is complete in the canonical task registry.
- [ ] Every task's required validation is Passed.
- [ ] Every must-have requirement and material specification above is covered.
- [ ] Task snapshot references remain valid or approved rebaseline evidence exists.
- [ ] Implementation discoveries that invalidate approved documentation are propagated upstream.
- [ ] No critical/high blocker remains unresolved.
- [ ] A validation runtime and Vercel preview evidence exist when required by `P03-T01`.
- [ ] Final implementation validation is ready to enter Stage 11.

## 13. Index Validation

### Review pass 1 — Completeness and correctness

- [x] Every approved plan item maps to exactly one primary implementation task.
- [x] Every task has one coherent, independently verifiable objective.
- [x] Task IDs referenced here exist in the canonical registry.
- [x] Phase entry/exit criteria and dependency ordering are explicit.
- [x] File/responsibility overlap is deliberately sequenced rather than presented as safe parallel work.

### Review pass 2 — Consistency, traceability, source integrity, risks, and uncertainty

- [x] `PLAN-001`–`PLAN-004` are registered canonical trace items owned by `ART-PLAN` and mapped to tasks.
- [x] Requirement/specification coverage matches the approved plan/review; no unsupported product scope is introduced.
- [x] All task baselines remain `SRC-REPO-001`; prerequisites capture execution ordering without pretending future output snapshots already exist.
- [x] Accessibility/responsive/state/error/security concerns are integrated into owning tasks and final validation.
- [x] Asset, browser-coverage, Vercel, source-drift, and workflow-renderer risks are visible and bounded.
- [x] No landing-page implementation is performed by this Stage 9 artifact set.
