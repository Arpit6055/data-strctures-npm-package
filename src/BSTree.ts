class BinarySearchTreeNode<T> {
  data: T;
  leftNode?: BinarySearchTreeNode<T>;
  rightNode?: BinarySearchTreeNode<T>;

  constructor(data: T) {
    this.data = data;
  }
}

export class BinarySearchTree<T> {
  root?: BinarySearchTreeNode<T>;
  // comparator: (a: T, b: T) => number;
  comparator = (a: T, b: T)=> {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }
  constructor() {
    
  }

  insert(data: T): BinarySearchTreeNode<T> | undefined {
    if (!this.root) {
      this.root = new BinarySearchTreeNode(data);
      return this.root;
    }

    let current = this.root;

    while (true) {
      if (this.comparator(data, current.data) === 1) {
        if (current.rightNode) {
          current = current.rightNode;
        } else {
          current.rightNode = new BinarySearchTreeNode(data);
          return current.rightNode;
        }
      } else {
        if (current.leftNode) {
          current = current.leftNode;
        } else {
          current.leftNode = new BinarySearchTreeNode(data);
          return current.leftNode;
        }
      }
    }
  }

  search(data: T): BinarySearchTreeNode<T> | undefined {
    if (!this.root) return undefined;

    let current = this.root;

    while (this.comparator(data, current.data) !== 0) {
      if (this.comparator(data, current.data) === 1) {
        if (!current.rightNode) return;

        current = current.rightNode;
      } else {
        if (!current.leftNode) return;

        current = current.leftNode;
      }
    }

    return current;
  }

  inOrderTraversal(): T[] {
    let visited = new Array<T>();
    let current = this.root;
    if (!current) return visited;
    let traverse = (node :BinarySearchTreeNode<T>) : void => {
      if (node.leftNode) traverse(node.leftNode);
      visited.push(node.data);
      if (node.rightNode) traverse(node.rightNode);
    };
    traverse(current);
    return visited;
  }
  preOrderTraversal(): T[] {
    let visited = new Array<T>();
    let current = this.root;
    if (!current) return visited;
    let traverse = (node :BinarySearchTreeNode<T>) : void => {
      visited.push(node.data);
      if (node.leftNode) traverse(node.leftNode);
      if (node.rightNode) traverse(node.rightNode);
    };
    traverse(current);
    return visited;
  }
  postOrderTraversal(): T[] {
    let visited = new Array<T>();
    let current = this.root;
    if (!current) return visited;
    let traverse = (node :BinarySearchTreeNode<T>) : void => {
      if (node.leftNode) traverse(node.leftNode);
      if (node.rightNode) traverse(node.rightNode);
      visited.push(node.data);
    };
    traverse(current);
    return visited;
  }

  BFS(): T[] {
    let queue = new Array<BinarySearchTreeNode<T>>();
    let visited = new Array<T>();
    queue.push(this.root);
    while (1) {
      let current = queue.shift();
      if(!current) return visited;
      visited.push(current.data);
      if (current.leftNode !== null) queue.push(current.leftNode);
      if (current.rightNode !== null) queue.push(current.rightNode);
    }
  }


}

const bst = new BinarySearchTree();

bst.insert(5);//insert into the binary tree
bst.insert(2);
bst.insert(3);
bst.insert(1);
bst.insert(7);
bst.insert(6);
bst.insert(8);

let arr = bst.postOrderTraversal()
console.log(arr);
