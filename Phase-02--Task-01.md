---
artifact: TASK
id: P02-T01
  design:
    - SRC-DS-001
  repository:
    - SRC-REPO-001
  runtime: []
  documentation: []
  assets: []
created: 2026-08-15
updated: 2026-08-15
project: Suite landing page
profile: Standard
execution_mode: Gated
---

The canonical task registry owns mutable task state. The implementation-output snapshot is recorded only by the canonical task-completion command against exact HEAD.

# Phase 02 — Task 01: Implement the header, hero, and metrics sections

## 2. Objective

Implement the approved Site Header, Hero, and Metrics as static Astro components with exact approved content, native CTA behavior, verified imagery, section-level accessibility, and responsive behavior matching the approved wide/mid/narrow outcomes without treating the supplied Figma frame widths as automatic CSS breakpoints.

## 3. Source References

- Design input: `SRC-DS-001`; active canonical design baseline, with `VER-012 — Unchanged` recorded immediately before Stage 10 implementation began and task-local connected Figma inspection repeated for the Header/Hero/Metrics scope before P02-T01 edits.
- Repository baseline: `SRC-REPO-001`; P02-T01 branch descends from the pinned baseline and from merged P01-T01 output on `main`.
- Prerequisite implementation output: `SRC-REPO-002` / P01-T01 commit `ff07fade5d8bc55c615e92994b5e9566c63986cd`, merged to `main` by PR #15 before P02-T01 started.
- `PLAN.md`: `PLAN-002`.
- Requirements: `REQ-FR-001`–`REQ-FR-004`, `REQ-FR-007`, `REQ-FR-008`, `REQ-AR-001`–`REQ-AR-004`, `REQ-AR-006`, `REQ-NFR-001`, `REQ-NFR-003`.
- Specification: Site Header `2176:1216`, Hero `2159:699`, Metrics `2156:483`; `SPEC-BEH-001`–`003`, `SPEC-INT-001`–`003`, and applicable responsive/accessibility rules.
- Design evidence: desktop `2140:148`, tablet `2140:330`, mobile `2140:289`.
- Architecture: Stage 6 decision — Not required.

## 4. Snapshot Verification

Completed before implementation work on the task scope:

- The task branch was created from current `main` after P01-T01 was merged, so the verified P01 foundation/assets were present before P02 edits.
- Connected Figma inspection rechecked the authoritative desktop/tablet/mobile Header, Hero, and Metrics families and the relevant component/design-system evidence; no material task-scope drift was found.
- The prepared Suite logo, hero portrait/landscape sources, 2× image sources, decorative hero curve, and shared CTA/focus primitives from P01-T01 remained available and usable.
- No unexpected source, asset, repository, or approved-behavior change required rebaseline or owner escalation.

## 5. Prerequisites

- [x] `P01-T01` complete with required validation Passed.
- [x] Verified logo/hero/decorative assets available.
- [x] Shared CSS/tokens/defaults/focus/reduced-motion rules available from P01-T01.
- [x] `P02-T01` started through the canonical workflow CLI before implementation edits.

## 6. Scope

### Included and completed

- Created `SiteHeader.astro`, `Hero.astro`, and `Metrics.astro`.
- Updated `index.astro` to compose Header → Hero → Metrics in logical source order.
- Implemented approved header/hero/metric copy and both beta CTAs as native anchors with exactly `href="#"`.
- Reused shared CTA default/hover/focus-visible/reduced-motion behavior.
- Consumed only P01-verified logo/hero/decorative assets.
- Implemented wide, mid, narrow, and very-narrow layout responses through section-specific pressure thresholds rather than copying 1440/768/375 as breakpoint constants.
- Preserved semantic structure and decorative image treatment required by `SPEC-ACC-003`.
- Loaded Epilogue 400/700 in the shared stylesheet so the implementation uses the approved type family/weights.

### Excluded and unchanged

- Testimonial/Footer implementation.
- Production CTA destinations, forms, JavaScript-driven interaction/hydration, data behavior, analytics/tracking, dependencies, routes, or unrelated abstractions.

## 7. Repository Context

P02-T01 builds directly on the static Astro foundation produced by P01-T01. `index.astro` remains the page-composition owner, `global.css` owns shared tokens and CTA/focus/reduced-motion primitives, and each new Astro component owns only its section markup and responsive styling. No client runtime, state layer, data layer, or new dependency was introduced.

