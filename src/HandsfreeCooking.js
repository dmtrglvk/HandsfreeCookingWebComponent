import btnSkinUrl from '@/assets/btn-skin.png'
import { createVoiceState } from '@/state.js'
import useCommands from '@/composables/useCommands.js'
import WebSpeechRecognizer from '@/services/WebSpeechRecognition/index'
import { deepMerge } from '@/utils/deepMerge'
import { findBestMatch } from '@/utils/matchCommand'
import { renderIcon } from '@/renderers/icon.js'
import { renderPopup } from '@/renderers/popup.js'
import { renderIntroduction } from '@/renderers/introduction.js'
import { renderFinish } from '@/renderers/finish.js'

// ---------- constants ----------

const DEFAULT_TRANSLATIONS = {
  intro: 'More information',
  letsCook: 'Handsfree cooking',
  stopCooking: 'Stop cooking',
  tooltip: {
    title: 'Handsfree cooking',
    text: 'Handsfree cooking is our voice activated assistant that helps you through steps of the recipe. Simply say e.g. \u201cGo to next step\u201d \u2013 this way you can focus on cooking, not scrolling.'
  },
  introduction: {
    title: 'Introduction',
    content: '<p>In order for this feature to work we need access to your microphone.</p>',
    buttonText: 'Allow microphone access',
    steps: [
      '<p>Navigate between steps using commands such as \u201cGo to next step\u201d or \u201cGo to ingredients\u201d.</p><p>We\u2019d recommend reducing background noise for the best possible experience.</p>',
      '<p>We\u2019d recommend preparing all your ingredients beforehand.</p><p>Whenever you\u2019re ready say \u201cLet\u2019s cook\u201d or simply press the right arrow button below.</p>'
    ]
  },
  notAllowed: {
    title: 'Something went wrong',
    content: '<p>In order to use handsfree cooking, we need access to your microphone.</p>',
    buttonText: 'Click here to allow access'
  },
  listening: { title: 'Ready for instructions' },
  help: {
    title: 'List of commands',
    content: '<p>Are you stuck? One of these commands might help you move on.</p><span>Commands</span><ul><li>Next step</li><li>Previous step</li><li>Scroll up</li><li>Scroll down</li><li>Go to ingredients</li><li>Go to method</li><li>Help</li></ul>',
    buttonText: 'Stop cooking'
  },
  finish: {
    title: 'You\u2019re done!',
    content: '<p>Enjoy your meal!</p><p>How was your experience using handsfree cooking?</p>',
    buttonText: 'Close handsfree cooking',
    voteUp: 'Very helpful',
    voteDown: 'Needs tweaking',
    successMessage: 'Your feedback is appreciated!'
  },
  notSupported: {
    title: 'Browser not supported',
    content: '<span>This feature is unfortunately not supported in Firefox. Use any of the following browsers to get started with handsfree cooking:</span><ul><li>Google Chrome</li><li>Safari</li><li>Microsoft Edge</li></ul>',
    buttonText: 'Close handsfree cooking'
  },
  notRecognized: { title: 'Command not recognized' },
  notRecognizedError: { title: 'Say \u201cHelp\u201d to see commands' },
  almostDone: {
    title: 'Almost there',
    content: '<p>You\u2019ve made it to the last bit!</p><p>Continue by saying \u201cI\u2019m done\u201d so we can make sure to send you off right.</p>'
  }
}

const DEFAULT_COMMANDS = {
  nextStep: ['next step', 'go forward', 'next'],
  previousStep: ['previous step', 'go back', 'previous'],
  scrollUp: ['scroll up'],
  scrollDown: ['scroll down'],
  goToIngredients: ['go to ingredients', 'ingredients'],
  goToInstructions: ['go to instructions', 'go to method', 'instructions'],
  help: ['help', 'commands'],
  letsCook: ["let's cook", 'lets cook', 'start cooking'],
  imDone: ["i'm done", 'im done', 'done', 'finish'],
  exit: ['exit', 'close']
}

const MAX_UNRECOGNIZED_ATTEMPTS = 3

