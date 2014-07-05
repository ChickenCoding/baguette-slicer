/**
 *  Baguette single item model
 *
 *  @module baguette
 *  @submodule BaguetteModel
 *  @requires Backbone
 *
 */
define([
  "backbone"
], function (
  Backbone
) {
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
   *  Set Baguette properties
   *
   *  @class BaguetteModel
   *  @extends Backbone
   *  @property {Integer} id identifier default=0
   *  @property {Integer} count current baguette counter default=0
   */
  var BaguetteModel = Backbone.Model.extend({
    defaults: {
      id: 0,
      amount: 0,
      bps: 0
    }
  });

  return BaguetteModel;
});
