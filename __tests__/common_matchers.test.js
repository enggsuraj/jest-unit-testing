const { objFunction, positive, negative } = require("../js/application");

let pos_vals = [2, 1, 3];
let neg_vals = [-2, -1, -1];
let vals = pos_vals.concat(neg_vals);

// toBe
test("2 + 3 = 5", () => {
  expect(objFunction.add(2, 3)).toBe(5);
});

// .not.toBe
test("2 + 3 = 5", () => {
  expect(objFunction.add(5, -3)).not.toBe(1);
});

// toEqual
test("Clone array", () => {
  let arr = [1, 2, 3];
  expect(objFunction.cloneArray(arr)).toEqual([1, 2, 3]);
});

test("+ values", () => {
  expect(positive(vals)).toEqual(pos_vals);
});

test("- negative values", () => {
  expect(negative(vals)).toEqual(neg_vals);
});
