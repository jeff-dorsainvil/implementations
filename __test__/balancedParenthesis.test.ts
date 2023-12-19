import isParenthesisBalanced from "../Brackets/isParenthesisBalanced"

describe("isParenthesisBalanced", () => {
	it('returns "Correct" for an empty string', () => {
		expect(isParenthesisBalanced("")).toBe("Correct")
	})

	it('returns "Correct" for a string with balanced parentheses', () => {
		expect(isParenthesisBalanced("()")).toBe("Correct")
		expect(isParenthesisBalanced("[]")).toBe("Correct")
		expect(isParenthesisBalanced("{}")).toBe("Correct")
		expect(isParenthesisBalanced("([])")).toBe("Correct")
		expect(isParenthesisBalanced("{[()]}")).toBe("Correct")
		expect(isParenthesisBalanced("({[()]})")).toBe("Correct")
	})

	it('returns "Incorrect" for a string with unbalanced parentheses', () => {
		expect(isParenthesisBalanced("(")).toBe("Incorrect")
		expect(isParenthesisBalanced("[")).toBe("Incorrect")
		expect(isParenthesisBalanced("(]")).toBe("Incorrect")
		expect(isParenthesisBalanced("{)")).toBe("Incorrect")
		expect(isParenthesisBalanced("[(])")).toBe("Incorrect")
		expect(isParenthesisBalanced("(abcd")).toBe("Incorrect")
	})

	it('returns "Correct" for complex strings with balanced parentheses', () => {
		expect(isParenthesisBalanced("[({})]")).toBe("Correct")
		expect(isParenthesisBalanced("((a + b) - c)")).toBe("Correct")
		expect(isParenthesisBalanced("{abc(123)}")).toBe("Correct")
		expect(isParenthesisBalanced("{ab(cd[ef]gh){ij(kl)mn}op}")).toBe("Correct")
	})

	it('returns "Incorrect" for complex strings with unbalanced parentheses', () => {
		expect(isParenthesisBalanced("({[]}")).toBe("Incorrect")
		expect(isParenthesisBalanced("[({}]")).toBe("Incorrect")
		expect(isParenthesisBalanced("([]({[]}")).toBe("Incorrect")
		expect(isParenthesisBalanced("([)]")).toBe("Incorrect")
		expect(isParenthesisBalanced("{(})")).toBe("Incorrect")
		expect(isParenthesisBalanced("((a + b) - c")).toBe("Incorrect")
	})

	it('should handle strings with no parentheses as "Correct"', () => {
		expect(isParenthesisBalanced("")).toBe("Correct")
		expect(isParenthesisBalanced("abcdefg")).toBe("Correct")
	})
})
