//Observer Design Pattern
class ObserverPattern {
    constructor() {
        this.observers = []
    }
    subscribe(observer) {
        this.observers.push(observer)
    }
    unSubscribe(fn) {
        //rm arg fn in observers
        // this.observers.filter(f => f !== fn)
        //remove lastFun
        this.observers.pop()


    }
    fire(change) {
        this.observers.forEach(fn => fn(change))
    }


}

//1- Create a instance of ObserverPattern class
var observerInstance = new ObserverPattern()

//2- Subscribe to observers after clicking on the button
const addBtn = document.getElementById("add")
const remove = document.getElementById("remove")
const observers = document.getElementById("observers")
const observable = document.getElementById("observable")
let observer;
addBtn.addEventListener('click', () => {
        let input = document.createElement('input')

        input.type = 'text';
        input.class = 'inputList';
        observers.append(input)
        observer = value => (input.value = value)
        observerInstance.subscribe(observer)
    })
    //3- fire input changes to observers
observable.addEventListener('keyup', (e) => {
    observerInstance.fire(e.target.value)
})

//4- unSubscribe   observer after clicking on the remove button 
remove.addEventListener('click', () => {
    observerInstance.unSubscribe(observer)
})