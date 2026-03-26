# Handsfree Cooking Web Component

A drop-in Web Component that adds voice-controlled recipe navigation to **any website** using the browser's Web Speech API. No framework required.

---

## Installation

### Option A: Script tag (simplest)

Download `dist/handsfree-cooking.iife.js` (or host it on a CDN) and add it to your page:

```html
<script src="handsfree-cooking.iife.js"></script>
```

### Option B: ES module / npm

```bash
npm install github:dmtrglvk/HandsfreeCookingWebComponent
```

```javascript
import 'handsfree-cooking'
```

---

## Bundler Configuration

When using `<handsfree-cooking>` inside templates compiled by a framework (Vue, React, etc.), the bundler or framework compiler may need to know that it is a **native Custom Element**, not a framework component.

### Vite + Vue

In `vite.config.js`, configure the Vue plugin's `compilerOptions`:

```javascript
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === 'handsfree-cooking'
        }
      }
    })
  ]
})
```

### Webpack + Vue (vue-loader)

In `vue.config.js` or your webpack config where `vue-loader` is configured:

```javascript
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => ({
        ...options,
        compilerOptions: {
          isCustomElement: (tag) => tag === 'handsfree-cooking'
        }
      }))
  }
}
```

### Storybook (Vue 3 + Vite)

In `.storybook/main.js`, replace the default Vue plugin in `viteFinal`:

```javascript
import vue from '@vitejs/plugin-vue'

export default {
  framework: '@storybook/vue3-vite',
  viteFinal: async (config) => {
    config.plugins = config.plugins
      .flat()
      .filter((p) => p?.name !== 'vite:vue')

    config.plugins.push(
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => tag === 'handsfree-cooking'
          }
        }
      })
    )

    return config
  }
}
```

Also import the component in `.storybook/preview.js`:

```javascript
import 'handsfree-cooking'
```

### React / Next.js / Angular

No bundler configuration needed. Custom elements work natively in JSX and Angular templates.

### Static HTML / WordPress / Shopify

No configuration needed. Just include the script tag and the HTML element.

---

## Usage

### 1. Add the component to your recipe page

Place the `<handsfree-cooking>` element on your page. It renders a "Let's cook" button and a floating popup widget. Point it at your recipe markup using CSS selectors:

```html
<handsfree-cooking
  lang="en"
  steps-selector=".recipe-step"
  ingredients-selector="#ingredients"
  instructions-selector="#instructions"
></handsfree-cooking>
```

### 2. Make sure your HTML has matching elements

The component looks for elements on **your page** (outside the component) using the selectors you provide. For example:

```html
<h2 id="ingredients">Ingredients</h2>
<ul>
  <li>200g flour</li>
  <li>2 eggs</li>
</ul>

<h2 id="instructions">Instructions</h2>

<div class="recipe-step">
  <strong>Step 1</strong>
  Mix the flour and eggs.
</div>

<div class="recipe-step">
  <strong>Step 2</strong>
  Heat the pan.
</div>

<div class="recipe-step">
  <strong>Step 3</strong>
  Cook and serve.
</div>
```

The voice commands "next step" / "previous step" will scroll between elements matching `steps-selector`. "Go to ingredients" scrolls to the element matching `ingredients-selector`, etc.

### 3. Full minimal example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Recipe</title>
  <script src="handsfree-cooking.iife.js"></script>
</head>
<body>

  <h1>Pancakes</h1>

  <handsfree-cooking
    lang="en"
    steps-selector=".step"
    ingredients-selector="#ingredients"
    instructions-selector="#method"
  ></handsfree-cooking>

  <h2 id="ingredients">Ingredients</h2>
  <ul>
    <li>200g flour</li>
    <li>2 eggs</li>
    <li>300ml milk</li>
  </ul>

  <h2 id="method">Method</h2>
  <div class="step">Step 1: Mix ingredients</div>
  <div class="step">Step 2: Heat pan</div>
  <div class="step">Step 3: Cook and serve</div>

