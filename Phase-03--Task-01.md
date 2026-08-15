---
artifact: TASK
id: P03-T01
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

The canonical task registry owns mutable task state. Record validation runtime/output lineage only after the implementation exists and the checks actually execute.

# Phase 03 — Task 01: Complete integrated responsive, accessibility, visual, and preview validation

## 2. Objective

Produce final Stage 10 acceptance evidence for the complete Suite landing page: build success, responsive and visual fidelity across approved/intermediate/extreme widths, keyboard/accessibility behavior including rendered contrast/distinguishability and target areas, stable browser/runtime behavior, and a verified Vercel PR preview. Fix only validation-discovered defects in their owning implementation files; do not add product scope.

## 3. Source References

- Design input: `SRC-DS-001`; reverify immediately before final visual acceptance because it is time-bound.
- Repository baseline/lineage: `SRC-REPO-001` plus completed implementation outputs from `P01-T01`, `P02-T01`, and `P02-T02`.
- `PLAN.md`: `PLAN-004`
- Requirements: `REQ-FR-007`, `REQ-FR-008`, `REQ-AR-001`–`REQ-AR-006`, `REQ-NFR-001`–`REQ-NFR-003`, `REQ-DR-002`, `REQ-SEC-001`, plus functional content requirements verified for regression.
- Specification: all applicable acceptance rules, especially responsive rules, `SPEC-ACC-001`, `SPEC-ACC-003`, `SPEC-ACC-004`, and `SPEC-VAL-004`.
- Design reference screens: desktop `2140:148`, tablet `2140:330`, mobile `2140:289`.
- Architecture: Stage 6 decision — Not required.
- Related tasks: requires completed `P02-T01` and `P02-T02`; this is the final Stage 10 task before Stage 11 review.

## 4. Snapshot Verification

Before final acceptance:

- Reverify `SRC-DS-001` and record the result; material design drift requires rebaseline/impact assessment before declaring fidelity.
- Confirm task-start repository state contains the approved outputs of all prerequisite tasks with valid lineage.
- Confirm no unexpected concurrent implementation change has entered the branch.
- If Vercel/runtime evidence is unavailable, record the actual blocker; do not infer a runtime pass from build success.

## 5. Prerequisites

- `P01-T01`, `P02-T01`, and `P02-T02` complete with required validation Passed.
- Complete page rendered from the implementation branch/PR.
- Access to current scoped Figma evidence and browser/runtime inspection.
- Vercel preview attempted when implementation changes require it under the repository contract.

## 6. Scope

### Included

- Run the repository-supported production build.
- Inspect the complete page in a browser at 1440, 768, 375 and required intermediate/extreme widths.
- Verify page hierarchy/content/links, visual fidelity, responsive transitions, text resize/reflow and lack of horizontal overflow.
- Verify keyboard order, visible focus, native link behavior, accessible names, image semantics and reduced-motion behavior.
- Execute the rendered `SPEC-ACC-004` set: normal text, large display text, CTA labels, social icons, inverse testimonial content, focus indicators and control boundaries; verify operable target areas for both CTAs and all three social links.
- Document the concrete accessibility criteria/check method used without asserting an unapproved conformance level.
- Inspect runtime/browser console for failures.
- Verify the Vercel PR preview loads the intended page and record canonical `SRC-RUN-*` validation runtime evidence.
- Fix validation-discovered defects only in their owning implementation files and repeat affected checks.

### Excluded

- New features, routes, content, metadata, tracking/data behavior, production destinations or unrelated refactors.
- New testing/tooling dependencies solely to satisfy this task unless separately justified and approved.
- Manual production promotion.

## 7. Repository Context

The page is expected to remain static Astro with no client data/state requirements. `pnpm --dir frontend build` is the only guaranteed automated repository check; browser/accessibility/visual/runtime validation therefore requires explicit rendered evidence. The repository has no approved browser support matrix or automated browser/a11y suite. Unless a stricter matrix is supplied before execution, use the current stable Chromium runtime available to the implementation environment and record exactly what was tested.

## 8. Files and Modules

| Path | Action | Existing or proposed | Responsibility |
|---|---|---|---|
| `frontend/src/pages/index.astro` | Modify only if validation finds an owned defect | Existing | Page composition/semantic integration fixes. |
| `frontend/src/layouts/Layout.astro` | Modify only if validation finds an owned defect | Existing | Document/global behavior fixes. |
| `frontend/src/components/*.astro` | Modify only owning component defects | Existing | Section-specific fidelity/responsive/accessibility fixes. |
| `frontend/src/styles/global.css` | Modify only owning style defects | Existing | Responsive/focus/contrast/reflow/visual fixes. |
| `.workflow/*` | CLI-managed evidence only | Existing | Runtime/output/validation state; never hand-edit generated views. |

## 9. Dependencies and Interfaces

- Validation covers the integrated outputs of every preceding task; any fix must remain within the approved plan/spec.
- A defect found in one component is fixed in that component/style rather than hidden by a validation-only workaround.
- Vercel preview verification is part of acceptance because the repository contract requires preview verification before merge of implementation work.
- `latestValidationRuntime` must point to actual runtime evidence after successful preview/runtime validation; it cannot be fabricated during planning.

## 10. Implementation Steps

