import generateNonFibonacciNumbers from "../NonFib/nonFibSequence"

describe('generateNonFibonacciNumbers', () => {
  it('should generate the first 5 non-Fibonacci numbers', () => {
    const N = 5

    const expectedNumbers = [4, 6, 7, 9, 10]
    const nonFibonacciGenerator = generateNonFibonacciNumbers(N)

    const generatedNumbers = Array.from(nonFibonacciGenerator)

    expect(generatedNumbers).toEqual(expectedNumbers)
  })

  it('should generate the first 20 non-Fibonacci numbers', () => {
    const N = 20

    const expectedNumbers = [
      4, 6, 7, 9, 10, 11, 12, 14, 15, 16,
      17, 18, 19, 20, 22, 23, 24, 25, 26, 27,
    ]

    const nonFibonacciGenerator = generateNonFibonacciNumbers(N)
    const generatedNumbers = Array.from(nonFibonacciGenerator)

    expect(generatedNumbers).toEqual(expectedNumbers)
  })

  it('should return an empty sequence for non-positive values of n', () => {
    const generator = generateNonFibonacciNumbers(-1)
    expect(generator.next().done).toBe(true)
  })

  it('should return an empty sequence for n equal to zero', () => {
    const generator = generateNonFibonacciNumbers(0)
    expect(generator.next().done).toBe(true)
  })

  it('should handle the largest possible n value', () => {
    const generator = generateNonFibonacciNumbers(Number.MAX_SAFE_INTEGER)
    expect(generator.next().value).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER)
  })

})
