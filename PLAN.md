---
artifact: PLAN
  design:
    - SRC-DS-001
  repository:
    - SRC-REPO-001
  runtime: []
  documentation:
    - SRC-DOC-001
  assets: []
created: 2026-08-15
updated: 2026-08-15
project: Suite landing page
profile: Standard
execution_mode: Gated
---

# Implementation Plan

## 1. Document Information

- Scope: Implement the approved single-page Suite marketing landing page in the existing Astro frontend after this plan and the later plan-review/task gates are approved.
- Last updated: 2026-08-15
- Source baseline: `SOURCE-BASELINE.md`
- Repository snapshot: `SRC-REPO-001` at commit `69b2949ace42bc06b61806755abdb9a2f95f5a96`
- Design snapshot: `SRC-DS-001`, reverified Unchanged for Stage 7 before this plan was authored.
- Source documents:
  - `PROJECT-CONTEXT.md`
  - `REQUIREMENTS.md`
  - `DESIGN.md`
  - `SPEC.md`
  - `DOCUMENT-REVIEW.md`
- Architecture decision: a separate `ARCHITECTURE.md` is not required; the approved Stage 6 rationale remains canonical in workflow state.

## 2. Objective and Scope

### Included

- Replace the default Astro starter page with the approved Header → Hero → Metrics → Testimonial → Footer hierarchy.
- Reproduce approved desktop, tablet, and mobile design outcomes with responsive interpolation driven by layout/content pressure rather than copied Figma frame widths.
- Implement the approved copy, metrics, testimonial, imagery, branding, CTA state behavior, placeholder `href="#"` links, and footer social links.
- Implement semantic structure, accessible names, image semantics, keyboard operation, visible focus, responsive reflow, and reduced-motion-compatible CTA behavior where motion is used.
- Keep delivery static: no backend, authentication, persistence, analytics, tracking, runtime data fetching, form workflow, or unnecessary client-side JavaScript.
- Validate build output, representative responsive widths, browser behavior, keyboard/focus behavior, accessibility properties, visual fidelity, and the Vercel preview before implementation acceptance.

### Excluded

- Any Figma changes or changes outside the approved `🤖 Workflow` design scope.
- Production beta-request or social destinations; the approved implementation remains `href="#"`.
- Additional routes, forms, APIs, user data, account flows, analytics, tracking, or persistence.
- Unrelated repository refactors, dependency upgrades, framework changes, or design-system work outside this landing page.
- Stage 8 plan review, task decomposition, or implementation work in this Stage 7 change.

## 3. Current Repository State

At the pinned `SRC-REPO-001` commit, `frontend/` is an Astro 7.2.x TypeScript starter managed with pnpm and Node `>=22.12.0`. The only runtime dependency declared in `frontend/package.json` is Astro. Existing scripts are `dev`, `start`, `build`, `preview`, and `astro`; there is no repository-defined lint, unit-test, browser-test, or accessibility-test script to assume.

The application surface is minimal:

- `frontend/src/pages/index.astro` renders the starter `Welcome.astro` component inside `Layout.astro`.
- `frontend/src/layouts/Layout.astro` contains starter metadata and small page-level starter styles.
- `frontend/src/components/Welcome.astro`, `frontend/src/assets/astro.svg`, and `frontend/src/assets/background.svg` are starter-only content.
- No project component library, token stylesheet, test suite, client-side framework integration, data layer, or application state layer exists.
- `docs/starter-code/assets/` contains logo, social icons, hero imagery, Jeremy portrait variants, and decorative SVGs that appear relevant to the challenge, but these files are not registered as an active workflow asset snapshot and their provenance/mapping to the approved Figma nodes has not yet been independently established. They must therefore be treated as candidate source assets, not automatically trusted implementation assets.
- Current `main` still matches the pinned implementation subtree for the starter entry/layout/package structure; workflow and documentation commits have not started the landing-page implementation.

Repository constraints from `AGENTS.md` and `frontend/AGENTS.md` apply: preserve Astro/pnpm conventions, avoid unnecessary dependencies and client JavaScript, implement semantic and accessible behavior, and use the branch → PR → Vercel preview → verification → merge path.

## 4. Technical Approach

Use Astro components and CSS only unless a later approved task proves client JavaScript is required. Keep the page composition explicit and small rather than introducing an abstraction layer unsupported by the repository.

