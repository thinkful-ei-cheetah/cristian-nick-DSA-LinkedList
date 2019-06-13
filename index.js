class _Node {
  constructor(val, next) {
    this.val = val
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head)
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item)
    } else {
      let tempNode = this.head
      while (tempNode.next !== null) {
        tempNode = tempNode.next
      }
      tempNode.next = new _Node(item, null)
    }
  }

  insertBefore(newItem, beforeItem) {
    if (this.head === null) {
      this.insertFirst(newItem)
      return
    }

    let currNode = this.head
    let prevNode = this.head

    while (currNode !== null && currNode.val !== beforeItem) {
      prevNode = currNode
      currNode = currNode.next
    }

    if (currNode === null) {
      this.insertLast(newItem)
      return
    }

    const tempNode = new _Node(newItem, currNode)

    prevNode.next = tempNode
  }

  insertAfter(newItem, afterItem) {
    if (this.head === null) {
      this.insertFirst(newItem)
      return
    }

    let currNode = this.find(afterItem)

    if (currNode === null) {
      this.insertLast(newItem)
      return
    }

    const tempNode = new _Node(newItem, currNode.next)

    currNode.next = tempNode
  }

  insertAt(item, position) {
    if (this.head === null) {
      this.insertFirst(item)
      return
    }

    let currNode = this.head
    let currPosition = 1

    while (currPosition < position - 1) {
      currNode = currNode.next
      currPosition++
    }

    const tempNode = new _Node(item, currNode.next)

    currNode.next = tempNode
  }

  remove(item) {
    if (!this.head) {
      return null
    }

    if (this.head.val === item) {
      this.head = this.head.next
      return
    }

    let currNode = this.head
    let prevNode = this.head

    while (currNode !== null && currNode.val !== item) {
      prevNode = currNode
      currNode = currNode.next
    }

    if (currNode === null) {
      console.log('item not found')
      return
    }
    prevNode.next = currNode.next
  }

  find(item) {
    let currNode = this.head

    if (!this.head) {
      return null
    }

    while (currNode.val !== item) {
      if (currNode.next === null) {
        return null
      } else {
        currNode = currNode.next
      }
    }
    return currNode
  }
}

function main() {
  const SLL = new LinkedList()

  SLL.insertFirst('Apollo')
  SLL.insertLast('Boomer')
  SLL.insertLast('Helo')
  SLL.insertLast('Husker')
  SLL.insertLast('Starbuck')

  SLL.insertLast('Tauhida')

  // returns item not found
  // SLL.remove('squirrel')

  SLL.insertBefore('Athena', 'Boomer')
  SLL.insertAfter('Hotdog', 'Helo')

  SLL.insertAt('Kat', 3)

  SLL.remove('Tauhida')

  return SLL
}

const LL = main()

function display(LL) {
  let output = ''

  let currNode = LL.head

  while (currNode !== null) {
    output += currNode.val

    if (currNode.next !== null) {
      output += ' -> '
    }

    currNode = currNode.next
  }

  console.log(output)
  // return output
}

display(LL)

function size(LL) {
  let size = 0

  let currNode = LL.head

  while (currNode !== null) {
    size++
    currNode = currNode.next
  }

  return size
}

const emptyLL = new LinkedList()
// console.log(size(emptyLL))
// console.log(size(LL))

function isEmpty(LL) {
  if (LL.head === null) {
    return true
  }

  return false
}

// console.log(isEmpty(emptyLL))
// console.log(isEmpty(LL))

function findPrevious(item, LL) {
  if (LL.head === null) {
    console.log(`linked list is empty!`)
    return
  }

  let currNode = LL.head
  let prevNode = LL.head

  while (currNode !== null && currNode.val !== item) {
    prevNode = currNode
    currNode = currNode.next
  }

  if (currNode === null) {
    console.log('Item not found')
    return
  }

  return console.log(prevNode.val)
}

