---
artifact: REQUIREMENTS
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

# Project Requirements

## 1. Document Information

- Version: 0.1
- Scope: Single responsive Suite marketing landing page represented by the approved `🤖 Workflow` Figma page.
- Last updated: 2026-08-15
- Owner: Project owner / Suite landing page workflow
- Requirements author: OpenAI design-engineering agent
- Project context: `PROJECT-CONTEXT.md`
- Source baseline: `SOURCE-BASELINE.md`
- Evidence baseline: approved `DESIGN-AUDIT.md`
- Active source snapshots: `SRC-DS-001`, `SRC-REPO-001`

## 2. Overview and Problem

The current frontend baseline is an Astro starter rather than the approved Suite landing page. The project must deliver one responsive static landing page that communicates Suite's marketing proposition, proof metrics, testimonial, and brand footer while preserving the approved design evidence, remaining usable between the supplied viewport examples, and providing implementation accessibility that the visual design alone cannot prove.

This requirements artifact defines required outcomes and quality boundaries. It does not choose CSS breakpoints, component architecture, asset formats, CTA destinations, social URLs, or other implementation details that are not established by approved evidence.

## 3. Goals and Non-goals

### Goals

- Reproduce the approved landing-page content hierarchy and core content with high visual fidelity.
- Preserve the demonstrated desktop, tablet, and mobile transformations while remaining usable between and beyond the supplied examples.
- Make the page understandable and operable with semantic structure, keyboard access, visible focus, accessible naming, appropriate image treatment, and responsive reflow.
- Keep delivery appropriate for a static marketing page, avoiding unnecessary client-side behavior and dependencies.
- Preserve traceability from approved design evidence through later design, specification, implementation, and validation stages.

### Non-goals

- Implement or modify any Figma page outside `🤖 Workflow`.
- Add backend services, authentication, persistence, account features, or application workflows not established by the approved scope.
- Invent a beta-request form, CTA destination, social-media URL, analytics behavior, tracking, or data collection.
- Add unrelated repository refactors or dependency changes.
- Treat 375px, 768px, or 1440px as automatic CSS breakpoint thresholds merely because those are the supplied Figma frame widths.
- Define detailed visual rules, repository structure, implementation order, or architecture in this artifact.

## 4. Users and Needs

| User or actor | Need | Evidence or authority |
|---|---|---|
| Prospective Suite visitor | Understand the product proposition, supporting proof, and testimonial in a clear single-page hierarchy. | `EVD-001`, `EVD-002`, `EVD-003` |
| Prospective visitor seeking beta access | Recognize the “Request Beta Access” calls to action; activation behavior must be defined before those controls are implementation-ready. | `EVD-002`, `EVD-007`, `AUD-003` |
| Keyboard or assistive-technology visitor | Access the same content and interactive affordances in a meaningful order with perceivable focus and names. | `EVD-008`, `AUD-004`, approved `PROJECT-CONTEXT.md` |
| Frontend maintainer | Work from stable, traceable requirements and reusable source patterns without silently inventing product behavior. | Approved `PROJECT-CONTEXT.md`, `EVD-004`–`EVD-006` |

## 5. Functional Requirements

### REQ-FR-001 — Provide one coherent responsive landing page

- **Classification:** Confirmed
- **Priority:** Must
- **Description:** The product must present one Suite landing page whose major content sequence is Site Header → Hero → Metrics → Testimonial → Footer across the supported responsive experience.
- **Rationale:** The three approved product compositions represent the same content and component hierarchy at different widths.
- **Evidence:** `EVD-001`, `EVD-004`
- **Acceptance criteria:** `AC-001`, `AC-002`

### REQ-FR-002 — Present the site header content

- **Classification:** Confirmed
- **Priority:** Must
- **Description:** The site header must present the Suite brand mark and a secondary “Request Beta Access” affordance.
- **Rationale:** Both elements are present in every supplied responsive composition.
- **Evidence:** `EVD-002`, `EVD-004`
- **Acceptance criteria:** `AC-003`