- **Component and module boundaries:** `index.astro` composes proposed section components `SiteHeader`, `Hero`, `Metrics`, `Testimonial`, and `SiteFooter`. Shared visual primitives that are genuinely repeated across those sections, especially CTA styling and design tokens, belong in a proposed global stylesheet rather than duplicated per component.
- **Data and state flow:** approved marketing content remains static Astro markup. No client state, fetch, form state, loading state, or persistence is required. CTA/social links remain native anchors with `href="#"`.
- **Styling and design-system integration:** translate approved Figma typography, color, spacing, radius, and component-state evidence into CSS custom properties and section styles. Do not invent a general-purpose design system beyond values needed by this page.
- **Responsive strategy:** start from intrinsic, fluid layouts and use section-specific media-query transitions only where the content/layout ceases to satisfy approved behavior. The 375, 768, and 1440 Figma frames are validation anchors, not automatic breakpoint values. Hero, metrics, testimonial, and footer may transition at different widths.
- **Accessibility strategy:** semantic landmarks/headings, logical source order, native links, visible focus, meaningful social-link names, appropriate informative/decorative image treatment, no interaction available only on hover, and reduced-motion handling are implemented in the same plan item that creates each affected section.
- **Error and state handling:** there are no approved loading, empty, submission, authentication, or data-error states. Missing/unverified required assets are treated as an implementation-readiness failure, not replaced by invented content.
- **Testing and validation strategy:** use the repository-defined `pnpm build` as the guaranteed automated build check. Supplement with rendered browser inspection at approved and intermediate/extreme widths, keyboard/focus checks, accessibility inspection, visual comparison against `SRC-DS-001`, and Vercel preview runtime verification. Do not claim lint/type/test scripts that the pinned repository does not provide.

## 5. Files and Modules

| Path | Action | Existing or proposed | Responsibility | Repository evidence |
|---|---|---|---|---|
| `frontend/src/pages/index.astro` | Modify | Existing | Replace starter composition with the approved landing-page section order. | `SRC-REPO-001`; existing starter page |
| `frontend/src/layouts/Layout.astro` | Modify | Existing | Set page metadata, global document defaults, and load shared page styles without breaking semantic document structure. | `SRC-REPO-001`; existing starter layout |
| `frontend/src/components/Welcome.astro` | Delete after replacement | Existing | Remove unused Astro starter UI. | `SRC-REPO-001`; starter-only component |
| `frontend/src/assets/astro.svg` | Delete if unused | Existing | Remove unused Astro starter asset. | `SRC-REPO-001` |
| `frontend/src/assets/background.svg` | Delete if unused | Existing | Remove unused Astro starter background. | `SRC-REPO-001` |
| `frontend/src/components/SiteHeader.astro` | Create | Proposed | Suite logo plus secondary Request Beta Access link and responsive header layout. | `SPEC.md` Site Header `2176:1216` |
| `frontend/src/components/Hero.astro` | Create | Proposed | Headline, body copy, primary CTA, approved hero imagery/decorations, and responsive hero composition. | `SPEC.md` Hero `2159:699` |
| `frontend/src/components/Metrics.astro` | Create | Proposed | Three proof metrics and desktop/tablet/mobile arrangements. | `SPEC.md` Metrics `2156:483` |
| `frontend/src/components/Testimonial.astro` | Create | Proposed | Portrait, quote, heading, and attribution with approved responsive compositions. | `SPEC.md` Testimonial `2160:742`; portrait `2140:1359` |
| `frontend/src/components/SiteFooter.astro` | Create | Proposed | Logo, copyright, and accessible Facebook/Twitter/Instagram placeholder links. | `SPEC.md` Footer `2157:513` |
| `frontend/src/styles/global.css` | Create | Proposed | Page-scoped design tokens, global defaults, shared CTA states, layout utilities needed by multiple sections, focus and reduced-motion rules. | No existing project stylesheet/token system at `SRC-REPO-001`; Figma design-system evidence supplies values |
| `frontend/src/assets/*` Suite assets | Create/copy only after provenance check | Proposed | Approved logo, social icons, responsive hero/portrait sources, and decorative assets used by the page. | Candidate files exist under `docs/starter-code/assets/`; workflow asset provenance remains unresolved |
| `frontend/package.json` | No change expected | Existing | Retain Astro-only dependency surface and existing build scripts unless later task evidence requires otherwise. | `SRC-REPO-001` |

