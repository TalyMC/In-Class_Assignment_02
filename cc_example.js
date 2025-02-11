//Task 1
let products = [
    {name: "Laptop", price: 1200, category:"Electronics"},
    {name: "Phone", price: 800, category:"Electronics"},
    {name: "Desk Chair", price: 150, category:"Furniture"}
];

function getProductsByCategory(products, category) {
    return products.filter(product => product.category === category)
};//It doesnt matter that products in the loop be singular it just lables whats its doing

console.log(getProductsByCategory(products, "Electronics"));

//Task 2