### REQ-FR-003 — Present the hero proposition

- **Classification:** Confirmed
- **Priority:** Must
- **Description:** The hero must present the approved headline “A super solution for your business.”, the approved supporting marketing copy, a primary “Request Beta Access” affordance, and the approved product visual.
- **Rationale:** These are the primary proposition elements in the approved design.
- **Evidence:** `EVD-002`
- **Acceptance criteria:** `AC-004`, `AC-005`

### REQ-FR-004 — Present the proof metrics

- **Classification:** Confirmed
- **Priority:** Must
- **Description:** The page must present the three approved proof metrics: `2K+ / COMPANIES`, `8 / LANGUAGES`, and `1.2M / LEADS`.
- **Rationale:** The metrics are a repeated proof pattern in all supplied responsive compositions.
- **Evidence:** `EVD-001`, `EVD-004`
- **Acceptance criteria:** `AC-006`

### REQ-FR-005 — Present the testimonial

- **Classification:** Confirmed
- **Priority:** Must
- **Description:** The page must present the approved testimonial content: portrait, “It just works.” heading, approved quote, `JEREMY ROBINSON`, and `CMO, FYLO` attribution.
- **Rationale:** The testimonial is a major proof section in every supplied composition.
- **Evidence:** `EVD-003`, `EVD-004`
- **Acceptance criteria:** `AC-007`

### REQ-FR-006 — Present the footer content

- **Classification:** Confirmed
- **Priority:** Must
- **Description:** The footer must present the Suite brand mark, approved copyright text, and Facebook, Twitter, and Instagram platform affordances. This requirement establishes their presence, not unverified destination URLs.
- **Rationale:** These elements appear in all supplied footer variants.
- **Evidence:** `EVD-003`, `EVD-004`
- **Acceptance criteria:** `AC-008`

### REQ-FR-007 — Preserve responsive usability and transformations

- **Classification:** Confirmed
- **Priority:** Must
- **Description:** The landing page must reproduce the material transformations demonstrated at the supplied 1440px, 768px, and 375px compositions and remain usable at representative widths between and beyond those examples, without content loss, unintended overlap, clipping, or page-level horizontal scrolling caused by the layout.
- **Rationale:** The source proves three responsive arrangements but does not prove breakpoint thresholds.
- **Evidence:** `EVD-001`, `EVD-004`, `AUD-001`
- **Acceptance criteria:** `AC-009`, `AC-010`, `AC-011`, `AC-012`

### REQ-FR-008 — Provide perceivable CTA interaction states

- **Classification:** Confirmed
- **Priority:** Must
- **Description:** The primary and secondary CTA affordances must expose clearly distinguishable default, hover-capable, and keyboard-focus presentations when those interaction modes apply. This requirement does not define the activation destination.
- **Rationale:** The design explicitly supplies Default, Hover, and Focus variants for both CTA families.
- **Evidence:** `EVD-007`, `EVD-008`, `AUD-002`
- **Acceptance criteria:** `AC-013`, `AC-014`

## 6. Business Rules

No standalone product-domain business rule is established by the approved sources at Stage 2. In particular, the label “Request Beta Access” does not establish eligibility rules, form fields, submission behavior, account creation, permissions, or fulfillment behavior. Those rules must not be invented from the visual label.

## 7. Data Requirements

### REQ-DR-001 — Render the approved baseline content without application data services

- **Classification:** Confirmed
- **Priority:** Must
- **Description:** The approved baseline marketing content must be renderable without requiring a backend API, authentication service, persistence layer, or user account.
- **Required and optional data:** The baseline content consists of the approved copy, metrics, testimonial, copyright text, imagery, and platform labels evidenced by the design.
- **Validation or ownership:** Content must remain traceable to approved design evidence or a later explicit owner decision.
- **Privacy or retention evidence:** None required for the static baseline.
- **Evidence:** Approved `PROJECT-CONTEXT.md`, `EVD-002`, `EVD-003`
- **Acceptance criteria:** `AC-015`

