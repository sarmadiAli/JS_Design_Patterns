class Issuze {

    constructor(pice) {
        this.pice = pice
    }
}


class Foo {
    constructor(pice) {
        this.pice = pice
        this.callBack = function() {
            this.pice = 700
        }
    }

    callBackLastName() {
        console.log(this.pice)


    }
}

class CarCreateBuy {

    static create(type, pice) {
        switch (type) {
            case 'issuze':
                return new Issuze(pice)
            case 'foo':
                return new Foo(pice)
            default:
                break;
        }
    }
}


const carList = []
carList.push(CarCreateBuy.create('issuze', 5000))
carList.push(CarCreateBuy.create('foo', 3000))

for (const car of carList) {
    console.log(car)

}