// findPrevious('Kat', LL)
// findPrevious('Kat', emptyLL)
// findPrevious('Falsy', LL)

function findLast(LL) {
  //[1-> 2 -> 3]
  if (LL.head === null) {
    return 'linked list is empty'
  }

  let currNode = LL.head

  while (currNode.next !== null) {
    currNode = currNode.next
  }

  return currNode.val
}

// console.log(findLast(LL))
// console.log(findLast(emptyLL))

// Input = 1->2->3
// (1) current = 1
//     newNode = 1
//     newNode.next = 2

// 4. Removes duplicates in a Linked List with O(n^2)

function reverseListIter(LL) {
  // A -> B -> C
  let currNode = LL.head // A
  let prevNode = LL.head // A
  let nextNode = currNode.next // B

  while (nextNode !== null) {
    if (currNode === prevNode) {
      currNode.next = null // A -> null
    } else {
      currNode.next = prevNode // B -> A -> null
    }
    prevNode = currNode // prev = B
    currNode = nextNode // curr = C
    nextNode = nextNode.next // next = null
  }

  if (nextNode === null) {
    LL.head = currNode // head -> C -> B
    currNode.next = prevNode
  }

  return LL
}

// display(reverseListIter(LL))

function thirdToLast(LL) {
  let currNode = LL.head

  while (currNode.next.next.next !== null) {
    currNode = currNode.next
  }

  return currNode.val
}

// function nToLast(LL, n) {
//   let currNode = LL.head
//   let next = currNode +

//   for(let i=1; i < n; i++) {

//   }

//   while (currNode !== null) {
//     currNode = currNode.next;
//   }

//   return currNode.val
// }

// console.log(thirdToLast(LL))

// function middle(LL) {
//   let currNode = LL.head;
//   let arr = [];

//   while (currNode !== null) {
//     arr.push(currNode.val);
//     currNode = currNode.next;
//   }

//   const item = arr[Math.floor(arr.length/2)]

//   return LL.find(`${item}`)
// }

function middle(LL) {
  let slowNode = LL.head
  let fastNode = LL.head

  while (fastNode !== null) {
    fastNode = fastNode.next.next
    slowNode = slowNode.next
  }

  return slowNode.val
}

console.log(middle(LL))

const newLinkedList = new LinkedList()
newLinkedList.insertFirst('A')
newLinkedList.insertLast('B')
newLinkedList.insertLast('C')
newLinkedList.insertLast('D')

function makeCycle(LL) {
  let currNode = LL.head

  while (currNode.next !== null) {
    currNode = currNode.next
  }

  currNode.next = LL.head

  return LL

  // if (LL.head === null) {
  //   LL.insertFirst(item)
  // } else {
  //   let tempNode = LL.head
  //   while (tempNode.next !== null) {
  //     tempNode = tempNode.next
  //   }
  //   tempNode.next = new _Node(item, LL.head)
  // }
}

display(newLinkedList)
// console.log(newLinkedList.find('D'))
// console.log(makeCycle(newLinkedList).find('D'))

function cycleList(CL) {
  // A B C D
  const listHead = CL.head // lihead = A
  let currNode = CL.head.next // curr = D

  // console.log(listHead.val + ' ' + currNode.val)

  while (currNode.next !== null && currNode.next !== listHead) {
    // console.log(currNode.val + ' ' + currNode.next.val)
    currNode = currNode.next
    // console.log(currNode.val + ' ' + currNode.next.val)
  }

  if (currNode.next === listHead) {
    return true
  } else {
    return false
  }
}

const newLinkedList2 = new LinkedList()
newLinkedList2.insertFirst('A')
newLinkedList2.insertLast('B')
newLinkedList2.insertLast('C')
newLinkedList2.insertLast('D')

const cycleLinkedList = makeCycle(newLinkedList)

console.log(cycleList(newLinkedList2))
console.log(cycleList(cycleLinkedList))
