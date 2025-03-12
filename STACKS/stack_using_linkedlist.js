class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.top=null;
        this.count=0;
    }
    push(data){
        let newNode=new Node(data);
        newNode.next=this.top;
        this.top=newNode;
        this.count++;
    }
    pop(){
        if(!this.top)
            return "stack is empty";
        let poppedData=this.top.data;
        this.top=this.top.next;
        this.count--;
        return poppedData;
    }
    peek(){
        return this.top ? this.top.data : "stack is empty";
    }

    isEmpty(){
        return this.top===null;
    }

    size(){
        return this.count;
    }
}

// usage
let stack= new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack)
console.log(stack.pop()); // 3
console.log(stack.peek());
console.log(stack.size());