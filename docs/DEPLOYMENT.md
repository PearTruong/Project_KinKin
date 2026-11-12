# Deployment

## Render API

The current demo database was created from the legacy schema. Reset it exactly once with this Render build command:

```text
pnpm install --frozen-lockfile && pnpm --filter api deploy:reset-demo
```

This command deletes the demo database contents, creates the current schema, records the initial migration as applied, seeds the owner and employee accounts, and builds the API.

After the first successful reset deployment, immediately replace the Render build command with the permanent, non-destructive command:

```text
pnpm install --frozen-lockfile && pnpm --filter api deploy
```

Use this start command:

```text
pnpm --filter api start
```

Required environment variables:

```text
DATA_MODE=postgres
DATABASE_URL=<Neon pooled PostgreSQL URL>
FRONTEND_URLS=<Vercel production URL>,<stable Vercel Preview branch URL>
JWT_SECRET=<long random secret>
```

`FRONTEND_URLS` is a comma-separated, exact-origin allowlist for CORS. Add the production origin and the stable branch Preview origin used for testing. The API still supports the legacy `FRONTEND_URL` variable when `FRONTEND_URLS` is unset.

Set the Render health check path to `/api/health`.

## Vercel web

Set `NEXT_PUBLIC_API_URL` for both Production and the Preview branch being tested, then redeploy that environment after changing the variable:

```text
NEXT_PUBLIC_API_URL=https://kinkin-pos-api.onrender.com/api
```

Render Free web services sleep after an idle period. The web app sends a background health request as soon as the login page opens to start waking the API early, but consistently fast first requests require an always-on Render instance.
