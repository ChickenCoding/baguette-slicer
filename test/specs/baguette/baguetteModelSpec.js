define([
  "../../../src/js/minimal/baguette/BaguetteModel",
  "backbone",
  "chai"
], function (
  BaguetteModel,
  Backbone,
  Chai
) {
  "use strict";

  describe("baguette model spec", function () {

    it("should initialize with parameters by default", function () {
      this.baguetteModel = new BaguetteModel();
      this.baguetteModel.get("id").should.equal(0);
      this.baguetteModel.get("amount").should.equal(0);
      this.baguetteModel.get("bps").should.equal(0);
    });

    it("should initialize with given parameters", function () {
      this.baguetteModel = new BaguetteModel({id: 1, amount: 200, bps: 60});
      this.baguetteModel.get("id").should.equal(1);
      this.baguetteModel.get("amount").should.equal(200);
      this.baguetteModel.get("bps").should.equal(60);
    });

  });
});