const COMPONENT_CSS = `
:host {
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
  display: block;
  font-family: var(--hf-font-family);
  font-size: var(--hf-font-size-base);
  color: var(--hf-color-text);
  line-height: 1.5;
}
*, *::before, *::after { box-sizing: border-box; }
.hf-root { margin-bottom: var(--hf-spacing-m); }
.hf-sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
.hf-intro-row { display: flex; align-items: center; margin-bottom: var(--hf-spacing-s); }
.hf-intro-label { margin-right: var(--hf-spacing-xs); font-weight: 600; text-transform: uppercase; font-size: var(--hf-font-size-base); }
.hf-button { position: relative; display: inline-flex; align-items: center; padding: var(--hf-spacing-s) var(--hf-spacing-sm); border: 1px solid var(--hf-color-primary); border-radius: 0; background-color: transparent; color: var(--hf-color-primary); font-family: var(--hf-font-family); font-size: var(--hf-font-size-base); font-weight: 400; line-height: 1; vertical-align: middle; text-decoration: none; cursor: pointer; transition: background-color 200ms ease-out, color 200ms ease-out; }
.hf-button .hf-icon { margin-inline-end: var(--hf-spacing-xs); }
.hf-button:not(.hf-button--skin):hover { background-color: var(--hf-color-primary); color: var(--hf-color-bg); }
.hf-button:not(.hf-button--skin):hover .hf-icon svg { fill: var(--hf-color-bg); }
.hf-button:disabled { opacity: 0.4; cursor: default; }
.hf-button--solid { background-color: var(--hf-color-primary); color: var(--hf-color-bg); }
.hf-button--solid:hover { background-color: var(--hf-color-bg); color: var(--hf-color-primary); }
.hf-button--handsfree { padding: var(--hf-spacing-s) var(--hf-spacing-sm); }
.hf-button--handsfree .hf-icon { margin-inline-end: var(--hf-spacing-xxs); }
.hf-button--skin { aspect-ratio: 394/116; padding: 30px; justify-content: center; font-size: 20px; border: 0; color: #001f5a; background-color: transparent; background-image: var(--hf-button-skin-image, url(${btnSkinUrl})); background-repeat: no-repeat; background-position: center; background-size: 100% 100%; line-height: 0; transition: transform 200ms ease-out, opacity 200ms ease-out; }
.hf-button--skin:hover { background-color: transparent; color: inherit; transform: translateY(-1px); }
.hf-button--skin:focus-visible { outline: 2px solid #00205b; outline-offset: 4px; border-radius: 8px; }
.hf-icon { display: inline-flex; align-items: center; justify-content: center; vertical-align: middle; line-height: 0; }
.hf-icon svg { fill: currentColor; width: 1em; height: 1em; }
.hf-icon-16 svg { width: 16px; height: 16px; }
.hf-icon-24 svg { width: 24px; height: 24px; }
.hf-tooltip-wrapper { cursor: pointer; position: relative; display: inline-flex; align-items: baseline; }
.hf-tooltip-content { position: absolute; bottom: 30px; left: 8px; transform: translateX(-50%); width: 350px; padding: var(--hf-spacing-s); background: var(--hf-color-bg); box-shadow: var(--hf-popup-shadow); cursor: default; z-index: calc(var(--hf-z-index) + 1); }
.hf-tooltip-content::after { content: ''; position: absolute; bottom: -10px; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-style: solid; border-width: 10px 10px 0 10px; border-color: var(--hf-color-bg) transparent transparent transparent; }
.hf-tooltip-title { display: flex; justify-content: space-between; text-transform: uppercase; font-weight: 600; font-size: var(--hf-font-size-large); margin-bottom: var(--hf-spacing-xs); }
.hf-tooltip-title span { cursor: pointer; }
.hf-tooltip-text { display: block; font-size: var(--hf-font-size-small); line-height: 1.5; }
.hf-fade-enter-active, .hf-fade-leave-active { transition: opacity 0.2s ease-in-out; }
.hf-fade-enter-from, .hf-fade-leave-to { opacity: 0; }
.hf-popup { position: fixed; bottom: 20px; right: 20px; width: calc(100% - 40px); max-width: var(--hf-popup-width); background: var(--hf-color-bg); z-index: var(--hf-z-index); box-shadow: var(--hf-popup-shadow); padding: var(--hf-spacing-s); transition: bottom 0.3s ease, opacity 0.3s ease; }
.hf-popup--hidden { bottom: -100px; pointer-events: none; opacity: 0; }
.hf-popup--opened { bottom: 20px; }
.hf-headline { position: relative; border: 0; display: flex; align-items: center; width: 100%; background: none; padding: 0; margin: 0; cursor: pointer; font-family: var(--hf-font-family); color: var(--hf-color-text); font-size: var(--hf-font-size-base); }
.hf-headline__title { text-transform: uppercase; font-weight: 600; font-size: var(--hf-font-size-base); margin-left: var(--hf-spacing-xxs); }
.hf-headline__opener { margin-left: auto; display: flex; align-items: center; }
.hf-headline__opener svg { transition: transform 0.2s; }
.hf-popup--opened .hf-headline__opener svg { transform: rotate(0deg); }
.hf-popup:not(.hf-popup--opened) .hf-headline__opener svg { transform: rotate(180deg); }
.hf-spinner { display: inline-block; width: 22px; height: 22px; }
.hf-spinner svg { width: 100%; height: 100%; overflow: visible; animation: hf-rotation 1455ms infinite linear; }
.hf-spinner circle { stroke: currentColor; stroke-dasharray: 44px; stroke-dashoffset: 33px; transform-origin: center; animation: hf-spinner 2s infinite ease-in-out; }
@keyframes hf-spinner { 0% { stroke-dashoffset: 33px; transform: rotate(0deg); } 50% { stroke-dashoffset: 11px; transform: rotate(135deg); } 100% { stroke-dashoffset: 33px; transform: rotate(360deg); } }
@keyframes hf-rotation { 100% { transform: rotate(360deg); } }
.hf-content-area { margin-top: var(--hf-spacing-s); }
.hf-content p { margin: 0 0 var(--hf-spacing-s); font-size: var(--hf-font-size-base); }
.hf-content p:last-of-type { margin: 0; }
.hf-content ul { margin: 0; padding: var(--hf-spacing-xs) 0 var(--hf-spacing-xs) var(--hf-spacing-s); line-height: 1; }
.hf-content ul li { margin: 0 0 var(--hf-spacing-xs); }
.hf-content a { color: var(--hf-color-text); }
.hf-content-area > .hf-button { margin-top: var(--hf-spacing-s); }
.hf-introduction-steps .hf-step { margin-bottom: var(--hf-spacing-xs); }
.hf-introduction-steps .hf-step p { margin: 0 0 var(--hf-spacing-xs); }
.hf-introduction-buttons { display: flex; gap: 0; }
.hf-introduction-buttons .hf-button { padding: var(--hf-spacing-s) calc(var(--hf-spacing-s) - var(--hf-spacing-xxs)); }
.hf-introduction-buttons .hf-button .hf-icon { margin-inline-end: 0; }
.hf-introduction-buttons .hf-button:last-of-type { margin-left: -1px; }
.hf-popup.hf-not-recognized { border: 1px solid var(--hf-color-error); }
.hf-popup.hf-error-state .hf-headline { color: var(--hf-color-error); }
.hf-hide-chevron .hf-headline__opener { pointer-events: none; }
.hf-hide-chevron .hf-headline__opener .hf-icon { display: none; }
.hf-vote { display: flex; gap: 0; margin: var(--hf-spacing-s) 0; }
.hf-vote .hf-button { white-space: nowrap; }
.hf-vote .hf-button:last-of-type { margin-left: -1px; }
.hf-vote--stack { flex-direction: column; }
.hf-vote--stack .hf-button { justify-content: center; }
.hf-vote--stack .hf-button:last-of-type { margin-left: 0; margin-top: -1px; }
.hf-success-message { display: flex; align-items: center; gap: var(--hf-spacing-xxs); }
@media print { .hf-root, .hf-popup { display: none; } }
@media (max-width: 767px) {
  .hf-tooltip-content { left: 30px; width: 290px; }
  .hf-tooltip-content::after { transform: translateX(calc(-50% - 22px)); }
}
.hf-debug { position: fixed; bottom: 16px; left: 16px; z-index: calc(var(--hf-z-index) + 100); width: 320px; background: rgba(0,0,0,0.88); color: #e0e0e0; font-family: monospace; font-size: 12px; line-height: 1.5; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.5); pointer-events: none; }
.hf-debug__header { background: #1a1a2e; color: #7eb8f7; font-weight: bold; padding: 6px 10px; letter-spacing: 0.05em; font-size: 11px; text-transform: uppercase; }
.hf-debug__table { width: 100%; border-collapse: collapse; padding: 4px 0; }
.hf-debug__table tr:not(:last-child) { border-bottom: 1px solid rgba(255,255,255,0.06); }
.hf-debug__label { color: #888; padding: 4px 10px; white-space: nowrap; vertical-align: top; width: 56px; }
.hf-debug__value { color: #e0e0e0; padding: 4px 10px 4px 4px; word-break: break-word; }
.hf-debug__speech { color: #f0d080; font-style: italic; }
.hf-debug__matched { color: #6edb8f; font-weight: bold; }
.hf-debug__no-match { color: #f07070; }
.hf-debug__status--recording { color: #6edb8f; }
.hf-debug__status--starting { color: #f0d080; }
.hf-debug__status--stopped { color: #888; }
.hf-debug__status--error { color: #f07070; }
`

