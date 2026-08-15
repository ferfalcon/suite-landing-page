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

The canonical task registry owns mutable task state. Record implementation-output lineage only after the task result is committed.

# Phase 02 — Task 01: Implement the header, hero, and metrics sections

## 2. Objective

Implement the approved Site Header, Hero, and Metrics as static Astro components with exact approved content, native CTA behavior, verified imagery, section-level accessibility, and fluid responsive behavior matching the approved 1440/768/375 outcomes without treating those frame widths as automatic breakpoints.

## 3. Source References

- Design input: `SRC-DS-001`; Stage 8 verification `VER-010 — Unchanged`
- Repository baseline: `SRC-REPO-001`; Stage 8 verification `VER-011 — Unchanged`
- `PLAN.md`: `PLAN-002`
- Prerequisite: completed `P01-T01` output and its verified asset/foundation decisions
- Requirements: `REQ-FR-001`–`REQ-FR-004`, `REQ-FR-007`, `REQ-FR-008`, `REQ-AR-001`–`REQ-AR-004`, `REQ-AR-006`, `REQ-NFR-001`, `REQ-NFR-003`
- Specification: Site Header `2176:1216`, Hero `2159:699`, Metrics `2156:483`; `SPEC-BEH-001`–`003`, `SPEC-INT-001`–`003`, applicable responsive/accessibility rules
- Design evidence: desktop `2140:148`, tablet `2140:330`, mobile `2140:289`
- Architecture: Stage 6 decision — Not required
- Related tasks: requires `P01-T01`; precedes `P02-T02` and `P03-T01`

## 4. Snapshot Verification

Before implementation, verify the Stage 10 branch incorporates the completed `P01-T01` output and remains valid against the canonical baseline. Reverify `SRC-DS-001` if Figma may have changed since `VER-010`. Confirm all Header/Hero assets were verified by `P01-T01`. Unexpected material source drift requires the workflow rebaseline path before edits.

## 5. Prerequisites

- `P01-T01` complete with required validation Passed.
- Verified logo/hero/decorative assets required by this task.
- Shared CSS/tokens/defaults from `P01-T01` available.
- Stage 10 task started canonically after source verification.

## 6. Scope

### Included

- Create `SiteHeader.astro`, `Hero.astro`, and `Metrics.astro`.
- Update `index.astro` to compose Header → Hero → Metrics in approved source/content order.
- Implement exact approved header/hero/metric copy and both beta CTAs as native anchors with exactly `href="#"`.
- Implement default/hover distinctions where hover is available, visible keyboard focus, and reduced-motion handling for optional transitions.
- Consume only verified logo/hero/decorative assets.
- Implement desktop/tablet/mobile arrangements through intrinsic layout and content-pressure-driven transitions.
- Preserve semantic structure and `SPEC-ACC-003` image treatment.

### Excluded

- Testimonial/Footer implementation.
- Production CTA destinations, forms, JavaScript-driven interaction/hydration, new data behavior, or unrelated abstractions.

## 7. Repository Context

This task starts from the static Astro foundation produced by `P01-T01`. `index.astro` owns page composition and `global.css` owns shared tokens/defaults/focus/reduced-motion rules. The repository has no client state/data layer or dedicated browser/a11y test scripts; `pnpm --dir frontend build` remains the guaranteed automated check.

## 8. Files and Modules

| Path | Action | Existing or proposed | Responsibility |
|---|---|---|---|
| `frontend/src/pages/index.astro` | Modify | Existing | Compose Header, Hero, Metrics and preserve later section slots/source order. |
| `frontend/src/components/SiteHeader.astro` | Create | Proposed | Suite logo, secondary CTA, responsive header layout. |
| `frontend/src/components/Hero.astro` | Create | Proposed | Approved headline/body/primary CTA/hero imagery/decorations. |
| `frontend/src/components/Metrics.astro` | Create | Proposed | Three proof metrics and approved responsive arrangements. |
| `frontend/src/styles/global.css` | Modify | Existing from `P01-T01` | Shared section/CTA styles and evidence-backed responsive rules. |
| `frontend/src/assets/*` | Consume | Verified assets | Logo/hero/decorative sources established by `P01-T01`. |

## 9. Dependencies and Interfaces

- Components remain static/presentational Astro with no client state.
- CTA states use shared CSS primitives rather than divergent duplicates.
- `P02-T02` may integrate lower-page spacing but must not redefine this task's approved contracts without a recorded discovery.
- Media-query thresholds are section-specific and justified by observed content pressure, not copied reference-frame widths.