## 8. Files and Modules

| Path | Action | Result | Responsibility |
|---|---|---|---|
| `frontend/src/pages/index.astro` | Modify | Completed | Composes Site Header, Hero, and Metrics in approved logical order. |
| `frontend/src/components/SiteHeader.astro` | Create | Completed | Suite logo, secondary CTA, and responsive header layout. |
| `frontend/src/components/Hero.astro` | Create | Completed | Approved headline/body/primary CTA, decorative stroke, and verified responsive hero imagery. |
| `frontend/src/components/Metrics.astro` | Create | Completed | Three approved proof metrics and rail → row → stack transformations. |
| `frontend/src/styles/global.css` | Modify | Completed | Loads Epilogue 400/700 while retaining shared evidence-backed CTA/focus/reduced-motion primitives. |
| `frontend/src/assets/*` | Consume only | Completed | Uses verified P01 logo/hero/decorative assets without regeneration or replacement. |

## 9. Dependencies and Interfaces

- Components are static/presentational Astro with no client state or hydration.
- CTA states continue to use shared `.cta`, `.cta--primary`, and `.cta--secondary` primitives.
- The Hero uses portrait imagery for wide/mid outcomes and switches to the verified landscape source for narrow flow through `<picture>`.
- Section thresholds are local implementation decisions selected to preserve the approved relationships before composition failure; they are not represented as device names or global design tokens.
- P02-T02 can compose the lower page after these sections without redefining their content or interaction contracts.

## 10. Implementation Steps

1. Rechecked the current branch, P01 prerequisite output, applicable Figma components, copy, states, and verified assets.
2. Implemented the responsive semantic Site Header with the Suite logo and secondary placeholder CTA.
3. Implemented the Hero with approved typography hierarchy, body copy, primary placeholder CTA, decorative stroke, verified portrait/landscape sources, and decorative image semantics.
4. Implemented Metrics with the approved `2K+ / COMPANIES`, `8 / LANGUAGES`, and `1.2M / LEADS` order.
5. Composed Header → Hero → Metrics in `index.astro` while preserving logical DOM order independently of wide visual positioning.
6. Used section-pressure transitions around the wide/mid/narrow compositions rather than reference-frame breakpoint values; Hero additionally reduces headline size below 340px to preserve very-narrow reflow.
7. Reused the P01 hover/focus/reduced-motion CTA behavior and loaded the approved Epilogue font family/weights.
8. Ran the production Astro build in GitHub Actions and inspected the READY Vercel preview DOM/content/link/image-source contract.
9. The project owner manually reviewed the rendered implementation and explicitly approved the visual/responsive result, resolving the previously blocked visual check.

## 11. State, Responsive, and Accessibility Requirements

### States and errors

- Both beta links remain native `href="#"` anchors with no added workflow, tracking, submission, loading, error, or success behavior.
- CTA default, hover-capable, keyboard-focus, and reduced-motion behavior comes from the shared P01 primitives.
- No missing required asset or fabricated substitute was introduced.

### Responsive behavior

- Wide outcome keeps Hero content layered with portrait product imagery and Metrics as a vertical proof rail.
- Mid outcome keeps the two-column/layered Hero relationship while Metrics become a horizontal row.
- Narrow outcome linearizes Hero content before landscape imagery and stacks Metrics vertically.
- A very-narrow adjustment below 340px reduces headline size to avoid composition pressure.
- The implementation uses local thresholds (`1040px`, `620px`, and the very-narrow `340px` adjustment) derived from section composition needs; the supplied 1440/768/375 Figma widths remain validation references rather than CSS breakpoint declarations.

### Accessibility

- Header/Hero/Metrics remain in logical document order.
- Hero has the page `h1`; Metrics remain static proof content.
- CTA anchors retain native keyboard behavior and shared visible focus styling.
- Hero imagery and decorative stroke are intentionally exposed as decorative because nearby approved text carries the meaning, consistent with `SPEC-ACC-003`.
- CTA transitions are removed under `prefers-reduced-motion: reduce`.

## 12. Validation

### Automated validation — Passed