// ---------- element ----------

export class HandsfreeCookingElement extends HTMLElement {
  static get observedAttributes() {
    return ['lang', 'steps-selector', 'ingredients-selector', 'instructions-selector', 'translations', 'commands', 'button-skin-url']
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    // Inject stylesheet once
    const style = document.createElement('style')
    style.textContent = COMPONENT_CSS
    this.shadowRoot.appendChild(style)

    // Root container for innerHTML updates
    this._container = document.createElement('div')
    this.shadowRoot.appendChild(this._container)

    // Props from attributes
    this._lang = ''
    this._stepsSelector = '.recipe-step'
    this._ingredientsSelector = '#ingredients'
    this._instructionsSelector = '#instructions'
    this._translationsAttr = ''
    this._commandsAttr = ''
    this._buttonSkinUrl = ''

    // Internal state
    this._isTooltipVisible = false
    this._isLoading = false
    this._isError = false
    this._isRecognizing = false
    this._webSpeechStatus = null
    this._counter = 0
    this._flowFinished = false
    this._hasTrackedInitialStart = false
    this._speechRecognizer = null
    this._introCurrentStep = 0
    this._voted = false
    this._isFinishStacked = false

    // Debug mode
    this._isDebugMode = typeof window !== 'undefined' && (
      window.location.hash.includes('debugHF') ||
      new URLSearchParams(window.location.search).has('debugHF')
    )
    this._debugInfo = { lang: '', status: '', stage: '', subState: '', interim: '', final: '', matched: '' }

    // Voice state (created on connect)
    this._voiceState = null
    this._commands = null
    this._destroyCommands = null

    // Bound listeners for cleanup
    this._boundKeydown = this._handleKeydown.bind(this)
    this._boundClickOutside = this._handleClickOutside.bind(this)
    this._boundContainerClick = this._handleContainerClick.bind(this)
    this._outsideClickRaf = null

    // Resize observer for vote stacking in Finish
    this._resizeObserver = null
  }