</body>
</html>
```

---

## Attributes

| Attribute | Default | Description |
|---|---|---|
| `lang` | Page `lang` attribute or `en` | BCP-47 language code for speech recognition (e.g. `en`, `da`, `ar`) |
| `steps-selector` | `.recipe-step` | CSS selector matching **each** recipe step element |
| `ingredients-selector` | `#ingredients` | CSS selector for the ingredients section heading/container |
| `instructions-selector` | `#instructions` | CSS selector for the instructions section heading/container |
| `translations` | *(built-in English)* | JSON string to override any UI text (see below) |
| `commands` | *(built-in English)* | JSON string to override voice command aliases (see below) |

---

## Voice Commands

### Built-in defaults (English)

These are the commands users can speak out of the box:

| Action | Accepted phrases |
|---|---|
| Go to next step | "next step", "go forward", "next" |
| Go to previous step | "previous step", "go back", "previous" |
| Scroll up | "scroll up" |
| Scroll down | "scroll down" |
| Go to ingredients | "go to ingredients", "ingredients" |
| Go to instructions | "go to instructions", "go to method", "instructions" |
| Show help | "help", "commands" |
| Start cooking | "let's cook", "lets cook", "start cooking" |
| Finish | "i'm done", "im done", "done", "finish" |
| Exit help | "exit", "close" |

### How command matching works

When the user speaks, the component:

1. Normalizes the transcript (lowercase, strip punctuation, normalize Unicode/Arabic diacritics)
2. Compares it against every registered alias using a scoring system:
   - **Exact match** = score 3 (highest)
   - **Starts with** or **ends with** an alias = score 2
   - **Contains** the alias as a whole word = score 1
3. Picks the best-scoring match (ties broken by longest alias)

This means users don't need to say the exact phrase. Saying "go to the next step please" will still match "next step".

### Customizing commands (other languages / extra aliases)

Pass a `commands` attribute with a JSON string. Each key maps to an array of accepted phrases:

```html
<handsfree-cooking
  lang="da"
  commands='{
    "nextStep": ["næste trin", "gå videre"],
    "previousStep": ["forrige trin", "gå tilbage"],
    "scrollUp": ["rul op"],
    "scrollDown": ["rul ned"],
    "goToIngredients": ["gå til ingredienser"],
    "goToInstructions": ["gå til fremgangsmåde"],
    "help": ["hjælp"],
    "letsCook": ["lad os lave mad"],
    "imDone": ["jeg er færdig"],
    "exit": ["luk"]
  }'
></handsfree-cooking>
```

Available command keys:

| Key | What it does |
|---|---|
| `nextStep` | Scrolls to the next step element |
| `previousStep` | Scrolls to the previous step element |
| `scrollUp` | Scrolls the page up by 300px |
| `scrollDown` | Scrolls the page down by 300px |
| `goToIngredients` | Scrolls to the ingredients section |
| `goToInstructions` | Scrolls to the instructions section |
| `help` | Opens the help overlay listing all commands |
| `letsCook` | Starts the active listening phase (from introduction) |
| `imDone` | Triggers the finish/feedback screen |
| `exit` | Closes the help overlay |

---

## Translations

Override any UI text by passing a `translations` attribute as a JSON string. You only need to include the keys you want to change -- everything else falls back to the English defaults.

```html
<handsfree-cooking
  lang="da"
  translations='{
    "intro": "Håndfri madlavning",
    "letsCook": "Lad os lave mad",
    "stopCooking": "Stop madlavning",
    "tooltip": {
      "title": "Håndfri madlavning",
      "text": "Brug stemmekommandoer til at navigere opskriften."
    },
    "listening": {
      "title": "Klar til instruktioner"
    },
    "help": {
      "title": "Liste over kommandoer",
      "content": "<p>Prøv en af disse kommandoer:</p><ul><li>Næste trin</li><li>Forrige trin</li><li>Hjælp</li></ul>",
      "buttonText": "Stop madlavning"
    },
    "finish": {
      "title": "Du er færdig!",
      "content": "<p>Velbekomme!</p>",
      "buttonText": "Luk",
      "voteUp": "Meget nyttigt",
      "voteDown": "Kan forbedres",
      "successMessage": "Tak for din feedback!"
    }
  }'
></handsfree-cooking>
```

### Full translations structure

All available keys with their English defaults:

