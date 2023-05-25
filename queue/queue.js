class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }
    peek(){
        return this.first
    }
    enqueue(value){
        const newNode = new Node(value)
        if(this.first == null){
            this.first = newNode
            this.last = newNode
        }else{
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this        
    }
    dequeue(){
        //Valida que hayan elementos en el stack
        if(this.length > 0){
            const dequeued = this.first
            this.first = this.first.next
            this.length--
            return dequeued
        }
        //En caso de que el stack este vacio
        return null
    }
}

let myQueue = new Queue()