  // ---- lifecycle ----

  connectedCallback() {
    this._voiceState = createVoiceState(() => this._render())

    const { getCommands, destroy } = useCommands(
      () => this._getMergedCommands(),
      () => this._getSelectors(),
      this._voiceState,
      (name, detail) => this._emitEvent(name, detail)
    )
    this._getCommandsMap = getCommands
    this._destroyCommands = destroy

    this._container.addEventListener('click', this._boundContainerClick)
    document.addEventListener('keydown', this._boundKeydown)
    this._render()
  }

  disconnectedCallback() {
    this._container.removeEventListener('click', this._boundContainerClick)
    document.removeEventListener('keydown', this._boundKeydown)
    document.removeEventListener('click', this._boundClickOutside, true)
    if (this._outsideClickRaf) cancelAnimationFrame(this._outsideClickRaf)
    if (this._speechRecognizer) {
      try { this._speechRecognizer.stop() } catch (_e) {}
    }
    if (this._destroyCommands) this._destroyCommands()
    if (this._resizeObserver) this._resizeObserver.disconnect()
  }

  attributeChangedCallback(name, _old, value) {
    switch (name) {
      case 'lang': this._lang = value || ''; break
      case 'steps-selector': this._stepsSelector = value || '.recipe-step'; break
      case 'ingredients-selector': this._ingredientsSelector = value || '#ingredients'; break
      case 'instructions-selector': this._instructionsSelector = value || '#instructions'; break
      case 'translations': this._translationsAttr = value || ''; break
      case 'commands': this._commandsAttr = value || ''; break
      case 'button-skin-url': this._buttonSkinUrl = value || ''; break
    }
    if (this._voiceState) this._render()
  }

  // ---- computed helpers ----

  _getMergedTranslations() {
    let userTranslations = {}
    if (this._translationsAttr) {
      try { userTranslations = JSON.parse(this._translationsAttr) }
      catch (e) { console.warn('[HandsfreeCooking] Invalid translations JSON:', e) }
    }
    return deepMerge(DEFAULT_TRANSLATIONS, userTranslations)
  }

  _getMergedCommands() {
    let userCommands = {}
    if (this._commandsAttr) {
      try { userCommands = JSON.parse(this._commandsAttr) }
      catch (e) { console.warn('[HandsfreeCooking] Invalid commands JSON:', e) }
    }
    return { ...DEFAULT_COMMANDS, ...userCommands }
  }

  _getSelectors() {
    return {
      steps: this._stepsSelector,
      ingredients: this._ingredientsSelector,
      instructions: this._instructionsSelector
    }
  }

  _getSelectedLanguage() {
    return this._lang || document.documentElement.lang || 'en'
  }

  _getRootStyle() {
    return this._buttonSkinUrl
      ? `style="--hf-button-skin-image: url('${this._buttonSkinUrl}')"`
      : ''
  }

  // ---- state shortcuts ----

  get _state() { return this._voiceState?.state || {} }

  get _stage() { return this._state.stage }
  get _subState() { return this._state.subState }
  get _isPopupOpened() { return this._state.isPopupOpened }
  get _isListening() { return this._state.isListening }

