class Iterator {
    constructor(items) {
        this.index = 0
        this.items = items
    }

    next() {
        return this.items[this.index++]
    }
    hasNext() {
        return this.index < this.items.length

    }

    each(fn) {
        while (IteratorClass.hasNext()) {
            fn(IteratorClass.next())
        }
    }
}



const items = [1, 2, 'ali', 'sarmadi']

const IteratorClass = new Iterator(items)

console.log(IteratorClass.each((logData) => {
    console.log(logData)
}))