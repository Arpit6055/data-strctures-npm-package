declare class BinarySearchTreeNode<T> {
    data: T;
    leftNode?: BinarySearchTreeNode<T>;
    rightNode?: BinarySearchTreeNode<T>;
    constructor(data: T);
}
export declare class BinarySearchTree<T> {
    root?: BinarySearchTreeNode<T>;
    comparator: (a: T, b: T) => 1 | -1 | 0;
    constructor();
    insert(data: T): BinarySearchTreeNode<T> | undefined;
    search(data: T): BinarySearchTreeNode<T> | undefined;
    inOrderTraversal(): T[];
    preOrderTraversal(): T[];
    postOrderTraversal(): T[];
    BFS(): T[];
    delete(key: T): void;
    private deleteNode;
    private getMin;
}
export {};
