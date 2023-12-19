interface IStack<StackItemType> {
  push(item: StackItemType): void
  pop(): StackItemType | undefined
  size(): number
}

// Implementation of a simple Stack DS
class Stack<StackItemType> implements IStack<StackItemType> {
  private dataStorage: StackItemType[] = [];

  constructor(private capacity: number = Infinity) { }

  push(data: StackItemType): void {
    if (this.size() === this.capacity)
      throw Error("Stack is full! Can't add more items")
    this.dataStorage.push(data)
  }

  pop(): StackItemType | undefined {
    return this.dataStorage.pop()
  }

  size(): number {
    return this.dataStorage.length
  }
}

export default Stack