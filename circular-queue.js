class CircularQueue {
    constructor(capacity) {
        this.capacity = capacity;
        this.currLen = 0;
        this.items = {};
        this.start = this.end = 0;
    }

    isEmpty() {
        return this.currLen === 0;
    }

    isFull() {
        return this.currLen === this.capacity;
    }

    peek() {
        if (!this.isEmpty()) return this.items[this.start];
        return null;
    }

    enqueue(elem) {
        if (this.currLen === this.capacity) {
            console.log('queue is full');
            return;
        }
        this.items[this.end] = elem;
        this.end = (this.end + 1) % this.capacity;
        this.currLen++;
    }

    dequeue() {
        if (!this.isEmpty()) {
            const item = this.items[this.start];
            delete this.items[this.start];
            this.start = (this.start + 1) % this.capacity;
            this.currLen--;
            return item;
        }
        return null;
    }

    print() {
        console.log(Object.values(this.items))
    }
}

/* a queue of size 5 */
const q = new CircularQueue(5);
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
q.print()

q.dequeue()
q.print()

q.enqueue(6)
q.print()
 