### REQ-DR-002 — Do not introduce unsourced visitor-data collection

- **Classification:** Confirmed
- **Priority:** Must
- **Description:** The current scope does not require visitor-data collection, form submission, persistence, analytics, or tracking. Any such behavior must be introduced only by a later explicit approved requirement and must not be inferred from the CTA label.
- **Required and optional data:** None in the current approved scope.
- **Validation or ownership:** Later product approval is required before adding a data boundary.
- **Privacy or retention evidence:** Approved `PROJECT-CONTEXT.md` states that no application data or sensitive workflow is in scope and unnecessary tracking/data collection must not be added.
- **Acceptance criteria:** `AC-016`

## 8. Accessibility Requirements

### REQ-AR-001 — Provide meaningful semantic structure and reading order

- **Classification:** Confirmed
- **Priority:** Must
- **Description:** The implementation must expose a meaningful document structure and content order corresponding to the approved hierarchy, including appropriate page regions and heading relationships rather than relying on visual positioning alone.
- **Rationale:** The design establishes visual hierarchy but cannot prove semantic implementation.
- **Evidence or authority:** `EVD-001`, `AUD-004`, approved `PROJECT-CONTEXT.md`
- **Acceptance criteria:** `AC-017`

### REQ-AR-002 — Support keyboard operation and visible focus

- **Classification:** Confirmed
- **Priority:** Must
- **Description:** Every implemented interactive element must be keyboard reachable and operable where applicable, with a clearly perceivable focus indication. CTA focus presentation must preserve the design’s explicit focus intent.
- **Rationale:** Keyboard behavior is an implementation responsibility and both CTA families include visible Focus variants.
- **Evidence or authority:** `EVD-008`, `AUD-004`, approved `PROJECT-CONTEXT.md`
- **Acceptance criteria:** `AC-018`

### REQ-AR-003 — Provide accessible names and appropriate image semantics

- **Classification:** Confirmed
- **Priority:** Must
- **Description:** Interactive elements must expose meaningful accessible names. Informative imagery must expose an appropriate text alternative, while purely decorative imagery must not create redundant assistive-technology content. Exact alternative text belongs to later design/specification work where source intent is sufficient.
- **Rationale:** The design does not establish accessible names or alternative-text behavior.
- **Evidence or authority:** `AUD-004`, approved `PROJECT-CONTEXT.md`
- **Acceptance criteria:** `AC-019`

### REQ-AR-004 — Preserve content during resizing and responsive reflow

- **Classification:** Confirmed
- **Priority:** Must
- **Description:** Users must be able to resize or view the page across the supported responsive conditions without losing content, reading order, or access to controls because of overlap, clipping, or unintended horizontal layout overflow.
- **Rationale:** The supplied responsive evidence demonstrates material reflow and the project context explicitly requires accessible reflow.
- **Evidence or authority:** `EVD-004`, `AUD-001`, `AUD-004`, approved `PROJECT-CONTEXT.md`
- **Acceptance criteria:** `AC-020`

### REQ-AR-005 — Validate visual accessibility of implemented UI

- **Classification:** Confirmed
- **Priority:** Must
- **Description:** Before completion, implemented text, controls, icons, focus indicators, and interactive target sizing must be checked against the applicable accessibility validation criteria selected and documented in later specification/validation work. No conformance level or numeric threshold is asserted by the current design source.
- **Rationale:** Figma records source colors and focus intent but does not certify implementation compliance.
- **Evidence or authority:** `EVD-008`, `AUD-004`, approved `PROJECT-CONTEXT.md`
- **Acceptance criteria:** `AC-021`

### REQ-AR-006 — Respect reduced-motion needs for nonessential motion

