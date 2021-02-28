const multiply = require(".");

test("add 9 * 5 to be equal 45", () => {
	expect(multiply(9, 5)).toBe(45);
});
