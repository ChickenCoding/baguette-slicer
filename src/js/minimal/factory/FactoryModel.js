/**
 *  Factory model
 *
 *  @module factory
 *  @submodule Factorymodel
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
   *  Set Factory properties
   *
   *  @class FactoryModel
   *  @extends Backbone
   *  @property {String} name name of factory
   *  @property {Integer} cost cost of one factory
   *  @property {Integer} sellRation value of factory when sold
   *  @property {Integer} owned number of factories a player have
   *  @property {Integer} rentability how many bps a factory do
   *
   */
  var FactoryModel = Backbone.Model.extend({
    defaults: {
      id: 0,
      name: "",
      cost: 1,
      sellRatio: 0.25,
      owned: 0,
      rentability: 0,
      lastSell: 0
    },

    initialize: function () {
      this.set("lastSell", this.get("owned"));
    }
  });

  return FactoryModel;
});
