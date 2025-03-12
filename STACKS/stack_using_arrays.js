class Stack{
    constructor(){
        this.items=[];
    }

    // push(x) - adds x to the top of the stack
    push(element){
        this.items.push(element);
    }
    
    // pop() - removes the top element from the stack.
    pop(){
        if(this.isEmpty())
            return "Stack is empty";
        return this.items.pop();
    }
    
    // peek() - returns the top element without removing it.
    peek(){
        if(this.isEmpty())
            return "stack is empty";
        return this.items[this.items.length-1]; //returns last element
    }

    // isEmpty()- checks if the stack is empty
    isEmpty(){
        return this.items.length === 0;
    }
    // size()- returns the number of elements in the stack.
    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items.join(" "));
    }
}

// usage
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print(); 
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
