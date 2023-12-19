/**
 * @brief This generator function generates a sequence of non-Fibonacci numbers up to a 
 * specified limit n.
 * @param n number - The upper limit for generating non-Fibonacci numbers. The function
 * generates non-Fibonacci numbers up to this limit (inclusive).
 * 
 * 'n' must be a positive integer within the range of safe integer values.
 * 
 * @yields A sequence of non-Fibonacci numbers as a generator.
 * 
 * @notes The function uses mathematical approximations based on the Golden Ratio to generate
 *  non-Fibonacci numbers efficiently.
 *  Typically O(1) for calculation.
 *  O(n) overall function complexity
 * 
 * References: 
 * [Gould, H.W. 1965. "Non-Fibonacci Numbers." Fibonacci Quarterly, no. 3: 177–83.] (http://www.fq.math.ca/Scanned/3-3/gould.pdf)
 * [Farhi, Bakir. 2011. "An explicit formula generating the non-Fibonacci numbers."](arXiv abs/1105.1127 [Math.NT] (May): 1–5. <https://arxiv.org/abs/1105.1127>)
*/
export default function* generateNonFibonacciNumbers(n: number) {
  if (n > 0 && n <= Number.MAX_SAFE_INTEGER) {
    n += 1

    for (let i = 1; i < n; i++) {
      let current = i + 1

      let sqrt5 = 2.23606797749979
      let phi = 1.618033988749895

      let a = Math.log2(current * sqrt5) / Math.log2(phi)
      let b = Math.log2(sqrt5 * (current + a) - 5.0 + 3.0 / current) / Math.log2(phi)

      yield Math.floor(current + b - 2.0)

    }
  }
}