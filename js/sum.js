const add = (a, b) => a + b;
const mul = (a, b) => a * b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;

const cloneArray = (array) => {
  return [...array];
};

const sum = (vals) => {
  let sum = 0;

  vals.forEach((val) => {
    sum += val;
  });

  return sum;
};

const positive = (vals) => {
  return vals.filter((x) => {
    return x > 0;
  });
};

const negative = (vals) => {
  return vals.filter((x) => {
    return x < 0;
  });
};

const hello = () => {
  return "hello";
};

module.exports = {
  add,
  mul,
  sub,
  div,
  cloneArray,
  sum,
  positive,
  negative,
  hello,
};
