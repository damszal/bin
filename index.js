// a bad story with no happy ending ;) 

let counter = 0;
let year = 1982
function loop(){
    if (counter===3) return "everyone has died in 1990";
    console.log("mamas had " + counter + " sons in " + year );
    counter++;
    year = year + 2;
    return loop();
};

loop();

// an factorial issue example 

function factorial(num,prod = 1){
    if (num ===1) return prod;
    return factorial(num-1, prod * num);
}

console.log(factorial(8))