```json
{
  "intro": "Handsfree cooking",
  "letsCook": "Let's cook",
  "stopCooking": "Stop cooking",
  "tooltip": {
    "title": "Handsfree cooking",
    "text": "Handsfree cooking is our voice activated assistant..."
  },
  "introduction": {
    "title": "Introduction",
    "content": "<p>In order for this feature to work we need access to your microphone.</p>",
    "buttonText": "Allow microphone access",
    "steps": [
      "<p>Navigate between steps using commands...</p>",
      "<p>We'd recommend preparing all your ingredients beforehand...</p>"
    ]
  },
  "notAllowed": {
    "title": "Something went wrong",
    "content": "<p>In order to use handsfree cooking, we need access to your microphone.</p>",
    "buttonText": "Click here to allow access"
  },
  "listening": {
    "title": "Ready for instructions"
  },
  "help": {
    "title": "List of commands",
    "content": "<p>Are you stuck?...</p><ul><li>Next step</li>...</ul>",
    "buttonText": "Stop cooking"
  },
  "finish": {
    "title": "You're done!",
    "content": "<p>Enjoy your meal!</p><p>How was your experience?</p>",
    "buttonText": "Close handsfree cooking",
    "voteUp": "Very helpful",
    "voteDown": "Needs tweaking",
    "successMessage": "Your feedback is appreciated!"
  },
  "notSupported": {
    "title": "Browser not supported",
    "content": "<span>This feature is not supported in Firefox...</span>",
    "buttonText": "Close handsfree cooking"
  },
  "notRecognized": {
    "title": "Command not recognized"
  },
  "notRecognizedError": {
    "title": "Say \"Help\" to see commands"
  },
  "almostDone": {
    "title": "Almost there",
    "content": "<p>You've made it to the last bit!...</p>"
  }
}
```

---

## Events

The component dispatches `CustomEvent`s that bubble through the DOM. Listen on `document` or on the element itself:

| Event | `detail` | When |
|---|---|---|
| `handsfree-activated` | — | User clicks "Let's cook" |
| `handsfree-command` | `{ command }` | A voice command is recognized and executed |
| `handsfree-error` | `{ error }` | Mic blocked, browser not supported, etc. |
| `handsfree-state-change` | `{ stage, isListening }` | Stage or listening state changes |
| `handsfree-finished` | `{ reason }` | User finishes or stops cooking |
| `handsfree-feedback` | `{ vote, text }` | User taps thumbs up/down or closes. `vote` is `"up"`, `"down"`, or `"close"`. `text` is the translated label. |

### Example: analytics integration

```javascript
document.addEventListener('handsfree-activated', () => {
  gtag('event', 'handsfree_start')
})

document.addEventListener('handsfree-command', (e) => {
  gtag('event', 'handsfree_command', { command: e.detail.command })
})

document.addEventListener('handsfree-finished', (e) => {
  gtag('event', 'handsfree_end', { reason: e.detail.reason })
})

document.addEventListener('handsfree-feedback', (e) => {
  gtag('event', 'handsfree_feedback', {
    vote: e.detail.vote,
    text: e.detail.text
  })
})
```

---

## Styling

The component uses Shadow DOM, so its styles are fully encapsulated. Override the look using CSS custom properties on the `<handsfree-cooking>` element or any ancestor:

```css
handsfree-cooking {
  --hf-color-bg: #ffffff;
  --hf-color-text: #000000;
  --hf-color-primary: #000000;
  --hf-color-primary-hover: #000000;
  --hf-color-error: #cc0033;
  --hf-color-border: #d9d9d9;

  --hf-spacing-xxs: 4px;
  --hf-spacing-xs: 8px;
  --hf-spacing-s: 16px;
  --hf-spacing-sm: 24px;
  --hf-spacing-m: 32px;

  --hf-font-family: inherit;
  --hf-font-size-base: 16px;
  --hf-font-size-small: 14px;
  --hf-font-size-large: 18px;

  --hf-popup-width: 410px;
  --hf-popup-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.20);
  --hf-z-index: 10000;
}
```

### Variable reference

