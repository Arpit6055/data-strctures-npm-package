export declare class Queue<T> {
    private capacity;
    private storage;
    constructor(capacity?: number);
    enqueue(item: T): void;
    dequeue(): T | undefined;
    size(): number;
}
