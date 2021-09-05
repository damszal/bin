{
console.log("DESTRUCTURING OF ARRAY ------------------------------------------------------------------------")
// destructuring of array

 const dataArr = ['John', 'Rambo', 69, "New York"];

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

let [firstName, surname, age, city,country] = dA('USA');

city = 'Chicago'; 

console.log(`We can use variables by name: firstname is ${firstName}, surname is ${surname}, age is ${age}, city is ${city} and country is ${country}.Normally we have to type a array index like 1,2,3,4,5.`);
};

{
    const obj = {
        NoOne: 1,
        NoTwo: {
            t: 2,
            },
        NoThree: 3,
    }

    const {NoOne,NoThree, NoTwo:{ t : two}} = obj; // t : two means that we change name of var from 't' to 'two'

    console.log(`Add two new variables with valiues like key in the object: NoOne with ${NoOne} and NoThree with ${NoThree} `)

    
}