- **Classification:** Confirmed
- **Priority:** Should
- **Description:** If the demonstrated or later approved nonessential transitions are implemented with motion, the experience must provide reduced-motion-compatible behavior without removing access to content or actions.
- **Rationale:** Hover transition evidence exists, while reduced-motion behavior is not demonstrated by Figma and is explicitly part of the project accessibility baseline.
- **Evidence or authority:** `EVD-007`, `AUD-004`, approved `PROJECT-CONTEXT.md`
- **Acceptance criteria:** `AC-022`

## 9. Other Non-functional Requirements

### REQ-NFR-001 — Preserve visual fidelity to the approved source

- **Classification:** Confirmed
- **Priority:** Must
- **Category:** Quality / Visual fidelity
- **Description:** The rendered page must materially match the approved desktop, tablet, and mobile source compositions in hierarchy, typography, spacing, color, imagery, component treatment, and responsive arrangement, subject to documented accessibility or platform adjustments.
- **Measurement conditions:** Compare rendered output against `SRC-DS-001` at the supplied 1440px, 768px, and 375px examples and document material differences.
- **Evidence:** `EVD-001`–`EVD-006`
- **Acceptance criteria:** `AC-009`, `AC-010`, `AC-011`, `AC-023`

### REQ-NFR-002 — Preserve efficient static-page delivery

- **Classification:** Confirmed
- **Priority:** Should
- **Category:** Performance / Maintainability
- **Description:** Baseline page content and presentation should not require unnecessary client-side JavaScript, runtime data fetching, or new dependencies when equivalent static delivery can satisfy the approved behavior.
- **Measurement conditions:** Later implementation review must identify any client runtime or new dependency introduced and connect it to a requirement or specification that needs it.
- **Evidence:** Approved `PROJECT-CONTEXT.md`, `SRC-REPO-001`
- **Acceptance criteria:** `AC-024`

### REQ-NFR-003 — Preserve consistency of repeated design patterns

- **Classification:** Confirmed
- **Priority:** Should
- **Category:** Maintainability
- **Description:** Repeated source patterns—particularly CTA families and responsive Header, Hero, Metrics, Testimonial, and Footer families—must remain behaviorally and visually consistent unless a later approved design/specification explicitly distinguishes them.
- **Measurement conditions:** Later implementation review compares repeated instances for unintended drift.
- **Evidence:** `EVD-004`, `EVD-007`, `EVD-008`
- **Acceptance criteria:** `AC-025`

## 10. Security Requirements

### REQ-SEC-001 — Keep the current scope free of unsourced sensitive-data or identity boundaries

- **Classification:** Confirmed
- **Priority:** Must
- **Description:** The current landing-page scope must not introduce authentication, authorization, sensitive-data handling, persistent visitor identity, or tracking behavior without an explicit approved expansion of requirements.
- **Evidence:** Approved `PROJECT-CONTEXT.md`
- **Affected boundaries:** CTA behavior, analytics/tracking, any future form or service integration.
- **Acceptance criteria:** `AC-016`

No additional security policy, authentication rule, retention period, or threat-control requirement is established by current sources.

## 11. Responsive and Content Requirements

- The 1440px source demonstrates a desktop arrangement with metrics integrated as a vertical hero rail, a side-by-side testimonial, and a horizontal footer.
- The 768px source demonstrates a tablet arrangement with a two-column hero, horizontal metrics, stacked testimonial, and horizontal footer.
- The 375px source demonstrates a mobile arrangement with vertically sequenced hero content, stacked metrics, stacked testimonial, and centered/vertical footer composition.
- These are required outcome examples under `REQ-FR-007` and `REQ-NFR-001`; they are not automatic breakpoint declarations.
- Baseline copy, metric values, testimonial attribution, and platform labels must remain consistent with approved source evidence unless an explicit later owner decision changes content.
- Alternate localization, long-content behavior, or variable-content rules are not established and remain outside the baseline requirement unless later approved.

## 12. Constraints

