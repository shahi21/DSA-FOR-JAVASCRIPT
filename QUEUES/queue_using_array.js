class Queue{
    constructor(){
        this.items=[];
    }
    // enqueue(x)- adds x to the end of the queue
    enqueue(element){
        this.items.push(element);
    }
    // dequeue() - removes the front element
    dequeue(){
        if(this.isEmpty()){
            return "No elements in Queue";
        }
        return this.items.shift();
    }
    // front() - returns the front element without removing it
    front(){
        if(this.isEmpty())
            return "queue is empty"
        return this.items[0];
    }
    // isEmpty() - checks if the queue is empty
    isEmpty(){
        return this.items.length===0;
    }
    // size()- returns the number of elements in the queue
    size(){
        return this.items.length;
    }
    print(){
        console.log(this.items.join(" "));
    }
}  

// usage
let queue= new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
console.log(queue.dequeue());
console.log(queue.front());

