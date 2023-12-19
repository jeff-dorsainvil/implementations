import Stack from "./Stack"

/**
 * The function `isParenthesisBalanced` checks if the parentheses in a given string are balanced or
 * not.
 * @param {string} text - The `text` parameter is a string that represents a sequence of characters.
 * The function `isParenthesisBalanced` checks if the parentheses in the `text` are balanced or not. It
 * uses a stack data structure to keep track of opening parentheses and matches them with closing
 * parentheses.
 * @returns a string value. If the parentheses in the input text are balanced, it returns "Correct".
 * Otherwise, it returns "Incorrect".
 */
export default function isParenthesisBalanced(text: string) {
  const stack = new Stack<string>()
  const characters = { ')': '(', '}': '{', ']': '[' }

  for (const char of text) {

    if (!characters[char as keyof typeof characters]) {
      if (char === "(" || char === "[" || char === "{")
        stack.push(char)
      else continue
    }

    else if (stack.pop() !== characters[char as keyof typeof characters])
      return "Incorrect"
  }
  return stack.size() === 0 ? "Correct" : "Incorrect"
}