`PROJECT-CONTEXT.md` already introduced `REQ-CON-001` through `REQ-CON-005` during Stage 0. To preserve stable identifier history, this artifact references those existing identifiers rather than redefining or renumbering them. Their ownership-location anomaly should be checked at the Stage 5 documentation-consistency gate.

Referenced existing constraints:

- `REQ-CON-001`: Figma editing is limited to `🤖 Workflow` unless explicitly authorized otherwise.
- `REQ-CON-002`: `SRC-DS-001` is time-bound and must be re-verified at relevant later stages.
- `REQ-CON-003`: Implementation code edits remain forbidden until workflow Stage 10 with an active task.
- `REQ-CON-004`: The pinned implementation baseline is the Astro starter and does not already implement Suite.
- `REQ-CON-005`: Figma library subscription does not prove material dependency usage in scoped nodes.

### REQ-CON-006 — Resolve CTA activation behavior before behavioral specification is implementation-ready

- **Classification:** Confirmed
- **Priority:** Must
- **Description:** The destination or outcome of “Request Beta Access” activation must be explicitly approved before final behavioral specification and implementation tasks that include CTA activation are marked ready. The current design does not establish a destination or form behavior.
- **Evidence:** `EVD-007`, `AUD-003`, audit question `Q-001`
- **Impact:** Stage 2 can define the unresolved requirement boundary, but implementation must not invent the action.
- **Acceptance criteria:** `AC-026`

### REQ-CON-007 — Do not equate supplied frame widths with implementation breakpoints

- **Classification:** Confirmed
- **Priority:** Must
- **Description:** The supplied 375px, 768px, and 1440px frame widths are evidence examples. Later design/specification must select responsive transition conditions from layout/content behavior and project constraints rather than treating those values as automatically authoritative CSS breakpoints.
- **Evidence:** `AUD-001`, `EVD-004`
- **Impact:** Prevents unsupported breakpoint rules.
- **Acceptance criteria:** `AC-027`

### REQ-CON-008 — Resolve social-link behavior before making it product-functional

- **Classification:** Confirmed
- **Priority:** Must when social affordances are implemented as links
- **Description:** The approved design establishes Facebook, Twitter, and Instagram affordances but does not establish destination URLs. Any interactive destinations must be explicitly approved before implementation; otherwise the implementation must not invent external URLs.
- **Evidence:** `EVD-003`, `AUD-006`
- **Impact:** Footer presence is required, destination behavior remains unresolved.
- **Acceptance criteria:** `AC-028`

## 13. Dependencies

| Dependency | Snapshot or evidence | Purpose | Availability | Risk |
|---|---|---|---|---|
| Scoped Figma `🤖 Workflow` page | `SRC-DS-001`, latest Stage 2 verification | Visual/content/responsive authority | Available; time-bound | Source may change and must be re-verified |
| Existing Astro frontend baseline | `SRC-REPO-001` | Technical starting point | Available; immutable commit | Current app is still the starter, so full page implementation remains later work |
| Hero/product imagery | `EVD-002`, `AUD-006` | Hero visual fidelity | Available in Figma source | Export format/provenance not yet documented |
| Testimonial portrait/decorations | `EVD-003`, `AUD-006` | Testimonial fidelity | Available in Figma source | Export format/provenance not yet documented |
| CTA destination decision | `EVD-007`, `AUD-003`, `REQ-CON-006` | Product behavior | Unresolved | Blocks final CTA behavior/implementation readiness |
| Social destination decision | `EVD-003`, `REQ-CON-008` | Footer link behavior | Unresolved | Blocks invented external destinations |

## 14. Assumptions and Open Questions

### Assumptions

- **A-001:** The three Home frames represent one responsive route/page rather than separate routes, as already inferred by the approved audit.
- **A-002:** The approved copy, metric values, testimonial attribution, copyright text, and platform labels remain the baseline content until an explicit approved content change is recorded.

### Blocking questions

