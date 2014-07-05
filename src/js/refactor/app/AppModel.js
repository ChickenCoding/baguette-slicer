/**
 *  Set App properties
 *
 *  @class AppModel
 *  @extends Backbone
 *  @property {Integer} currentBaguette total of baguettes owned default=0
 *  @property {Integer} currentSellable total of baguettes sellable  default=0
 */
var Backbone = require("../../../bower_components/exoskeleton/exoskeleton"),
  AppModel = Backbone.Model.extend({
    defaults: {
      currentBaguette: 0,
      currentSellable: 0
    }
  });

module.exports = AppModel;
