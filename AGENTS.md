# KinKin POS workspace rules

## Team entry gate (current workflow)

- **Current assignment (11/11/2026): Huy and Khánh work together.** `docs/figma-plan/KE_HOACH_HUY_KHANH.md` supersedes the six-person and solo assignments in older documents. Huy owns integration/shared UI, products and sales; Khánh owns inventory, purchasing and reports. Ask the person their name if not already identified; follow their current task and file boundaries in the two-person plan. Khánh can prepare T2 while T0 is underway; implementation depending on shared product data waits for Huy's agreed contract.
- At the beginning of a new chat, read `docs/TEAM_START_HERE.md` and `docs/TEAM_TASK_BOARD.md` before proposing or editing code.
- Ask in Vietnamese: **"Bạn là Huy, Khánh, Vân, Trường, Khuê hay Ngân?"** if the person has not identified themself in this chat. Do not infer identity from the machine account, Git credentials, or previous chats.
- Once identified, use their current tasks in `docs/figma-plan/KE_HOACH_HUY_KHANH.md`. If asked to work outside the lane, route reassignment through Huy.
- Read-only investigation across the repo is allowed to understand dependencies. Editing another person's owned files requires Huy's explicit assignment in the current chat.
- Antigravity implements; Codex reviews; Huy integrates. `docs/TEAM_RESTART_2026-11-11.md` records the previous temporary workflow.
- For Git commands, PR targets, CI and merge order, follow `docs/TEAM_GIT_WORKFLOW.md`.

## Source of truth

- Business behavior, validation, permissions, and exceptional flows come from the report and are summarized in `docs/REPORT_FIGMA_TRACEABILITY.md`.
- Screen structure, labels, visual states, and responsive targets come from the Figma file and node IDs listed in `docs/REPORT_FIGMA_TRACEABILITY.md`.
- Product behavior follows `docs/PROJECT_SCOPE.md`; the active frontend schedule is `docs/TEAM_TASK_BOARD.md`.
- API and database changes must follow `docs/CONTRACTS.md`.
- The academic report and source specifications are in `docs/reference/` through Git LFS. If a file is only an LFS pointer, run `git lfs pull` before reading it.
- The Figma source is `https://www.figma.com/design/5RdlpDu7V3VZLrJ9xWu3U8/Final?node-id=0-1`.
- When the report conflicts with the agreed MVP documents, stop and report the conflict. Do not silently invent a resolution.

## Report and Figma precedence

- The report wins for business rules, calculations, authorization, data persistence, and transaction behavior.
- Figma wins for information hierarchy, field labels, menu structure, screen states, feedback messages, and desktop/mobile presentation.
- A Figma success screen does not prove the business operation succeeded; the API and database must satisfy the report rule first.
- Do not implement a visually invented state when a matching Figma frame exists.
- For every completed use case, verify the main flow plus the error/empty states marked required in `docs/REPORT_FIGMA_TRACEABILITY.md`.

## Delivery constraints

- The current frontend phase uses the two-person plan in `docs/figma-plan/KE_HOACH_HUY_KHANH.md`; earlier team and solo plans are historical.
- The six-person phase is frontend only. Frontend lanes deliver mapped Figma UI and disclose missing API work. Do not change `apps/api/**`, Prisma schema/migrations, or backend deployment as part of a FE task.
- Do not add real Zalo or banking integrations in the MVP. Use explicit mock adapters.
- Do not add microservices. Keep the existing pnpm monorepo, Next.js web app, NestJS API, Prisma, and PostgreSQL.
- Do not upgrade dependencies unless the task explicitly requires it.

## Collaboration

- Work only on the person's currently assigned item in `docs/figma-plan/KE_HOACH_HUY_KHANH.md` unless Huy reassigns it.
- The six people may work in parallel in separate clones and branches, each within their owned lane. Do not run two implementation agents against one working tree or let them edit the same files.
- Ask Huy to record backend needs in `docs/API_GAPS.md`; backend work is outside this frontend phase.
- Announce changes to Prisma models, DTOs, API response shapes, shared UI components, or environment variables before implementation.
- Keep pull requests small and scoped. Never mix formatting-only changes with feature work.
- Preserve unrelated changes in the working tree.
- Never edit generated Prisma files directly.

## Engineering rules

- Validate request payloads in NestJS DTOs and user input in the web app.
- Enforce authorization in the API; hiding a UI control is not authorization.
- Use database transactions for stock-in, checkout, stock adjustment, return, and exchange operations.
- Quantities and money are integers. VND has no decimal fraction in this project.
- Reject zero or negative quantities and prevent stock from becoming negative.
- Persist immutable unit prices on order and purchase line items.
- Every stock-changing operation must leave an auditable record.
- API errors shown to users must be understandable Vietnamese messages.

## Definition of done

- For frontend Figma completion, the mapped states are implemented and visually reviewed at the specified viewport; mock/API gaps are disclosed. End-to-end completion additionally requires the real API behavior below.
- End-to-end acceptance criteria are satisfied through the real API, not mocked frontend data.
- Loading, empty, success, and error states are handled.
- Role checks and important failure paths are covered.
- Relevant typecheck and tests pass.
- Swagger, seed data, migrations, `.env.example`, and README are updated when affected.
- A reviewer can reproduce the behavior from documented steps.

## Verification commands

For frontend PRs, run the smallest relevant check during development, then before merge run:

```powershell
pnpm.cmd --filter web typecheck
pnpm.cmd --filter web build
git diff --check
```