- **Q-001 — CTA activation:** What must “Request Beta Access” do when activated? This must be resolved before the CTA activation behavior is finalized in `SPEC.md` or an implementation task containing that behavior becomes Ready.
- **Q-004 — Social destinations:** Are the footer platform affordances intended to be links, and if so, what are the approved destination URLs? This must be resolved before external destinations are implemented.

### Non-blocking questions

- **Q-002 — Responsive transitions:** At what content/layout conditions should the demonstrated desktop/tablet/mobile transformations occur between supplied examples? This belongs to later design/specification and must not be answered with arbitrary device breakpoints.
- **Q-003 — Content variability:** Is the supplied marketing content permanently static, or should later scope include localization/variable/long-content cases? Current baseline remains the supplied content.
- **Q-005 — Asset provenance:** What export formats and source/licensing provenance should be used for the hero image and testimonial portrait? The assets are available in Figma, but the audit did not establish export or licensing details.

## 15. Risks

| Risk | Impact | Likelihood | Mitigation | Blocking |
|---|---|---|---|---|
| CTA destination remains undefined | Product behavior could be invented or reworked | High while unresolved | Resolve `Q-001` before Stage 4 behavior is finalized / implementation readiness | Yes for CTA behavior, not for Stage 2 requirement review |
| Social destinations remain undefined | Incorrect external links could be invented | Medium | Resolve `Q-004` before making footer affordances interactive | Yes for external-link behavior |
| Figma source is mutable | Later source changes could invalidate evidence | Medium | Re-verify `SRC-DS-001` at relevant stages/tasks | No while verification remains Unchanged |
| Only three viewport examples are supplied | Intermediate-width layout may drift or fail | Medium | Derive transitions from content/layout failure and verify representative intermediate widths | No |
| Accessibility behavior is not proven by Figma | Semantic/keyboard/reflow issues could survive visual matching | Medium | Carry `REQ-AR-*` into design/spec/tasks and execute accessibility checks | No |
| Asset export/provenance is not documented | Wrong format or provenance could delay implementation | Low/Medium | Confirm asset handling before implementation task readiness | No unless asset cannot be lawfully/technically used |
| Stage 0 constraint IDs live outside their normal owner artifact | Later traceability could contain duplicate ownership if redefined | Low | Preserve IDs without redefining; resolve ownership consistency at Stage 5 | No |

## 16. Acceptance Criteria

