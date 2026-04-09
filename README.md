# Handsfree Cooking Web Component

A drop-in Web Component that adds voice-controlled recipe navigation to **any website** using the browser's Web Speech API. No framework required.

---

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Framework Guides](#framework-guides)
  - [React](#react)
  - [Next.js](#nextjs)
  - [Vue 3](#vue-3)
  - [Nuxt 3](#nuxt-3)
  - [Angular](#angular)
  - [Svelte / SvelteKit](#svelte--sveltekit)
  - [Astro](#astro)
  - [Static HTML / WordPress / Shopify](#static-html--wordpress--shopify)
- [Attributes](#attributes)
- [Voice Commands](#voice-commands)
- [Translations](#translations)
- [Events](#events)
- [Styling](#styling)
- [User Flow](#user-flow)
- [Development](#development)
- [Browser Support](#browser-support)
- [License](#license)

---

## Installation

### npm

```bash
npm install handsfree-cooking
```

### CDN — no install needed

```html
<script src="https://unpkg.com/handsfree-cooking/dist/handsfree-cooking.iife.js"></script>
```

### Self-hosted

Download `dist/handsfree-cooking.iife.js` from the [npm package](https://www.npmjs.com/package/handsfree-cooking) and serve it yourself:

```html
<script src="/path/to/handsfree-cooking.iife.js"></script>
```

---

## Quick Start

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Recipe</title>
  <script src="https://unpkg.com/handsfree-cooking/dist/handsfree-cooking.iife.js"></script>
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

The component renders a **"Handsfree cooking"** button. When clicked it requests microphone access and starts voice-controlled navigation.

---

## Framework Guides

### React

Import the package once — at the top of your entry file (`main.tsx` / `index.tsx`) or directly in the component that uses it.

```tsx
// main.tsx (or the component file)
import 'handsfree-cooking'
```

Use the element in JSX like any HTML element. React treats unknown tags as custom elements automatically:

```tsx
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

#### TypeScript — element type declaration

If TypeScript complains about `<handsfree-cooking>` not being a known JSX element, add a declaration file (e.g. `custom-elements.d.ts`) to your project:

```ts
declare namespace JSX {
  interface IntrinsicElements {
    'handsfree-cooking': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        lang?: string
        'steps-selector'?: string
        'ingredients-selector'?: string
        'instructions-selector'?: string
        'button-skin-url'?: string
        translations?: string
        commands?: string
      },
      HTMLElement
    >
  }
}
```

---

### Next.js

Web Speech API and `customElements` are **browser-only APIs** — they don't exist in the Node.js server environment. You must lazy-load the component on the client side.

#### App Router (Next.js 13+)

Create a wrapper client component:

```tsx
// components/HandsfreeCooking.tsx
'use client'

import { useEffect } from 'react'

export default function HandsfreeCooking(props: {
  lang?: string
  stepsSelector?: string
  ingredientsSelector?: string
  instructionsSelector?: string
}) {
  useEffect(() => {
    import('handsfree-cooking')
  }, [])

  return (
    <handsfree-cooking
      lang={props.lang ?? 'en'}
      steps-selector={props.stepsSelector ?? '.step'}
      ingredients-selector={props.ingredientsSelector ?? '#ingredients'}
      instructions-selector={props.instructionsSelector ?? '#method'}
    />
  )
}
```

Use it in any Server or Client component:

```tsx
// app/recipes/[slug]/page.tsx
import HandsfreeCooking from '@/components/HandsfreeCooking'

export default function RecipePage() {
  return (
    <main>
      <HandsfreeCooking stepsSelector=".step" />
      {/* ... recipe content ... */}
    </main>
  )
}
```

#### Pages Router (Next.js 12 and earlier)

Use `next/dynamic` with `ssr: false`:

```tsx
// pages/recipes/[slug].tsx
import dynamic from 'next/dynamic'

const HandsfreeCooking = dynamic(
  () => import('../components/HandsfreeCooking'),
  { ssr: false }
)

export default function RecipePage() {
  return (
    <main>
      <HandsfreeCooking stepsSelector=".step" />
      {/* ... recipe content ... */}
    </main>
  )
}
```

---

### Vue 3

Import the package in your entry file or directly in the component:

```js
// main.js
import { createApp } from 'vue'
import 'handsfree-cooking'
import App from './App.vue'

createApp(App).mount('#app')
```

#### Tell Vue to skip the element

Vue's template compiler will warn about unknown elements unless you tell it that `<handsfree-cooking>` is a native custom element. Add this to `vite.config.js`:

```js
// vite.config.js
import { defineConfig } from 'vite'
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

Use it in a template:

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

#### Webpack + Vue (vue-loader)

In `vue.config.js`:

```js
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

---

### Nuxt 3

Create a client-only plugin so the component is registered in the browser only:

```ts
// plugins/handsfree-cooking.client.ts
export default defineNuxtPlugin(() => {
  import('handsfree-cooking')
})
```

Configure the Vue compiler to skip the element in `nuxt.config.ts`:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'handsfree-cooking'
    }
  }
})
```

Use it in any page or component wrapped in `<ClientOnly>` (extra guard for SSR):

```vue
<template>
  <ClientOnly>
    <handsfree-cooking
      lang="en"
      steps-selector=".step"
      ingredients-selector="#ingredients"
      instructions-selector="#method"
    />
  </ClientOnly>

  <h2 id="ingredients">Ingredients</h2>
  <!-- ... -->
</template>
```

---

### Angular

Import the package once in your `AppModule` (or a standalone component's `imports` for Angular 17+):

```ts
// app.module.ts
import 'handsfree-cooking'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],   // ← required
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Without `CUSTOM_ELEMENTS_SCHEMA`, Angular's template compiler throws an error for unknown elements.

Use it in a template:

```html
<!-- recipe.component.html -->
<handsfree-cooking
  lang="en"
  steps-selector=".step"
  ingredients-selector="#ingredients"
  instructions-selector="#method"
></handsfree-cooking>

<h2 id="ingredients">Ingredients</h2>
<!-- ... -->

<h2 id="method">Method</h2>
<div class="step">Step 1: ...</div>
<div class="step">Step 2: ...</div>
```

#### Angular SSR (Angular Universal)

If your app renders on the server, guard the import so it only runs in the browser:

```ts
// app.module.ts
import { isPlatformBrowser } from '@angular/common'
import { PLATFORM_ID, inject } from '@angular/core'

if (isPlatformBrowser(inject(PLATFORM_ID))) {
  import('handsfree-cooking')
}
```

Or use Angular's `afterNextRender` lifecycle hook inside the component:

```ts
import { afterNextRender } from '@angular/core'

constructor() {
  afterNextRender(() => {
    import('handsfree-cooking')
  })
}
```

---

### Svelte / SvelteKit

#### Svelte (client-only)

```svelte
<script>
  import { onMount } from 'svelte'

  onMount(() => {
    import('handsfree-cooking')
  })
</script>

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
```

#### SvelteKit (SSR-safe)

In SvelteKit, `onMount` only runs in the browser, so the same pattern above is already SSR-safe. Alternatively, import it inside a `+page.svelte` using `browser` from `$app/environment`:

```svelte
<script>
  import { browser } from '$app/environment'
  if (browser) import('handsfree-cooking')
</script>
```

---

### Astro

For a static recipe page, include the CDN script and the element directly in the Astro file:

```astro
---
// src/pages/recipe.astro
---

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My Recipe</title>
    <script src="https://unpkg.com/handsfree-cooking/dist/handsfree-cooking.iife.js" is:inline></script>
  </head>
  <body>

    <handsfree-cooking
      lang="en"
      steps-selector=".step"
      ingredients-selector="#ingredients"
      instructions-selector="#method"
    ></handsfree-cooking>

    <h2 id="ingredients">Ingredients</h2>
    <!-- ... -->

    <h2 id="method">Method</h2>
    <div class="step">Step 1: ...</div>
    <div class="step">Step 2: ...</div>

  </body>
</html>
```

To import from npm instead, add a `<script>` tag with `type="module"`:

```astro
<script>
  import 'handsfree-cooking'
</script>
```

Astro bundles it automatically via Vite — no extra configuration needed.

---

### Static HTML / WordPress / Shopify

No build step, no configuration. Include the script tag and the element:

```html
<script src="https://unpkg.com/handsfree-cooking/dist/handsfree-cooking.iife.js"></script>

<handsfree-cooking
  lang="en"
  steps-selector=".step"
  ingredients-selector="#ingredients"
  instructions-selector="#method"
></handsfree-cooking>
```

For **WordPress**, paste the snippet into your theme's `functions.php` or a Custom HTML block in the Block Editor on the recipe post template.

For **Shopify**, paste the snippet into the appropriate `sections/*.liquid` file or `layout/theme.liquid`.

---

## Attributes

| Attribute | Default | Description |
|---|---|---|
| `lang` | Page `lang` attribute or `en` | BCP-47 language code for speech recognition (e.g. `en`, `da`, `ar`) |
| `steps-selector` | `.recipe-step` | CSS selector matching **each** recipe step element |
| `ingredients-selector` | `#ingredients` | CSS selector for the ingredients section heading/container |
| `instructions-selector` | `#instructions` | CSS selector for the instructions section heading/container |
| `button-skin-url` | *(built-in skin image)* | Optional background image URL for buttons using the `hf-button--skin` class |
| `translations` | *(built-in English)* | JSON string to override any UI text (see below) |
| `commands` | *(built-in English)* | JSON string to override voice command aliases (see below) |

---

## Voice Commands

### Built-in defaults (English)

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

This means users don't need to say the exact phrase — "go to the next step please" still matches "next step".

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

Override any UI text by passing a `translations` attribute as a JSON string. You only need to include the keys you want to change — everything else falls back to the English defaults.

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
| `handsfree-activated` | — | User clicks the "Handsfree cooking" button |
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

### Custom button skin

The primary trigger buttons use the `hf-button--skin` class. You can provide a custom background image with the `button-skin-url` attribute. If you do not set it, the component falls back to the built-in skin image.

```html
<handsfree-cooking
  lang="en"
  steps-selector=".recipe-step"
  ingredients-selector="#ingredients"
  instructions-selector="#instructions"
  button-skin-url="https://example.com/brand/lets-cook-button.png"
></handsfree-cooking>
```

---

## User Flow

1. User sees the **"Handsfree cooking"** button on the recipe page
2. Clicking it opens the **introduction popup** explaining the feature
3. The component requests **microphone access** via the browser
4. Once allowed, the user navigates the introduction steps, then says **"Let's cook"** (or taps the arrow)
5. The component enters **listening mode** — a floating widget shows "Ready for instructions"
6. The user speaks commands like **"next step"**, **"go to ingredients"**, **"scroll down"**
7. When the last step is reached, the widget prompts **"Say 'I'm done'"**
8. After finishing, a **feedback screen** lets the user vote thumbs up/down
9. The widget closes

---

## Development

```bash
npm install
npm run dev        # Dev server for the demo page at http://localhost:5173
npm run build      # Produces dist/handsfree-cooking.js + dist/handsfree-cooking.iife.js
npm run build:demo # Produces dist-demo/ for the demo site
npm test           # Run unit tests
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
