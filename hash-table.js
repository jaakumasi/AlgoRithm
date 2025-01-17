function hashFunc(dataString, max = HashTable.HASH_TABLE_CAPACITY) {
    let hash = '';

    for (let i = 0; i  dataString.length - 1; i++) {
        hash += Math.abs(dataString.charCodeAt(i) - dataString.charCodeAt(i + 1));
    }

    return hash % max;
}

class Node {
    #value;

    constructor(value) {
        this.#value = value;
        this.next = null;
    }

    get value() {
        return this.#value
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    createNode(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
    }
}

class HashTable {
    static HASH_TABLE_CAPACITY = 17;

    hashTable = [];

    insert(key, value) {
        const hash = hashFunc(key);

         If the table has no entry for that key, create a linked list at that index 
        if (!this.hashTable[hash]) {
            const linkedList = new LinkedList();
            linkedList.createNode([key, value]);
            this.hashTable[hash] = linkedList;

            return;
        }

         Get the list at the hash 
        const linkedList = this.hashTable[hash]

        
          Check if there already exists an entry in that list and update it.
          If not, add a note the list.
         
        let currNode = linkedList.head;
        while (currNode) {
            if (currNode.value[0] === key) {
                currNode.value[1] = value
                return;
            }

            currNode = currNode.next;
        }

        linkedList.createNode([key, value]);
    }

    find(key) {
        const hash = hashFunc(key);

        const linkedList = this.hashTable[hash];

        if (!linkedList)
            return undefined;

        let currNode = linkedList.head;
        while (currNode) {
            if (currNode.value[0] === key) {
                return currNode.value[1]
            }

            currNode = currNode.next;
        }

        return undefined;

    }

    log() {
        console.log(this.hashTable)
    }
}

const table = new HashTable()
table.log()

table.insert(name, Steve)
table.insert(city, Dubai)
table.insert(contact, 02567)

table.log()

console.time('t1')
console.log(table.find(contact))
console.timeEnd('t1')
