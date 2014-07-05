/**
 *  Configure the requirejs library
 *
 *  @attribute require
 *  @readonly
 *
 */
require.config({

  /**
   *  Set vendors' path
   *
   *  @property path
   *  @type String
   */
  paths: {
    backbone: "../../../bower_components/exoskeleton/exoskeleton",
    microtemplates: "../../../bower_components/microtemplates/index"
  },

  /**
   *  Bind a vendor to a shortcut
   *  Also define dependencies, if any
   *
   *  @property shim
   *  @type String
   */
  shim: {
    backbone: {
      exports: "Backbone"
    },
    microtemplates: {
      exports: "microtemplates"
    }
  }
});

/**
 *  Since we do not use jquery
 *  Use this trick
 *
 *  @private
 */
define("jquery", function () {
  "use strict";
  return;
});


/**
 *  Since we do not use underscore
 *  Use this trick
 *
 *  @private
 */
define("underscore", ["backbone"], function (Backbone) {
  "use strict";
  return Backbone.utils;
});


/**
 *  Start the app
 *
 *  @requires Backbone
 *  @requires router
 */
require([
  "backbone",
  "router"
], function (
  Backbone,
  Router
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
   *  Initialize a new app
   *
   *  @property app
   */
  var app = {};

  /**
   *  Instanciate the router
   *  and set history abilities
   *
   *  @protected Router
   */
  app.router = new Router();
  Backbone.history.start();

  /*
   *  Set the app to be globally
   *  accessible
   *
   *  @property window.app
   */
  window.app = app;
  return app;
});
