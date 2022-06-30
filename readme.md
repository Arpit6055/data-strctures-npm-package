# Data structures

This is npm data structures package for ease of users for performing complex
problems

Install the npm package [npm link](https://www.npmjs.com/package/@arpitsingh6055/datastructure)

### Version: 1.0.2

### Usage

```sh
$ npm i @arpitsingh6055/datastructure
```


## Features

- Binary tree
- Linkedlist
- Stack
- Queue

## Usage/Examples

```javascript
const {BinarySearchTree,LinkedList, Queue,Stack} = require('@arpitsingh6055/datastructure');

///////////////////////////////////////////////////////////////////////////////////////
// Binary search tree
const bst = new BinarySearchTree();
bst.insert(5);//insert into the binary tree
bst.insert(2);
bst.insert(3);
bst.insert(1);
bst.insert(7);
bst.insert(6);
bst.insert(8);
let bst1 = bst.BFS();
console.log({bst1});
bst.delete(3); //delete the node from the binary tree
let bst2 = bst.BFS();
console.log({bst2});



///////////////////////////////////////////////////////////////////////////////////////
// Link list
const ll = new LinkedList();
ll.insertAtEnd(4);// insert at the ending of the linkedlist
ll.insertInBegin(5); //insert at the begining of the linkedlist
const arr = ll.traverse() //return a array of all values in Linklist
console.log({arr}); // output:  [ 5, 4 ]



///////////////////////////////////////////////////////////////////////////////////////
//queue
const q = new Queue(6); // optional paramter here represents the max size allowed for the queue
q.enqueue(20) // addidtion to the queue
q.enqueue(4)
q.enqueue(5)
q.enqueue(6)
q.enqueue(7)
q.enqueue(8)
// q.enqueue(9) ////This line will yeild an error as the allowed size for the queue is 6
const qDeq = q.dequeue() //removes and return the first element in the queue
console.log({qDeq}); // output : 20
let qsize = q.size();
console.log({qsize});


///////////////////////////////////////////////////////////////////////////////////////
// Stack
const stk = new Stack(4);// optional paramter here represents the max size allowed for the stack
stk.push(1);// addidtion to the stack
stk.push(2);
stk.push(3);
stk.pop();// pop out of the stack
let peek=stk.peek();//top element in the stack
console.log({peek});
```


## Support

For support, email sarpit4545@gmail.com

