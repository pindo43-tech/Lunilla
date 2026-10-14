# Deploy

Sitio: https://menstrual-tracker-jovenes.pages.dev

Proyecto de Cloudflare Pages: `menstrual-tracker-jovenes`.

## Pasos

1. `npm run build` genera `dist/` con Vite.
2. El deploy se hizo con Wrangler, con el token y el account id solo en el entorno, no en el repo:

```bash
npx wrangler pages deploy dist --project-name menstrual-tracker-jovenes --commit-dirty=true
```

Variables: `CLOUDFLARE_API_TOKEN` y `CLOUDFLARE_ACCOUNT_ID`. No se commitean.

Si el proyecto no existía, Wrangler lo crea con ese nombre. No hay Worker, D1, ni un servidor que reciba datos del ciclo.

## Refresh de `/app`

`public/_redirects`:

```
/*    /index.html   200
```

Vite lo copia a `dist`. Pages lo usa como fallback de SPA.

## Headers

`public/_headers` manda una CSP estricta (`script-src 'self'`, sin terceros), `nosniff`, `no-referrer` y `X-Frame-Options: DENY`. El build también inyecta la misma CSP en el HTML.
