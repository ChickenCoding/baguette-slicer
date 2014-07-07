(function () {

  "use strict";

  var AppModel = require("../../../../src/js/minimal/app/AppModel");

  describe("app model spec", function () {

    it("should initialize with parameters by default", function () {
      this.appModel = new AppModel();
      this.appModel.get("currentBaguette").should.equal(0);
      this.appModel.get("currentSellable").should.equal(0);
    });

    it("should initialize with given parameters", function () {
      this.appModel = new AppModel({currentBaguette: 5, currentSellable: 10});
      this.appModel.get("currentBaguette").should.equal(5);
      this.appModel.get("currentSellable").should.equal(10);
    });
  });
}(this));
