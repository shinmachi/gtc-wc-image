/**
 * Import LitElement base class, html helper function,
 * and TypeScript decorators
 **/
import {
  LitElement, html, customElement, property
} from 'lit-element';

import '@polymer/iron-image/iron-image.js';
import '@polymer/iron-ajax/iron-ajax.js';

/**
 * Use the customElement decorator to define your class as
 * a custom element. Registers <my-element> as an HTML tag.
 */
@customElement('gtc-wc-image')
export class GtcWcImage extends LitElement {

  /**
   * Create an observed property. Triggers update on change.
   */
  @property()
  accession = "G00029MO";

  @property()
  imagestyle = "extended";


  @property()
  format = "png";

  @property()
  notation = "cfg";

  /**
   * Implement `render` to define a template for your element.
   */
  render() {
    /**
     * Use JavaScript expressions to include property values in
     * the element template.
     */
    return html`<style>
  iron-image {
    width: 50px;
    height: 50px;
    background-color: lightgray;
  }
</style>

<div>
  Brought to you by:
  <a href="https://glytoucan.org"><iron-image sizing="cover" fade src="https://test.gtc.glycosmos.org/img/logo_toucan.png"></iron-image></a>
</div>
<div>
  <img src="https://test.gtc.glycosmos.org/glycans/${this.accession}/image?style=${this.imagestyle}&format=${this.format}&notation=${this.notation}" />
</div>
<div>
  <a href="https://glytoucan.org/Structures/Glycans/${this.accession}/">${this.accession}</a>
</div>
<div>
  <h2>Using sparqlist</h2>
  <div>
    <img src="https://test.sparqlist.glycosmos.org/sparqlist/api/gtc_image?accession=${this.accession}&style=${this.imagestyle}&format=${this.format}&notation=${this.notation}" />
  </div>
</div>
`;
  }
  static get properties() {
    return {
      glycanimage: {
        notify: true,
        type: String
      }
    };
  }
  _formatNotation(value: Number) {
    console.log("value=" + value);
    var choice = "cfg";
    switch (value) {
      case 0:
        choice = "cfg";
        break;
      case 1:
        choice = "cfgbw";
        break;
      case 2:
        choice = "cfg-uoxf";
        break;
      case 3:
        choice = "uoxf";
        break;
      case 4:
        choice = "uoxf-color";
        break;
      case 5:
        choice = "iupac";
        break;
    }
    return choice;
  }
  _formatFormat(value: Number) {
    var choice = "png";
    switch (value) {
      case 0:
        choice = "png";
        break;
      case 1:
        choice = "jpg";
        break;
      case 2:
        choice = "svg";
        break;
    }
    return choice;
  }
  _formatStyle(value: Number) {
    var choice = "compact";
    switch (value) {
      case 0:
        choice = "compact";
        break;
      case 1:
        choice = "normal";
        break;
      case 2:
        choice = "normalinfo";
        break;
    }
    return choice;
  }
}
