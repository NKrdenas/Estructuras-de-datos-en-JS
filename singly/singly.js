// 1 --> 2 --> 3 --> 4 --> 5--> null 

// let snglyLinkedList = {
//     value:1,
//     next: {
//         value:2,
//         next: {
//             value:3,
//             next: {
//                 value:4,
//                 next:null   
//             }
//         }
//     }
// }

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class MySingleLinkedList{
    constructor(value){
        this.head = {
            value:value,
            next:null
        }
        this.tail = this.head
        this.length = 1
    }
    append(value){
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }
    prepend(value){
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }

    insert(index, value){
      if(index >= this.length){
        return this.append(value)
      }else if(index === 0){
        return this.prepend(value)
      } else if(index < 0){
        return 'el index indicado no existe'
      }
      const newNode = new Node(value)
      const firsPointer = this.getTheIndex(index - 1)
      const holdingPointer = firsPointer.next
      firsPointer.next = newNode
      newNode.next = holdingPointer
      this.length++
      return this
    }

    getTheIndex(index){
        let counter = 0
        let currentNode = this.head
        while(counter !== index){
            currentNode = currentNode.next
            counter++
        }

        return currentNode
    }
    remove(index) {
        if (index < 0 || this.head === null) {
          // Invalid index or empty list, nothing to remove
          return 'Invalid index'
        }else if (index === 0) {
          // Remove the head node
          this.head = this.head.next
           return 'LinkedList empty'
        }
    
        let currentNode = this.head
        let previousNode = null
        let counter = 0
    
        while (currentNode !== null) {
          if (counter === index) {
            // Remove the current node
            previousNode.next = currentNode.next
            return this
          }
          previousNode = currentNode
          currentNode = currentNode.next
          counter++
          return this
        }
      }

}

let myLinkedList = new MySingleLinkedList(1)
