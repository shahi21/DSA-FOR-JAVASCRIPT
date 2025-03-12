// Structure of a node
// each node in a sll has 2 parts:
// data-holds the value
// next- holds the reference(address) of the next node

// IMPLEMENTATION

// 1.CREATING A NODE CLASS
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

// 2.CREATING A LINKED LIST CLASS
class LinkedList{
    constructor(){
        this.head=null; //first node(initially empty)
    }

    // 3. adding node at the end
    // -create a new node
    // -if the list is empty set head=newNode
    // -otherwise traverse to the last node and set lastNode.next=newNode.
    append(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }

        let current=this.head;
        while(current.next){
            current=current.next; //move to last node
        }
        current.next=newNode; //attach new node at the end
    }

    // 4. displaying the linked list
    // -start from head
    // -print each node's data.
    // -move to the next node

    dispaly(){
        let current=this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }

    // 5.inserting a node at the beginning
    // -create a new node
    // -set newNode.next=head
    // -update head=newNode

    insertAtBeginning(data){
        let newNode=new Node(data);
        newNode.next=this.head; //link new node to current head
        this.head=newNode; //update the head to new node
    }

    // 6.deleting a node by value

    // -check if the node to delete is the head.
    // -if not, travrse and find the ndode before the one to delete.
    // -change the next pointer to skip the node

    deleteNode(value){
        if(!this.head)
            return; //if list is empty return

        // if head is to be deleted
        if(this.head.data===value){
            this.head=this.head.next;
            return;
        }
        let current=this.head;
        while(current.next && current.next.data !==value){
            current=current.next;
        }
        if(current.next){
            current.next=current.next.next;  //skip the node to be deleted
        }
    }
}
//    example usage
let list=new LinkedList();
list.append(10);
console.log(list)
list.append(20);
list.append(30);
console.log(list);
console.log("displaying list")
list.dispaly();
console.log("insertion in the beginning")
list.insertAtBeginning(5);
list.dispaly();
console.log("After deletion");
list.deleteNode(20);
list.dispaly();