Exact asset filenames/format choices in `frontend/src/assets/` must be selected after candidate assets are matched to the approved Figma nodes. WebP/PNG density choices should be driven by actual source dimensions and rendered quality, not by filename alone.

## 6. Plan Items

### PLAN-001 — Resolve implementation inputs and establish the static page foundation

- **Objective:** Enter implementation with verified design/repository inputs, establish the page-level Astro/CSS foundation, and prevent unverified asset or platform assumptions from leaking into section work.
- **Requirement and specification references:** `REQ-DR-001`, `REQ-DR-002`, `REQ-NFR-002`, `REQ-SEC-001`; `SPEC.md` static-link/data boundaries and approved design-system evidence.
- **Source snapshots:** `SRC-DS-001`, `SRC-REPO-001`; latest Stage 7 verification events must still be valid when implementation begins.
- **File impact:** modify `frontend/src/layouts/Layout.astro`; create `frontend/src/styles/global.css`; inspect candidate `docs/starter-code/assets/*`; prepare only verified required assets under `frontend/src/assets/`.
- **Dependencies:** approved Stage 7/8 gates and task decomposition; no implementation task may consume an unverified candidate asset.
- **Implementation approach:** preserve Astro static rendering; define only page-required CSS custom properties/defaults from approved Figma values; set title/metadata appropriate to Suite; verify each required logo/icon/photo/decorative asset against approved Figma node intent and record provenance/owner confirmation before copying it into the implementation surface.
- **Integrated accessibility, responsive, state, and error work:** establish document defaults that support text resize/reflow, visible focus styling primitives, and reduced-motion overrides. Missing or ambiguous required assets block the dependent section instead of triggering a fabricated replacement.
- **Validation:** source verification remains Unchanged; asset mapping/provenance evidence exists for every consumed asset; no unnecessary dependency/client script is added; `pnpm build` succeeds after foundation changes.
- **Risks:** asset provenance is the main readiness item. Browser support assumptions are constrained to broadly supported semantic HTML/CSS until an explicit support matrix is provided.

### PLAN-002 — Implement the semantic header, hero, and proof metrics

- **Objective:** Deliver the first major content block with approved branding, proposition, CTA behavior, imagery, proof metrics, and wide/mid/narrow responsive relationships.
- **Requirement and specification references:** `REQ-FR-001` through `REQ-FR-004`, `REQ-FR-007`, `REQ-FR-008`, `REQ-AR-001` through `REQ-AR-004`, `REQ-AR-006`, `REQ-NFR-001`, `REQ-NFR-003`; `SPEC.md` Site Header `2176:1216`, Hero `2159:699`, Metrics `2156:483`, primary/secondary CTA state nodes and responsive rules.
- **Source snapshots:** `SRC-DS-001`, `SRC-REPO-001`.
- **File impact:** modify `frontend/src/pages/index.astro`; create `SiteHeader.astro`, `Hero.astro`, `Metrics.astro`; consume only PLAN-001-verified assets and shared CSS.
- **Dependencies:** PLAN-001.
- **Implementation approach:** use semantic header/main content and native anchors; keep approved content in DOM source order; reproduce the desktop metrics rail, tablet horizontal metrics arrangement, and mobile stacked arrangement through intrinsic layout plus independently justified transitions.
- **Integrated accessibility, responsive, state, and error work:** implement focus-visible CTA presentation alongside default/hover states; preserve primary/secondary CTA distinction; support keyboard activation natively; classify hero/decorative imagery correctly; ensure no content overlap/clipping or page-level horizontal overflow; suppress nonessential CTA transition motion under reduced-motion preference if the 200ms design transition is implemented.
- **Validation:** compare 1440/768/375 outcomes to Figma, then test at least one width between 375–768, one between 768–1440, one below 375, and one above 1440; keyboard-tab through both CTAs; inspect heading/landmark/image semantics; confirm all beta CTAs use exactly `href="#"`.
- **Risks:** exact transition widths are intentionally unresolved until rendered content pressure is observed; hero image source/format remains dependent on PLAN-001 provenance resolution.