## 10. Implementation Steps

1. Verify source/prerequisite/component/copy/asset evidence.
2. Implement semantic `SiteHeader.astro`.
3. Implement `Hero.astro` with exact content, CTA, verified imagery, and approved image semantics.
4. Implement `Metrics.astro` with exact values/labels and logical source order.
5. Compose Header → Hero → Metrics in `index.astro`.
6. Derive responsive transitions from rendered content pressure and check both sides of each transition.
7. Implement focus-visible/default/hover/reduced-motion CTA behavior.
8. Run build and section-level interaction/responsive/accessibility/visual checks.
9. Commit the result and record canonical output/validation evidence.

## 11. State, Responsive, and Accessibility Requirements

### States and errors

- CTA default/hover/focus-visible states preserve primary/secondary distinction and work without hover.
- All beta anchors remain `href="#"`; no loading/submission/success/error state exists because no dynamic workflow is approved.
- Missing verified required imagery blocks the affected work rather than authorizing a fabricated substitute.

### Responsive behavior

- Match approved 1440, 768, and 375 outcomes.
- Also test at least one width between 375–768, one between 768–1440, below 375, and above 1440.
- No content clipping, overlap, unusable target spacing, or page-level horizontal overflow.

### Accessibility

- Semantic header/main/heading structure and logical DOM/source order.
- Native anchors provide keyboard activation and logical tab order.
- Focus remains visibly distinguishable against rendered backgrounds.
- Hero/product/decorative imagery follows `SPEC-ACC-003`; do not invent alt copy when nearby approved content carries meaning.
- Remove/reduce nonessential CTA transition motion under `prefers-reduced-motion`.

## 12. Validation

### Automated validation

- `pnpm --dir frontend build` — expected: production build succeeds.
- Do not invent lint/unit/browser/a11y commands absent from the repository.

### Manual validation

- Exact approved copy/metrics and both beta links exactly `href="#"`.
- Both CTAs keyboard reachable, visibly focused, and natively activatable.
- Responsive comparison at 1440/768/375 plus required intermediate/beyond widths and both sides of derived transitions.
- No material unexplained typography/color/spacing/radius/image drift from `SRC-DS-001`.
- Landmark/heading order, image semantics, resize/reflow, target usability, and reduced-motion behavior are correct.
- No new client JavaScript/data/dependency behavior and no lower-page scope leakage.

## 13. Acceptance Criteria

- [ ] `PLAN-002` is fully represented by Header/Hero/Metrics implementation.
- [ ] Applicable `REQ-FR-*`, `REQ-AR-*`, and `REQ-NFR-*` behavior is observable and correct.
- [ ] Desktop/tablet/mobile and intermediate/beyond widths have no material unexplained drift or horizontal overflow.
- [ ] Both beta CTAs are native anchors with exactly `href="#"` and usable focus states.
- [ ] Only verified imagery is consumed and image treatment matches `SPEC-ACC-003`.
- [ ] Build and required manual validation pass; output lineage is recorded.

## 14. Risks and Considerations

| Risk or assumption | Impact | Mitigation or validation |
|---|---|---|
| Exact breakpoint thresholds are unspecified. | Copied frame widths can fail between samples. | Derive thresholds from content pressure; validate both sides and required samples. |
| Hero asset mapping/format may remain ambiguous. | Wrong visual/source quality. | Consume only `P01-T01`-verified assets; block/escalate unresolved mapping. |
| Fidelity may conflict with robust reflow at edge widths. | Accessibility/overflow defect. | Preserve approved hierarchy and robust reflow; record material deviations explicitly. |

## 15. Implementation Discoveries

Record any material mismatch in approved copy, assets, design behavior, repository assumptions, or specification and route it to the earliest owning artifact before working around it.

## 16. Deviations

Use `None` when implementation follows this task. Record every material deviation with reason, evidence, and impact.

## 18. Definition of Done

- [ ] Objective and acceptance criteria implemented.
- [ ] Required canonical validation Passed with evidence.
- [ ] Source/prerequisite verification recorded with no unresolved material drift.
- [ ] Implementation-output snapshot/commit lineage recorded.
- [ ] Discoveries/deviations/remaining risks recorded.
- [ ] `P02-T02` is unblocked with stable page/shared-style context.

## 19. Completion Report

Record changed files, input/prerequisite snapshots, output snapshot/commit, source verification, responsive transitions and rationale, asset treatment, validation results, deviations, remaining risks, documentation updates, and `P02-T02` as the next task.
