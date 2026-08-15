---
artifact: DESIGN
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

# Design

## 1. Document Information

- Version: 0.2
- Scope: Design intent for the single responsive Suite marketing landing page represented by the approved `🤖 Workflow` Figma page.
- Last updated: 2026-08-15
- Source baseline: `SOURCE-BASELINE.md`
- Evidence baseline: approved `DESIGN-AUDIT.md`
- Related requirements: approved `REQUIREMENTS.md`
- Related specification: approved `SPEC.md`
- Active source snapshots: `SRC-DS-001`, `SRC-REPO-001`
- Artifact-time design verification: `VER-005 — Unchanged`
- Stage 5 consistency/source verification: `VER-007 — Unchanged`

## 2. Purpose and Intent

The page communicates Suite's proposition quickly, establishes credibility through metrics and testimonial proof, and retains a clear beta-access action without inventing an application workflow. The experience is visually editorial rather than application-like: large expressive typography, restrained neutral surfaces, dark proof content, product imagery, and a small number of purposeful decorative accents.

The same content hierarchy survives responsive transformation. Desktop uses horizontal composition and overlap; tablet preserves a two-column hero while moving proof metrics below it; mobile prioritizes linear reading, full-width stacking, and centered proof/footer treatments. These are design outcomes, not declarations of CSS architecture or device breakpoints.

## 3. Source and Scope

- Design snapshot: `SRC-DS-001`, Figma page `🤖 Workflow` (`2140:147`), Time-bound.
- Included source regions:
  - Product Screens `2140:1361`.
  - Home / Desktop / Default `2140:148` — 1440×1716.
  - Home / Tablet / Default `2140:330` — 768×1904.
  - Home / Mobile / Default `2140:289` — 375×2399.
  - Components `2140:1310`.
  - Design System Documentation `2140:1363`.
- Excluded: every other Figma page and any product behavior not evidenced or explicitly approved.
- Reproduction limitations: the source is mutable; only three viewport examples are supplied; semantics, browser reflow, final accessibility compliance, production destinations, and asset licensing are not proven by Figma.
- Stage 5 source integrity: `VER-007` re-inspected the same scoped screens, components, imagery, and design-system documentation and found no material drift after Stage 4.

## 4. Information Architecture and Reading Order

The intended logical sequence is stable across all supplied compositions:

1. Site Header — Suite identity and secondary beta-access action.
2. Hero — headline, supporting copy, primary beta-access action, product visual.
3. Metrics — companies, languages, leads.
4. Testimonial — portrait, statement, quote, attribution.
5. Footer — Suite identity, copyright, social links.

Desktop visually embeds Metrics in the Hero region, but their content remains conceptually after the hero proposition. Visual overlap must not imply a different reading or focus order.

## 5. Screen and Layout Structure

### Desktop — `2140:148`

- 1440px supplied example; primary content region is 1110px wide.
- Header places logo and secondary CTA at opposing edges.
- Hero `2159:651` is 1110×600 with content left, product image center/right, and vertical Metrics rail at far right.
- Testimonial `2160:717` is a 1109×535 dark rounded panel with portrait left and text right.
- Footer is horizontal across the viewport.

### Tablet — `2140:330`

- 768px supplied example; primary content width is 704px.
- Header retains the logo/action relationship.
- Hero `2159:708` remains a two-column overlap.
- Metrics become a 704px horizontal three-item row.
- Testimonial `2160:729` stacks portrait/decorative treatment above centered text.
- Footer remains horizontal.

### Mobile — `2140:289`

- 375px supplied example; primary content width is 343px.
- Header remains one row; secondary CTA narrows while preserving its label.
- Hero `2159:718` becomes vertical: content/action first, then the mobile product visual.
- Metrics stack vertically and center.
- Testimonial remains stacked in a 375px dark panel.
- Footer becomes a centered vertical stack.

## 6. Design Decisions

### DES-001 — Preserve one stable content hierarchy across responsive compositions

- **Classification:** Observed and Confirmed by approved requirements.
- **Intent:** Keep Header → Hero → Metrics → Testimonial → Footer as the conceptual and reading sequence even when desktop visual composition embeds or overlaps elements.
- **Evidence:** `EVD-001`, `EVD-004`; screens `2140:148`, `2140:330`, `2140:289`.
- **Requirement references:** `REQ-FR-001`, `REQ-AR-001`.

