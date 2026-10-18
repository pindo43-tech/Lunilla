# DEPLOY — vertical Salud femenina y Belleza

## Estado (2026-10-14)
⛔ **Pendiente de credenciales**: `GH_TOKEN` (scope `repo`, para crear repos y push; el conector GitHub devolvió 403 al crear repos) y `CLOUDFLARE_API_TOKEN` (permiso *Cloudflare Pages: Edit*) + `CLOUDFLARE_ACCOUNT_ID`.
Las 4 apps son estáticas (sin build): se publica la carpeta `app/` de cada una.

| App | Carpeta | Repo GitHub | Proyecto Cloudflare Pages | URL esperada |
|---|---|---|---|---|
| Luna (tracker) | menstrual-tracker/app | luna-ciclo | luna-ciclo | https://luna-ciclo.pages.dev |
| Brisa (menopausia) | menopausia/app | brisa-menopausia | brisa-menopausia | https://brisa-menopausia.pages.dev |
| Glow Try-On (makeup) | makeup/app | glow-tryon | glow-tryon | https://glow-tryon.pages.dev |
| Mechas (pelo) | hair-look/app | mechas-hair | mechas-hair | https://mechas-hair.pages.dev |

(Si un nombre `*.pages.dev` está tomado, Cloudflare agrega sufijo; anotar la URL real aquí.)

## Comandos
```bash
export GH_TOKEN=...            # repo scope
export CLOUDFLARE_API_TOKEN=... CLOUDFLARE_ACCOUNT_ID=...
B=~/Desktop/plugin_tienda_nube
deploy() { # $1 carpeta  $2 nombre
  cd "$B/$1/app"
  gh repo create "$2" --public --source . --remote origin --push
  npx wrangler pages project create "$2" --production-branch main || true
  npx wrangler pages deploy . --project-name "$2" --branch main --commit-dirty=true
}
deploy menstrual-tracker luna-ciclo
deploy menopausia brisa-menopausia
deploy makeup glow-tryon
deploy hair-look mechas-hair
```
Excluir del deploy `test/` y `node_modules/` si existieran (no afectan; son estáticos sin enlace).

## URLs reales
_(completar tras el deploy)_

## Cambios (2026-10-14, iteración 2 belleza)
- Carpeta canónica de makeup y hair-look: `~/Desktop/plugin tienda nube/salud-femenina/<app>/app` (usar comillas por los espacios: `B="$HOME/Desktop/plugin tienda nube/salud-femenina"`). Las copias en `plugin_tienda_nube/` quedan como estaban en la iteración 1.
- Excluir `test/` del deploy (trae `face.jpg` y el symlink a node_modules): `wrangler pages deploy` lee `.assetsignore`, si no, desplegar una copia sin `test/`.
- El wrangler actual pide Node ≥22 (el box tiene 20.19): usar `npx wrangler@3` o instalar Node 22.
