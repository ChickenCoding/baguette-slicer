define([
  "backbone",
  "microtemplates",
  "factory/FactoryModel"
], function (
  Backbone,
  Microtemplate,
  FactoryModel
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
   *  Factory view
   *
   *  @class FactoryView
   *  @extends Backbone
   *  @constructor
   */
  var FactoryView = Backbone.View.extend({
    /**
     *  Link to the model
     *
     *  @attribute model
     *  @extends Backbone.Model
     *  @type Object
     *  @default FactoryModel
     */
    model: FactoryModel,

    /**
     *
     *  @attribute tagName
     *  @type String
     *  @default "li"
     */
    tagName: "li",

    /**
     *  Set the view template
     *
     *  @attribute template
     *  @extends Microtemplates
     *  @type Object
     *  @default DOM selector
     */
    template: new Microtemplate(document.querySelector("#factory-view").innerHTML),

  /**
   *  Events listener
   *
   *  @attribute event
   *
   */
    events: {

      /**
       *  Buy a factory
       *
       *  @event click:buy
       */
      "click .buy": "buy",

      /**
       *  Sell a factory
       *
       *  @event click:sell
       */
      "click .sell": "sell"
    },

    /**
     *  Observe model changes
     *
     *  @method initialize
     */
    initialize: function () {
      this.listenTo(this.model, "change", this.render, this);

    },

    /**
     *  Renders the view
     *
     *  @method render
     *  @return Object view
     */
    render: function () {
      var data = this.model.toJSON();
      this.el.innerHTML = this.template(data);
      return this;
    },

    /**
     *  Buy a factory
     *
     *  @method buy
     *  @param Object event
     */
    buy: function (event) {
      event.preventDefault();
      var amount = parseInt(event.target.value, 10),
        owned = this.model.get("owned");
      this.model.set("owned", owned + amount);
      this.model.set("lastSell", amount);
    },

    /**
     *  Sell a factory
     *
     *  @method  sell
     *  @param Object event
     */
    sell: function (event) {
      event.preventDefault();
      var owned = this.model.get("owned"),
        amount,
        value = parseInt(event.target.value, 10);
      if (event.target.value === "all") {
        this.model.set("lastSell", -(owned * this.model.get("rentability")));
        amount = 0;
      } else if (owned - value >= 0) {
        this.model.set("lastSell", -value);
        amount = owned - value;
      } else {
        amount = 0;
      }
      this.model.set("owned", amount);
    }
  });
  return FactoryView;
});
