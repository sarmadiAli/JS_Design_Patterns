class CryptoCurisrencyApi {


    getValue = (type) => {
        console.log("call api ....")
        switch (type) {
            case 'bitcion':
                return '1000'
            case 'is':
                return '2213'
            default:
                break;
        }
    }


}

class CryptoCurisrencyApiProxy {
    constructor() {
        this.cache = {};
    }

    getValues(coin) {
        if (this.cache[coin]) {
            return this.cache[coin]
        }

        return this.cache[coin] = new CryptoCurisrencyApi().getValue('bitcion')
    }
}
const api = new CryptoCurisrencyApiProxy()
console.log(

    api.getValues('bitcion')

)

console.log(
    api.getValues('bitcion')

)

console.log(

    api.getValues('is')

)