### DES-002 — Keep the hero proposition dominant and editorial

- **Classification:** Observed.
- **Intent:** The headline is the strongest visual element; supporting copy and CTA form the action cluster, while the product image reinforces rather than precedes the message.
- **Evidence:** `EVD-002`; Hero variants `2159:651`, `2159:708`, `2159:718`.
- **Requirement references:** `REQ-FR-003`, `REQ-NFR-001`.
- **Implication:** Preserve strong-weight emphasis within “super solution” and “business.” across widths.

### DES-003 — Treat metrics as supporting proof whose layout adapts to available horizontal space

- **Classification:** Observed; transition condition Inferred.
- **Intent:** Three equal metrics transform from vertical desktop rail → horizontal tablet row → centered mobile stack as composition space reduces.
- **Evidence:** `EVD-001`, `EVD-004`; Metrics `2156:460`, `2156:471`, `2156:482`.
- **Requirement references:** `REQ-FR-004`, `REQ-FR-007`.

### DES-004 — Use the testimonial as a high-contrast proof block

- **Classification:** Observed.
- **Intent:** Separate social proof from the light page with an inverse dark surface, rounded enclosure, prominent portrait, decorative stroke, and readable quotation/attribution hierarchy.
- **Evidence:** `EVD-003`, `EVD-004`; Testimonial `2160:717`, `2160:729`, `2160:741`.
- **Requirement references:** `REQ-FR-005`, `REQ-NFR-001`.

### DES-005 — Use local semantic design tokens as the visual source of truth

- **Classification:** Observed and Recommended for fidelity.
- **Intent:** Preserve the documented relationship between primitive values and semantic roles instead of treating sampled colors/spacing as unrelated literals.
- **Evidence:** `EVD-005`, `EVD-006`; Design System Documentation `2140:1363`; local `Primitives` and `Semantic` variable collections.
- **Requirement references:** `REQ-NFR-001`, `REQ-NFR-003`.
- **Implication:** Planning/implementation may map these roles to repository tokens if useful; this artifact does not prescribe CSS naming or architecture.

### DES-006 — Keep decoration subordinate to content and nonessential to meaning

- **Classification:** Inferred from composition.
- **Intent:** Hero and testimonial strokes provide emphasis and brand character but do not carry information required to understand the page.
- **Evidence:** `EVD-002`, `EVD-003`; Decoration components `3:1356`, `3:1357`.
- **Requirement references:** `REQ-AR-003`, `REQ-NFR-001`.

## 7. Visual System

### Typography

| Role | Observed style/value | Usage |
|---|---|---|
| Hero / Desktop | Epilogue Regular + Bold, 72px, ~110%, -1px tracking | Main proposition |
| Hero / Tablet | Epilogue Regular + Bold, 56px, ~110%, -0.78px tracking | Main proposition |
| Hero / Mobile | Epilogue Regular + Bold, 38px, ~110%, -0.528px tracking | Main proposition |
| Display / Large / Strong | Epilogue Bold 48px, 120% | Metric values |
| Body / Large | Epilogue Regular 18px, 160% | Hero support copy |
| Body / Quote | Epilogue Regular 20px, 160% | Testimonial quote |
| Label / Action | Epilogue Bold 16px, 150% | CTA labels |
| Label / Eyebrow | Epilogue Regular 16px, 150%, 2.5px tracking | Metric labels |

### Color and tokens

| Semantic role | Observed token/value | Usage |
|---|---|---|
| Page background | `Color / Background / Page` = `#faf8f6` | Main page |
| Surface | `Color / Background / Surface` = `#f3ede7` | Footer/surfaces |
| Inverse background | `Color / Background / Inverse` = `#172339` | Testimonial |
| Primary text/action | `Color / Text / Primary`, `Color / Action / Primary` = `#172339` | Headline/actions |
| Secondary text | `Color / Text / Secondary` = `#49566d` | Supporting copy |
| Inverse primary text | `Color / Text / Inverse / Primary` = `#faf8f6` | Testimonial text |
| Accent | `Color / Accent / Primary` = `#cb30e3` | Accent/gradient treatment |
| Focus | `Color / Focus / Outer`, `Color / Focus / Inner` | CTA focus treatment |

