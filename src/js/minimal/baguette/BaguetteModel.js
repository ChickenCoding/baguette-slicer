/**
 *  Baguette single item model
 *
 *  @module baguette
 *  @submodule BaguetteModel
 *  @requires Backbone
 *
 */
var Backbone = require("../../../../bower_components/exoskeleton/exoskeleton"),
/**
 *  Set Baguette properties
 *
 *  @class BaguetteModel
 *  @extends Backbone
 *  @property {Integer} id identifier default=0
 *  @property {Integer} count current baguette counter default=0
 */
  BaguetteModel = Backbone.Model.extend({
    defaults: {
      id: 0,
      amount: 0,
      bps: 0
    }
  });

module.exports = BaguetteModel;
