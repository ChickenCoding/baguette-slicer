/**
 *  Factory collection
 *
 *  @module factory
 *  @submodule FactoryCollection
 *  @requires Backbone, FactoryModel
 */
var Backbone = require("../../../../bower_components/exoskeleton/exoskeleton"),
  FactoryModel = require("../factory/FactoryModel"),

  /**
   *  List of Factory
   *
   *  @class FactoryCollection
   *  @extends Backbone
   *  @constructor
   */
  FactoryCollection = Backbone.Collection.extend({
    /**
     *  Link to the model
     *
     *  @attribute model
     *  @extends Backbone.Model
     *  @type Object
     *  @default BaguetteModel
     */
    model: FactoryModel,

    /**
     *  Initialize the collection
     *
     *  @method initialize
     *
     */
    initialize: function () {
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
       *  Get the baguette per second for all factories
       *
       *  @property bps
       *  @type {Integer}
       *  @default 0
       */
      this.bps = 0;

      /**
       *  Get a trace of the amount of a factory
       *  sold on the last time
       *
       * @property lastSell
       * @type {Integer}
       * @default 0
       *
       */
      this.lastSell = 0;
    },

    /**
     *  Add bps from event
     *  Also get a trace of the last sell
     *
     *  @method addBps
     *  @param {Object} model factoryModel
     *
     */
    addBps: function (model) {
      "use strict";
      if (model.get("lastSell") !== 0) {
        this.lastSell = -(model.get("lastSell"));
      }
      this.bps += model.get("lastSell") * model.get("rentability");
      this.bps = this.bps <= 0 ? 0 : parseInt(this.bps, 10);
      model.set("lastSell", 0);
    },

    /**
     *  Baguette per second getter
     *
     *  @method getBps
     *
     */
    getBps: function () {
      "use strict";
      return this.bps;
    },

    /**
     *  Get amount of factories currently owned
     *
     *  @method getFactoriesOwned
     *  @returns {Integer} total
     */
    getFactoriesOwned: function () {
      "use strict";
      var total = 0;
      this.models.forEach(function (model) {
        total += model.get("owned");
      });
      return total;
    }

  });

module.exports = FactoryCollection;
