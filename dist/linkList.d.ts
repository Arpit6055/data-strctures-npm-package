declare class treeNode<T> {
    next: treeNode<T> | null;
    prev: treeNode<T> | null;
    data: T | null;
    constructor(data: T);
}
export declare class LinkedList<T> {
    private head;
    insertAtEnd(data: T): treeNode<T>;
    insertInBegin(data: T): treeNode<T>;
    deleteOneNode(data: T): void;
    search(comparator: (data: T) => boolean): treeNode<T> | null;
    traverse(): T[];
    size(): number;
}
export {};