- **AC-001:** One rendered landing-page route exposes the major content sequence Header → Hero → Metrics → Testimonial → Footer in a logical reading order.
- **AC-002:** No additional product route, workflow, or major section outside the approved scope is required to satisfy the baseline landing page.
- **AC-003:** The header shows the Suite brand mark and the secondary “Request Beta Access” affordance at each supplied responsive example.
- **AC-004:** The hero shows the approved headline, supporting copy, and primary CTA label without unapproved text substitutions.
- **AC-005:** The hero includes the approved product visual in each supplied responsive composition, using the appropriate source treatment for the layout.
- **AC-006:** The rendered metrics show `2K+ / COMPANIES`, `8 / LANGUAGES`, and `1.2M / LEADS`.
- **AC-007:** The testimonial renders the approved portrait, heading, quote, author, and role/company attribution.
- **AC-008:** The footer renders the Suite brand mark, approved copyright text, and the Facebook, Twitter, and Instagram platform affordances without invented destination URLs.
- **AC-009:** At 1440px, the material layout arrangement matches the approved desktop composition, subject only to documented accessibility/platform adjustments.
- **AC-010:** At 768px, the material layout arrangement matches the approved tablet composition, subject only to documented accessibility/platform adjustments.
- **AC-011:** At 375px, the material layout arrangement matches the approved mobile composition, subject only to documented accessibility/platform adjustments.
- **AC-012:** Representative widths selected between and beyond the supplied examples do not produce unintended content loss, overlap, clipping, or layout-caused page-level horizontal scrolling.
- **AC-013:** On a hover-capable pointer, primary and secondary CTA presentations expose the approved hover intent when hovered.
- **AC-014:** When a CTA receives keyboard focus, its focus state is clearly perceivable and not dependent on hover.
- **AC-015:** Baseline marketing content is available in the initial rendered page without requiring a backend API, account, or authenticated session.
- **AC-016:** No form submission, visitor persistence, analytics/tracking, authentication, sensitive-data handling, or similar data boundary is introduced without a requirement that explicitly authorizes it.
- **AC-017:** Automated/manual semantic inspection establishes a meaningful page structure and heading/region order corresponding to the content hierarchy rather than only visual coordinates.
- **AC-018:** Every implemented interactive element can be reached and operated using the keyboard where applicable, and focus remains visible throughout keyboard navigation.
- **AC-019:** Implemented interactive controls expose meaningful accessible names; informative imagery has an appropriate text alternative and decorative imagery does not create redundant assistive-technology content.
- **AC-020:** Responsive/resize verification finds no content or control rendered inaccessible because of unintended overlap, clipping, or layout-caused horizontal overflow under the documented support conditions.
- **AC-021:** The final validation record contains no unresolved failure from the applicable contrast, focus-visibility, icon/control, and interactive-target checks selected in later specification work.
- **AC-022:** When nonessential motion is present, reduced-motion preference verification shows that content and controls remain fully available without requiring the original motion treatment.
- **AC-023:** Visual comparison at the three supplied source widths documents no unexplained material deviation in hierarchy, typography, spacing, color, imagery, or responsive arrangement.
- **AC-024:** Any client-side JavaScript runtime or new dependency introduced for the landing page is explicitly justified by a requirement/specification that cannot be satisfied equivalently by the project’s static baseline approach.
- **AC-025:** Repeated instances of the audited CTA and responsive section families exhibit no unintended behavior/style drift.
- **AC-026:** Before CTA activation is specified as implementation-ready, an approved decision records its destination/outcome; no implementation task invents that behavior.
- **AC-027:** Later responsive documentation records transition conditions based on design/content/layout behavior rather than asserting that 375/768/1440 are automatically the CSS breakpoints.
- **AC-028:** Any implemented external social destination corresponds to an explicitly approved URL; no destination is inferred solely from the social-platform icon.

## 17. Definition of Done

- [ ] All Must requirements and applicable acceptance criteria pass with evidence.
- [ ] `Q-001` is resolved before CTA activation implementation is declared ready.
- [ ] `Q-004` is resolved before external social destinations are implemented.
- [ ] Responsive behavior is verified at the three supplied examples and representative intermediate/beyond widths selected by later specification.
- [ ] Accessibility requirements are carried into specification/tasks and their required checks execute successfully.
- [ ] Visual comparison against the active design snapshot is completed and material deviations are resolved or explicitly approved.
- [ ] Repository/build validation required by the later implementation tasks executes successfully.
- [ ] Required Vercel preview verification is completed before implementation changes merge.
- [ ] Approved workflow documentation is synchronized and no critical/high-severity blocker remains.

## 18. Traceability

