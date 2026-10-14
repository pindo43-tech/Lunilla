# Marea

Registro menstrual local para jóvenes. Los datos del ciclo se quedan en el navegador, cifrados con un PIN. No hay cuenta, ni servidor, ni analítica.

No es un dispositivo médico. No diagnostica y no sirve como anticoncepción.

Live: https://menstrual-tracker-jovenes.pages.dev

Repo: https://github.com/pindo43-tech/menstrual-tracker-jovenes

## Privacidad

- No se crea una cuenta y no hay un backend.
- El PIN no se guarda. Con una sal aleatoria de esta instalación se deriva una clave con PBKDF2-SHA256 (100.000 vueltas) y los datos se cifran con AES-GCM (Web Crypto).
- IndexedDB guarda el texto cifrado, no el ciclo en claro. La clave vive solo en memoria.
- Se bloquea a los 5 minutos sin uso (se puede cambiar) y al salir de la pestaña.
- La exportación es un JSON cifrado. Quien tenga el archivo y el PIN puede leerlo.
- Si se borran los datos del navegador, no hay copia en ningún servidor.
- No hay fuentes de Google, ni scripts de terceros, ni llamadas que manden el ciclo a la red.

## Cómo abrirlo

En una Mac: Safari o Chrome, en https://menstrual-tracker-jovenes.pages.dev

En un iPhone: abrilo en Safari, tocá Compartir y después Agregar a inicio. Se instala como PWA. El simulador de iOS no hace falta.

La app está en `/app`. La portada está en `/`.

## Local

```bash
npm install
npm run dev
```

Queda en http://127.0.0.1:43123 (host `0.0.0.0`, puerto `43123`).

```bash
npm test
npm run build
```

El build deja `dist/`. `public/_redirects` manda cualquier ruta a `index.html` para que `/app` sobreviva un refresh.

La cuenta de la predicción está en [docs/prediction-math.md](docs/prediction-math.md).
