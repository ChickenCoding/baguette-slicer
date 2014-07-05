(function () {
  "use strict";

  var Backbone = require("../../../bower_components/exoskeleton/exoskeleton"),
    Router = require("./router"),
    app = {};

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
}(this));