- Canonical check: **Upper-page build — Passed**.
- Command: `pnpm --dir frontend build`.
- Evidence: GitHub Actions run `31901631211`, job `95053198240`, completed successfully for the P02 implementation tree on 2026-08-15.
- No repository-defined lint/unit/browser/a11y commands existed, and none were fabricated.

### Rendered/manual validation — Passed

- Canonical check: **Upper-page acceptance — Passed**.
- Vercel preview deployment used during review: `dpl_FM1GaAPKHUiVqePMRRs6PdMjdGM6` (READY during implementation review).
- Connected preview inspection confirmed HTTP 200, expected semantic Header/Hero/Metrics DOM, approved copy and metrics, both beta CTAs exactly `href="#"`, and responsive portrait/landscape image sources.
- Project owner manual review on 2026-08-15: **approved** the rendered visual/responsive result, resolving the previously blocked viewport/fidelity check.

## 13. Acceptance Criteria

- [x] `PLAN-002` is represented by the Header/Hero/Metrics implementation.
- [x] Applicable functional, responsive, accessibility, and fidelity behavior is implemented within this task scope.
- [x] The project owner approved the rendered responsive/visual result after checking the preview.
- [x] Both beta CTAs are native anchors with exactly `href="#"` and shared visible focus behavior.
- [x] Only verified imagery is consumed and decorative image treatment follows `SPEC-ACC-003`.
- [x] Production build Passed and the required rendered/manual validation Passed with evidence.
- [x] No new dependency, hydration/client script, form, data, analytics, or tracking behavior was introduced.

## 14. Risks and Considerations

| Risk or assumption | Outcome / remaining impact | Mitigation or validation |
|---|---|---|
| Exact breakpoint thresholds were unspecified. | Resolved for this section implementation; thresholds remain implementation details. | Chosen from composition pressure and accepted by rendered owner review rather than copied from frame widths. |
| Hero asset mapping/format could have been ambiguous. | Resolved by P01 verification; no new mapping issue found. | Reused only prepared verified portrait/landscape/2×/decorative sources. |
| No repository browser-test runner exists. | Remains a downstream automation limitation, not a P02-T01 acceptance blocker after owner manual review. | Build evidence, preview DOM inspection, and explicit owner rendered approval are recorded; P03-T01 still owns integrated final validation. |

## 15. Implementation Discoveries

- P01's verified assets and shared CTA primitives were sufficient; no additional asset regeneration or dependency was necessary.
- The Hero needed separate mid/narrow transitions and a very-narrow headline adjustment rather than a single global device breakpoint.
- The deployed static DOM preserved the required content/link contract without client JavaScript.
- No approved requirement, design decision, or specification was found materially wrong for this task.

## 16. Deviations

None.

## 18. Definition of Done

- [x] Objective and acceptance criteria implemented within scope.
- [x] Required canonical build and visual validation Passed with evidence.
- [x] Source/prerequisite review found no unresolved material drift.
- [ ] Implementation-output snapshot/commit lineage recorded by canonical task completion against exact HEAD.
- [x] Discoveries, deviations, and remaining risks recorded.
- [x] P02-T02 can consume a stable upper-page implementation after this task branch is merged.

## 19. Completion Report

- Implementation files: `frontend/src/components/SiteHeader.astro`, `frontend/src/components/Hero.astro`, `frontend/src/components/Metrics.astro`, `frontend/src/pages/index.astro`, and `frontend/src/styles/global.css`.
- Inputs/prerequisites: active `SRC-DS-001`, pinned `SRC-REPO-001`, completed P01-T01 output `SRC-REPO-002`, and the P01 verified asset/foundation set.
- Result: static responsive Site Header + Hero + Metrics implementation with exact approved copy, native placeholder beta links, verified imagery, Epilogue typography, semantic source order, and shared accessible CTA behavior.
- Validation: GitHub Actions production build Passed; Vercel preview served the expected static contract; project owner rendered visual/responsive review Passed.
- Deviations: None.
- Remaining risk: automated browser/viewport coverage is still absent from the repository and remains relevant to integrated P03-T01 validation.
- Output lineage: to be filled canonically by the task-completion command against exact HEAD; the workflow record, not this Markdown file, owns the output snapshot ID and mutable task status.
- Next dependency after merge: P02-T02 is the next ready task, but it must not be started without a later explicit user instruction.
