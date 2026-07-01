# Proyecto editable, Quiz Microsoft Azure Fundamentals

## Archivos
- `index.html`, estructura principal
- `styles.css`, estilos
- `app.js`, lógica del quiz
- `questions.js`, banco de preguntas editable

## Cómo editar preguntas
Abre `questions.js` y verás un arreglo llamado `QUESTIONS`.

Cada pregunta tiene esta forma:

```js
{
  id: 1,
  type: "single", // "single" o "multiple"
  question_es: "Pregunta en español",
  question_en: "Question in English",
  options_es: [
    "Opción 1",
    "Opción 2",
    "Opción 3",
    "Opción 4"
  ],
  correct: [1], // índices base 0
  explanation_es: "Explicación de por qué esa respuesta es correcta.",
  category: "Apache Spark"
}
```

## Importante
- `correct` usa índices empezando en 0.
- Si la pregunta tiene una sola respuesta, usa por ejemplo `[2]`.
- Si tiene varias, usa por ejemplo `[0, 3]`.
- `type` debe ser:
  - `"single"` para una sola respuesta
  - `"multiple"` para varias respuestas

## Cómo abrirlo
Solo abre `index.html` en tu navegador.

## Cómo cambiar textos de portada
En `app.js`, arriba del archivo, edita el objeto `CONFIG`.

## Cómo cambiar colores
Edita las variables dentro de `:root` en `styles.css`.

## Sugerencia
Si vas a agregar muchas preguntas, mantén los `id` consecutivos.
