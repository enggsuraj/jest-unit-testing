const { objFunction } = require("../js/application");

describe("ADD TEST", () => {
  let input1 = 0;
  let input2 = 0;

  beforeAll(() => {
    console.log("BEFOREALL CALLED");
  });

  afterAll(() => {
    console.log("AFTERALL CALLED");
  });

  beforeEach(() => {
    console.log("BEFOREEACH CALLED called");
    input1 = 1;
    input2 = 2;
  });

  afterEach(() => {
    console.log("AFTEREACH CALLED");
  });

  test("ADD 1+ 2", () => {
    let result = objFunction.add(1, 2);
    expect(result).toBe(3);
  });
});
