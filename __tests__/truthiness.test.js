const { objFunction } = require("../js/application");

/*

expect(n).toBeNull();
expect(n).toBeDefined();
expect(n).not.toBeUndefined();
expect(n).not.toBeTruthy();
expect(n).toBeFalsy();

expect(value).toBeGreaterThan(3);
expect(value).toBeGreaterThanOrEqual(3.5);
expect(value).toBeLessThan(5);
expect(value).toBeLessThanOrEqual(4.5);

*/

test("NULL", () => {
  expect(objFunction.cloneArray([])).not.toBeNull();
});

test("UNDEFINED", () => {
  expect(objFunction.isUndefined()).toBeUndefined();
});

test("TRUE", () => {
  expect(objFunction.isTruthy()).toBeTruthy();
});

test("OBJECT", () => {
  expect(objFunction.createUser()).toEqual({ name: "blogtheorem", ID: 123 });
});

test("REVERSE", () => {
  expect(objFunction.reverseString("abc")).toEqual("cba");
});
