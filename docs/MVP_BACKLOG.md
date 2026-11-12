# KinKin POS 10-day MVP backlog

> Historical six-member allocation. The active one-developer schedule is `docs/SOLO_EXECUTION_PLAN.md`.

## Team ownership

| Pair | Members | Ownership |
|---|---|---|
| A | Member 1 and Member 2 | Authentication, authorization, users, integration leadership |
| B | Member 3 and Member 4 | Categories, products, purchasing, stock |
| C | Member 5 and Member 6 | Checkout, payments, invoices, reports |

Within each pair, one member leads API/database work and one leads web work. Both members own integration and tests.

## Day 1 shared gate

- [ ] Everyone can run web, API, and PostgreSQL.
- [ ] Agree on entity and endpoint names in `docs/CONTRACTS.md`.
- [ ] Create one branch per vertical slice.
- [ ] Add CI for typecheck, test, and build.
- [ ] Split the current single-page web demo into route-ready components before parallel UI work.
- [ ] Do not start feature expansion until the schema and contracts are reviewed.

## Pair A backlog

### P0-A1 Authentication

Branch: `feature/auth-rbac`

Acceptance criteria:

- [ ] Valid active user can sign in.
- [ ] Invalid credentials return 401 with a Vietnamese message.
- [ ] JWT includes user id and role.
- [ ] `/auth/me` returns the current user.
- [ ] Protected routes reject missing or invalid tokens.
- [ ] Web restores and clears the session correctly.

### P0-A2 Role authorization

Branch: `feature/auth-rbac`

- [ ] API provides reusable OWNER authorization.
- [ ] Employee cannot call owner-only endpoints.
- [ ] Navigation reflects the role without being the only security layer.

### P0-A3 User management

Branch: `feature/users`

- [ ] Owner lists, creates, edits, and deactivates employees.
- [ ] Username is unique.
- [ ] Password is hashed.
- [ ] Inactive employee cannot sign in.

## Pair B backlog

### P0-B1 Categories and products

Branch: `feature/catalog`

- [ ] Owner maintains categories and products.
- [ ] Authenticated users search and view active products.
- [ ] Product includes all fields in `docs/PROJECT_SCOPE.md`.
- [ ] Duplicate SKU or active name is rejected.

### P0-B2 Purchase receipt

Branch: `feature/purchasing-stock`

- [ ] Owner creates a receipt with at least one valid line.
- [ ] Completing the receipt increases stock atomically.
- [ ] Receipt total is calculated by the API.
- [ ] A stock movement is written for every line.
- [ ] Receipt list and details are available.

## Pair C backlog

### P0-C1 Checkout

Branch: `feature/checkout`

- [ ] User can search and add products to a cart.
- [ ] Quantity cannot exceed available stock in the UI.
- [ ] API revalidates stock during checkout.
- [ ] Order, items, payment, stock changes, and movements commit atomically.
- [ ] Failed checkout does not partially change stock.

### P0-C2 Invoices

Branch: `feature/invoices`

- [ ] Search by code and date range.
- [ ] View immutable order item names, prices, quantities, and totals.
- [ ] Browser print layout is readable.

### P0-C3 Reports

Branch: `feature/reports`

- [ ] Owner selects a date range.
- [ ] API returns revenue, completed order count, and units sold.
- [ ] Employee receives 403.

## Integration gates

### End of day 2

- [ ] Authentication works against the real API.
- [ ] Database migration and seed run from an empty database.
- [ ] All three pairs have stable DTO/type contracts.

### End of day 5

The following must work on `develop`:

`sign in -> create product -> receive 20 units -> sell 2 units -> stock becomes 18 -> print invoice`

No P1 work starts until this passes.

### End of day 8

- [ ] Cross-pair testing is complete.
- [ ] Critical data, authorization, and stock bugs are fixed.
- [ ] Core E2E scenario is automated.

### End of day 10

- [ ] Fresh installation works from README.
- [ ] Typecheck, tests, and production build pass.
- [ ] Demo seed and 10-minute presentation flow are ready.
- [ ] Release candidate is tagged only after group review.

## Antigravity kickoff prompt

Each member starts a separate conversation on their assigned branch and uses:

```text
Read AGENTS.md, docs/PROJECT_SCOPE.md, docs/CONTRACTS.md, and docs/MVP_BACKLOG.md.
I am working as <member role> on <backlog item and branch>.
Inspect the existing implementation before editing.
Create a short implementation plan mapped to the acceptance criteria.
Implement only this vertical slice, including database/API/web/tests where applicable.
Preserve unrelated work and do not change shared contracts without stopping to report it.
Run the relevant checks and summarize changed files, verified behavior, and remaining risks.
```

