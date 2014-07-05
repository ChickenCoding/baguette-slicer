/**
 *  Set up the routes
 *
 *  @module Router
 *  @requires Backbone, app/AppView, app/AboutView
 *
 */
var AppView = require("./app/AppView"),
  Backbone = require("../../../bower_components/exoskeleton/exoskeleton"),
  AboutView = require("./app/AboutView");

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
    "use strict";
    var aboutView = new AboutView();
    return aboutView;
  }
});

module.exports = router;
