import {PolymerElement, html} from '@polymer/polymer';

class GtcWcImage extends PolymerElement {
  static get template() {
    return html`
<style>
      iron-image {
        width: 400px;
        height: 400px;
        background-color: lightgray;
      }
</style>
  <div>
    <img src="https://glytoucan.org/glycans/{{accession}}/image?style={{style}}&format={{format}}&notation={{notation}}" />
  </div>
   `;
  }
  constructor() {
	    super();
	  this.accession="G00029MO";
	  this.style="extended";
	  this.format="png";
	  this.notation="cfg";
  }
  static get properties() {
    return {
    	accession: String,
    	style: String,
    	format: String,
        notation: String
    };
  }
}

customElements.define('gtc-wc-image', GtcWcImage);
