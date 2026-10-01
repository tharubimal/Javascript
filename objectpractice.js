let obj1 = new Object({
    name: "laptop",
    price: 80000,
});
console.log(obj1);

let product = {
    name: "laptop",
    price: 80000,
    category: "electronics",
    id: 1,
}; 

const productName = product.name;
console.log(productName); 

console.log(product.name); 
console.log(product.price);
console.log(product.category); 
console.log(product.id); 

console.log(product["name"]); 
console.log(product["price"]); 
console.log(product["category"]); 
console.log(product["id"]); 

let key = "name";
console.log(product.key); 
console.log(product["key"]); 
console.log(product[key]);

product.brand = "Acer";
product.model = "Nitro 5";
product["color"] = "black";
console.log(product); 

product["description"] = "Gaming laptop with high performance"; 
console.log(product); 

product.name = "Gaming Laptop";
product["price"] = 100000; 
console.log(product); 

delete product.model;
console.log(product);

console.log(Object.keys(product)); 
console.log(Object.values(product)); 
console.log(Object.entries(product)); 

Object.seal(product);
Object.freeze(product);