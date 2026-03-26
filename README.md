# Handsfree Cooking Web Component

A Web Component for hands-free voice-controlled recipe navigation using the browser's Web Speech API. Drop it onto any website with a single `<script>` tag.

## Quick Start

```html
<script src="handsfree-cooking.iife.js"></script>

<handsfree-cooking
  lang="en"
  steps-selector=".recipe-step"
  ingredients-selector="#ingredients"
  instructions-selector="#instructions"
></handsfree-cooking>
```

## Attributes

| Attribute | Default | Description |
|-----------|---------|-------------|
| `lang` | Page language or `en` | BCP-47 language tag for speech recognition |
| `steps-selector` | `.recipe-step` | CSS selector for recipe step elements |
| `ingredients-selector` | `#ingredients` | CSS selector for the ingredients section |
| `instructions-selector` | `#instructions` | CSS selector for the instructions section |
| `translations` | (built-in English) | JSON string to override UI text |
| `commands` | (built-in English) | JSON string to override voice command aliases |

## Events

The component dispatches `CustomEvent`s you can listen to:

| Event | Detail | When |
|-------|--------|------|
| `handsfree-activated` | — | User starts handsfree cooking |
| `handsfree-command` | `{ command, transcript? }` | A voice command is recognized and executed |
| `handsfree-error` | `{ error }` | Mic blocked, browser not supported, etc. |
| `handsfree-state-change` | `{ stage, isListening }` | Internal state change |
| `handsfree-finished` | `{ reason }` | User completes or stops cooking |
| `handsfree-feedback` | `{ vote }` | User gives thumbs up/down feedback |

```javascript
document.querySelector('handsfree-cooking')
  .addEventListener('handsfree-command', (e) => {
    console.log('Voice command:', e.detail.command)
  })
```

## Styling

Override CSS custom properties to match your brand:

```css
handsfree-cooking {
  --hf-color-primary: #e4002b;
  --hf-color-bg: #ffffff;
  --hf-color-text: #1a1a1a;
  --hf-font-family: 'My Brand Font', sans-serif;
  --hf-spacing-s: 12px;
  --hf-spacing-m: 16px;
}
```

## Development

```bash
npm install
npm run dev      # Dev server with demo page
npm run build    # Build dist/handsfree-cooking.js + .iife.js
```

Open `http://localhost:5173/demo/` during development to test with the demo recipe page.

## Built-in Voice Commands (English defaults)

- **Next step** / go forward / next
- **Previous step** / go back / previous
- **Scroll up** / **Scroll down**
- **Go to ingredients** / ingredients
- **Go to instructions** / go to method
- **Help** / commands
- **Let's cook** / start cooking
- **I'm done** / finish / done
- **Exit** / close

## Browser Support

Works in browsers that support the Web Speech API:
- Google Chrome (desktop & Android)
- Safari (desktop & iOS)
- Microsoft Edge

Firefox is **not** supported (no Web Speech API).

## License

MIT