- Primary spacing scale: 0, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80px; 10px is documented as legacy (`EVD-005`).
- Radius primitives: 0, 4, 6, 8, 10, 12, 16, 20, 24, Full (`EVD-006`).
- Hero imagery has distinct desktop/tablet and mobile source treatments (`3:239`, `3:1088`).
- Testimonial portrait: `2140:1359`; decorative vector stroke accompanies it.
- Social icons: `3:1280`–`3:1282`.

## 8. Components and Patterns

| Component | Purpose | Variants / states | Evidence |
|---|---|---|---|
| Site Header `2176:1216` | Identity + secondary action | Desktop / Tablet / Mobile; CTA states inherited | All supplied screens |
| Hero `2159:699` | Proposition + primary action + product visual | Desktop / Tablet / Mobile; CTA states inherited | All supplied screens |
| Metrics `2156:483` | Quantitative proof | Desktop / Tablet / Mobile; static | All supplied screens |
| Testimonial `2160:742` | Qualitative proof | Desktop / Tablet / Mobile; static | All supplied screens |
| Footer `2157:513` | Brand close + copyright + social actions | Desktop / Tablet / Mobile | All supplied screens |
| Button / Secondary `3:960` | Header beta action | Default / Hover / Focus | Header variants |
| Button / Primary `3:978` | Hero beta action | Default / Hover / Focus | Hero variants |
| Social Links `2155:431` | Footer social affordances | No explicit state variants supplied | Footer variants |

Responsive families demonstrate reuse and behavioral consistency; they do not prescribe code-component boundaries.

## 9. Interaction Intent

### DES-INT-001 — Beta actions remain links with approved placeholder destination

- **Classification:** Confirmed by project owner and approved requirements.
- **Trigger:** Activate either “Request Beta Access” link.
- **Result:** Current-scope native anchor behavior for `href="#"`; no form, route, external destination, submission, analytics, or data collection is implied.
- **Focus/keyboard:** Both links remain keyboard reachable and visibly focusable.
- **Evidence:** `REQ-CON-006`, `AC-026`, `EVD-007`, `EVD-008`.

### DES-INT-002 — CTA hover communicates affordance without changing meaning

- **Classification:** Observed.
- **Result:** Secondary CTA adopts its dark filled Hover variant; Primary CTA adopts its accent-gradient Hover variant.
- **Motion:** Figma demonstrates Dissolve, Ease In, 200ms from Default → Hover.
- **Evidence:** `EVD-007`; `3:959` → `3:961`, `3:977` → `3:979`.

### DES-INT-003 — CTA focus is a distinct visible state

- **Classification:** Observed visual intent; keyboard behavior Confirmed by requirements.
- **Result:** Clearly visible focus treatment distinct from Default/Hover; no focus animation is required.
- **Evidence:** `EVD-008`, `REQ-AR-002`, `AC-014`, `AC-018`; Focus variants `3:963`, `3:981`.

### DES-INT-004 — Footer social affordances remain placeholder links

- **Classification:** Confirmed by project owner; interaction styling beyond default was not supplied by Figma.
- **Result:** Facebook, Twitter, Instagram use current-scope `href="#"` behavior only.
- **Focus/keyboard:** Accessible naming and visible keyboard focus are required.
- **Evidence:** `REQ-CON-008`, `REQ-AR-002`, `REQ-AR-003`, `AC-028`, `AUD-006`.

## 10. Responsive Intent

### DES-RWD-001 — Transition based on composition pressure, not frame labels

- **Classification:** Confirmed requirement with Inferred transition rule.
- **Stable:** Content sequence, copy, CTA roles, metrics, testimonial, footer content, brand identity.
- **Fluid:** Outer margins, available content width, spacing, text wrapping, image sizing/position, overlap allowance.
- **Transition condition:** Change arrangement before the current composition causes overlap, clipping, unreadably compressed text/image regions, or layout-caused horizontal scrolling.
- **Evidence:** `REQ-CON-007`, `AUD-001`, `EVD-004`.
- **Stage 4 outcome:** Approved `SPEC-RWD-001`–`SPEC-RWD-004` make these conditions testable and require representative widths between/beyond supplied examples. Exact CSS thresholds remain an implementation decision to validate against those conditions; they are not an unresolved product requirement.

### DES-RWD-002 — Hero evolves from layered horizontal composition to linear mobile flow

- Desktop/tablet keep the proposition and product visual in layered/two-column relationship.
- Mobile places content/action before the mobile product visual.
- Transition before collision, excessive compression, clipping, or horizontal overflow.
- Evidence: Hero `2159:651`, `2159:708`, `2159:718`; `EVD-002`, `EVD-004`.

