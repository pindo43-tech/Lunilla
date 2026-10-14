# Cómo estima Marea

Esto es una cuenta educativa. No diagnostica, no dice si un ciclo es sano y no sirve como anticoncepción ni para buscar un embarazo.

Las fechas son días de calendario `AAAA-MM-DD`, sin hora. La diferencia entre dos fechas es la cantidad de días de calendario.

## Qué entra en la cuenta

Un día con flujo leve, medio o abundante es un día de sangrado. Los días seguidos de sangrado forman un período. El inicio es el primer día de cada racha.

Solo se usan inicios que ya llegaron (hoy o antes). Un sangrado marcado en el futuro no entra hasta esa fecha.

La duración de un ciclo es la diferencia en días entre dos inicios consecutivos. Si esa diferencia es menor a 15 o mayor a 90, no entra al promedio: suele ser un registro cortado o dos marcas muy juntas, no un ciclo completo. Siguen viéndose en el calendario.

## Promedio ponderado

Se toman los últimos `m` intervalos válidos. `m` es el largo de historia elegido en ajustes (3 a 12, de fábrica 6). Si hay menos, se usan los que haya. El más viejo de esa ventana es `L₁` y el más nuevo es `Lₘ`.

El peso del intervalo `i` es `i`. El más nuevo pesa más.

\[
\hat L = \frac{\sum_{i=1}^{m} i\, L_i}{\sum_{i=1}^{m} i}
\]

El próximo inicio estimado es el último inicio más `round(L̂)` días. `round` es el redondeo habitual: 0,5 sube.

Ejemplo: intervalos 21 y 35. Pesos 1 y 2.

\[
\hat L = (21 + 70) / 3 = 30{,}33 \rightarrow 30
\]

Si se invirtieran los pesos, daría cerca de 26. La app no hace eso: pesa más lo reciente.

## Media y desvío

Sobre la misma ventana, sin pesos:

\[
\bar L = \frac{1}{m}\sum_{i=1}^{m} L_i
\]

\[
s = \sqrt{\frac{1}{m-1}\sum_{i=1}^{m}(L_i-\bar L)^2}
\]

`s` solo se calcula si `m ≥ 2`. Es el desvío estándar muestral.

## Ciclos poco parecidos

Si `m ≥ 3` y (`s ≥ 7` o el máximo menos el mínimo es al menos 10), Marea marca el ciclo como variable. Es una etiqueta educativa. No es un diagnóstico.

La fecha igual se muestra. La confianza baja.

## Confianza, en palabras

- Sin intervalos (`m = 0`): no hay predicción. No se inventa un ciclo de 28.
- Baja: un solo intervalo, o la marca de variación, o `s > 6`.
- Alta: `m ≥ 4`, `s ≤ 4` y no está la marca de variación.
- Media: el resto de los casos con al menos dos intervalos.

## Ovulación y fase lútea

La fase lútea está fija en 14 días. No se personaliza.

Si el próximo inicio estimado es `P` y la duración redondeada es `L`:

- `P = último inicio + L días`
- ovulación estimada `O = P − 14 días`

En un ciclo de 28 días que empieza el 1 de enero de 2026, `P` es el 29 de enero y `O` es el 15 de enero. Ese día es el día 15 del ciclo (`L − 14 + 1`). Algunas explicaciones escolares dicen «día 14». Esta app no usa esa cuenta: usa 14 días de calendario antes del próximo inicio.

La fase de hoy:

- Menstrual: hoy está dentro del sangrado marcado, o ayer hubo sangrado y hoy todavía no tiene marca.
- Ovulatoria: el día del ciclo cae a 1 día o menos de `O` (el día anterior, `O` y el día siguiente), y no es menstrual.
- Folicular: después del sangrado y antes de esa ventana.
- Lútea: después de esa ventana.

Sin una duración estimada, solo se nombra la fase menstrual. El resto queda sin estimar.

## Ventana fértil

De `O − 5 días` a `O + 1 día`. Es un rango de enseñanza (unos días antes y el día siguiente a la ovulación estimada). No es un método de fertilidad.

Si esa ventana de este ciclo ya pasó, se muestra la del ciclo siguiente, calculada igual a partir de `P`, y se dice que depende de que el próximo período caiga en la fecha estimada.

En el ejemplo del 1 de enero de 2026 con duración 28, la ventana de ese ciclo va del 10 al 16 de enero.

## Sombreado del calendario

Los días con flujo usan el color del flujo. El período estimado futuro se sombrea con la duración del último sangrado si duró al menos 2 días; si no, con 5 días. Es una pista visual, no una duración médica. No se pintan días pasados como si hubieran sangrado.
