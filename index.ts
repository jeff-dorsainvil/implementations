import isParenthesisBalanced from "./Brackets"
import divideAndRule from "./DivideAndRule"
import LRUCache from "./LRU"
import generateNonFibonacciNumbers from "./NonFib"

function matchingParenthesisExample() {
  console.log(isParenthesisBalanced("()"))
  console.log(isParenthesisBalanced("()[]{}"))
  console.log(isParenthesisBalanced("(]"))
  console.log(isParenthesisBalanced("{a}"))
  console.log(isParenthesisBalanced(""))
}

function nonFibSequenceExample() {
  // Example
  const N = 1000 // Specify the number of non-fibonacci numbers to output

  for (const number of generateNonFibonacciNumbers(N)) {
    console.log(number) // Print each non-fibonacci number on a separate line
  }
}

function LRUCacheExample() {
  // Example:
  const lruCache = new LRUCache(3) // Set the maximum cache size to 3

  // Proxying method usage
  lruCache.proxy("screens", (a: number, b: number) => a + b, 2, 3)

  lruCache.proxy("speakers", (a: number, b: number) => a * b, 10, 2)

  lruCache.proxy("keyboards", (a: number, b: number) => a + b, 8, 10)

  lruCache.proxy("speakers", (a: number, b: number) => a + b, 10, 2) // Already in the cache
  lruCache.proxy("mouses", (a: number, b: number) => a + b, 4, 3) // Removes 'screens' and add mouses

  // Cache contents after usage
  console.log(lruCache.cache)

}

function divideAndRuleExample() {
  // Example usage
  const N = 5
  const vocabulary = ['abcd', 'cdef', 'ab', 'ef', 'ffff']
  const K = 2
  const queries = ['abcdef', 'ffff']

  // Get the results using the divideAndRule function
  const results = divideAndRule(N, vocabulary, K, queries)

  // Output results
  for (const [count, divisions] of results) {
    console.log(count, ...divisions)
  }
}

// divideAndRuleExample()
LRUCacheExample()