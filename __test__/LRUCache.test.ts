import LRUCache from '../LRU/LRUCache'

describe('LRUCache', () => {
  // Test case 1: Testing basic cache functionality
  it('should store and retrieve values', () => {
    const cache = new LRUCache(3)
    cache.proxy('key1', (a, b) => a + b, 2, 3)
    cache.proxy('key2', (a, b) => a * b, 4, 5)
    cache.proxy('key3', (a, b) => a - b, 8, 3)

    expect(cache.proxy('key1', (a, b) => a + b, 2, 3)).toBe(5) // Cached value
    expect(cache.proxy('key2', (a, b) => a * b, 4, 5)).toBe(20) // Cached value
    expect(cache.proxy('key3', (a, b) => a - b, 8, 3)).toBe(5) // Cached value
    expect(cache.proxy('key4', (a, b) => a + b, 1, 1)).toBe(2) // New value
  })

  // Test case 2: Testing eviction of least recently used item
  it('should evict least recently used item when cache size exceeds max_size', () => {
    const cache = new LRUCache(3)
    cache.proxy('key1', (a, b) => a + b, 2, 3)
    cache.proxy('key2', (a, b) => a * b, 4, 5)
    cache.proxy('key3', (a, b) => a - b, 8, 3)
    cache.proxy('key4', (a, b) => a + b, 1, 1) // Exceeds max_size, should evict 'key1'

    expect(cache.proxy('key1', (a, b) => a + b, 2, 3)).toBe(5) // Cached value should be evicted
    expect(cache.proxy('key2', (a, b) => a * b, 4, 5)).toBe(20) // Cached value
    expect(cache.proxy('key3', (a, b) => a - b, 8, 3)).toBe(5) // Cached value
    expect(cache.proxy('key4', (a, b) => a + b, 1, 1)).toBe(2) // New value
  })

  // Test case 3: Testing recency counter functionality
  it('should reset recency of accessed item and increase recency of others', () => {
    const cache = new LRUCache(3)
    cache.proxy('key1', (a, b) => a + b, 2, 3)
    cache.proxy('key2', (a, b) => a * b, 4, 5)
    cache.proxy('key3', (a, b) => a - b, 8, 3)

    expect(cache.proxy('key1', (a, b) => a + b, 2, 3)).toBe(5) // Cached value, recency reset
    expect(cache.proxy('key2', (a, b) => a * b, 4, 5)).toBe(20) // Cached value, recency reset
    expect(cache.proxy('key3', (a, b) => a - b, 8, 3)).toBe(5) // Cached value, recency reset
    expect(cache.proxy('key4', (a, b) => a + b, 1, 1)).toBe(2) // New value

    // Expect that 'key2', 'key3', and 'key4' should have recency 2, 1, and 0 respectively
    // There will be no 'key1' as it will be ejected
    expect(cache.cache.get('key2')?.recency).toBe(2)
    expect(cache.cache.get('key3')?.recency).toBe(1)
    expect(cache.cache.get('key4')?.recency).toBe(0)
  })
})
