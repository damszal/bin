let Form = document.querySelector('#form');

let Fname = document.querySelector('#fname');
let Sname = document.querySelector('#lname');
let Age = document.querySelector('#age');
let City = document.querySelector('#city');

let OFname = document.querySelector('#OutputFirstName');
let OLname = document.querySelector('#OutputLastName');
let OFa = document.querySelector('#OutputAge');
let OFc = document.querySelector('#OutputCity');

let Err = document.querySelector('#error');


Form.addEventListener("submit", function(e) {
    e.preventDefault();
    //window.history.back();
    let dataArr = [Fname.value, Sname.value, Age.value, City.value];
    let [destructuring, Of, Arrays, is,Fun] = dataArr;
    [destructuring, Of, Arrays, is] = [is, destructuring, Of, Arrays] // who did that ?????
    //console.log(Fname);
    OFname.innerText = destructuring;
    //console.log(Sname);
    OLname.innerText = Of;
    //console.log(Age);
    OFa.innerText = Arrays;
    //console.log(City);
    OFc.innerText = is;
    Err.innerText = "SORRY SOMETHING WENT WRONG. \n CHECK THE CODE TO FIND OUT WHAT HAPPENED"
  }, true);


// bonus usage example

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
