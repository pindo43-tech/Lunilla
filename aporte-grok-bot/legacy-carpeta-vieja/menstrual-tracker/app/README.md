# Lunilla — Tracker menstrual (PWA local-first)
Landing en `/`, app en `/app`. HTML/CSS/JS vanilla sin dependencias ni build; datos cifrados (AES-GCM 256 + PBKDF2) en localStorage con PIN; funciona offline (service worker).

- Tests: `npm test` (node --test)
- Local: `python3 -m http.server` y abrir http://localhost:8000
- Deploy: `npx wrangler pages deploy . --project-name <nombre>` (Node ≥22)

Orientativa, no reemplaza consejo médico. Ver NOTICE.md.
