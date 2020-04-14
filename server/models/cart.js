module.exports = class Cart{

    constructor(oldCart, oldTotal) {
        this.items = oldCart;
    }

    addItem(type, price) {
        if (this.items[type]) {
            this.items[type].qty++;
            return;
        }

        this.items[type] = {
            price: price,
            qty: 1
        } 
    }


   
};