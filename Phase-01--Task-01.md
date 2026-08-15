---
artifact: TASK
id: P01-T01
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

The canonical task registry owns mutable task state. The implementation output snapshot is recorded only after the task result is committed.

# Phase 01 — Task 01: Verify inputs and establish the accessible page foundation

## 2. Objective

Produce a buildable, static Astro foundation for the Suite landing page with verified implementation inputs, source-supported page defaults/design values, and only approved assets prepared for downstream sections. No landing-page section content beyond foundation work is implemented in this task.

## 3. Source References

- Source baseline: `SOURCE-BASELINE.md`
- Design input: `SRC-DS-001`; latest Stage 8 verification `VER-010 — Unchanged`
- Repository baseline: `SRC-REPO-001` at `69b2949ace42bc06b61806755abdb9a2f95f5a96`; latest verification `VER-011 — Unchanged`
- Runtime input: None; `latestValidationRuntime` is intentionally unset before implementation.
- Documentation snapshot: None; approved repository documents are artifacts, not a separate active `SRC-DOC-*` input.
- Asset snapshot: None; `docs/starter-code/assets/` remains candidate repository content until mapped to authoritative evidence.
- `PLAN.md`: `PLAN-001`
- `PLAN-REVIEW.md`: `PLANREV-001`, `PLANREV-002`, `PLANREV-005` corrections and residual asset/browser/source risks
- Requirements: `REQ-DR-001`, `REQ-DR-002`, `REQ-NFR-002`, `REQ-SEC-001`
- Specification: static-link/data boundaries, approved design-system evidence, metadata/SEO scope boundary
- `DESIGN.md`: approved typography/color/spacing/radius/component-state evidence applicable to page-wide defaults
- Design-source evidence: `🤖 Workflow` (`2140:147`) and approved Design System Documentation/components
- Architecture: Stage 6 canonical decision — Not required
- Related tasks: prerequisite for `P02-T01`; indirectly prerequisite for all later tasks

## 4. Snapshot Verification

Complete immediately before Stage 10 implementation starts this task.

- Reverify mutable `SRC-DS-001` if time/source drift is possible; classify as Unchanged, Expected workflow output, Unexpected upstream/concurrent change, or Unavailable.
- Confirm implementation HEAD descends from `SRC-REPO-001`; workflow/docs/Vercel-policy commits already reviewed in `VER-011` are expected repository evolution, not landing-page implementation output.
- If Figma content/assets/responsive intent or the frontend implementation structure changed materially, stop and run the workflow rebaseline impact assessment before editing.
- Upstream rebaseline is not currently required based on `VER-010`/`VER-011`.

## 5. Prerequisites

- Stage 9 artifacts and gate approved; Stage 10 entered through the canonical CLI.
- `P01-T01` selected/started through the canonical task command.
- Root `AGENTS.md` and `frontend/AGENTS.md` re-read at task start.
- Active inputs verified as current enough for implementation.
- Access to scoped Figma evidence and repository candidate assets.

## 6. Scope

### Included

- Verify candidate logo/icon/photo/decorative assets against authoritative Figma node/export intent and repository evidence; escalate only unresolved mapping/provenance/use.
- Prepare only verified assets needed by later tasks under `frontend/src/assets/`.
- Create `frontend/src/styles/global.css` for page-required CSS custom properties/global defaults/shared CTA/focus/reduced-motion primitives supported by approved evidence.
- Modify `frontend/src/layouts/Layout.astro` to remove Astro-starter presentation defaults, load shared styles, and set only a minimal Suite document title supported by approved brand content.
- Preserve static Astro rendering, text resize/reflow support, sensible global box sizing/document defaults, visible-focus primitives, and reduced-motion overrides.
- Keep dependency and client-runtime surface unchanged unless a material approved requirement proves otherwise.

### Excluded

- Header, Hero, Metrics, Testimonial, or Footer content implementation.
- Invented SEO/social-preview metadata.
- New JavaScript/client hydration, dependencies, routes, data fetching, forms, analytics, tracking, auth, persistence, or backend work.
- Fabricated replacement assets when approved mapping remains unresolved.

## 7. Repository Context

At `SRC-REPO-001`, `frontend/` is an Astro 7.2.x TypeScript starter using pnpm and Node `>=22.12.0`; Astro is the only runtime dependency. The repository defines `dev`, `start`, `build`, `preview`, and `astro` scripts but no lint/unit/browser/a11y test scripts. `Layout.astro`, `index.astro`, `Welcome.astro`, and starter SVGs comprise the existing page surface. No project token stylesheet/component library/client state/data layer exists. Current `main` additionally contains workflow/documentation state and `frontend/vercel.json`; `VER-011` found no Suite implementation drift.

## 8. Files and Modules

| Path | Action | Existing or proposed | Responsibility |
|---|---|---|---|
| `frontend/src/layouts/Layout.astro` | Modify | Existing | Minimal Suite document title, global document defaults/style loading; no unsourced metadata. |
| `frontend/src/styles/global.css` | Create | Proposed | Page-required tokens/defaults/shared CTA, focus, reduced-motion and layout primitives. |
| `frontend/src/assets/*` | Create/copy selectively | Proposed | Only assets whose mapping/use has been established from authoritative evidence. |
| `docs/starter-code/assets/*` | Inspect only | Existing | Candidate source files; not automatically authoritative implementation assets. |
| `frontend/package.json` | No change expected | Existing | Preserve Astro-only dependency surface/scripts. |

