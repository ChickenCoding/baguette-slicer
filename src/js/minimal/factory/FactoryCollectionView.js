/**
 *  Factory collection view
 *
 *  @module factory
 *  @submodule FactoryCollectionView
 *  @requires Backbone, FactoryCollection
 */
var Backbone = require("../../../../bower_components/exoskeleton/exoskeleton"),
  Microtemplate = require("../../../../bower_components/microtemplates/index"),
  FactoryCollection = require("../factory/FactoryCollection"),
  FactoryView = require("../factory/FactoryView"),

  /**
   *  Manage factory list
   *
   *  @class FactoryCollectionView
   *  @extends Backbone
   *  @constructor
   */
  FactoryCollectionView = Backbone.View.extend({
    /**
     *  Set the collection
     *
     *  @attribute collection
     *  @extends Backbone
     *  @type Object
     *  @default Array
     *
     */
    collection: FactoryCollection,

    /**
     *  Set the view template
     *
     *  @attribute template
     *  @extends Microtemplates
     *  @type Object
     *  @default DOM selector
     */
    template: new Microtemplate(document.querySelector("#factories-view").innerHTML),

    /**
     *  Bind template to element
     *
     *  @attribute el
     *  @type String
     *  @default #factories
     */
    el: "#factories",

    /**
     * Initialize the collection view
     *
     * @method initialize
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
      this.listenTo(this.collection, "add", this.addOne);
      this.listenTo(this.collection, "change", this.setBps);
      this.footer = document.querySelector("#footer");

      /**
       *  Updates or not the app
       *
       *  @property isLocked
       *  @default null
       */
      this.isLocked = null;
    },

    /**
     *  Render list of models
     *
     *  @method render
     */
    render: function () {
      "use strict";
      this.collection.forEach(this.addOne, this);
    },

    /**
     *  Add a factory to the collection
     *
     *  @method addOne
     *  @param {Object} factory model
     */
    addOne: function (factory) {
      "use strict";
      var factoryView = new FactoryView({model: factory});
      this.el.appendChild(factoryView.render().el);
      this.collection.addBps(factory);
      this.setBps();
    },

    /**
     *  Display the actual bps, if not locked
     *
     * @method setBps
     */
    setBps: function () {
      "use strict";
      if (this.isLocked !== null) {
        this.footer.innerHTML = this.template({total: this.getBps()});
      } else {
        this.footer.innerHTML = this.template({total: 0});
      }
    },

    /**
     *  Get actual bps
     *
     *  @method getBps
     *  @returns {Integer} bps
     */
    getBps: function () {
      "use strict";
      return this.collection.getBps();
    },

    /**
     *  Stop the bps
     *
     *  @method lockBps
     *
     */
    lockBps: function () {
      "use strict";
      this.isLocked = true;
    },


    /**
     *  Get the amount of last sell
     *
     *  @method trade
     *  @returns {Integer} last sell
     *
     */
    trade: function () {
      "use strict";
      return this.collection.lastSell;
    },

    /**
     *  Reset the last sell
     *
     *  @method resetTrade
     *
     */
    resetTrade: function () {
      "use strict";
      this.collection.lastSell = 0;
    },

    /**
     *  Get amount of factories owned
     *
     *  @method getFactoriesOwned
     *  @returns {Integer} amount
     */
    getFactoriesOwned: function () {
      "use strict";
      return this.collection.getFactoriesOwned();
    }
  });

module.exports = FactoryCollectionView;
