//function printHello(){
//    console.log("Hello")
//};

//setTimeout(printHello, 1000);

//console.log("My first!"); 

new Promise((resolve, reject )=>{ // wykonaj funkcję 
    setTimeout(()=>{
        console.log('kierowca jedzie pod wskazany adres');
        resolve("posiadam paczkę dla Pana T");
    },1000)
}).then((response)=>{ // skoro pierwsza część się wykonała, zrób to co jest po then
    console.log("dzwonię do drzwi");
    console.log(response); // wartość z resolve
    let arr = [response,"paczka dla Pani W","paczka dla Pani J"]
    return arr // wartość przekazana do response poniżej, nie musi byc przekazana jeśli nie chcesz
}).then((response) =>{
    const [one,two,tree] = response
    console.log(one + " przekazana");
})




















//------------------------------------------------------- BATTON
//const btn = document.querySelector("#btn")
//const output = document.querySelector("#output")
//
//btn.addEventListener("click", function(){
//    output.innerText = "we are connected ! :P"
//})