# KinKin POS MVP product scope

## Product goal

KinKin POS supports one shoe-accessories store. The first release must demonstrate a closed operational loop:

`sign in -> maintain products -> receive stock -> sell products -> reduce stock -> issue and search invoices -> view basic revenue`

## Users and permissions

### Store owner

- Full access to users, categories, products, purchasing, stock, sales, invoices, and reports.
- May create and deactivate employee accounts.
- May perform stock adjustments.

### Employee

- Sign in and sign out.
- Search products and view current stock.
- Create sales orders, take payment, print invoices, and search invoices.
- Cannot manage users or perform stock adjustments.

## P0 workflows

### Authentication and authorization

- Sign in with username and password.
- Return a JWT containing user id and role.
- Reject inactive users.
- Protect every non-authentication API route.

### Categories and products

- Owner can create, update, deactivate, and search categories and products.
- Product contains SKU, name, category, selling price, cost price, unit, stock-alert threshold, and status.
- SKU and product name must be unique among active products.

### Stock receipt

- Owner creates a receipt with one or more product lines.
- Each line records quantity and unit cost.
- Completing a receipt increases stock atomically.
- Receipt history and details can be viewed later.

### Checkout

- Employee or owner searches products and adds them to a cart.
- The system validates availability before committing the order.
- Completing checkout creates an order, stores line prices, creates a payment, and reduces stock atomically.
- The system must reject a sale that would make stock negative.
- MVP payment methods are cash and simulated bank transfer.

### Invoices

- Each completed order receives a unique invoice code.
- Users can search by invoice code or date range and view invoice details.
- Invoice details can be printed from the browser.

### Basic reports

- Owner can view revenue, order count, and units sold for a date range.
- Report totals must be computed from completed orders and payments, not frontend state.

## P1 only after P0 is stable

- Stock adjustment with before/after quantity and reason.
- Low-stock list.
- Best-selling products.
- Password reset by owner.
- Responsive refinements.

## Deferred from the full report

- Real Zalo integration and remote approval.
- Real bank transaction reconciliation.
- Full FIFO allocation across multiple batches.
- Exchange and return workflows.
- Advanced aged-stock warnings and forecasting.
- Complete offline synchronization.

These items remain part of the long-term report scope but are not acceptance criteria for the 10-day MVP.

## Resolved report inconsistencies for implementation

- The report both excludes and later relies on batch management. MVP tracks aggregate stock and receipt lines; full FIFO batches are deferred.
- The report contains conflicting three-year storage estimates. Capacity estimates do not affect MVP behavior.
- Repeated table numbers and the misplaced logout interface figure are documentation defects, not software requirements.