1. Verify current design and repository/task-output snapshots.
2. Run `pnpm --dir frontend build` and resolve only in-scope build defects.
3. Render the complete page and compare 1440/768/375 outcomes against current approved Figma evidence.
4. Test required intermediate/extreme widths and both sides of derived section transitions; inspect resize/zoom/reflow and overflow.
5. Perform keyboard/focus/native-link/accessibility-name/image-semantics/reduced-motion checks.
6. Perform the `SPEC-ACC-004` rendered contrast/distinguishability/control-boundary and target-area validation set; record concrete criteria/results.
7. Check exact approved content and all five placeholder links for regression.
8. Inspect browser console/runtime behavior.
9. Verify the Vercel PR preview; record the validation runtime snapshot/evidence through canonical CLI tooling.
10. Fix any in-scope defects in owning files and rerun affected validation until all required checks pass or the task is canonically blocked.
11. Commit any validation fixes, record final implementation-output lineage if changed, and complete canonical task validation.

## 11. State, Responsive, and Accessibility Requirements

### States and errors

- Static page has no loading/empty/submission/success/data-error workflow.
- All five approved interactive controls remain native `href="#"` anchors; default/hover/focus-visible behavior is usable without hover.
- Runtime/preview failure is a validation failure/blocker, not an invitation to infer success.

### Responsive behavior

- Required anchors: 375, 768, 1440.
- Required coverage also includes one width below 375, between 375–768, between 768–1440, and above 1440, plus both sides of meaningful section transition points.
- Preserve hierarchy/readability/image relationships and target usability without page-level horizontal overflow.
- Text resize/zoom must not hide or overlap essential content.

### Accessibility

- Logical landmarks/headings/source order.
- Keyboard tab order and activation correct for both CTAs and all three social links.
- Visible focus indicators remain distinguishable in every rendered context.
- Accessible names for social links are platform names; images/decorations follow `SPEC-ACC-003`.
- Reduced-motion preference suppresses/reduces nonessential transition motion.
- Rendered normal/large text, CTA labels, social icons, inverse testimonial content, focus indicators and control boundaries meet the documented applicable contrast/distinguishability criteria used for validation.
- Both CTAs and all three social links have usable operable target areas under tested pointer/touch layouts.

## 12. Validation

### Automated validation

- `pnpm --dir frontend build` — required; expected: exit successfully.
- No unsupported lint/unit/browser/a11y commands are claimed.

### Manual/runtime validation

- Visual comparison: 1440/768/375 plus intermediate/extreme/transition-boundary widths — expected: zero material unexplained design differences.
- Responsive/reflow: expected no clipping/overlap/horizontal page overflow and stable hierarchy at zoom/text resize.
- Keyboard/focus: expected logical order, native activation, visible focus for all five links.
- Accessibility semantics: expected correct landmarks/headings/names/image treatment/reduced motion.
- Rendered visual accessibility: expected documented criteria pass for text/icons/CTA/focus/control boundaries and target areas.
- Content/link regression: exact approved copy/metrics/testimonial/footer and all beta/social links exactly `href="#"`.
- Browser/runtime: expected no relevant console/runtime failure in tested stable Chromium.
- Vercel PR preview: expected intended page loads successfully; runtime evidence recorded canonically.

## 13. Acceptance Criteria

- [ ] `PLAN-004` acceptance work is fully executed against the complete implementation.
- [ ] `pnpm --dir frontend build` passes.
- [ ] Current `SRC-DS-001` is reverified before final visual acceptance and no unresolved material drift remains.
- [ ] 1440/768/375 plus required intermediate/extreme/transition widths have zero material unexplained visual/responsive differences and no page-level overflow.
- [ ] Keyboard order/focus/native links, accessible names/image semantics, reduced motion, reflow and target usability pass.
- [ ] `SPEC-ACC-004` rendered contrast/distinguishability/control-boundary set passes using documented criteria without an unsourced conformance claim.
- [ ] Exact content and all five placeholder `href="#"` links remain correct.
- [ ] Tested browser has no relevant runtime/console failure.
- [ ] Vercel PR preview loads the intended page and `SRC-RUN-*` validation runtime evidence is recorded.
- [ ] Any validation-discovered fixes remain within approved scope and their affected checks are rerun successfully.

## 14. Risks and Considerations

| Risk or assumption | Impact | Mitigation or validation |
|---|---|---|
| No browser support matrix. | Compatibility claim must remain bounded. | Test current stable Chromium available; record exact coverage; avoid unsupported/experimental CSS. |
| No automated browser/a11y suite. | Manual evidence carries more acceptance weight. | Record explicit viewport, keyboard, accessibility, visual and runtime results rather than vague claims. |
| Known Vercel deployment rate limit may persist. | Could block required preview/runtime evidence. | Attempt only when implementation preview is required; if unavailable, canonically block task with actual evidence rather than bypassing it. |
| Figma source is time-bound. | Visual acceptance could target stale source. | Reverify immediately before comparison and rebaseline material drift. |

## 15. Implementation Discoveries

Any finding that reveals an approved requirement/design/spec/plan error must be propagated to the owning artifact instead of being silently normalized in code.

## 16. Deviations

Record actual validation deviations, browser-coverage limitations, accepted visual differences, or runtime limitations with evidence. Use `None` only when there are none.

## 18. Definition of Done

- [ ] Objective and all acceptance criteria completed.
- [ ] Every required canonical validation check is Passed with actual execution evidence.
- [ ] Current input/output/runtime lineage is recorded and valid.
- [ ] No required validation remains Failed/Blocked/Not executed.
- [ ] Discoveries/deviations/remaining risks are recorded and propagated when necessary.
- [ ] Complete implementation is ready for Stage 11 final implementation review.

## 19. Completion Report

Record final changed files, source/output/runtime snapshot IDs and commits, Figma verification, all validation commands/environments/results, tested widths/browser, contrast/target method/results, preview URL/runtime evidence, deviations/remaining risks, documentation updates, and readiness for Stage 11.
