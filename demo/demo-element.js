import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './gtc-wc-image.js';

class DemoElement extends PolymerElement {
  static get template() {
    return html`
      <style>
  :host {
font-family: sans-serif;
--icon-toggle-color: lightgrey;
--icon-toggle-outline-color: black;
--icon-toggle-pressed-color: red;
}
      </style>
      
      <h3>Web Component in a Component Demo</h3>
      <gtc-wc-image accession="G00055MO"></gtc-wc-image>
    `;
  }
}
customElements.define('demo-element', DemoElement);