## 9. Dependencies and Interfaces

- Downstream section components consume the verified assets and shared CSS foundation produced here.
- CSS variables/primitives should be page-specific and evidence-backed, not a new general-purpose design system.
- The task must not create component contracts that force unnecessary JavaScript or architecture.
- If a candidate asset remains unresolved, record the exact dependent section so later task work can block narrowly rather than substituting content.

## 10. Implementation Steps

1. Reverify applicable Figma/repository inputs and inspect the exact frontend baseline.
2. Map required candidate assets to approved Figma/repository evidence; record unresolved cases before use.
3. Establish page-required CSS custom properties/global defaults/focus/reduced-motion primitives in `global.css`.
4. Update `Layout.astro` to load the shared stylesheet and use only a source-supported Suite title/document defaults.
5. Prepare verified asset files needed by downstream tasks without implementing their sections.
6. Confirm no new dependency, hydration/client script, tracking/data behavior, or unsupported metadata was introduced.
7. Run `pnpm --dir frontend build` and the manual foundation acceptance checks.
8. Commit the task result; record the implementation-output `SRC-REPO-*` snapshot and canonical validation evidence.

## 11. State, Responsive, and Accessibility Requirements

### States and errors

- Dynamic loading/empty/error/success/submission states: Not applicable; the approved page is static.
- Missing/ambiguous asset: implementation-readiness failure for the dependent asset/section; do not invent a substitute.
- Reduced motion: shared primitives must permit nonessential transitions to be removed/reduced in later CTA implementation.

### Responsive behavior

- Global defaults must not introduce fixed page widths or horizontal overflow.
- Typography/layout primitives must support text resize, narrow widths, and fluid section-specific behavior implemented later.
- Do not encode 375/768/1440 as automatic global breakpoints solely because they are reference frames.

### Accessibility

- Preserve semantic document structure and native browser behavior.
- Provide reusable visible-focus treatment suitable for native links.
- Ensure global resets do not suppress focus or create inaccessible color/interaction defaults.
- Use asset semantics from `SPEC-ACC-003`; no invented alt copy is required merely to fill attributes in later tasks.

## 12. Validation

### Automated validation

- Build: `pnpm --dir frontend build` — expected: Astro production build exits successfully with no new dependency/client-runtime requirement.
- Unit/component/e2e/type/lint scripts: Not repository-defined; do not fabricate commands.

### Manual validation

- Source/asset readiness: every asset copied into `frontend/src/assets/` has documented authoritative mapping/provenance/use, or the unresolved asset is not consumed.
- Metadata/scope: starter metadata is replaced only with the approved minimal Suite title; no invented SEO/social/tracking metadata exists.
- Accessibility foundation: focus/reduced-motion/global CSS primitives preserve native interaction and reflow.
- Repository boundary: no Header/Hero/Metrics/Testimonial/Footer implementation has leaked into this task.

## 13. Acceptance Criteria

- [ ] `PLAN-001` is implemented without expanding approved scope.
- [ ] `REQ-DR-001`, `REQ-DR-002`, `REQ-NFR-002`, and `REQ-SEC-001` static/no-data/security boundaries remain satisfied.
- [ ] Every consumed implementation asset has authoritative mapping/provenance/use evidence; unresolved assets remain unconsumed and explicitly recorded.
- [ ] `Layout.astro` contains only source-supported Suite document metadata and shared defaults.
- [ ] Shared page styles/tokens/focus/reduced-motion primitives are evidence-backed and do not force arbitrary global breakpoints.
- [ ] No unnecessary dependency, client hydration/script, data/tracking behavior, or unrelated refactor is introduced.
- [ ] `pnpm --dir frontend build` passes.
- [ ] Snapshot verification and implementation-output lineage are recorded canonically.

## 14. Risks and Considerations

| Risk or assumption | Impact | Mitigation or validation |
|---|---|---|
| Candidate asset mapping/provenance remains incomplete. | Wrong/unapproved visual could propagate to later tasks. | Use Figma/repository evidence first; project-owner confirmation only for unresolved cases; block dependent use until resolved. |
| No browser support matrix is approved. | Global CSS choice might be too advanced. | Prefer broadly supported semantic HTML/CSS; avoid experimental primitives unless later evidence establishes support/fallback. |
| Figma is time-bound. | Foundation values/assets can stale. | Reverify at task start when warranted; rebaseline material drift. |

## 15. Implementation Discoveries

Record any source-baseline, requirement, design/spec, plan, asset, or repository assumption discovered to be wrong. Do not silently work around it.

## 16. Deviations

Use `None` when implementation follows this task. Any material scope/source deviation requires recorded evidence and the workflow-defined upstream update/rebaseline path.

## 18. Definition of Done

- [ ] Objective and acceptance criteria are implemented within scope.
- [ ] Required canonical validation is Passed with evidence.
- [ ] Input references remain valid or approved rebaseline completed.
- [ ] Implementation-output snapshot/commit lineage is recorded.
- [ ] Discoveries/deviations/remaining risks are recorded.
- [ ] `P02-T01` has the verified assets/foundation information needed to start.

## 19. Completion Report

At completion record files changed, inputs/verifications used, implementation-output snapshot/commit, asset decisions, validation commands/results, deviations, remaining risks, documentation updates, and `P02-T01` as the next task when unblocked.
