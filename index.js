{
// destructuring of array

 dataArr = ['John', 'Rambo', 69, "New York"];

let [firstName, surname, age, city,Non] = dataArr;

// change of 'city' value

city = "Chicago"; 

// checking 

console.log(`My name is ${firstName} ${surname}. I am ${age} old and live in ${city}.`);
}


// Usage example

{
function dA(none){
    const dataArr = ['John', 'Rambo', 69, "New York", none];

    return dataArr
}

let [firstName, surname, age, city,country] = dA("USA");

city = "Chicago"; 

console.log(`We can use variables by name: firstname is ${firstName}, surname is ${surname}, age is ${age}, city is ${city} and country is ${country}.Normally we have to type a array index like 1,2,3,4,5.`);
};