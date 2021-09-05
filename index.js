// destructuring of array

const dataArr = ['John', 'Rambo', 69, "New York"];

let [firstName, surname, age, city,Non] = dataArr;

// change of 'city' value

city = "Chicago"; 

// checking 

console.log(`My name is ${firstName} ${surname}. I am ${age} old and live in ${city}.`);