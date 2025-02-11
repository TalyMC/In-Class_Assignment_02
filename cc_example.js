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
function applyDiscount (products, discountRate) {
    return products.map (product => ({
        ...product,//this takes out everything in the array to then apply a new function
        price: product.price - (product.price * discountRate)
    }
    ))
};

console.log(applyDiscount (products, 0.1));

//Task 2 Example 2
function sum3(x,y,z) {
    return x+y+z
}
let numbers = [1,2,3]//an array in iterable allowing you to loop through it

console.log(sum3(...numbers));