### PLAN-003 — Implement testimonial and footer, then close responsive/accessibility integration gaps

- **Objective:** Complete the approved content hierarchy and ensure independently responsive sections compose into one coherent page without deferring semantics or accessibility to a cleanup phase.
- **Requirement and specification references:** `REQ-FR-005` through `REQ-FR-008`, `REQ-AR-001` through `REQ-AR-006`, `REQ-NFR-001`, `REQ-NFR-003`; `SPEC.md` Testimonial `2160:742`, portrait `2140:1359`, Footer `2157:513`, social-link semantics, and responsive validation rules.
- **Source snapshots:** `SRC-DS-001`, `SRC-REPO-001`.
- **File impact:** create `Testimonial.astro`, `SiteFooter.astro`; update shared CSS and `index.astro`; remove `Welcome.astro` and unused starter assets only after no references remain.
- **Dependencies:** PLAN-001; may follow PLAN-002 so page-level spacing and section transitions can be judged together.
- **Implementation approach:** reproduce wide side-by-side testimonial and horizontal footer, then their stacked tablet/mobile transformations; keep approved testimonial text and attribution exact; render social controls as native anchors with icon presentation separated from accessible naming.
- **Integrated accessibility, responsive, state, and error work:** provide meaningful portrait alternative treatment based on approved content intent, hide purely decorative graphics from accessibility APIs, give social links platform names and visible focus, maintain logical DOM order during visual rearrangement, preserve touch/keyboard target usability, and prevent overflow under narrow/zoomed conditions.
- **Validation:** compare all three approved reference widths plus intermediate/extreme widths; keyboard and accessible-name inspection for social links; content/attribution verification; no unintended horizontal scroll; no orphaned starter UI/assets; all social links exactly `href="#"`.
- **Risks:** testimonial/portrait asset mapping is subject to PLAN-001; section-specific transition widths may differ from header/hero/metrics and must be recorded from observed failure conditions.

### PLAN-004 — Validate the complete implementation in browsers, accessibility checks, visual comparison, and preview runtime

- **Objective:** Produce acceptance evidence that the assembled static page builds, runs on the Vercel preview, preserves approved behavior across required widths/input modes, and has no material unexplained drift.
- **Requirement and specification references:** `REQ-FR-007`, `REQ-FR-008`, `REQ-AR-001` through `REQ-AR-006`, `REQ-NFR-001` through `REQ-NFR-003`, `REQ-DR-002`, `REQ-SEC-001`; all applicable `SPEC.md` acceptance/validation rules.
- **Source snapshots:** reverify mutable `SRC-DS-001` immediately before final visual acceptance; confirm implementation is still based on the pinned `SRC-REPO-001` or complete workflow rebaseline if repository authority changes materially.
- **File impact:** implementation files from PLAN-001 through PLAN-003 only for fixes discovered by validation; no new product scope. Workflow/runtime evidence is recorded through canonical tooling in the later implementation stages.
- **Dependencies:** PLAN-002 and PLAN-003 complete.
- **Implementation approach:** run `pnpm build`; inspect rendered output in the project preview; perform visual comparison at 1440, 768, 375 and required intermediate/extreme widths; verify keyboard order/focus, semantic structure, accessible names/image semantics, reduced-motion behavior, resize/reflow, and placeholder links; inspect browser console/runtime errors; verify the Vercel PR preview before merge.
- **Integrated accessibility, responsive, state, and error work:** any defect is fixed in the owning component/style rather than patched with a validation-only workaround. No data/error workflow is invented because none is in scope.
- **Validation:** build success; zero material unexplained design differences; no page-level layout overflow at required widths; keyboard and focus checks pass; accessibility issues found in implemented content are resolved or explicitly gated; no unsourced tracking/data behavior; Vercel preview loads the intended page without runtime/console failure.
- **Risks:** the repository defines no browser support matrix and no automated browser/a11y suite. Unless the owner supplies a matrix before implementation validation, verify at minimum the current stable Chromium runtime available to the implementation environment and avoid unsupported/experimental CSS features; record any additional browser coverage actually exercised. `latestValidationRuntime` is currently unset, so runtime evidence must be created from the implementation preview rather than inferred during planning.

## 7. Recommended Phase Shape

### Phase 1 — Input readiness and accessible foundation

