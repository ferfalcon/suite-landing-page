---
artifact: PROJECT-CONTEXT
project: Suite landing page
profile: Standard
execution_mode: Gated
created: 2026-08-14
updated: 2026-08-15
---

# Project Context

## 1. Project

- Project name: Suite landing page
- Goal: Implement the approved Suite landing page from the scoped Figma design in the existing Astro frontend with high visual fidelity, responsive behavior, accessibility, maintainability, and traceable verification.
- Project type: Static landing page
- Profile rationale: Standard is appropriate because the source contains three responsive product compositions, reusable component/state families, design-system documentation, and enough implementation surface to require separate requirements, specification, planning, task, and review artifacts.
- Created: 2026-08-14
- Last updated: 2026-08-15

## 2. Active Source Baseline

- Source baseline: `SOURCE-BASELINE.md`
- Design snapshots: `SRC-DS-001`
- Repository snapshots: `SRC-REPO-001`
- Runtime snapshots: None
- Documentation snapshots: None registered as active inputs
- Asset snapshots: None

The workflow record owns active status and verification state for these IDs. Stage 5 source-integrity review most recently records `VER-007 — Unchanged` for the mutable Figma source; the repository implementation baseline remains the immutable `SRC-REPO-001` snapshot.

## 3. Design Scope

- Included pages, frames, nodes, screens, files, URLs, or regions: Figma page `🤖 Workflow` (`2140:147`), specifically its `Product Screens`, `Components`, and `Design System Documentation` sections. Supplied product compositions include desktop (`2140:148`), tablet (`2140:330`), and mobile (`2140:289`).
- Explicitly excluded areas: All other Figma pages. Structural or visual changes outside `🤖 Workflow` require explicit user approval; file-global design-system resources are limited by the exception in root `AGENTS.md`.
- Access limitations: Connected Figma inspection is available. No named immutable Figma version has been identified, so the design source remains Time-bound and requires periodic reverification.
- Known design-source dependencies: The file has community libraries subscribed. Stage 1 audit did not establish a material external-library dependency for the local target components, so subscription alone must not drive implementation dependency decisions.

## 4. Repository Scope

- Target branch: `main` is production state; workflow and implementation changes use dedicated `agent/**` branches and pull requests according to root `AGENTS.md`.
- Relevant application, package, or directory: `frontend/`
- Existing implementation state: Astro starter application. Stage 5 rechecked `frontend/src/pages/index.astro` at the pinned implementation baseline and current `main`; both resolve to blob `c04f3602b5521c56580c70dd0846b2c559be7193` and still render the stock `Welcome` component, so the Suite design is not yet implemented.
- Known technical constraints: Astro + TypeScript, pnpm, Node `>=22.12.0`; code edits are forbidden by the implementation workflow until Stage 10 with an active task. Frontend work must follow `frontend/AGENTS.md` and the repository modern-web guidance skill.
- Access or tooling limitations: The session-local container could not resolve GitHub over direct network access, so authoritative repository operations and comparisons use the connected GitHub interface and the repository's GitHub Actions workflow executor.

## 5. Runtime References

- Production snapshot: Not available as an active workflow snapshot
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

- Architecture-required/not-required decision: Stage 6.
- Implementation planning: later workflow stage after architecture decision.
- Implementation decomposition and code changes: Stages 9–10.
- Final rendered and deployment acceptance: Stage 11.

Stages 1–4 documentation work is complete and approved; Stage 5 is reviewing cross-document consistency before architecture/planning proceeds.

## 7. Authoritative Sources

| Snapshot ID | Authority | Scope | Notes |
|---|---|---|---|
| `SRC-DS-001` | Design | `🤖 Workflow` page only | Authoritative for visible composition, supplied responsive examples, component states, content, and design-system intent; mutable/time-bound source. Latest Stage 5 verification: `VER-007 — Unchanged`. |
| `SRC-REPO-001` | Current implementation baseline / technical constraint | `frontend/` at pinned commit | Authoritative starting implementation baseline. Later workflow/documentation commits do not change the inspected frontend entry point. |

## 8. Quality Baseline