  get _isIntroductionVisible() {
    return this._stage === 'introduction' || (this._stage === 'listening' && this._subState === 'intro')
  }
  get _isHelpVisible() { return this._stage === 'listening' && this._subState === 'help' }
  get _isNotRecognized() { return this._stage === 'listening' && this._subState === 'not-recognized' }
  get _isNotRecognizedError() { return this._stage === 'listening' && this._subState === 'recognized-error' }
  get _isAlmostDone() { return this._stage === 'listening' && this._subState === 'almost-done' }

  _getStatusAnnouncement(t) {
    if (this._isNotRecognized) return t.notRecognized.title
    if (this._isNotRecognizedError) return t.notRecognizedError.title
    if (this._stage === 'listening' && this._subState === null) return t.listening.title
    return ''
  }

  // ---- rendering ----

  _render() {
    if (!this._voiceState) return

    const t = this._getMergedTranslations()
    const stage = this._stage
    const isPopupOpened = this._isPopupOpened

    // Trigger button
    const triggerBtn = stage !== 'listening'
      ? `<button class="hf-button hf-button--handsfree hf-button--skin" data-action="start-flow">
          ${renderIcon('mic', 24)}
          ${t.letsCook}
        </button>`
      : `<button class="hf-button hf-button--handsfree hf-button--skin" data-action="finish-flow">
          ${renderIcon('mic', 24)}
          ${t.stopCooking}
        </button>`

    // Tooltip
    const tooltipContent = this._isTooltipVisible
      ? `<span class="hf-tooltip-content">
          <strong class="hf-tooltip-title">
            ${t.tooltip.title}
            <span role="button" aria-label="Close tooltip" data-action="close-tooltip">
              ${renderIcon('close', 24)}
            </span>
          </strong>
          <span class="hf-tooltip-text">${t.tooltip.text}</span>
        </span>`
      : ''

    // Popup content
    let popupInner = ''
    if (this._isIntroductionVisible) {
      popupInner = renderIntroduction({
        translations: t.introduction,
        isLoading: this._isLoading,
        isListening: this._isListening,
        isPopupOpened,
        currentStep: this._introCurrentStep,
        isCloseState: !this._isListening
      })
    } else if (stage === 'not-allowed') {
      popupInner = renderPopup({ translations: t.notAllowed, isLoading: this._isLoading, isCloseState: true, isPopupOpened, additionalClassname: '' })
    } else if (stage === 'listening' && this._subState === null) {
      popupInner = renderPopup({ translations: t.listening, isLoading: this._isLoading, isCloseState: false, isPopupOpened })
    } else if (this._isHelpVisible) {
      popupInner = renderPopup({ translations: t.help, isLoading: this._isLoading, isCloseState: false, isPopupOpened })
    } else if (this._isNotRecognized) {
      popupInner = renderPopup({ translations: t.notRecognized, isLoading: this._isLoading, isCloseState: false, isPopupOpened })
    } else if (this._isNotRecognizedError) {
      popupInner = renderPopup({ translations: t.notRecognizedError, isLoading: this._isLoading, isCloseState: false, isPopupOpened })
    } else if (stage === 'not-supported') {
      popupInner = renderPopup({ translations: t.notSupported, isLoading: this._isLoading, isCloseState: false, isPopupOpened, additionalClassname: 'hf-hide-chevron' })
    } else if (this._isAlmostDone) {
      popupInner = renderPopup({ translations: t.almostDone, isLoading: this._isLoading, isCloseState: false, isPopupOpened })
    } else if (stage === 'finish') {
      popupInner = renderFinish({ translations: t.finish, isPopupOpened, voted: this._voted, isStacked: this._isFinishStacked })
    }

    const popupClasses = [
      'hf-popup',
      isPopupOpened ? 'hf-popup--opened' : '',
      stage === null ? 'hf-popup--hidden' : '',
      (this._isNotRecognized || this._isNotRecognizedError) ? 'hf-not-recognized' : '',
      this._isNotRecognizedError ? 'hf-error-state' : ''
    ].filter(Boolean).join(' ')

    const announcement = this._getStatusAnnouncement(t)

    // Debug panel
    const debugHtml = this._isDebugMode ? this._renderDebug() : ''

    const html = `
      <div class="hf-root" ${this._getRootStyle()}>
        <div class="hf-trigger">
          <div class="hf-intro-row">
            <span class="hf-intro-label">${t.intro}</span>
            <span class="hf-tooltip-wrapper" data-tooltip-wrapper>
              <span data-action="toggle-tooltip">${renderIcon('help', 16)}</span>
              ${tooltipContent}
            </span>
          </div>
          ${triggerBtn}
        </div>

        <div
          class="${popupClasses}"
          role="dialog"
          aria-label="Handsfree cooking assistant"
          aria-hidden="${stage === null}"
          data-popup
        >
          <div aria-live="polite" class="hf-sr-only">${announcement}</div>
          ${popupInner}
        </div>
      </div>
      ${debugHtml}
    `

    this._container.innerHTML = html

    // After rendering finish, check vote stacking
    if (stage === 'finish' && !this._voted) {
      this._checkVoteStacking()
    }
  }

