# KinKin POS solo execution plan

## Goal

One developer uses Antigravity as an implementation partner to deliver a report- and Figma-aligned MVP in 10 working days. The developer remains the product owner, integration owner, and final reviewer.

The required end-to-end flow is:

`sign in -> maintain catalog -> configure thresholds -> receive stock -> inspect inventory -> checkout -> reduce stock -> print and search invoice -> view reports -> sign out`

Every daily task must use the report use-case ID and the Figma node IDs in `docs/REPORT_FIGMA_TRACEABILITY.md`. A module name alone is not sufficient acceptance evidence.

## Operating model

Use at most three Antigravity conversations:

1. **Builder** implements the current vertical slice.
2. **Reviewer** reads the diff, checks it against the report and contracts, and identifies defects. It does not edit unless explicitly asked.
3. **Tester** runs checks and reproduces user workflows after the Builder has finished.

Do not run multiple Builder conversations against the same working tree. Use a separate worktree only when two tasks have no overlapping database, API contract, or shared UI files.

## Priority

### P0 required

- Authentication and OWNER/EMPLOYEE authorization.
- Categories and products.
- Purchase receipts that increase stock.
- Checkout that prevents negative stock.
- Cash and simulated bank-transfer payment.
- Invoice list, details, and browser printing.
- Revenue, order count, and units-sold summary.

### P1 only if P0 is stable

- User management.
- Stock adjustment and low-stock list.
- Responsive polish.

### Deferred

- Real Zalo and banking integrations.
- Full batch-level FIFO.
- Exchange and return workflows.
- Complete offline synchronization.

## Daily workflow

### Start of day

1. Pull the stable branch and check the working tree.
2. Select exactly one primary backlog item.
3. Ask the Builder to inspect before editing and propose a file-level plan.
4. Confirm the plan does not change shared contracts unexpectedly.

### During implementation

1. Work in a small branch.
2. Complete database, API, UI, and tests for the slice before expanding scope.
3. Run the smallest relevant checks after each meaningful change.
4. Commit a working checkpoint before asking for a major follow-up change.

### End of day

1. Ask the Reviewer to compare the diff with `AGENTS.md`, `docs/PROJECT_SCOPE.md`, and `docs/CONTRACTS.md`.
2. Fix critical findings.
3. Run typecheck and relevant tests.
4. Merge only working behavior.
5. Record the next concrete task and known risk.

## Ten-day schedule

### Day 1 — Foundation and shared application shell

- Confirm the current demo runs.
- Create the expanded Prisma schema from `docs/CONTRACTS.md`.
- Generate one clean migration and seed data.
- Create the shared sidebar, header, breadcrumb, table, form, modal, toast, empty, and error patterns based on the recurring 1440×900 Figma layouts.
- Keep existing login and checkout behavior working.

Exit condition: a fresh database can be migrated and seeded.

### Day 2 — UC_1 authentication and UC_10 logout

- Implement the required Figma states listed for UC_1 and UC_10.
- Add active/inactive users and OWNER/EMPLOYEE roles.
- Add `/auth/me` and reusable authorization guards.
- Protect owner-only APIs.
- Update web session handling.

Exit condition: employee receives 403 from an owner-only endpoint.

### Day 3 — UC_7.1 to UC_7.4 categories and product creation

- Implement category add/edit/delete states and product creation states from the mapped Figma nodes.
- Implement category and product fields from the report.
- Add search, validation, status changes, and owner-only mutations.
- Replace demo product creation with the real catalog form.

Exit condition: owner creates a product and employee can search it.

### Day 4 — UC_7.5 to UC_7.9 product maintenance and lookup

- Implement selling/cost price updates, product editing, guarded deletion, alert thresholds, and product lookup.
- Match OWNER and EMPLOYEE lookup views.
- Implement report validations such as duplicate names, nonpositive prices, invalid integer thresholds, remaining stock, and transaction history restrictions.

Exit condition: every UC_7 main flow is usable and the mapped destructive/validation cases behave correctly.

### Day 5 — UC_8.1 and UC_8.2 purchasing

- Create a receipt with multiple lines following the mapped Figma sequence.
- Calculate totals on the server.
- Increase stock and create movements in one transaction.
- Add receipt history, filters, search, and details.

Exit condition: receiving 20 units changes stock by exactly 20, leaves an audit record, and appears in receipt history.

### Day 6 — UC_4.4 inventory lookup and UC_2.1 checkout

- Implement inventory lookup and mapped stock status views.
- Refactor the current retail checkout to the mapped Figma screens.
- Revalidate stock in the transaction.
- Create immutable order lines, payment, and stock movements.
- Roll back every change on failure.

Exit condition: selling 2 of 20 units leaves 18; selling 19 more is rejected without partial writes.

### Day 7 — UC_2.2 invoice lookup and print

- Add invoice search by code and date range.
- Add invoice details matching Figma.
- Polish browser print output.

Exit condition: a completed order can be found, opened, and printed.

### Day 8 — UC_5.1 and UC_5.2 reports

- Add owner-only revenue and sold-quantity endpoints.
- Support day, month, and date-range views required by the report.
- Implement mapped empty and loading-error states.
- Verify totals against seeded transactions.

Exit condition: desktop report totals match direct database records; required mobile report entry views are usable.

### Day 9 — End-to-end testing

- Automate the golden flow in `docs/REPORT_FIGMA_TRACEABILITY.md` with Playwright.
- Add API tests for insufficient stock and unauthorized access.
- Test empty, loading, and error states.
- Capture implementation screenshots for the required Figma frames and compare hierarchy/state at the specified viewport.
- Reinstall and run from an empty database.

Exit condition: the golden flow passes twice from a clean state.

### Day 10 — Release preparation

- Freeze features.
- Fix only release-blocking defects.
- Update README, Swagger, environment examples, and demo seed.
- Run typecheck, tests, and production build.
- Record a backup demo video if required.

Exit condition: release candidate can be installed and demonstrated from the README.

## Builder prompt

```text
Read AGENTS.md, docs/PROJECT_SCOPE.md, docs/CONTRACTS.md, docs/REPORT_FIGMA_TRACEABILITY.md, and docs/SOLO_EXECUTION_PLAN.md.
Today I am implementing Day <N>: <use case IDs and task>.
Inspect the current code and working tree before editing.
Open and inspect every Figma node listed for today's use cases before planning UI changes.
Propose a short file-level plan mapped to the report rules, Figma states, and exit condition.
Then implement only this vertical slice, including database/API/web/tests as applicable.
Preserve unrelated changes and stop before changing a shared contract that is not documented.
Run relevant checks and report changed files, verified report rules, verified Figma states, and remaining risks.
```

## Reviewer prompt

```text
Review the current branch without editing files.
Compare the diff against AGENTS.md, docs/PROJECT_SCOPE.md, docs/CONTRACTS.md, and today's exit condition in docs/SOLO_EXECUTION_PLAN.md.
Prioritize data loss, authorization bypass, invalid stock changes, broken transactions, contract drift, and missing tests.
Report only actionable findings with file and line references, then state whether the exit condition is satisfied.
```

## Tester prompt

```text
Do not implement new features.
Run the smallest relevant verification for today's slice, then exercise its user workflow.
Report the exact failing command or reproduction steps, expected result, actual result, and severity.
Do not modify generated files or unrelated modules.
```

## Scope-control rule

When behind schedule, remove P1 items. Never remove transaction safety, authorization, validation, or the golden end-to-end flow.

