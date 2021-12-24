class Shipping {
    constructor() {
        this.strategy = ''
    }

    setSrategy(setSrategy) {
        this.setSrategy = setSrategy
    }


    calculate(product) {
        console.log(product, this.setSrategy.calculate(product))
    }

}




class Free {
    calculate(product) { return "0$" }
}
class Premium {
    calculate(product) { return (product.kpi * 1.5) + '$' }
}

var product = { name: 'Javascript design', kpi: 1.254 };

var Shiping = new Shipping()

// Shiping.setSrategy(new Free())
Shiping.setSrategy(new Premium())

Shiping.calculate(product)