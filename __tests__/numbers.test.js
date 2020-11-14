const { objFunction } = require("../js/application");

test("IS GREATER", () => {
  expect(objFunction.isGreater()).toBeGreaterThan(3);
  expect(objFunction.isGreater()).toBeGreaterThanOrEqual(5);
  expect(objFunction.isGreater()).toBeLessThan(10);
  expect(objFunction.isGreater()).toBeGreaterThan(3);
});
