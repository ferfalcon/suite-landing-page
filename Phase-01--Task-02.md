---
artifact: TASK
id: P02-T02
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

The canonical task registry owns mutable task state. The filename reflects the current workflow renderer limitation; the canonical identity is `P02-T02`.

# Phase 02 — Task 02: Implement the testimonial and footer sections

## 2. Objective

Complete the approved landing-page content by implementing the Testimonial and Footer as static Astro components, integrating them with the completed upper page, preserving exact approved content/link behavior, removing obsolete starter UI/assets, and satisfying section-level responsive/accessibility requirements.

## 3. Source References

- Design input: `SRC-DS-001`; Stage 8 verification `VER-010 — Unchanged`
- Repository baseline: `SRC-REPO-001`; Stage 8 verification `VER-011 — Unchanged`
- `PLAN.md`: `PLAN-003`
- Prerequisites: completed `P01-T01` and `P02-T01` outputs
- Requirements: `REQ-FR-005`–`REQ-FR-008`, `REQ-AR-001`–`REQ-AR-006`, `REQ-NFR-001`, `REQ-NFR-003`
- Specification: Testimonial `2160:742`, portrait `2140:1359`, Footer `2157:513`, social-link semantics, applicable responsive/accessibility rules
- Design evidence: desktop `2140:148`, tablet `2140:330`, mobile `2140:289`
- Architecture: Stage 6 decision — Not required
- Related tasks: requires `P02-T01`; precedes `P03-T01`

## 4. Snapshot Verification

Before implementation, verify the Stage 10 branch contains approved outputs from `P01-T01` and `P02-T01` and remains a valid descendant of the canonical repository lineage. Reverify `SRC-DS-001` if the time-bound Figma source may have changed. Confirm portrait/logo/social/decorative assets required here were resolved by the foundation task or resolve them through the same authoritative-evidence rule before use.

## 5. Prerequisites

- `P01-T01` and `P02-T01` complete with required validation Passed.
- Upper-page composition/shared styles are stable enough for page-level integration.
- Required Testimonial/Footer assets are verified for intended use.
- Stage 10 task started canonically after source verification.

## 6. Scope

### Included

- Create `Testimonial.astro` and `SiteFooter.astro`.
- Append Testimonial → Footer to the page's approved Header → Hero → Metrics → Testimonial → Footer hierarchy.
- Implement exact approved testimonial text, attribution, copyright, branding, and Facebook/Twitter/Instagram social controls.
- Keep all three social links exactly `href="#"` with meaningful accessible platform names.
- Implement approved responsive Testimonial/Footer transformations using content-driven transitions.
- Apply `SPEC-ACC-003` to testimonial portrait/backdrop/decorative visuals without inventing alternative copy.
- Preserve logical source order, visible focus, target usability, and robust narrow/zoomed reflow.
- Remove `Welcome.astro` and unused starter SVGs only after references are eliminated.

### Excluded

- Changes to approved Header/Hero/Metrics behavior except necessary page-level integration fixes discovered here.
- Production social destinations, analytics/tracking, new routes/data/client runtime, or unrelated refactors.
- Full final cross-page acceptance evidence, which belongs to `P03-T01`.

## 7. Repository Context

This task begins from the completed static foundation and upper-page components. Shared design tokens/CTA/focus/reduced-motion rules already exist in `global.css`. The task should extend the page rather than introduce a new styling architecture or runtime model. Starter component/assets can be deleted only when no imports/references remain.

## 8. Files and Modules

| Path | Action | Existing or proposed | Responsibility |
|---|---|---|---|
| `frontend/src/components/Testimonial.astro` | Create | Proposed | Portrait/backdrop, quote, heading/attribution and responsive testimonial composition. |
| `frontend/src/components/SiteFooter.astro` | Create | Proposed | Suite branding, copyright and accessible social placeholder links. |
| `frontend/src/pages/index.astro` | Modify | Existing | Complete approved five-section page hierarchy. |
| `frontend/src/styles/global.css` | Modify | Existing | Testimonial/Footer styles, focus/target/reflow and integration spacing. |
| `frontend/src/assets/*` | Consume | Verified assets | Portrait, logo, social icons and decorations. |
| `frontend/src/components/Welcome.astro` | Delete after references removed | Existing starter | Remove unused starter UI. |
| `frontend/src/assets/astro.svg` | Delete if unused | Existing starter | Remove unused starter asset. |
| `frontend/src/assets/background.svg` | Delete if unused | Existing starter | Remove unused starter asset. |

## 9. Dependencies and Interfaces

- `index.astro` remains the composition owner; new section components remain static/presentational Astro.
- Social links are native anchors and icon presentation must be separated from accessible naming.
- Page-level spacing may be adjusted to integrate upper/lower sections, but material changes to previously accepted upper-section behavior require a documented discovery/deviation.
- Final validation task consumes this complete page and may fix defects in their owning files only.

