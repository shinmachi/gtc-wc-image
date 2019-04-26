"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Import LitElement base class, html helper function,
 * and TypeScript decorators
 **/
const lit_element_1 = require("lit-element");
require("@polymer/iron-image/iron-image.js");
/**
 * Use the customElement decorator to define your class as
 * a custom element. Registers <my-element> as an HTML tag.
 */
let GtcWcImage = class GtcWcImage extends lit_element_1.LitElement {
    /**
     * Use the customElement decorator to define your class as
     * a custom element. Registers <my-element> as an HTML tag.
     */
    constructor() {
        super(...arguments);
        /**
         * Create an observed property. Triggers update on change.
         */
        this.accession = "G00029MO";
        this.imagestyle = "extended";
        this.format = "png";
        this.notation = "cfg";
    }
    /**
     * Implement `render` to define a template for your element.
     */
    render() {
        /**
         * Use JavaScript expressions to include property values in
         * the element template.
         */
        return lit_element_1.html `<style>
  iron-image {
    width: 50px;
    height: 50px;
    background-color: lightgray;
  }
</style>

<div>
  Brought to you by:
  <a href="https://glytoucan.org"><iron-image sizing="cover" fade src="http://beta.glytoucan.org/img/logo_toucan.png"></iron-image></a>
</div>
<div>
  <img src="http://beta.glytoucan.org/glycans/${this.accession}/image?style=${this.style}&format=${this.format}&notation=${this.notation}" />
  </div>
  <div>
  <a href="https://glytoucan.org/Structures/Glycans/${this.accession}/">${this.accession}</a>
</div>`;
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
};
__decorate([
    lit_element_1.property()
], GtcWcImage.prototype, "accession", void 0);
__decorate([
    lit_element_1.property()
], GtcWcImage.prototype, "imagestyle", void 0);
__decorate([
    lit_element_1.property()
], GtcWcImage.prototype, "format", void 0);
__decorate([
    lit_element_1.property()
], GtcWcImage.prototype, "notation", void 0);
GtcWcImage = __decorate([
    lit_element_1.customElement('gtc-wc-image')
], GtcWcImage);
exports.GtcWcImage = GtcWcImage;
//customElements.define('gtc-wc-image', GtcWcImage);
