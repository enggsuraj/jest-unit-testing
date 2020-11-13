const {
  add,
  mul,
  sub,
  div,
  cloneArray,
  sum,
  positive,
  negative,
} = require("../js/sum");

let vals;
let sum_of_vals;
let pos_vals;
let neg_vals;

pos_vals = [2, 1, 3];
neg_vals = [-2, -1, -1];
vals = pos_vals.concat(neg_vals);
sum_of_vals = vals.reduce((x, y) => x + y, 0);

test("2 + 3 = 5", () => {
  expect(add(2, 3)).toBe(5);
});

test.skip("3 * 4 = 12", () => {
  expect(mul(3, 4)).toBe(12);
});

test("5 - 6 = -1", () => {
  expect(sub(5, 6)).toBe(-1);
});

test("8 / 4 = 2", () => {
  expect(div(8, 4)).toBe(2);
});

test("Clone array", () => {
  let arr = [1, 2, 3];
  expect(cloneArray(arr)).toEqual([1, 2, 3]);
});

test("the sum of vals should be 2", () => {
  expect(sum(vals)).toBe(sum_of_vals);
});

test("should get positive values", () => {
  expect(positive(vals)).toEqual(pos_vals);
});

test("should get negative values", () => {
  expect(negative(vals)).toEqual(neg_vals);
});