### DES-RWD-003 — Metrics use vertical rail, horizontal row, then centered stack

- Desktop: vertical rail; tablet: horizontal row; mobile: centered vertical stack.
- Metric values/order remain unchanged.
- Transition before crowding, collision, clipping, or horizontal overflow.
- Evidence: Metrics `2156:460`, `2156:471`, `2156:482`.

### DES-RWD-004 — Testimonial stacks before narrow widths

- Desktop is side-by-side; tablet/mobile place portrait above text.
- Stack before portrait and quote cannot share a row while preserving intended text measure and portrait emphasis.
- Evidence: `2160:717`, `2160:729`, `2160:741`.

### DES-RWD-005 — Footer changes from horizontal to centered vertical composition

- Desktop/tablet horizontal; mobile centered vertical.
- Stack before logo/copyright/social groups can no longer remain comfortably separated in one row.
- Evidence: `2157:500`, `2157:506`, `2157:512`.

## 11. States and Edge Cases

- **Default:** Supplied for all major components and CTA families.
- **Hover:** Explicitly supplied for Primary and Secondary CTA only.
- **Focus:** Explicit visual variants supplied for both CTAs; social focus visual is implementation-defined within the documented visual system.
- **Active/pressed:** No distinct persistent state required by approved scope.
- **Disabled:** Not applicable to current placeholder links.
- **Loading / empty / error / success:** Not applicable to the static baseline; no data/form workflow exists.
- **Long/variable content:** Not a baseline requirement; approved fixed content is authoritative.
- **Missing asset:** Required approved imagery that cannot be sourced/used is a delivery blocker; do not invent substitute branded content.
- **Reduced motion:** If CTA hover motion is implemented, state recognition must remain available without dependence on the 200ms transition.

## 12. Accessibility Intent and Stage 4 Resolution

- Preserve Header → Hero → Metrics → Testimonial → Footer semantic reading order independently of visual overlap (`REQ-AR-001`).
- Approved `SPEC-ACC-001` defines one primary page heading for the hero proposition and subordinate testimonial/proof relationships; implementation selects valid semantic elements without changing those relationships.
- Keep both beta CTA links and all three social links keyboard reachable with visible focus (`REQ-AR-002`).
- CTA focus follows supplied visual intent; social links use an implementation-appropriate visible focus indication because no dedicated source variant exists (`SPEC-ACC-002`).
- Social links expose platform names; their icons are decorative within those named links (`SPEC-ACC-002`, `SPEC-ACC-003`).
- For this fixed marketing scope, hero/product imagery and testimonial portrait may be exposed as decorative because nearby text already communicates the proposition/identity; decorative strokes are ignored by assistive technology (`SPEC-ACC-003`).
- Preserve reflow and validate contrast/readability, focus visibility, target areas, and reduced-motion compatibility according to `SPEC-ACC-004` and `AC-020`–`AC-022`.

## 13. Assets and Design-system Mapping

| Asset or pattern | Evidence | Required later action | Risk |
|---|---|---|---|
| Suite logo `2:1389` | `SRC-DS-001` | Select faithful source/export treatment | Export format not specified |
| Hero desktop/tablet visual `3:239` | `EVD-002`, `AUD-006` | Determine appropriate source extraction/use | Provenance/license not established by audit |
| Hero mobile visual `3:1088` | `EVD-002`, `AUD-006` | Preserve mobile-specific treatment | Same provenance risk |
| Testimonial portrait `2140:1359` | `EVD-003`, `AUD-006` | Determine appropriate source handling | Original media/license not established |
| Decorative strokes `3:1356`, `3:1357` | `EVD-002`, `EVD-003` | Preserve as decoration | Low |
| Social icons `3:1280`–`3:1282` | `EVD-003` | Preserve shape and accessible names | Production destinations intentionally absent |
| CTA families | `EVD-007`, `EVD-008` | Preserve state intent consistently | Exact implementation method deferred |
| Primitive/Semantic variables | `EVD-005`, `EVD-006`, `VER-007` | Map during planning/implementation if useful | Avoid semantic drift |

No `SRC-ASSET-*` snapshot is recorded. Asset evidence remains contained in verified `SRC-DS-001` until later workflow stages require extraction or a dedicated source snapshot.

## 14. Inferences, Resolved Handoffs, and Open Questions

