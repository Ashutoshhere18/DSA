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

    size(){
        let current=this.head;
        let count=0;
        while(current.next){
          count++;
          current=current.next;
        }
        return count;
    }


    // Approach : To add element at certain index in Linked List::-
    //            1) Check Index is valid oro not 
    //            2) Secondly check if idex is 0 than assign newNode
    //            3) Make current pointer 
    //            4) Start loop(index-1) which goes until the index matches.

    addAtSpecific(index,data){
       if(index<0 || index>this.size()){
           console.error("Invalid Index!!");
           
       }
       
        const newNode=new Node(data);

       if(index===0){
         newNode.next=this.head;
         this.head=newNode;
         return;
       }

       let current=this.head;

       for(let i=0;i<index-1;i++){
        current=current.next;
       }
       newNode.next=current.next;
       current.next=newNode;

    }


    //            H
    //Approach : 10-->20-->30-->null
    //                H
    //           10  20-->30-->null

    removeFromTop(){
        if(!this.head){
            return;
        }
        this.head=this.head.next;
    }


    // Approach: 10-->20-->30-->40-->null
    // I have to current.next.next to get last element and make 
    // Current.next =null

    removeFromLast(){
        if(!this.head){
          return;
        }

        let current=this.head;

        while(current.next.next){
          current=current.next;
        }
        current.next=null;
    }


    // Approach : Similar to addAt but no new Node creation.

    removeAtSpecific(index){
        
        if(index<0 || index>this.size()){
          console.error("Invalid Index!")
          return;
        }

        if(index===0){
        this.head=this.head.next;
        return;
        }

        let current=this.head;

        for(let i=0;i<index-1;i++){
           current=current.next;
        }

        if(current.next){
          current.next=current.next.next;
        }
    }


     displayNode(){
    let cur=this.head;

        while(cur){
            console.log(cur.data+"-->");
            cur=cur.next;
        }
        console.log("null");
    }

}


const list=new LinkedList();

list.addAtFirst(10);

list.addAtLast(40);

list.addAtSpecific(1,20);
list.addAtSpecific(2,30);

// list.displayNode();

// list.removeFromTop();
// list.removeFromLast();

list.removeAtSpecific(2);
list.displayNode();