// const Node = require("./Node")
class Node {
    constructor(data,next=null){
        this.data=data;
        this.next=next
    }
}

class LinkedList {
    constructor(head){
        this.head=head;
    }
    addToHead= node=>{
        const nextNode = this.head;
        this.head= node;
        this.head.next = nextNode;
    }
    traverse = ()=>{
        let nextNode = this.head;
        while(nextNode){
            console.log(nextNode.data)
            nextNode=nextNode.next
        }
    }
    addToTail = (node)=>{
        let currNode = this.head;
        while(currNode.next){
          currNode = currNode.next
        }
        currNode.next = node;

    }
    reverse = ()=>{
        let prevNode = null;
        let currNode = this.head; 
        let nextNode = this.head.next;
        while(currNode){
            nextNode=currNode.next;
            currNode.next= prevNode 
            prevNode = currNode;
            currNode = nextNode;
        } 
        this.head=prevNode

       
    }

    recurseTraverse = (node,previous=null)=>{
        let currNode = node;
        let prev = previous;
        // console.log(currNode)
        if(currNode.next){
            prev = currNode;
            currNode = currNode.next;
            return this.recurseTraverse(currNode,prev)
        } else {
            currNode.next=prev
        }
    }
}



const myNode = new Node("Joe");
// console.log('myNode: ',myNode)
const myList = new LinkedList(myNode);
// console.log('myList: ',myList)
myList.addToHead(new Node("Shiva"))
// console.log('myList: ',myList)
myList.addToTail(new Node("Arra"))
myList.addToTail(new Node("Gabe"))
myList.addToTail(new Node("Justus"))
myList.addToTail(new Node("David"))
myList.addToTail(new Node("Tucker"))
myList.addToTail(new Node("Jonathan"))
// console.log('myList: ',myList)
myList.traverse()
myList.reverse()
// console.log(myList)
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
myList.traverse()