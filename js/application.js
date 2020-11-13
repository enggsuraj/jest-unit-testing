const objFunction = {
  add: (a, b) => a + b,
  isNull: () => null,
  checkvalue: (x) => x,
  cloneArray: (array) => {
    return [...array];
  },
  createUser: () => {
    const user = { name: "blogtheorem", ID: 123 };
    return user;
  },
  // fetchUser: async () => {
  //   const response = await fetch("https://api.github.com/users");
  //   const res = await response.json();
  //   return res;
  // },
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

const reverseString = (str) => {
  let data = str.split("");
  return data.reverse().join("");
};

module.exports = {
  objFunction,
  positive,
  negative,
  reverseString,
};
