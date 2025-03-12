// creating an array
let numbers=[10,20,30,40,50];
console.log(numbers);

// OPERATIONS ON ARRAY

// 1. Accessing Elements
let fruits=['Apple','Watermelon','Cherry']
console.log(fruits[0]);

// 2. Adding & REmoving elements

let animals=["Dog","Cat","Elephant"];
animals.push("Lion");  //adds element to the end
console.log(animals);

animals.pop(); //removes last element
console.log(animals);

animals.unshift("Tiger"); //add element at the beginning
console.log(animals);

animals.shift(); //remove first element
console.log(animals);

// 3. Looping through an array

// using for loop

let number=[1,2,3,4,5];
for(let i=0;i<number.length;i++){
    console.log(number[i]);
}

// using forEach() method
let num=[1,2,3,4,5];
num.forEach(n=>console.log(n));

// 4. Searching in an array

// indexOf()- finds the index of an element

console.log(num.indexOf(5));

// includes()- checks if an element exists
console.log(fruits.includes("Apple"));
console.log(fruits.includes("Orange"));


// 5. Sorting an array

// sort()- sorts the array alphabetically
fruits.sort();
console.log(fruits);

// reverse()- reverses the array

num.reverse();
console.log(num);