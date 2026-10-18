# UPSTREAM.md — clones de terceros NO incluidos en este repo

Las carpetas `upstream/` eran clones de repos de terceros (≈1 GB en total, con archivos >100 MB). No se suben: se reconstruyen con:

```
git clone <URL> upstream/<carpeta> && git -C upstream/<carpeta> checkout <commit>
```

La licencia se detectó leyendo el archivo de licencia del clon. "Uso" = si el repo se cita en `REUSE.md` de esta app (ahí está el detalle de qué se reutilizó, en qué archivo y con qué licencia); ver también `docs-compartidos/repos-candidatos.md` para la decisión (integrado / solo ideas / descartado).

## Árbol canónico (salud-femenina): `menstrual-tracker/upstream/`

| Carpeta | URL origen | Commit exacto | Archivo licencia | Licencia | Uso |
|---|---|---|---|---|---|
| Cuddles | https://github.com/demiahmed/Cuddles | c40b0a18ab2dbd04317e080422bea4d536cfd1d3 | LICENSE | MIT | citado en REUSE.md |
| HerHaven | https://github.com/nurulain0/HerHaven.git | 9a565029ca644e4d63eece76adb29568c21b1abb | LICENSE | MIT | citado en REUSE.md |
| Mensinator | https://github.com/EmmaTellblom/Mensinator | f79504fbe61e43f4d6dc5b17e0f6040d342e18a5 | LICENSE | MIT | citado en REUSE.md |
| ROS-Cycle-Project | https://github.com/alwin-m/ROS-Cycle-Project.git | 7722a7727312c4d1295cd2c29d7aa6a196bc88d9 | LICENSE | MIT | citado en REUSE.md |
| aria-practices-datepicker | - (sin .git) | - | LICENSE.md | W3C | no citado en REUSE.md (evaluado / referencia) |
| cuidadosfemeninos | https://github.com/CampanoMariano/cuidadosfemeninos | 6d7e69ad66dfaa3f8245ec77eca1b01d56776347 | LICENSE | MIT | citado en REUSE.md |
| drip | https://gitlab.com/bloodyhealth/drip.git | ed4493fef49aa2a4b20d0aa80cd00fe99c038d81 | LICENSE | GPL-3.0 | citado en REUSE.md |
| endo-pain-tracker | https://github.com/markdcross/endo-pain-tracker | 1e9023ca0ffb40f7e1154b5f6c8bd6b22557d03f | LICENSE | MIT | citado en REUSE.md |
| ephira | https://github.com/adulbrich/ephira | 749b54f4003fd7de0ed6d0427a0a722f5955e077 | LICENSE.txt | MIT | citado en REUSE.md |
| ics.js | https://github.com/nwcell/ics.js.git | dfec67f37a3c267b3f97dd229c9b6a3521222794 | LICENSE | MIT | citado en REUSE.md |
| moj | https://github.com/FlowerYes/moj | 19c51488536d1b709a953469fd7e119b97ad5cdb | LICENSE | MIT | citado en REUSE.md |
| peri | https://github.com/IraSoro/peri.git | 6e2bde5a730bbba89b8f45cd681fccd47cd12e6e | LICENSE.txt | MIT | citado en REUSE.md |
| period-tracker-electricg | https://github.com/electricg/period-tracker.git | dc5973340748336520d8606ce572aab9827e9578 | LICENSE | MIT | citado en REUSE.md |
| periodtracker-HYPERSAHIL | https://github.com/HYPERSAHIL/periodtracker | 565b282243d1aec0eeb510cf573ec05eb53db116 | LICENSE | MIT | citado en REUSE.md |
| sparkline | https://github.com/fnando/sparkline.git | 3008997512faff401da2c6a953fa600cd87de90b | LICENSE | MIT | citado en REUSE.md |
| youperiod.app | https://github.com/getify/youperiod.app | a25278655e2bd8fe83ac0313d445a1963fb7d2a5 | LICENSE.txt | MIT | citado en REUSE.md |

## Árbol carpeta vieja (plugin_tienda_nube): `menstrual-tracker/upstream/`

| Carpeta | URL origen | Commit exacto | Archivo licencia | Licencia | Uso |
|---|---|---|---|---|---|
| Mensinator | https://github.com/EmmaTellblom/Mensinator | f79504fbe61e43f4d6dc5b17e0f6040d342e18a5 | LICENSE | MIT | citado en REUSE.md |
| drip | https://gitlab.com/bloodyhealth/drip.git | ed4493fef49aa2a4b20d0aa80cd00fe99c038d81 | LICENSE | GPL-3.0 | citado en REUSE.md |
| ephira | https://github.com/adulbrich/ephira | 749b54f4003fd7de0ed6d0427a0a722f5955e077 | LICENSE.txt | MIT | citado en REUSE.md |
| youperiod.app | https://github.com/getify/youperiod.app | a25278655e2bd8fe83ac0313d445a1963fb7d2a5 | LICENSE.txt | MIT | citado en REUSE.md |

