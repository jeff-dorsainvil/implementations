// Helper class for cache nodes
class LRUCacheNode {
  key: string
  value: any
  next: LRUCacheNode | null
  prev: LRUCacheNode | null
  recency: number

  constructor(key: string, value: any) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
    this.recency = 0
  }
}

type ProxyFunction = (...args: any[]) => any

/**
 * @description: The LRUCache class implements a Least Recently Used (LRU) cache, which stores 
 * key-value pairs and evicts the least recently used item when the cache reaches its maximum
 * size.
 * 
 **/

export default class LRUCache {
  private max_size: number
  cache: Map<string, LRUCacheNode>
  private head: LRUCacheNode | null
  private tail: LRUCacheNode | null

  constructor(max_size: number) {
    this.max_size = max_size
    this.cache = new Map()
    this.head = null
    this.tail = null
  }

  /**
   * @description: Proxying method to retrieve or compute values based on the LRU cache policy.
   * 
   * It takes as input a key, a function and its arguments.
   * If the value for the key is in the cache, then it does not call the function, but
   * returns the value from the cache, if such a key is not in the cache, then the function 
   * with the passed arguments is executed, its result is written to the cache and returned.
   * 
   * @param key The key for the cache.
   * @param func The function to be executed if the key is not in the cache.
   * @param args Arguments to be passed to the function <func>.
   * @returns The value associated with the key or the result of executing 'func(args)'.
   */
  proxy(key: string, func: ProxyFunction, ...args: any[]): any {
    if (this.cache.has(key)) {
      // If key is in the cache, move it to the front and reset recency
      const cachedNode = this.cache.get(key)!
      this.updateRecencyCounter(cachedNode.key)
      this.moveToFront(cachedNode)

      return cachedNode.value

    } else {
      // Execute the function with the provided arguments
      const result = func(...args)

      // Add the result to the cache
      this.addToCacheAndUpdateRecencyCounter(key, result)

      return result
    }
  }

  /**
   * Add a key-value pair to the cache.
   * @param key The key to be added.
   * @param value The value to be added.
   */
  private addToCacheAndUpdateRecencyCounter(key: string, value: any): void {
    if (this.cache.size >= this.max_size) {
      // Remove the least recently used node from the cache
      const leastRecentlyUsedKey = this.findLeastRecentlyUsedKey()
      this.cache.delete(leastRecentlyUsedKey)
      this.removeTail()
    }

    const newNode = new LRUCacheNode(key, value)
    this.cache.set(key, newNode)

    // Add the new node to the front
    this.updateRecencyCounter(newNode.key)
    this.addToFront(newNode)
  }

  /**
   * Move the given node to the front of the linked list.
   * @param node The node to move to the front.
   */
  private moveToFront(node: LRUCacheNode): void {
    if (this.head === node) return // Node is already at the front

    this.removeNode(node)
    this.addToFront(node)
  }

  /**
   * Add the given node to the front of the linked list.
   * @param node The node to add to the front.
   */
  private addToFront(node: LRUCacheNode): void {
    if (this.head === null) {
      // List is empty, set the node as both head and tail
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head.prev = node
      this.head = node
    }

  }

  /**
   * Remove the least recently used node from the cache.
   */
  private removeTail(): void {
    if (this.tail === null) {
      return
    }

    if (this.tail === this.head) {
      // Only one node in the list
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail.prev
      if (this.tail !== null) {
        this.tail.next = null
      }
    }
  }

  /**
   * Remove the given node from the linked list.
   * @param node The node to remove.
   */
  private removeNode(node: LRUCacheNode): void {
    if (node.prev !== null) {
      node.prev.next = node.next
    } else {
      this.head = node.next
    }

    if (node.next !== null) {
      node.next.prev = node.prev
    } else {
      this.tail = node.prev
    }
  }

  /**
   * Find the key of the least recently used node.
   * @returns The key of the least recently used node.
   */
  private findLeastRecentlyUsedKey(): string {
    let leastRecentlyUsedKey = ""
    let maxRecency = -1

    this.cache.forEach((node, key) => {
      if (node.recency > maxRecency) {
        maxRecency = node.recency
        leastRecentlyUsedKey = key
      }
    })

    return leastRecentlyUsedKey
  }

  /**
   * Update the recency counter for all cache items.
   */
  private updateRecencyCounter(excludedKey: string): void {
    this.cache.forEach((node, key) => {
      if (key !== excludedKey)
        node.recency++

      else node.recency = 0
    })

  }
}