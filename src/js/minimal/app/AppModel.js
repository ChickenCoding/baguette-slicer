/**
 *  Global application configuration
 *
 *  @module app
 *  @submodule AppModel
 *  @requires Backbone
 *
 */
define([
  "backbone"
], function (Backbone) {
  /**
   *  Strict mode
   *  more infos at :
   *  http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
   *
   *  @property strict mode
   *  @type {String}
   *  @default "use strict"
   */
  "use strict";

  /**
   *  Set App properties
   *
   *  @attribute AppModel
   *  @extends Backbone
   *  @property {Integer} currentBaguette total of baguettes owned default=0
   *  @property {Integer} currentSellable total of baguettes sellable  default=0
   */
  var AppModel = Backbone.Model.extend({
    default: {
      currentBaguette: 0,
      currentSellable: 0
    }
  });

  return AppModel;
});