### Inferred

- Responsive transitions occur at layout-failure/content-pressure conditions, not necessarily at 768px or any named device tier.
- Hero/testimonial decorative vectors are visual accents rather than information-bearing content.
- The fixed baseline content permits deliberate text measures and overlap; arbitrary future content variability would require additional scope/evidence.

### Stage 4 specification outcomes

- `SPEC-RWD-001`–`SPEC-RWD-004` define testable responsive transition/failure conditions and representative intermediate/beyond validation widths.
- `SPEC-ACC-001`–`SPEC-ACC-004` define semantic relationships, accessible names, image semantics, keyboard/focus behavior, reflow, visual accessibility checks, and reduced-motion behavior.
- `SPEC-INT-001`–`SPEC-INT-004` define native placeholder-link activation and CTA/social interaction behavior without adding routes/forms/tracking.
- Asset provenance/export format remains intentionally outside behavior specification and belongs to later implementation readiness.

### Open questions

- **Q-002 — Responsive transitions:** Resolved at specification level. Exact implementation threshold values remain an implementation choice constrained by approved `SPEC-RWD-*` behavior and validation; they are not a product/design blocker.
- **Q-003 — Content variability:** Localization/long-content behavior remains outside the approved baseline unless scope changes.
- **Q-005 — Asset provenance:** Export format and source/licensing provenance for major raster assets remain unresolved and non-blocking until implementation readiness; they become blocking only if approved assets cannot be lawfully or technically used.

## 15. Risks and Consistency Status

| Finding | Impact | Current resolution |
|---|---|---|
| Only three viewport examples exist | Intermediate layout could drift if thresholds are guessed | Behavior-level resolved by `SPEC-RWD-*`; implementation must validate chosen thresholds/sample widths |
| CTA state coverage beyond Default/Hover/Focus absent | Could invite invented states | Resolved by `SPEC-INT-*` applicability: no extra persistent/disabled/loading states required |
| Figma does not prove accessibility semantics/behavior | Visual match alone is insufficient | Resolved at behavior level by `SPEC-ACC-*`; implementation validation still required |
| Only one content set supplied | Long/localized behavior unknown | Explicitly out of current baseline; product owner decides if scope expands |
| Major image provenance/export undocumented | Could affect implementation readiness | Remains non-blocking until asset use is prepared |
| Source is Time-bound | Later change could invalidate intent | Reverify per workflow; Stage 5 `VER-007 — Unchanged` |
| Stage 0 constraint IDs live in `PROJECT-CONTEXT.md` | Duplicate ownership risk | Stage 5 confirms `PROJECT-CONTEXT.md` remains their owner; `REQUIREMENTS.md` references rather than redefines them |

## 16. Review

### Pass 1 — Completeness and correctness

- [x] Important structure, visual roles, components, states, interactions, responsive behavior, accessibility intent, and assets are covered.
- [x] Design intent is documented rather than copied as a property dump.
- [x] Snapshot IDs in metadata exist and were inspected; artifact-time verification is `VER-005` and Stage 5 source-integrity verification is `VER-007`.
- [x] Approved placeholder-link decisions are preserved without inventing forms, routes, analytics, or production destinations.
- [x] No implementation architecture or code-component structure is prescribed.
- [x] Q-002 is now correctly represented as resolved at specification level; Q-003 and Q-005 remain explicitly bounded and non-blocking.

### Pass 2 — Consistency, traceability, source integrity, risks, and uncertainty

- [x] `DES-*`, `DES-RWD-*`, and `DES-INT-*` identifiers remain stable.
- [x] Decisions map to approved `EVD-*` evidence and `REQ-*` requirements.
- [x] Stage 4 outcomes are linked rather than described as future/pending work.
- [x] `VER-007` confirms no material source drift during Stage 5 consistency review.
- [x] Observed, inferred, recommended, confirmed, resolved, and open information remain distinct.
- [x] No supplied viewport width is presented as an automatic CSS breakpoint.
- [x] No unsupported CTA activation, social destination, data workflow, or additional application state is presented as confirmed.
- [x] Stage 0 constraint ownership is explicitly resolved without duplicating requirement definitions.

**Stage 5 consistency result:** The approved design intent remains materially unchanged; this revision only removes stale downstream-handoff language and aligns the artifact with the approved specification and canonical source verification. Implementation remains subject to workflow authorization.