| Variable | Default | Description |
|---|---|---|
| `--hf-color-bg` | `#ffffff` | Background color for buttons, popup, and tooltip |
| `--hf-color-text` | `#000000` | Primary text color |
| `--hf-color-primary` | `#000000` | Button borders, filled button backgrounds, icon colors |
| `--hf-color-primary-hover` | `#000000` | Hover state for primary-colored elements |
| `--hf-color-error` | `#cc0033` | Error state text and "not recognized" border color |
| `--hf-color-border` | `#d9d9d9` | Default border color |
| `--hf-spacing-xxs` | `4px` | Smallest spacing (icon gaps) |
| `--hf-spacing-xs` | `8px` | Small spacing (label margins, vote gaps) |
| `--hf-spacing-s` | `16px` | Medium spacing (button padding, popup padding, content margins) |
| `--hf-spacing-sm` | `24px` | Medium-large spacing (button inline padding) |
| `--hf-spacing-m` | `32px` | Large spacing (root bottom margin) |
| `--hf-font-family` | `inherit` | Font family (inherits from host page by default) |
| `--hf-font-size-base` | `16px` | Base text and button font size |
| `--hf-font-size-small` | `14px` | Tooltip text font size |
| `--hf-font-size-large` | `18px` | Popup headline font size |
| `--hf-popup-width` | `410px` | Max width of the floating popup |
| `--hf-popup-shadow` | `0 12px 24px 0 rgba(0,0,0,0.20)` | Box shadow for popup and tooltip |
| `--hf-z-index` | `10000` | Z-index for popup (tooltip uses z-index + 1) |

### Example: brand theming

```css
handsfree-cooking {
  --hf-color-primary: #e4002b;
  --hf-color-primary-hover: #c00025;
  --hf-color-error: #d32f2f;
  --hf-font-family: 'Playfair Display', serif;
  --hf-spacing-s: 12px;
  --hf-spacing-sm: 20px;
  --hf-spacing-m: 24px;
}
```

---

## Framework examples

### React

```jsx
import 'handsfree-cooking'

function RecipePage() {
  return (
    <div>
      <handsfree-cooking
        lang="en"
        steps-selector=".step"
        ingredients-selector="#ingredients"
        instructions-selector="#method"
      />

      <h2 id="ingredients">Ingredients</h2>
      {/* ... */}

      <h2 id="method">Method</h2>
      <div className="step">Step 1: ...</div>
      <div className="step">Step 2: ...</div>
    </div>
  )
}
```

### Vue

```vue
<template>
  <handsfree-cooking
    lang="en"
    steps-selector=".step"
    ingredients-selector="#ingredients"
    instructions-selector="#method"
  />

  <h2 id="ingredients">Ingredients</h2>
  <!-- ... -->

  <h2 id="method">Method</h2>
  <div class="step">Step 1: ...</div>
  <div class="step">Step 2: ...</div>
</template>
```

> **Note:** If `<handsfree-cooking>` is used inside a Vue SFC template, you must configure `isCustomElement` in your build tool -- see [Bundler Configuration](#bundler-configuration) above.

### Static HTML / WordPress / Shopify

Just include the script tag and the HTML element -- no build step needed.

---

## User flow

1. User sees the **"Let's cook"** button on the recipe page
2. Clicking it opens the **introduction popup** explaining the feature
3. The component requests **microphone access** via the browser
4. Once allowed, the user navigates the introduction steps, then says **"Let's cook"** (or taps the arrow)
5. The component enters **listening mode** -- a floating widget shows "Ready for instructions"
6. The user speaks commands like **"next step"**, **"go to ingredients"**, **"scroll down"**
7. When the last step is reached, the widget prompts **"Say 'I'm done'"**
8. After finishing, a **feedback screen** lets the user vote thumbs up/down
9. The widget closes

---

## Development

```bash
npm install
npm run dev      # Dev server -- open http://localhost:5173
npm run build    # Produces dist/handsfree-cooking.js + dist/handsfree-cooking.iife.js
```

The root `index.html` is a demo recipe page for local testing.

---

## Browser Support

| Browser | Supported |
|---|---|
| Google Chrome (desktop & Android) | Yes |
| Safari (desktop & iOS) | Yes |
| Microsoft Edge | Yes |
| Firefox | No (Web Speech API not available) |

---

## License

MIT
