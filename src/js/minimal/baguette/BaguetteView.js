/**
 *  Baguette view
 *
 *  @module baguette
 *  @submodule BaguetteView
 *  @requires Backbone, Microtemplates, BaguetteModel
 */

var Backbone = require("../../../../bower_components/exoskeleton/exoskeleton"),
  Microtemplate = require("../../../../bower_components/microtemplates/index"),
  AppModel = require("../app/AppModel"),
  BaguetteModel = require("../baguette/BaguetteModel"),
  FactoryCollection = require("../factory/FactoryCollection"),
  FactoryCollectionView = require("../factory/FactoryCollectionView"),

  /**
   *  Manage Baguette
   *
   *  @class Baguetteview
   *  @extends Backbone
   *  @constructor
   */
  BaguetteView = Backbone.View.extend({

    /**
     *  Link to the model
     *
     *  @attribute model
     *  @extends Backbone.Model
     *  @type Object
     *  @default BaguetteModel
     */
    model: BaguetteModel,

    /**
     *  Set the view template
     *
     *  @attribute template
     *  @extends Microtemplates
     *  @type Object
     *  @default DOM selector
     */
    template: new Microtemplate(document.querySelector("#la-baguette").innerHTML),

    /**
     *  Bind template to element
     *
     *  @attribute el
     *  @type String
     *  @default #baguette
     */
    el: "#baguette",

    /**
     *  View event listener
     *
     *  @attribute events
     *  @type Object
     */
    events: {
      /**
       *  Bind add event to add() function
       *
       *  @event click:add
       */
      "click .add": "add"
    },

    /**
     *  Observe model changes
     *
     *  @method initialize
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

      this.listenTo(this.model, "change", this.render);
      this.listenTo(this.model, "destroy", this.remove);
      /**
       *  Nested factories
       *  A baguette have a factory collection
       *
       *  @property factories
       *  @type Object FactoryCollectionView
       *
       */
      var factoryCollection = new FactoryCollection();
      this.factories      = new FactoryCollectionView({collection: factoryCollection});
      factoryCollection.add({id: 0, name: "test", owned: 0, rentability: 1});
      factoryCollection.add({id: 1, name: "testu", owned: 1, rentability: 1});

      this.listenTo(this.factories.collection, "change", this.setBps);

      this.setBps();
    },

    /**
     *  Renders the view
     *
     *  @method render
     *  @return Object Baguette view properties
     */
    render: function () {
      "use strict";
      this.el.innerHTML = this.template(this.model.toJSON());
      return this;
    },

    /**
     *  Add baguettes
     *
     *  @method add
     */
    add: function () {
      "use strict";
      this.model.set("count", this.model.get("count") + this.model.get("bps"));
    },

    /**
     *  Set total factories' bps into the baguette bps
     *
     *  @method setBps
     */
    setBps: function () {
      "use strict";
      this.model.set("bps", this.factories.getBps());
    },

    /**
     *  Get factory last sell
     *
     *  @method getLastSell
     *  @returns {Integer} amount of factories on the last sell
     */
    getLastSell: function () {
      "use strict";
      return this.factories.collection.getLastSell();
    },

    /**
     *  Delete the view
     *
     *  @method remove
     */
    remove: function () {
      "use strict";
      this.model.destroy();
      this.factories.collection.destroy();
    },

    /**
     *  Reset all factories, stop the counting
     *  happens when the bps do not need to be updated anymore
     *
     *  @method reset
     */
    reset: function () {
      "use strict";
      this.undelegateEvents();
      this.model.set("amount", 0);
      this.model.set("bps", 0);
      this.factories.undelegateEvents();
    }
  });

module.exports = BaguetteView;
