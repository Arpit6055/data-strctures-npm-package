# Data structures

This is npm data structures package for ease of users for performing complex
problems

Install the npm package [npm link](https://www.npmjs.com/package/@arpit6055/datastructure)

### Version: 0.0.1

### Usage

```sh
$ npm i @arpit6055/datastructure
```


## Features

- Binary tree
- Linkedlist
- Stack
- Queue

## Usage/Examples

```javascript
const {BinarySearchTree,LinkedList, Queue,Stack} = require('@arpit6055/datastructure');

////////////////////////////////////////////////////////////////
// Binary search tree
const bst = new BinarySearchTree();

bst.insert(5);//insert into the binary tree
bst.insert(2);
bst.insert(3);
bst.insert(1);
bst.insert(7);
bst.insert(6);
bst.insert(8);

bst.inOrderTraversal(bst.root);//log the inOrder of the binary tree
//output in console :
//  1
//  2
//  3
//  5
//  6
//  7
//  8


////////////////////////////////////////////////////////////////
// Link list

const ll = new LinkedList();

ll.insertAtEnd(4);// insert at the ending of the linkedlist
ll.insertInBegin(5); //insert at the begining of the linkedlist
const arr = ll.traverse() //return a array of all values in Linklist
console.log(arr); // output:  [ 5, 4 ]

////////////////////////////////////////////////////////////////
//queue

const q = new Queue(6); // optional paramter here represents the max size allowed for the queue
q.enqueue(20) // addidtion to the queue
q.enqueue(4)
q.enqueue(5)
q.enqueue(6)
q.enqueue(7)
q.enqueue(8)
q.enqueue(9) //This line will yeild an error as the allowed size for the queue is 6
const qDeq = q.dequeue() //removes and return the first element in the queue
console.log(qDeq); // output : 20
let qsize = q.size();
console.log(qsize);
```


## Support

For support, email sarpit4545@gmail.com