  _renderDebug() {
    const d = this._debugInfo
    const statusClass = `hf-debug__status--${d.status.split(' ')[0]}`
    const matchedClass = d.matched === 'no match' ? 'hf-debug__no-match' : 'hf-debug__matched'
    return `<div class="hf-debug">
      <div class="hf-debug__header">🎤 HF Debug</div>
      <table class="hf-debug__table">
        <tr><td class="hf-debug__label">Lang</td><td class="hf-debug__value">${d.lang}</td></tr>
        <tr><td class="hf-debug__label">Status</td><td class="hf-debug__value ${statusClass}">${d.status || '—'}</td></tr>
        <tr><td class="hf-debug__label">Stage</td><td class="hf-debug__value">${d.stage}${d.subState ? ' / ' + d.subState : ''}</td></tr>
        <tr><td class="hf-debug__label">Interim</td><td class="hf-debug__value hf-debug__speech">${d.interim || '—'}</td></tr>
        <tr><td class="hf-debug__label">Final</td><td class="hf-debug__value hf-debug__speech">${d.final || '—'}</td></tr>
        <tr><td class="hf-debug__label">Matched</td><td class="hf-debug__value ${matchedClass}">${d.matched || '—'}</td></tr>
      </table>
    </div>`
  }

  // ---- delegated click handler (bound once in connectedCallback) ----

  _handleContainerClick(e) {
    const el = e.target.closest('[data-action]')
    if (!el) return
    const action = el.dataset.action
    switch (action) {
      case 'toggle-tooltip': this._toggleTooltip(); break
      case 'close-tooltip': this._isTooltipVisible = false; this._render(); break
      case 'start-flow': this._startHandsFreeFlow(); break
      case 'finish-flow': this._finishHandsFreeFlow(); break
      case 'toggle-popup': this._handleHeadlineToggle(); break
      case 'button-action': this._handleButtonAction(); break
      case 'begin-listening': this._emitBeginListening(); break
      case 'prev-step': this._introGoToPrev(); break
      case 'next-step': this._introGoToNext(); break
      case 'vote-up': this._votedUp(); break
      case 'vote-down': this._votedDown(); break
      case 'close-flow': this._closeHandsFreeFlowFromFinish(); break
    }
  }

  // ---- tooltip ----

  _toggleTooltip() {
    this._isTooltipVisible = !this._isTooltipVisible
    if (this._outsideClickRaf) { cancelAnimationFrame(this._outsideClickRaf); this._outsideClickRaf = null }
    document.removeEventListener('click', this._boundClickOutside, true)
    if (this._isTooltipVisible) {
      this._outsideClickRaf = requestAnimationFrame(() => {
        document.addEventListener('click', this._boundClickOutside, true)
      })
    }
    this._render()
  }

  _handleClickOutside(event) {
    const tooltipWrapper = this._container.querySelector('[data-tooltip-wrapper]')
    if (tooltipWrapper && !event.composedPath().includes(tooltipWrapper)) {
      this._isTooltipVisible = false
      document.removeEventListener('click', this._boundClickOutside, true)
      this._render()
    }
  }

  // ---- popup actions ----

  _handleHeadlineToggle() {
    const stage = this._stage
    const subState = this._subState
    if (stage === 'introduction' || (stage === 'listening' && subState === 'intro')) {
      this._closeHandsFreeFlow()
    } else if (stage === 'not-allowed') {
      this._closeHandsFreeFlow()
    } else if (stage === 'listening' && subState === null) {
      this._openHelp()
    } else if (this._isHelpVisible) {
      this._continueListening()
    } else if (this._isNotRecognized || this._isNotRecognizedError) {
      this._openHelp()
    } else if (this._isAlmostDone) {
      this._togglePopup()
    }
  }

  _handleButtonAction() {
    const stage = this._stage
    if (stage === 'not-allowed') {
      this._requestMicrophoneAccess()
    } else if (this._isHelpVisible) {
      this._finishHandsFreeFlow()
    } else if (stage === 'not-supported') {
      this._closeHandsFreeFlow()
    }
  }

  _emitBeginListening() {
    this._beginListening()
  }

  // ---- introduction step navigation ----

