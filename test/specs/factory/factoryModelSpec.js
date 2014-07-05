define([
  "../../../src/js/minimal/factory/FactoryModel",
  "backbone",
  "chai"
], function (
  FactoryModel,
  Backbone,
  Chai
) {
  "use strict";

  describe("factory model spec", function () {

    it("should initialize with parameters by default", function () {
      this.factoryModel = new FactoryModel();
      this.factoryModel.get("id").should.equal(0);
      this.factoryModel.get("name").should.equal("");
      this.factoryModel.get("sellRatio").should.equal(0.25);
      this.factoryModel.get("owned").should.equal(0);
      this.factoryModel.get("rentability").should.equal(0);
      this.factoryModel.get("lastSell").should.equal(this.factoryModel.get("owned"));

    });

    it("should initialize with given parameters", function () {
      this.factoryModel = new FactoryModel({
        id: 1,
        name: "sample",
        sellRatio: 1,
        owned: 5,
        rentability: 3
      });
      this.factoryModel.get("id").should.equal(1);
      this.factoryModel.get("name").should.equal("sample");
      this.factoryModel.get("sellRatio").should.equal(1);
      this.factoryModel.get("owned").should.equal(5);
      this.factoryModel.get("rentability").should.equal(3);
      this.factoryModel.get("lastSell").should.equal(this.factoryModel.get("owned"));
    });

  });
});
