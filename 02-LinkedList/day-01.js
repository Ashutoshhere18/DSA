// Creating a node class 

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
};

// Creating class to link another list

class LinkedList{
    constructor(){
      this.head=null;
    }

    addAtFirst(data){
        const newNode=new Node(data); // creating instance of class
        newNode.next=this.head;  // Storing address of Current head
        this.head=newNode;  // Assigning Head to newly added node 
    }

    // displayNode(){
    // const cur=this.head;

    //     while(cur.next){
    //         console.log(cur.data+"-->");
    //         cur=cur.next;
    //     }
    //     console.log("null");
    // }


    addAtLast(data){
        const newNode=new Node(data);
        if(!this.head){
           this.head=newNode;
           return;
        }

        let current=this.head;

        while(current.next){
           current=current.next;
        }

        current.next=newNode;
    }

}

