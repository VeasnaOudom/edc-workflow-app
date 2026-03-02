// entry.ts
import { defineCustomElement } from 'vue'
import App from './app.vue'

// This creates the Web Component constructor properly
const KhalibreNudgeElement = defineCustomElement(App)

// Register it with the browser
if (typeof window !== 'undefined' && !customElements.get('khalibre-nudge-app')) {
    customElements.define('khalibre-nudge-app', KhalibreNudgeElement)
}