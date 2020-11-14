const objFunction = {
  add: (a, b) => a + b,
  isNull: () => null,
  isUndefined: () => {
    let x;
    return x;
  },
  isTruthy: () => true,
  checkvalue: (x) => x,
  cloneArray: (array) => {
    return [...array];
  },
  createUser: () => {
    const user = { name: "blogtheorem" };
    user["ID"] = 123;
    return user;
  },
  reverseString: (str) => {
    return str.split("").reverse().join("");
  },
  isGreater: () => 5,
};

// + VALUE
const positive = (vals) => {
  return vals.filter((x) => {
    return x > 0;
  });
};

// - VALUE
const negative = (vals) => {
  return vals.filter((x) => {
    return x < 0;
  });
};

module.exports = {
  objFunction,
  positive,
  negative,
};