- Accessibility standard or expectations: Implement semantic structure, complete keyboard/focus behavior, accessible naming/relationships, contrast and target-size checks where applicable, reduced-motion handling, and responsive reflow. WCAG conformance level will not be invented where the source does not explicitly prescribe one; approved requirements/specification define testable criteria without asserting an unsourced conformance claim.
- Responsive coverage: Must account for the supplied 1440, 768, and 375 compositions and define reasonable behavior between and beyond those examples from evidence and implementation constraints.
- Browser or device coverage: No explicit browser matrix is established; use standards-based modern web behavior and keep unsupported assumptions visible.
- Performance expectations: Preserve efficient static-page delivery and avoid unnecessary client JavaScript or premature dependencies.
- Security and privacy expectations: No application data or sensitive workflow is in scope; do not add unnecessary tracking or data collection.
- Testing expectations: Repository/build checks plus visual, responsive, accessibility, and interaction verification appropriate to each task.
- Deployment expectations: Branch → pull request → Vercel preview → verification → merge. Production promotion is not manually triggered unless explicitly requested.

## 9. Constraints and Dependencies

| ID | Constraint or dependency | Evidence or snapshot | Impact | Status |
|---|---|---|---|---|
| `REQ-CON-001` | Figma edits are limited to `🤖 Workflow`; other pages are protected by the repository contract. | `SRC-DS-001` + root `AGENTS.md` | Constrains design normalization and audit actions. | Confirmed |
| `REQ-CON-002` | The design URL is mutable and lacks named-version evidence. | `SRC-DS-001` | Requires re-verification before relevant later stages/tasks; cannot be treated as immutable. | Confirmed |
| `REQ-CON-003` | Implementation code edits are forbidden until workflow Stage 10 with an active task. | Workflow control contract | Prevents premature coding during audit/documentation/planning. | Confirmed |
| `REQ-CON-004` | Current frontend is the Astro starter and has no Suite implementation yet. | `SRC-REPO-001` + Stage 5 repository comparison | Establishes a clean implementation starting point. | Confirmed |
| `REQ-CON-005` | Figma library subscriptions do not prove actual project-node dependency usage. | `SRC-DS-001`, `DESIGN-AUDIT.md` | Prevents implementation coupling to unproven external libraries. | Confirmed |

## 10. Known Decisions

| Decision | Owner | Evidence or snapshot | Status |
|---|---|---|---|
| Use the Standard workflow profile in Gated mode. | Project owner / workflow initialization | Workflow record | Confirmed |
| Treat `🤖 Workflow` as the only primary Figma editing scope. | Project owner / repository contract | `SRC-DS-001` | Confirmed |
| Keep `main` as production and use branch/PR/preview verification for changes. | Repository contract | `SRC-REPO-001` | Confirmed |
| Use exactly `href="#"` for both beta CTAs and all three footer social links in the current scope. | Project owner | Approved `REQUIREMENTS.md` / `SPEC.md` | Confirmed |

## 11. Risks and Questions

### Blocking

- None identified through Stage 5 documentation review.

### Non-blocking

- The Figma source is time-bound rather than a named immutable version, so later stages/tasks must continue to re-verify it when required.
- Stage 1 did not establish a material dependency on subscribed external/community Figma libraries; future implementation should use only dependencies evidenced by the scoped source/repository need.
- No runtime/Vercel snapshot is active yet; rendered behavior must be captured during implementation validation rather than assumed from repository state.
- Browser-specific requirements remain unsourced and must not be invented.
- Asset export/provenance remains a later implementation-readiness risk; required approved imagery must not be silently substituted if extraction/use becomes blocked.

## 12. Stage 0 Completion and Later Confirmation

Stage 0 established the project context and source baseline. The canonical workflow executor subsequently recorded the required source verifications, validated the record/generated views, and advanced through approved Stages 0–4. Stage 5 rechecked the mutable design source and repository implementation baseline for consistency.

- [x] Scope is explicit.
- [x] `SOURCE-BASELINE.md` exists and contains design/repository evidence.
- [x] Every active snapshot ID exists and its pin strength is honest.
- [x] Design and repository scope are recorded.
- [x] The repository baseline uses a commit SHA.
- [x] Workflow profile is selected and justified.
- [x] Quality expectations are evidence-based or explicitly bounded by later approved requirements/specification.
- [x] Blocking questions and source limitations are visible.
- [x] `WORKFLOW-STATE.md` references the same active baseline.
- [x] Canonical input verifications and workflow executor validation were recorded after Stage 0 narrative capture and have remained valid through subsequent approved stages.
