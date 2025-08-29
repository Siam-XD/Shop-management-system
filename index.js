// shop object to maintain the shop
let shop = {
    // products array for available products
    products: [
        {name: "eggs", price: 20, stock: 1},
        {name: "potato", price: 4, stock: 10},
        {name: "soap", price: 8, stock: 5},
    ],
    // function to add a new product
    addProduct: function(name, price, stock){
        // adding new products by its name, price, and stock
        this.products.push({name: name, price: price, stock: stock})
    },
    // function to sell a product
    sellProduct: function(index){
        if (index < this.products.length && this.products[index].stock > 0){
            // reducing the stock
            this.products[index].stock--;
            console.log(`${this.products[index].name} sold`);
        } else {
            // when the product is not available
            console.log("Out of stock");
        }
    },
    // function to check what products are low on stock
    checkLowStock: function(threshold){
        this.products.forEach(product => {
            if (product.stock < threshold) {
                console.log(`Restock needed for ${product.name}`);
            }
        });
    }
}
// adding new products to the products list
shop.addProduct("apple", 10, 6)
shop.addProduct("banana", 5, 6)
shop.addProduct("ice cream", 50, 3)
// selling a product
shop.sellProduct(1)
// output of available products
for (let i = 0; i < shop.products.length; i++){
    console.log(`${i}. Product: ${shop.products[i].name}, stock: ${shop.products[i].stock}`);
}
// checking the stock
shop.checkLowStock(5)
