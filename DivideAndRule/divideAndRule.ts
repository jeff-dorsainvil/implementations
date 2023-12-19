/**
 * problem statement: 
  The number `N` is supplied as input, then `N` words consisting of Latin characters are supplied.
  These words form the vocabulary of a language known to us.
  Next, the number `K` is supplied as input, then `K` strings consisting of Latin characters are supplied.
  You need to check whether a string is a concatenation of exactly two known words.
  The output for each line returns the number of all possible concatenations,
  and then the division options themselves in any order, separated by a space, with a colon placed at the point of division.

  Here we assume that `K` is large enough to require the algorithm to run as fast as possible,
  at the possible cost of additional memory. `S` and the strings themselves in the problem could represent the dictionary of some real popular language.

  Additionally, for your solution to the problem, evaluate the complexity in terms of big O, 
  where `S` denotes the average length of the query string, and `L` denotes the average length of the dictionary string. 
  For example, O(N^2 * L^2 * KS).

 * This function checks whether a string is a concatenation of exactly two known words.
 * @param N The number of words in the vocabulary.
 * @param vocabulary An array of words in the vocabulary.
 * @param K The number of queries.
 * @param queries An array of query strings.
 * @returns An array of tuples, where each tuple contains the count of possible concatenations and the actual concatenations.
 */
export default function divideAndRule(N: number, vocabulary: string[], K: number, queries: string[]): [number, string[]][] {
  // Process queries
  const results: [number, string[]][] = []

  for (let i = 0; i < K; i++) {
    const query = queries[i]
    const foundDivisions: string[] = []

    // Iterate over all possible divisions of the query string
    for (let j = 1; j < query.length; j++) {
      const prefix: string = query.slice(0, j)
      const suffix: string = query.slice(j)

      // Check if prefix and suffix exist in the vocabulary array
      let prefixExists = false
      let suffixExists = false

      for (let k = 0; k < N; k++) {
        if (vocabulary[k] === prefix) prefixExists = true
        if (vocabulary[k] === suffix) suffixExists = true
      }

      // If both prefix and suffix exist, add the division to the results
      if (prefixExists && suffixExists) foundDivisions.push(`${prefix}:${suffix}`)
    }

    // Add the count and divisions for the current query to the results
    results.push([foundDivisions.length, foundDivisions])
  }

  return results
}