| Requirement | Snapshot or evidence | Design decision | Specification | Validation |
|---|---|---|---|---|
| `REQ-FR-001` | `EVD-001`, `EVD-004` | Pending Stage 3 | Pending Stage 4 | `AC-001`, `AC-002` |
| `REQ-FR-002` | `EVD-002`, `EVD-004` | Pending Stage 3 | Pending Stage 4 | `AC-003` |
| `REQ-FR-003` | `EVD-002` | Pending Stage 3 | Pending Stage 4 | `AC-004`, `AC-005` |
| `REQ-FR-004` | `EVD-001`, `EVD-004` | Pending Stage 3 | Pending Stage 4 | `AC-006` |
| `REQ-FR-005` | `EVD-003`, `EVD-004` | Pending Stage 3 | Pending Stage 4 | `AC-007` |
| `REQ-FR-006` | `EVD-003`, `EVD-004` | Pending Stage 3 | Pending Stage 4 | `AC-008` |
| `REQ-FR-007` | `EVD-001`, `EVD-004`, `AUD-001` | Pending Stage 3 | Pending Stage 4 | `AC-009`–`AC-012` |
| `REQ-FR-008` | `EVD-007`, `EVD-008`, `AUD-002` | Pending Stage 3 | Pending Stage 4 | `AC-013`, `AC-014` |
| `REQ-DR-001` | Approved context, `EVD-002`, `EVD-003` | Pending as needed | Pending Stage 4 | `AC-015` |
| `REQ-DR-002` | Approved context, `AUD-003` | Pending as needed | Pending Stage 4 | `AC-016` |
| `REQ-AR-001`–`REQ-AR-006` | `EVD-001`, `EVD-004`, `EVD-007`, `EVD-008`, `AUD-004` | Pending Stage 3 | Pending Stage 4 | `AC-017`–`AC-022` |
| `REQ-NFR-001`–`REQ-NFR-003` | `EVD-001`–`EVD-008`, approved context | Pending Stage 3 | Pending Stage 4 | `AC-023`–`AC-025` |
| `REQ-SEC-001` | Approved context | Pending as needed | Pending Stage 4 | `AC-016` |
| `REQ-CON-006` | `EVD-007`, `AUD-003`, `Q-001` | Pending owner decision | Pending Stage 4 | `AC-026` |
| `REQ-CON-007` | `AUD-001`, `EVD-004` | Pending Stage 3 | Pending Stage 4 | `AC-027` |
| `REQ-CON-008` | `EVD-003`, `AUD-006` | Pending owner/content decision | Pending Stage 4 | `AC-028` |

## 19. Source Verification

- Stage 2 source check: connected Figma metadata re-verification of page `2140:147`.
- Result: recorded canonically as `Unchanged` for `SRC-DS-001` before this requirements baseline was authored.
- Material structure verified: Product Screens (`2140:1361`), Components (`2140:1310`), Design System Documentation (`2140:1363`), and the same desktop/tablet/mobile Home frames and responsive component families.
- Repository baseline: `SRC-REPO-001` remains the immutable implementation input baseline; this stage does not make implementation claims beyond approved context.

## 20. Review

### Pass 1 — Completeness and correctness

- [ ] Requirements cover the agreed scope.
- [ ] Requirements are necessary, specific, testable, and prioritized.
- [ ] Goals, non-goals, users, functional needs, data boundaries, accessibility, quality, security scope, constraints, dependencies, risks, assumptions, questions, acceptance criteria, and Definition of Done are covered as applicable.
- [ ] Unsupported business, security, retention, browser, or performance rules were not invented.
- [ ] Snapshot IDs in metadata exist and were actually used.

### Pass 2 — Consistency, traceability, source integrity, risks, and uncertainty

- [ ] Identifiers follow `Identifier-Conventions.md`, including preservation rather than redefinition of the Stage 0 `REQ-CON-001`–`REQ-CON-005` history.
- [ ] Every material requirement has evidence from an approved artifact or pinned snapshot.
- [ ] No source changed silently after the artifact baseline was recorded.
- [ ] Confirmed, inferred, recommended, assumed, and open information remain distinct.
- [ ] Blocking questions are visible and tied to the stage where they become blocking.
- [ ] Requirements do not choose arbitrary breakpoints, CTA destinations, social URLs, backend behavior, or implementation structure.

## 21. Completion Summary

- Requirements status: Draft pending two-pass review and owner approval.
- Active snapshots used: `SRC-DS-001`, `SRC-REPO-001`.
- Main unresolved product behavior: `Q-001` CTA activation destination/outcome.
- Secondary unresolved behavior: `Q-004` footer social destinations/activation.
- Ready for Stage 3: No; Stage 2 review and Gated owner approval are still required.