## 10. Implementation Steps

1. Verify prerequisite/source/asset evidence and current full-page composition.
2. Implement `Testimonial.astro` with exact approved content and `SPEC-ACC-003` image treatment.
3. Implement `SiteFooter.astro` with branding/copyright and three accessible placeholder social anchors.
4. Complete page composition in `index.astro` and integrate shared styles.
5. Derive section-specific responsive transitions from rendered pressure; preserve logical DOM order during visual rearrangement.
6. Verify focus, social accessible names, target usability, narrow/zoomed reflow, and no horizontal overflow.
7. Remove starter-only component/assets once unused.
8. Run build and section/page-level validation.
9. Commit the result and record canonical output/validation evidence.

## 11. State, Responsive, and Accessibility Requirements

### States and errors

- Social controls use native anchor default/focus/hover behavior as supported by approved design; no dynamic loading/error/success state exists.
- All social links remain `href="#"`; do not invent production destinations.
- Missing required verified imagery blocks the relevant visual rather than authorizing substitution.

### Responsive behavior

- Wide: preserve approved side-by-side testimonial and horizontal footer relationships.
- Tablet/mobile: reproduce approved stacked/rearranged compositions while maintaining logical source order.
- Validate 1440/768/375 plus intermediate/beyond widths and transition boundaries.
- No clipped quote/attribution, orphaned layout, target collision, or horizontal overflow at narrow/zoomed conditions.

### Accessibility

- Testimonial structure and attribution are semantically understandable in source order.
- Portrait/backdrop may be decorative when nearby attribution supplies identity; unsourced alt text is not invented.
- Footer social links expose meaningful names `Facebook`, `Twitter`, and `Instagram` independent of decorative icon graphics.
- All links are keyboard reachable with visible focus and usable target areas.
- Decorative graphics are hidden from accessibility APIs where appropriate.

## 12. Validation

### Automated validation

- `pnpm --dir frontend build` — expected: production build succeeds after complete page composition/starter cleanup.
- No repository-defined lint/unit/browser/a11y commands are assumed.

### Manual validation

- Exact testimonial copy/attribution, footer copyright/branding, and social labels/destinations.
- Social links expose correct accessible names and exactly `href="#"`.
- Compare Testimonial/Footer at 1440/768/375 plus intermediate/beyond widths; inspect transition boundaries.
- Keyboard/focus/target usability, image semantics, logical DOM order and zoom/reflow.
- No page-level horizontal overflow or orphaned starter UI/assets.
- Regression check that Header/Hero/Metrics remain materially consistent after full-page integration.

## 13. Acceptance Criteria

- [ ] `PLAN-003` is fully represented by Testimonial/Footer/full-page integration.
- [ ] Applicable `REQ-FR-005`–`008`, `REQ-AR-*`, and `REQ-NFR-*` behavior is correct.
- [ ] Testimonial content/attribution and Footer branding/copyright are exact to approved sources.
- [ ] Facebook/Twitter/Instagram links have meaningful accessible names and exactly `href="#"`.
- [ ] Testimonial imagery/decorations follow `SPEC-ACC-003` without invented alt copy.
- [ ] Approved responsive outcomes and intermediate/beyond widths reflow without material unexplained drift or overflow.
- [ ] Starter-only UI/assets are removed when unused.
- [ ] Build and required manual validation pass; output lineage is recorded.

## 14. Risks and Considerations

| Risk or assumption | Impact | Mitigation or validation |
|---|---|---|
| Portrait/social asset mapping may be unresolved. | Wrong or inaccessible imagery/icon use. | Consume only verified assets; escalate unresolved authoritative mapping before use. |
| Lower-page transition widths may differ from upper page. | One global breakpoint could distort approved layout. | Use section-specific pressure-driven transitions and validate adjacent widths. |
| Page-level spacing changes can regress upper sections. | Previously accepted fidelity can drift. | Limit integration changes and include explicit upper-page regression inspection. |

## 15. Implementation Discoveries

Record any source/spec/asset/repository mismatch and route it to the earliest owning artifact rather than silently compensating.

## 16. Deviations

Use `None` when implementation follows the task. Record material deviations with reason/evidence/impact.

## 18. Definition of Done

- [ ] Objective and acceptance criteria implemented.
- [ ] Required canonical validation Passed with evidence.
- [ ] Prerequisite/source verification recorded and no unresolved material drift remains.
- [ ] Implementation-output snapshot/commit lineage recorded.
- [ ] Discoveries/deviations/remaining risks recorded.
- [ ] `P03-T01` is unblocked with a complete rendered page.

## 19. Completion Report

Record changed/deleted files, input/prerequisite/output snapshots, source verification, final lower-page transitions, image/social semantics, validation results, deviations/risks, documentation updates, and `P03-T01` as the next task.