- PLAN-001 only: verify asset provenance/mapping, establish global styles/tokens/document defaults, retain static Astro delivery, and prove the baseline build.

### Phase 2 — Core content implementation

- PLAN-002 followed by PLAN-003: implement each section with its semantics, interaction states, responsive behavior, image treatment, and accessibility at the point the section is created.

### Phase 3 — Cross-width integration and edge cases

- Continue PLAN-002/003 validation across intermediate/extreme widths and adjust section-specific transitions based on observed content pressure. Verify zoom/text resize, focus visibility, reduced motion, long fixed content, image sizing, and section-to-section spacing without inventing new product states.

### Phase 4 — Regression protection and runtime acceptance

- PLAN-004: build, browser/runtime, keyboard/accessibility, visual comparison, and Vercel preview verification. Fix failures in their owning implementation item before acceptance.

## 8. Responsive Decision Process

For each Header, Hero, Metrics, Testimonial, and Footer transition:

1. Use the approved Figma 1440/768/375 arrangements as outcome evidence from `SRC-DS-001`, not as threshold declarations.
2. Render the current implementation fluidly and identify the first width where content, spacing, readable measure, image relationship, target spacing, or approved hierarchy materially degrades.
3. Confirm there is no existing repository breakpoint/token convention at `SRC-REPO-001` that must be reused; none is currently established.
4. Add the narrowest section-specific media-query transition that resolves the observed failure while preserving adjacent widths.
5. Recheck both sides of that transition plus the supplied frame examples and required intermediate/extreme widths.
6. Record the final chosen transition values and rationale in the implementation task/review evidence; do not retrofit `768px` merely because the tablet design was drawn at 768px.

## 9. Dependencies and Ordering

| Plan item | Depends on | May run in parallel | Reason |
|---|---|---|---|
| PLAN-001 | Approved plan/review/task gates | No | Asset/input readiness and global foundation are prerequisites for trustworthy section work. |
| PLAN-002 | PLAN-001 | Limited | Header/Hero/Metrics share the upper-page composition and CTA/global style decisions. |
| PLAN-003 | PLAN-001; page composition benefits from PLAN-002 | Limited | Components can be authored separately, but final spacing/responsive integration requires the upper page. |
| PLAN-004 | PLAN-002, PLAN-003 | No | Final validation needs the complete rendered implementation and PR preview. |

## 10. Architecture Handling

- Separate `ARCHITECTURE.md`: Skipped.
- Reason: Stage 6 determined architecture is not required for one static Astro page with no data/service/auth/runtime-state boundaries. The decision is recorded canonically in workflow state.
- Behavioral structural constraints remain in `SPEC.md`; repository/file organization and implementation sequencing are intentionally defined here.

## 11. Migration, Compatibility, Deployment, and Rollback

- **Migration:** none; there is no data model, persistence, API, route migration, or user state.
- **Compatibility:** no explicit browser support matrix is approved. Prefer broadly supported semantic HTML/CSS and avoid experimental features unless a later task establishes support and fallback evidence. Browser coverage actually validated must be recorded in implementation review.
- **Deployment:** retain the existing Vercel project and repository build policy. Implementation occurs on a dedicated branch/PR; validate the Vercel preview before merge. Do not manually promote production.
- **Rollback:** because the change is a static frontend replacement, rollback is Git-based: revert the implementation PR if a post-merge regression is discovered. No data rollback is required.
- **Security/privacy:** no new external scripts, analytics, tracking, forms, data storage, identity, or sensitive-data boundary may be introduced without returning to requirements/specification.

## 12. Source-change Handling

- Snapshot verification required before implementation: verify mutable `SRC-DS-001` again if implementation starts materially later than this plan or if Figma changes are suspected; confirm the implementation base still corresponds to `SRC-REPO-001` or perform the workflow-defined rebaseline impact assessment.
- Material changes that would invalidate this plan: changed page hierarchy/content, changed CTA/link behavior, new interaction/data requirements, different approved assets, material Figma responsive changes, framework/dependency/repository structure changes, or a newly mandated browser/runtime policy.
- Earliest stage to revisit: return to the earliest artifact whose approved assumption changed (requirements for product/scope changes, design/spec for visual/behavior changes, architecture if new system boundaries appear, or Stage 7 for repository-only implementation-shape changes).
- Do not silently update this plan to newer source content; use new snapshot/verification records and the canonical workflow rebaseline process.

