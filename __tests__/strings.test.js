const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "beer",
];

test("TO CONTAIN", () => {
  expect(shoppingList).toContain("beer");
  expect(new Set(shoppingList)).toContain("beer");
});

test("TO MATCH", () => {
  expect("Christoph").toMatch(/stop/);
});

test("NOT TO MATCH", () => {
  expect("team").not.toMatch(/I/);
});
