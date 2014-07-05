/**
 *  A view which works like a
 *  dispatcher
 *
 *  @module app
 *  @submodule AppView
 *  @requires Backbone, Baguette, Factory
 *
 */
var Backbone = require("../../../../bower_components/exoskeleton/exoskeleton"),
  AppModel = require("../app/AppModel"),
  BaguetteView = require("../baguette/BaguetteView"),
  BaguetteModel = require("../baguette/BaguetteModel");
/**
 *  Dispatch the app
 *
 *  @class AppView
 *  @constructor
 */
var AppView = Backbone.View.extend({

  /**
   *  Constructor
   *
   *  @method initialize
   */
  initialize: function () {
    "use strict";
    this.model = new AppModel({currentSellable: 0, currentBaguette: 0});
    this.loop = null;
    this.baguette = new BaguetteView({model: new BaguetteModel()});
    this.baguette.render();
    this.model.set("currentBaguette", this.baguette.model.get("amount") + this.baguette.model.get("bps"));
    this.render();
  },
  /**
   *  Intialize the application loop
   *
   *  @method render
   */
  render: function () {

    "use strict";

    /**
     * Scope trick
     *
     * @property self
     *
     */
    var self = this;

    /**
     *  Application loop
     *
     *  @method loop
     */
    function loop() {
      /**
       *  Get all the factories bps
       *  Add the buy/sell observers
       *
       *  @property current
       *  @type {String}
       *  @default 0
       */
      var current = self.baguette.model.get("amount") + self.baguette.model.get("bps") +
        (self.baguette.factories.trade() * 100);

      /**
       *  Once the buy/sell trades have been added
       *  reset to prevent re-adding it
       *
       *  @property resetTrade
       */
      self.baguette.factories.resetTrade();

      /**
       *  If baguette per second is greater than 0
       *    and there's factories to sell
       *  then update the baguette amount
       *  else stop the application
       */
      if (
        self.model.get("currentSellable") >= 0 ||
          self.baguette.model.get("amount") >= 0
      ) {
        self.baguette.model.set("amount", current);
        self.model.set("currentSellable", current);
      } else {
        self.baguette.factories.lockBps();
        self.stop();
      }
      self.loop = requestAnimationFrame(loop);
    }

    self.loop = requestAnimationFrame(loop);
  },

  /**
   *  Stop the loop and the application
   *
   *  @method stop
   *
   */
  stop: function () {
    "use strict";

    cancelAnimationFrame(this.loop);
  }

});

module.exports = AppView;
