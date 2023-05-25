class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null
        this.bottom = null
        this.length = 0
    }
    peek(){
        return this.top
    }
    push(value){
        const newNode = new Node(value)
        if(this.top == null){
            this.top = newNode
            this.bottom = newNode
        }else{
            const holdingPointer = this.top
            this.top = newNode
            this.top.next = holdingPointer
        }
        this.length++
        return this        
    }
    pop(){
        //Valida que hayan elementos en el stack
        if(this.length > 0){
            const popped = this.top
            this.top = this.top.next
            this.length--
            return popped
        }
        //En caso de que el stack este vacio
        return null
    }
}

const myStack = new Stack()