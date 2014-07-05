define(["chai"], function (Chai) {
  describe("hello", function () {
    it("should say hello", function () {
      var hello = "hello";
      hello.should.be.a("string");
    });
  });
});
