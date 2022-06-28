export declare class Stack<T> {
    private capacity;
    private storage;
    constructor(capacity?: number);
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
}
