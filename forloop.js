/* for(let i=0;i<5;i++) {
console.log(i);
} */

/* let count=0;
while(count<5){
    console.log(count);
    count++;
} */

/* let count=0;
do{
    console.log(count);
    count++;
}
while(count < 5 ) */

/* let person = { name: "John", age: 30, occupation: "Developer"};
for(let key in person ) {
    console.log(key + ":" + person[key]);     in this we cannot use dot operator(object)
} */

/* let car= {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    isElectric: false,
    start: function() {
        console.log("Engine started!");
    }
}; */

/* function Book ( title, author, year) {
    this.title= title;
    this.author = author;
    this.year = year;
}
let book1 = new Book ( "The Catcher in the Rye", "J.D. Salinger", 1951);
let book2 = new Book ( "To kill a Mockingbird", "Harper Lee", 1960);
console.log(book1); */

 let fruit = [ "apple", "banana", "orange", "grapes"];
/* console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
for( let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
} */

/* fruit.push("kiwi");
console.log(fruit);

fruit.unshift("mango");
console.log(fruit);

let removedLast = fruit.pop();
console.log(fruit);
console.log(removedLast);
let removedFirst = fruit.shift();
console.log(fruit);
console.log(removedFirst);

let citrus = fruit.slice(1,3);
console.log(citrus);

let removed = fruit.splice(1,2,"pear","melon");
console.log(fruit);
let moreFruits = ["grapefruit", "pineapple"];
let allFruits = fruit.concat(moreFruits);
console.log(fruit); */

/* const multiply = function(a,b) {
    return a*b;
};
// Invocation
const product = multiply(4,6);
console.log('Function Expression - Product:', product); */

// ARROW FUNCTION

/* const subtract = (a,b) => a - b;
const difference = subtract(8,3);
console.log('Arrow function - Difference :', difference); 

try {
    throw new Error("An error");
}
catch(error) {
    console.error(error.message);
}
finally {
    console.log("Cleanup code");
} */

// HOISTING 
/* console.log(y);
var y = 69;
console.log(y); */
// HOISTING WITh FUNCTIONS
hello();
function hello()
{
    console.log("Hello world!")
}




