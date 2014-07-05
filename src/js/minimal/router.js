/**
 *  Set up the routes
 *
 *  @module Router
 *  @requires Backbone, app/AppView
 *
 */
define([
  "backbone",
  "app/AppView",
  "app/AboutView"
], function (Backbone, AppView, AboutView) {

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

  var router = Backbone.Router.extend({
    routes: {
      "": "home",
      "*about": "about"
    },

    /**
     *  Main application page
     *
     *  @method home
     *
     */
    home: function () {
      console.log("home");
      var appView = new AppView();
      return appView;
    },

    /**
     *  About page
     *
     *  @method about
     *
     */
    about: function () {
      var aboutView = new AboutView();
      return aboutView;
    }

  });
  return router;
});
