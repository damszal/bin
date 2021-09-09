//function printHello(){
//    console.log("Hello")
//};

//setTimeout(printHello, 1000);

//console.log("My first!"); 

// new Promise((resolve, reject )=>{ // wykonaj funkcję 
//     setTimeout(()=>{
//         console.log('kierowca jedzie pod wskazany adres');
//         resolve("posiadam paczkę dla Pana T"); // resolve oznacze, ze funkcja sie zakonczyła i zwraca wartość, w tym wypadku string
//     },1000)
// }).then((response)=>{ // skoro pierwsza część się wykonała, zrób to co jest po then
//     console.log("dzwonię do drzwi");
//     console.log(response); // wartość z resolve
//     let arr = [response,"paczka dla Pani W","paczka dla Pani J"]
//     return arr // wartość przekazana do response poniżej, nie musi byc przekazana jeśli nie chcesz
// }).then((response) =>{
//     const [one,two,tree] = response;
//     console.log(one + " przekazana");
// })
// 
// // PRZYKŁAD KLASYCZNEGO CALLBACK 
// 
// const zaladunek = (callback) =>{ // W MIEJSCE CALLBACK WSADZIMY NASTEPNA FUNKCJĘ
//     setTimeout(()=>{
//         console.log("1. załadowałem cieżarówkę");
//         callback() // JAK JUŻ COŚ ZROBIŁEŚ TO WYWOŁAJ NASTĘPNĄ FUNKCJĘ
//     },1000);
// };
// 
// const wyznaczenie = (callback) => {
//     setTimeout(()=>{
//         console.log("2. wyznaczyłem trase");
//         callback()
//     },2000);
// }
// 
// zaladunek(()=>{ 
//     wyznaczenie(()=>{
//         console.log("3. dotarłem pod wskazany adres")
//     })
// })

const licz1 = () => {
    setTimeout(()=>{
        console.log("1.pierwsza sekunda");
    },1000);
};

const licz2 = () => {
    setTimeout(()=>{
        console.log("2.szósta sekunda");
    },5000);
}

async function licz(){
    await licz1();
    await licz2()
}

licz()


















//------------------------------------------------------- BATTON
//const btn = document.querySelector("#btn")
//const output = document.querySelector("#output")
//
//btn.addEventListener("click", function(){
//    output.innerText = "we are connected ! :P"
//})