// Node
// -val 
// -next 
// -prev 
class Node{
  constructor(val){
    this.val =val;
    this.next = null;
    this.prev = null;
  }
}

// DoublyLinkedList
// -head
// -tail
// -length
class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
// PUSH ( from the end)
 push(val){
var newNode = new Node(val);
if (this.length ===0){
this.head = newNode;
this.tail = newNode;
} else { 
this.tail.next = newNode;
newNode.prev = this.tail;
this.tail = newNode;
} 
this.length++;
return this;

 }
}

// POP (add to the beginning)

