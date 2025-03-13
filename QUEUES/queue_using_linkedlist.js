class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Queue{
    constructor(){
        this.front=this.rear=null;
        this.count=0;
    }
    enqueue(data){
        let newNode= new Node(data);
        if(!this.rear){
            this.front=this.rear=newNode;
        }else{
            this.rear.next=newNode;
            this.rear=newNode;
        }
        this.count++;
    }
    dequeue(){
        if(!this.front){
            return "queue is empy"
        }
        let dequeuedData=this.front.data;
        this.front=this.front.next;
        if(!this.front)
            this.rear=null;
        this.count--;
        return dequeuedData;
    }

    frontValue(){
        return this.front ? this.front.data :"queue is empty";
    }

    isEmpty(){
        return this.front===null;
    }

    size(){
        return this.count;
    }
}

let queue=new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue());
console.log(queue.frontValue());
console.log(queue.size())