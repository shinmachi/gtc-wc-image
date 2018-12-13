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
    <img src="https://glytoucan.org/glycans/{{accession}}/image?style={{style}}&format={{format}}&notation=_formatNotation({{notation}})" />
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
  _formatNotation(value) { 
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
}

customElements.define('gtc-wc-image', GtcWcImage);
