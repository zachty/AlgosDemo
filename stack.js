class Stack {
    constructor() {
        this.pancake = [];
    }
    push(value) {
        // add an item to the stack
        this.pancake.push(value);
    }
    pop() {
        // remove and return an item from the stack
        return this.pancake.pop();
    }
    isempty = () => {
        // return a true or false value if empty
        return this.pancake.length === 0;
    };

    size = () => {
        // return the length of the stack
        return this.pancake.length;
    };
}
const myStack = new Stack();
console.log(myStack.isempty());
myStack.push(15);
myStack.push(18);
myStack.push(12);
console.log(myStack.pop());
console.log(myStack.size());
