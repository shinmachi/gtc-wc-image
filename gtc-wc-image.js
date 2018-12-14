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
    <a href="https://glytoucan.org"><img src="http://beta.glytoucan.org/img/logo_toucan.png" /></a>
    <a href="https://glytoucan.org/Structures/Glycans/{{accession}}/">{{accession}}</a>
    <img src="https://glytoucan.org/glycans/{{accession}}/image?style={{_formatStyle(style)}}&format={{_formatFormat(format)}}&notation={{_formatNotation(notation)}}" />
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
  _formatFormat(value) { 
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
  _formatStyle(value) { 
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

customElements.define('gtc-wc-image', GtcWcImage);
