var faker = require('faker');

console.log("========");
console.log("MY SHOP");
console.log("========");

for(var i = 0; i < 10; i++){
    var product = faker.commerce.productName();
    var price = faker.commerce.price(); 
    
    console.log(product + " - $" + price);
}

