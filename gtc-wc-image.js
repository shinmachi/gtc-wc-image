import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/iron-image/iron-image.js';
import '@polymer/iron-ajax/iron-ajax.js';

class GtcWcImage extends PolymerElement {
  static get template() {
    return html`
<style>
      iron-image {
        width: 50px;
        height: 50px;
        background-color: lightgray;
      }
      .contents {
        border: 1px solid greay;
        margin: 30px
      }
</style>

  <iron-ajax auto url="https://test.sparqlist.glycosmos.org/sparqlist/api/gtc_image?accession={{accession}}&style={{style}}&notation={{notation}}&format={{format}}" handle-as="json" last-response="{{sampleids}}"></iron-ajax>
  <div class="contents">
    <template is="dom-repeat" items="{{sampleids}}">
      <div>{{_encordIgnore(item.image_data)}}</div>
    </template>
  </div>

  <div>
    <a href="https://glytoucan.org">
    <iron-image fade src="http://beta.glytoucan.org/img/logo_toucan.png"></iron-image>
    <a href="https://glytoucan.org/Structures/Glycans/{{accession}}/">{{accession}}
      <img src="http://beta.glytoucan.org/glycans/{{accession}}/image?style={{style}}&format={{format}}&notation={{notation}}" />
    </a>
  </div>
   `;
  }
  constructor() {
	    super();
	  this.accession="G54245YQ";
	  this.style="normalinfo";
	  this.format="svg";
	  this.notation="snfg";
  }
  static get properties() {
    return {
    	accession: String,
    	style: String,
    	format: String,
      notation: String,
      sampleids: {
        notify: true,
        type: Object,
        value: function() {
          return new Object();
        }
      }
    };
  }
  _encordIgnore(value) {
    var svg = '<line stroke ="black" x1 = "412.5" y1 = "112.5" x2 = "337.5" y2 = "112.5" nodeIndex="1"></line><text text-anchor = "middle" dominant-baseline = "central" x = "375" y = "104.5" >b4</text><line stroke ="black" x1 = "337.5" y1 = "112.5" x2 = "262.5" y2 = "37.5" nodeIndex="1"></line><text text-anchor = "middle" dominant-baseline = "central" x = "308" y = "67" >a6</text><line stroke ="black" x1 = "262.5" y1 = "37.5" x2 = "187.5" y2 = "37.5" nodeIndex="1"></line><text text-anchor = "middle" dominant-baseline = "central" x = "225" y = "29.5" >b2</text><line stroke ="black" x1 = "187.5" y1 = "37.5" x2 = "112.5" y2 = "37.5" nodeIndex="1"></line><text text-anchor = "middle" dominant-baseline = "central" x = "150" y = "29.5" >b4</text><line stroke ="black" x1 = "337.5" y1 = "112.5" x2 = "262.5" y2 = "187.5" nodeIndex="1"></line><text text-anchor = "middle" dominant-baseline = "central" x = "308" y = "158" >a3</text><line stroke ="black" x1 = "262.5" y1 = "187.5" x2 = "187.5" y2 = "187.5" nodeIndex="1"></line><text text-anchor = "middle" dominant-baseline = "central" x = "225" y = "179.5" >b2</text><line stroke ="black" x1 = "187.5" y1 = "187.5" x2 = "112.5" y2 = "187.5" nodeIndex="1"></line><text text-anchor = "middle" dominant-baseline = "central" x = "150" y = "179.5" >b4</text><circle cx = "412.5 " cy = " 112.5" r = " 15 " stroke-width = " 1.5 " stroke = "black" fill = " rgb(0, 144, 188) "/><circle cx = "337.5 " cy = " 112.5" r = " 15 " stroke-width = " 1.5 " stroke = "black" fill = " rgb(0, 166, 81) "/><circle cx = "262.5 " cy = " 37.5" r = " 15 " stroke-width = " 1.5 " stroke = "black" fill = " rgb(0, 166, 81) "/><rect x = "172.5" y = "22.5" width = "30" height = "30" stroke = "black" stroke-width = "1.5" fill = "rgb(0, 144, 188)"/><circle cx = "112.5 " cy = " 37.5" r = " 15 " stroke-width = " 1.5 " stroke = "black" fill = " rgb(255, 212, 0) "/><circle cx = "262.5 " cy = " 187.5" r = " 15 " stroke-width = " 1.5 " stroke = "black" fill = " rgb(0, 166, 81) "/><rect x = "172.5" y = "172.5" width = "30" height = "30" stroke = "black" stroke-width = "1.5" fill = "rgb(0, 144, 188)"/><circle cx = "112.5 " cy = " 187.5" r = " 15 " stroke-width = " 1.5 " stroke = "black" fill = " rgb(255, 212, 0) "/><polygon points = "37.5,52.5,52.5,37.5,37.5,22.5,22.5,37.5" stroke = "black" stroke-width = "1.5" fill = "rgb(165, 67, 153)"/><polygon points = "37.5,202.5,52.5,187.5,37.5,172.5,22.5,187.5" stroke = "black" stroke-width = "1.5" fill = "rgb(165, 67, 153)"/><path d = "M 97.5 7.5 Q 75 7.5 75 97.5 Q 75 112.5 52.5 112.5 Q 75 112.5 75 142.5 Q 75 217.5 97.5 217.5" stroke="black" fill="none" stroke-width="5"/></svg>'
    console.log("value=" + value);
    console.log("value=" + value.slice(23));

    return value;
    // return value.slice(23);
    // console.log("typeof=" + String.raw`value`));
    // return String.raw(value);
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
