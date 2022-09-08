class Queue {
    constructor() {
        this.element = {};
        this.head = 0;
        this.tail = 0;
    }
    enqueue(value) {
        //add a value to the queue
        this.element[this.tail] = value;
        this.tail++;
    }
    dequeue() {
        //remove a value from the queue
        if (!this.length) return;
        const val = this.element[this.head];
        delete this.element[this.head];
        this.head++;
        return val;
    }
    peak() {
        // return the item at the front of the queue
        return this.element[this.head];
    }
    get length() {
        // return the length of the queue
        return this.tail - this.head;
    }
    get isEmpty() {
        // return a true or false value if the queue is empty
        return this.head === this.tail;
    }
}

//testing
const myQueue = new Queue();
console.log(myQueue.isEmpty);
myQueue.enqueue(12);
myQueue.enqueue(15);
myQueue.enqueue(18);
myQueue.enqueue(19);
console.log(myQueue.length);
console.log(myQueue.peak());
console.log(myQueue.dequeue());
console.log(myQueue.length);
