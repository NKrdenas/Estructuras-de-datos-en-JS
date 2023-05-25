class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null
    }
}

class MyDoublyLinkedList{
    constructor(value){
        this.head = {
            value:value,
            next:null,
            prev :null
        }
        this.tail = this.head
        this.length = 1
    }
    append(value){
        const newNode = new Node(value)
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }
    prepend(value){
        const newNode = new Node(value)
        this.head.prev = newNode
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
      const prevPointer = this.getTheIndex(index - 1)
      const nextPointer = prevPointer.next
      newNode.prev = prevPointer
      newNode.next = nextPointer
      prevPointer.next = newNode
      nextPointer.prev = newNode
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
        if (index < 0) {
          console.log("Invalid index. Index must be a non-negative integer.");
          return;
        }
        if (!this.head) {
          console.log("The doubly linked list is empty.");
          return;
        }
        if (index === 0) {
          // Remove the head node
          if (this.head === this.tail) {
            // If there's only one node in the list
            this.head = null;
            this.tail = null;
          } else {
            this.head = this.head.next;
            this.head.prev = null;
          }
        } else {
          let currentNode = this.head;
          let counter = 0;

          while (currentNode && counter < index) {
            currentNode = currentNode.next;
            counter++;
          }
          if (!currentNode) {
            console.log("Invalid index. Index exceeds the length of the list.");
            return;
          }
          if (currentNode === this.tail) {
            // Remove the tail node
            this.tail = this.tail.prev;
            this.tail.next = null;
          } else {
            // Remove a node in between head and tail
            const previousNode = currentNode.prev;
            const nextNode = currentNode.next;
    
            previousNode.next = nextNode;
            nextNode.prev = previousNode;
          }
          return this
        }
    }
}
let myLinkedList = new MyDoublyLinkedList(1)