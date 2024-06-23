class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty())
            this.head = node;
        else {
            this.tail.next = node;
            node.prev = this.tail
        }

        this.tail = node;
        this.size++;
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }

    insert(value, index) {
        if (index < 0 || index > this.size)
            return 'invalid insertion index';
        if (index === 0) {
            this.prepend(value);;
            return;
        }
        if (index === this.size) {
            this.append(value);
            return;
        }

        let count = 1;
        let curr = this.head;
        while (count <= index) {
            curr = curr.next;
            count++;
        }
        const node = new Node(value);
        node.prev = curr.prev;
        node.next = curr;
        curr.prev.next = node;
        curr.prev = node;

        this.size++;
        return `inserted ${value} at index ${index}`;
    }

    remove(value) {
        if (this.size === 0)
            return 'list is empty';

        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                const prev = curr.prev;
                const next = curr.next;
                if (!prev && !next) { // list has only one node
                    this.head = null;
                    this.tail = null;
                }
                else if (!prev) { // the first node is being removed
                    this.head = next;
                    next.prev = null;
                }
                else if (!next) { // the last node is being removed
                    this.tail = prev;
                    prev.next = null;
                }
                else {
                    prev.next = next;
                    next.prev = prev;
                }

                this.size--;
                return 'removed ' + value;
            }
            curr = curr.next;
        }
        return 'no such value in list';
    }

    pop() {
        if (this.isEmpty()) 
            return null;
        
        const value = this.tail.value;
        const prev = this.tail.prev;
        if(!prev) {
            this.head = null;
            this.tail = null;
            this.size = 0;
            return value;
        }
        prev.next = null;
        this.tail = prev;
        this.size--;
        return value;
    }

    print() {
        let list = '';
        if (this.isEmpty()) {
            console.log('list is empty');
            return;
        }
        let curr = this.head;

        while (curr) {
            list += `${curr.value} `;
            curr = curr.next;
        }
        console.log(list)
    }
}

const list = new LinkedList();
list.append(10)
list.append(20)
list.append(30)
list.print()

console.log(list.insert(15, 1))
list.print()

console.log('list size:', list.getSize())

console.log(list.remove(20))
list.print()

console.log('popped', list.pop())
list.print()

console.log('remove 20:', list.remove(20))
list.print()

console.log('popped', list.pop())
list.print()

console.log('popped', list.pop())
list.print()

console.log('size:', list.size)

list.append(100)
console.log('appended 100');
list.print()