  _introGoToPrev() {
    if (this._introCurrentStep > 0) {
      this._introCurrentStep -= 1
      this._render()
    }
  }

  _introGoToNext() {
    const t = this._getMergedTranslations()
    const steps = t.introduction.steps || []
    if (this._introCurrentStep < steps.length - 1) {
      this._introCurrentStep += 1
      this._render()
    } else {
      this._voiceState.setStage('listening')
      this._voiceState.togglePopupState(false)
    }
  }

  // ---- finish / vote ----

  _votedUp() {
    const t = this._getMergedTranslations()
    this._voted = true
    this._emitEvent('handsfree-feedback', { vote: 'up', text: t.finish.voteUp })
    this._render()
  }

  _votedDown() {
    const t = this._getMergedTranslations()
    this._voted = true
    this._emitEvent('handsfree-feedback', { vote: 'down', text: t.finish.voteDown })
    this._render()
  }

  _closeHandsFreeFlowFromFinish() {
    const t = this._getMergedTranslations()
    this._emitEvent('handsfree-feedback', { vote: 'close', text: t.finish.buttonText })
    this._closeHandsFreeFlow()
  }

  _checkVoteStacking() {
    requestAnimationFrame(() => {
      const container = this._container.querySelector('[data-votes-container]')
      const up = this._container.querySelector('[data-action="vote-up"]')
      const down = this._container.querySelector('[data-action="vote-down"]')
      if (!container || !up || !down) return
      const wasStacked = this._isFinishStacked
      this._isFinishStacked = (up.offsetWidth + down.offsetWidth) > container.offsetWidth
      if (this._isFinishStacked !== wasStacked) this._render()
    })
  }

  // ---- recognition flow ----

  _startHandsFreeFlow() {
    this._flowFinished = false
    this._introCurrentStep = 0
    this._voiceState.setStage('introduction')
    this._emitEvent('handsfree-activated')

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) {
      this._emitEvent('handsfree-error', { error: 'browser-not-supported' })
      this._voiceState.setStage('not-supported')
      return
    }

    if (this._isDebugMode) {
      this._debugInfo.lang = this._getSelectedLanguage()
      this._debugInfo.matched = ''
      this._debugInfo.interim = ''
      this._debugInfo.final = ''
    }

    let hasStarted = false

