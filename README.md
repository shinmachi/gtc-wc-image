# GlyTouCan Accession Number Web Component 

This is a web component that utilizes the glytoucan API server to display a glycan image.

API example:
https://glytoucan.org/glycans/G00055MO/image?style=extended&format=png&notation=cfg

The style, format and notation parameters can be configured with attributes.


TODO:
A [dropdown list](https://www.webcomponents.org/element/@polymer/paper-dropdown-menu) will be used to pick a format.  The API server outputs binary image data, so it can be output directly as image source.

This is just a wrapper around a standard img src element.  The URL parameters are stored as properties for the component.  These properties will correspond into the image URL as parameters. 

  style:
  extended
  
  format:
  png
  
  notation:
  cfg
