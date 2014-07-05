/**
 *  About Controller
 *  Simple view to show description
 *
 *  @module app
 *  @submodule AboutView
 *  @requires Backbone, Microtemplate
 */
define([
  "backbone",
  "microtemplates"
], function (
  Backbone,
  Microtemplate
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
      this.render();
    },

    /**
     *  Render the view
     *
     *  @method render
     *
     */
    render: function () {
      this.el = this.template({name: "baguette slicer", version: "0.0.0"});
      return this;
    }
  });
  return AboutView;
});
