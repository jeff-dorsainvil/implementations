import divideAndRule from '../DivideAndRule/divideAndRule'

describe('divideAndRule', () => {
  it('should return empty array when no queries provided', () => {
    const result = divideAndRule(3, ['a', 'b', 'c'], 0, [])
    expect(result).toEqual([])
  })

  it('should find no divisions if vocabulary does not match', () => {
    const vocabulary = ['x', 'y', 'z']
    const queries = ['ab']
    const result = divideAndRule(3, vocabulary, 1, queries)
    expect(result).toEqual([[0, []]])
  })

  it('should find correct divisions for single query', () => {
    const vocabulary = ['a', 'b', 'ab']
    const queries = ['aabb']
    const result = divideAndRule(3, vocabulary, 1, queries)
    expect(result).toEqual([[0, []]])
  })

  it('should handle multiple queries', () => {
    const vocabulary = ['a', 'b', 'c', 'ab', 'bc']
    const queries = ['abc', 'aabb', 'bca']
    const result = divideAndRule(5, vocabulary, 3, queries)
    expect(result).toEqual([
      [2, ['a:bc', 'ab:c']],
      [0, []],
      [1, ['bc:a']],
    ])
  })

  it('should not find divisions if query is not divisible', () => {
    const vocabulary = ['a', 'b', 'c']
    const queries = ['d']
    const result = divideAndRule(3, vocabulary, 1, queries)
    expect(result).toEqual([[0, []]])
  })

  it('should handle queries with no possible divisions', () => {
    const vocabulary = ['ab', 'bc', 'cd']
    const queries = ['abcd']
    const result = divideAndRule(3, vocabulary, 1, queries)
    expect(result).toEqual([[1, ['ab:cd']]])
  })

  it('should ignore empty strings in vocabulary', () => {
    const vocabulary = ['', 'a', 'bc']
    const queries = ['abc']
    const result = divideAndRule(3, vocabulary, 1, queries)
    expect(result).toEqual([[1, ['a:bc']]])
  })

  it('should handle case where entire query is in vocabulary', () => {
    const vocabulary = ['abc', 'a', 'bc']
    const queries = ['abc']
    const result = divideAndRule(3, vocabulary, 1, queries)
    expect(result).toEqual([[1, ['a:bc']]])
  })

  it('should handle case with duplicate entries in vocabulary', () => {
    const vocabulary = ['a', 'a', 'b', 'b']
    const queries = ['ab']
    const result = divideAndRule(4, vocabulary, 1, queries)
    expect(result).toEqual([[1, ['a:b']]])
  })

})
