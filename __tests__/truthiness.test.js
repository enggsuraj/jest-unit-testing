const { objFunction, reverseString } = require("../js/application");

test("Null", () => {
  expect(objFunction.cloneArray([])).not.toBeNull();
});

test("Object", () => {
  expect(objFunction.createUser()).toEqual({ name: "blogtheorem", ID: 123 });
});

test("Reverse", () => {
  expect(reverseString("abc")).toEqual("cba");
});
