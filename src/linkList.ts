class treeNode<T> {
	public next: treeNode<T> | null = null;
	public prev: treeNode<T> | null = null;
	public data: T | null = null;
	constructor(data: T) {
		this.data = data
	}
}

class LinkedList<T>{
	private head: treeNode<T> | null = null;
  
	public insertAtEnd(data: T): treeNode<T> {
	  const node = new treeNode(data)
	  if (!this.head) {
		this.head = node;
	  } else {
		const getLast = (node: treeNode<T>): treeNode<T> => {
		  return node.next ? getLast(node.next) : node;
		};
  
		const lastNode = getLast(this.head);
		node.prev = lastNode;
		lastNode.next = node;
	  }
	  return node;
	}
  
	public insertInBegin(data: T): treeNode<T> {
	  const node = new treeNode(data)
	  if (!this.head) {
		this.head = node;
	  } else {
		this.head.prev = node;
		node.next = this.head;
		this.head = node;
	  }
	  return node;
	}
  
	public deleteOneNode(data: T): void {
		let temp = this.head;
		while(temp!=null){
			if(temp.data==data){
				if(temp.prev==null)this.head=temp.next;
				else temp.prev.next = temp.next;
				return;
			}
			temp = temp.next
		}
		return;
	}
  
	public search(comparator: (data: T) => boolean): treeNode<T> | null {
	  const checkNext = (node: treeNode<T>): treeNode<T> | null => {
		if (node.data && comparator(node.data)) {
		  return node;
		}
		return node.next ? checkNext(node.next) : null;
	  };
  
	  return this.head ? checkNext(this.head) : null;
	}
  
	public traverse(): T[] {
	  const array: T[] = [];
	  if (!this.head) {
		return array;
	  }
  
	  const addToArray = (node: treeNode<T>): T[] => {
		if(node.data)array.push(node.data);
		return node.next ? addToArray(node.next) : array;
	  };
	  return addToArray(this.head);
	}
  
	public size(): number {
	  return this.traverse().length;
	}
  }
  


export {LinkedList}
