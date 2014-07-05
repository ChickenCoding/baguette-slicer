(function() {
  "use strict";
  require.config({
    paths: {
      backbone: "../../bower_components/exoskeleton/exoskeleton",
      mocha: "../../node_modules/mocha/mocha",
      chai: "../../node_modules/chai/chai"
    },
    shim: {
      backbone: {
        exports: "Backbone"
      },
      mocha: {
        exports: "Mocha"
      },
      chai: {
        deps: ["mocha"],
        exports: "Chai"
      }
    }
  });

  /*
   * PhantomJs got an issue with Function#bind
   * Let's fix this
   *
   */
  if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
      if (typeof this !== "function") {
        throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
      }
      var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function () {return;},
        fBound = function () {
          return fToBind.apply(this instanceof fNOP && oThis?
              this:
              oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
        };
      fNOP.prototype = this.prototype;
      fBound.prototype = new fNOP();
      return fBound;
    };
  }

  define("jquery", function () {
    "use strict";
    return;
  });

  define("underscore", ["backbone"], function (Backbone) {
    "use strict";
    return Backbone.utils;
  });

  require(["chai"], (function(Chai) {
    mocha.setup("bdd");
    window.should = void 0;
    return window.should = Chai.should();
  }));

  require([
    "hello/helloSpec",
    "app/appModelSpec",
    "baguette/baguetteModelSpec",
    "factory/factoryModelSpec"
  ], (function(
    helloSpec,
    appModelSpec,
    baguetteModelSpec,
    factoryModelSpec
  ) {
    if (window.mochaPhantomJS != null) {
      return mochaPhantomJS.run();
    } else {
      return mocha.run();
    }
  }));


}(this));