    this._speechRecognizer = WebSpeechRecognizer.init({
      lang: this._getSelectedLanguage(),
      continuesRecognition: true,
      onUserSpeech: (rec) => {
        this._isRecognizing = ['starting', 'recording'].includes(rec.status)
        if (['stopped', 'aborted', 'error'].includes(rec.status)) this._isRecognizing = false
        this._webSpeechStatus = rec.status

        if (this._isDebugMode) {
          this._debugInfo.status = rec.error ? `${rec.status} (${rec.error})` : rec.status
          this._render()
        }

        if (!hasStarted && rec.status === 'starting') { hasStarted = true; return }

        if (rec.status === 'error' && (rec.error === 'not-allowed' || rec.error === 'service-not-allowed')) {
          this._isError = true
          this._voiceState.setStage('not-allowed')
          this._voiceState.toggleListening(false)
          this._speechRecognizer.stop()
          this._emitEvent('handsfree-error', { error: 'microphone-not-allowed' })
          return
        }

        if (rec.status === 'stopped' && this._stage === 'listening' && !this._flowFinished && !this._isRecognizing) {
          this._restartRecognition()
          return
        }

        if (rec.status === 'recording') {
          this._voiceState.toggleListening(true)
          if (!this._hasTrackedInitialStart) {
            this._emitEvent('handsfree-state-change', { stage: 'microphone-allowed', isListening: true })
            this._hasTrackedInitialStart = true
          }

          if (rec.transcriptions.length && !rec.finalTranscriptions) {
            if (!this._isLoading) { this._isLoading = true; this._render() }
            if (this._isDebugMode) {
              this._debugInfo.interim = rec.transcriptions[0].text
              this._render()
            }
          }

          if (rec.finalTranscriptions) {
            this._isLoading = false
            this._render()
            const speech = rec.transcriptions[0].text.toLowerCase().trim()

            if (this._isDebugMode) {
              this._debugInfo.interim = ''
              this._debugInfo.final = rec.transcriptions[0].text
              this._debugInfo.matched = ''
              this._render()
            }

            if (this._isIntroductionVisible) {
              this._handleIntroduction(speech)
            } else {
              this._handleCommand(speech)
            }
          }
        }
      },
      onUserSpeak: () => {}
    })
  }

  _restartRecognition() {
    if (!this._speechRecognizer || this._flowFinished) return
    if (this._isRecognizing) this._speechRecognizer.stop()
    setTimeout(() => {
      if (!this._isRecognizing) {
        try {
          this._speechRecognizer.start()
        } catch (_e) {
          setTimeout(() => {
            try { if (!this._isRecognizing) this._speechRecognizer.start() }
            catch (err) { console.error('[HandsfreeCooking] Restart failed:', err) }
          }, 1000)
        }
      }
    }, 500)
  }

  _handleCommand(recognizedSpeech) {
    const commands = this._getCommandsMap()
    const foundCommand = findBestMatch(recognizedSpeech, Object.keys(commands))

    if (this._isDebugMode) {
      this._debugInfo.matched = foundCommand || 'no match'
      this._render()
    }

    const mergedCmds = this._getMergedCommands()

    if (foundCommand) {
      if (!this._isAlmostDone) {
        this._voiceState.setStage('listening')
        this._voiceState.togglePopupState(false)
      }
      if (this._isAlmostDone && mergedCmds.imDone.includes(foundCommand)) {
        this._voiceState.setStage('finish')
        this._finishListening()
        this._emitEvent('handsfree-finished', { reason: 'completed recipe flow' })
      }
      this._counter = 0
      requestAnimationFrame(() => { if (commands[foundCommand]) commands[foundCommand]() })
    } else {
      this._counter += 1
      if (this._subState !== 'help') {
        this._voiceState.setStage('listening', 'not-recognized')
        this._voiceState.togglePopupState(false)
      }
      if (this._counter > MAX_UNRECOGNIZED_ATTEMPTS) {
        this._voiceState.setStage('listening', 'recognized-error')
      }
    }
  }

  _handleIntroduction(command) {
    const commands = this._getCommandsMap()
    const mergedCmds = this._getMergedCommands()
    const foundCommand = findBestMatch(command, Object.keys(commands))

    if (this._isDebugMode) {
      this._debugInfo.matched = (foundCommand && mergedCmds.letsCook.includes(foundCommand))
        ? foundCommand : 'no match (intro)'
      this._render()
    }

    if (foundCommand && mergedCmds.letsCook.includes(foundCommand)) {
      setTimeout(() => { if (commands[foundCommand]) commands[foundCommand]() }, 100)
    }
  }

  _beginListening() {
    if (!this._isError) {
      if (!this._isRecognizing) {
        try { this._speechRecognizer.start() }
        catch (e) { console.warn('[HandsfreeCooking] Cannot start recognizer:', e) }
      }
      this._voiceState.toggleListening(true)
      this._voiceState.setStage('listening', 'intro')
      this._emitEvent('handsfree-state-change', { stage: 'listening', isListening: true })
    } else {
      this._voiceState.setStage('not-allowed')
    }
  }

  _finishListening() {
    if (this._speechRecognizer) this._speechRecognizer.stop()
    this._flowFinished = true
    this._voiceState.toggleListening(false)
    this._voiceState.togglePopupState(true)
    this._isRecognizing = false
  }

  _finishHandsFreeFlow() {
    this._voiceState.setStage('finish')
    this._finishListening()
    this._emitEvent('handsfree-finished', { reason: 'stop-cooking-button' })
  }

  _openHelp() {
    this._voiceState.togglePopupState(true)
    this._voiceState.setStage('listening', 'help')
  }

  _continueListening() {
    this._voiceState.togglePopupState(false)
    this._voiceState.setStage('listening')
  }

  _togglePopup() {
    const state = this._state
    this._voiceState.togglePopupState(!state.isPopupOpened)
    this._emitEvent('handsfree-state-change', {
      stage: state.stage,
      isListening: state.isListening,
      isPopupOpened: state.isPopupOpened
    })
  }

  _closeHandsFreeFlow() {
    const state = this._state
    if (!state.isListening && this._speechRecognizer) {
      this._speechRecognizer.stop()
      this._voiceState.setStage(null)
    } else {
      this._togglePopup()
    }
  }

  async _requestMicrophoneAccess() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      stream.getTracks().forEach((track) => track.stop())
      this._isError = false
      this._startHandsFreeFlow()
    } catch (_e) {
      this._emitEvent('handsfree-error', { error: 'microphone-blocked' })
    }
  }

  // ---- keyboard ----

  _handleKeydown(event) {
    if (event.key === 'Escape') {
      if (this._isTooltipVisible) { this._isTooltipVisible = false; this._render(); return }
      const state = this._state
      if (state.isPopupOpened && state.stage !== null) {
        if (state.subState === 'help') {
          this._continueListening()
        } else {
          this._closeHandsFreeFlow()
        }
      }
    }
  }

  // ---- event emitter ----

  _emitEvent(name, detail = {}) {
    const el = this
    el.dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }))
  }
}
