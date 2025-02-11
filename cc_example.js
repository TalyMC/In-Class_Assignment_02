//Task 1 Working with Arrays
let products = [
    {name: "Laptop", price: 1200, category:"Electronics"},
    {name: "Phone", price: 800, category:"Electronics"},
    {name: "Desk Chair", price: 150, category:"Furniture"}
];

function getProductsByCategory(products, category) {
    return products.filter(product => product.category === category)
};//It doesnt matter that products in the loop be singular it just lables whats its doing

console.log(getProductsByCategory(products, "Electronics"));

//Task 2 Array Method - Map
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

//Task 3 Array Methods - Reduce
let sales = [250, 400, 150, 900, 1200];
function calculateTotalRevenue(sales) {
    return sales.reduce((total, sales)=> total + sales, 0)
};//wraping (total, sales) helps to tell reduce that it is one item. With out it, it doesn't run

console.log(calculateTotalRevenue(sales));

//Task 4 Object Manipulation
let employee = {
    name: "John Doe",
    salary: 50000,
    position: "Manager"
};

console.log (employee)// Show you the orginal with no change

function updateSalary(employee, percentageIncrease) {
    employee.salary = employee.salary + (employee.salary * percentageIncrease);
    //or employee.salary += employee.salary * percentageIncrease
};
updateSalary(employee, .1)

console.log(employee); //SHow you with change