## 13. Risks and Open Questions

| Risk or question | Impact | Blocking | Mitigation or owner |
|---|---|---|---|
| Candidate assets in `docs/starter-code/assets/` lack a canonical asset snapshot/provenance confirmation. | Wrong or unlicensed/unapproved imagery could be shipped. | Blocks dependent implementation tasks until resolved; does not block Stage 7 planning. | PLAN-001: match assets to approved Figma nodes and record provenance/owner confirmation before use. |
| Exact CSS transition widths are not specified by Figma. | Blindly using 375/768/1440 as breakpoints may fail intermediate widths. | No | Derive section-specific transitions from content pressure and validate on both sides plus required intermediate/extreme widths. |
| No approved browser support matrix exists. | Advanced CSS could behave inconsistently outside the tested browser. | No for plan; must be bounded during implementation validation. | Prefer broadly supported features; record tested browsers. Owner may supply a stricter matrix before implementation acceptance. |
| No runtime snapshot/validation exists yet (`latestValidationRuntime` is unset). | Planning cannot prove deployed behavior. | No for plan; required before implementation acceptance. | PLAN-004 creates runtime evidence from the Vercel PR preview and checks console/render behavior. |
| Repository has no lint/unit/browser/a11y test scripts. | Validation relies more heavily on build plus explicit runtime/manual evidence. | No | Use `pnpm build` as guaranteed automation; do not add tooling dependencies unless later evidence justifies them; record browser/accessibility/visual checks explicitly. |
| Time-bound Figma source can drift after Stage 7. | Implementation could target stale visual evidence. | Potentially | Reverify `SRC-DS-001` before implementation/final visual acceptance and rebaseline on material change. |

## 14. Definition of Done

- [x] Every must-have requirement and material specification is covered by PLAN-001 through PLAN-004.
- [x] Every plan item has concrete file impact, dependencies, implementation approach, validation, and risks.
- [x] Accessibility and responsive behavior are integrated into the relevant implementation items rather than deferred to cleanup.
- [x] Required build, browser/runtime, keyboard/accessibility, responsive, visual, and Vercel-preview validation are identified.
- [x] Migration, compatibility, deployment, rollback, security, and privacy are addressed to the extent applicable to this static page.
- [x] Existing paths and proposed paths are explicitly distinguished.
- [x] `SRC-DS-001` and `SRC-REPO-001` exist and were reverified for Stage 7 before planning.
- [x] Known readiness risks—asset provenance, intermediate viewport behavior, browser support, and runtime evidence—are resolved by plan ownership or explicitly carried forward.

## 15. Review

### Pass 1 — Feasibility and completeness

- [x] The plan reflects the pinned Astro repository snapshot and does not assume files, scripts, dependencies, tests, breakpoints, or a design system that are absent.
- [x] Scope, ordering, dependencies, section integration, cleanup, and validation are complete enough to decompose into coherent tasks.
- [x] Each plan item produces a meaningful, independently verifiable result and keeps implementation work within the approved static-page scope.
- [x] All must-have functional content, responsive outcomes, CTA/social behavior, semantics, accessibility, static-data boundary, and visual-fidelity requirements are covered.

### Pass 2 — Consistency, traceability, source integrity, risks, and uncertainty

- [x] `PLAN-001` through `PLAN-004` follow `Identifier-Conventions.md`.
- [x] Every plan item maps to approved `REQUIREMENTS.md`/`SPEC.md` concerns and `SRC-DS-001`/`SRC-REPO-001`.
- [x] Stage 7 refreshed both repository and design input verification; no source change is being silently absorbed.
- [x] No unsupported product scope, data workflow, new dependency, client runtime, production link destination, or extra route is introduced.
- [x] Accessibility, responsive behavior, focus, image semantics, and reduced-motion behavior are implemented with their owning sections rather than deferred to final cleanup.
- [x] The Stage 6 architecture-skip decision is preserved and no unnecessary `ARCHITECTURE.md` is introduced.
- [x] Asset provenance, unspecific breakpoint thresholds, browser support assumptions, absent automated test scripts, time-bound design drift, and missing runtime evidence remain explicit with owners/mitigations.
