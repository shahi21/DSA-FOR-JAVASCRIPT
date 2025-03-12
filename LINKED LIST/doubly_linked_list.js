// dll is similar to sll but each node has 2 pointers
// 1. prev- points to previous node
// 2. next - points to the next node.


// IMPLEMENTATION 

class Node{
    constructor(data){
        this.data=data;
        this.prev=null;
        this.next=null;
    }
}

class dll{
    constructor(){
        this.head=null;
     }

     append(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head=newNode;
            return;
        }
        let current=this.head;
        while(current.next){
            current=current.next;
        }
        current.next=newNode;
        newNode.prev=current;
     }

     display(){
        let current =this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
     }
}
// usage
let list=new dll();
list.append(1);
list.display();
list.append(20);
list.append(30);
list.display();