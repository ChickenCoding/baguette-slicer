/**
 *  About Controller
 *  Simple view to show description
 *
 *  @module app
 *  @submodule AboutView
 *  @requires Backbone, Microtemplate
 */
var Backbone = require("../../../bower_components/exoskeleton/exoskeleton"),
  Microtemplate = require("../../../bower_components/microtemplates/index");

/**
 *  About view
 *
 * @class AboutView
 * @constructor
 */
var AboutView = Backbone.View.extend({

  /**
   *  Set the view template
   *
   *  @attribute template
   *  @extends Microtemplates
   *  @type Object
   *  @default DOM selector
   */
  template: new Microtemplate(document.querySelector("#about-view").innerHTML),

  /**
   *  Bind template to element
   *
   *  @attribute el
   *  @type String
   *  @default #baguette
   */
  el: "#baguette",

  /**
   *  Initialize
   *
   *  @method initialize
   */
  initialize: function () {
    "use strict";
    this.render();
  },

  /**
   *  Render the view
   *
   *  @method render
   *
   */
  render: function () {
    "use strict";
    this.el = this.template({name: "baguette slicer", version: "0.0.0"});
    return this;
  }
});

module.exports = AboutView;
