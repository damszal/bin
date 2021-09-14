// [A-Z] wyszukuje pierwszą dużą literę 
// [a-z] wyszukuje pierwszą małą literę 
// . lub .., ..., ... np. a. wyszukuje kolejną literę po literze a
// . przed znakiem jak .a wyszukuje jedną dowolną poprzedzającą literę lub więcej 
// d[ami]an
// g flaga zwraca wszystkie pasujące elementy 
// i flaga nie bierze pod uwagę wielkości liter
// [0-9] zwraca liczby od 0 do 9
// ^ znak wykluczenia zakresu np ^[0-9]
// + wyszukuje wszystkie takie same znaki, minus/plus także ciągi powtarzające się 
// * wyszukuje 0 lub więcej razy frazę
// .* wyszukaj zero lub więcej czegokolwiek, match zwraca jeden cały ciąg
// znak$ wyszukuje ciąg na końcu znaku/linii
// \w wyszukuje liczby i litery plus podkreślenie
// \W wyszukuje wszystko co nie jest liczbą, numerem lub podkreśleniem 
// \d wyszukuje tylko liczby
// \D wyszukuje wszystko poza liczbami 
// {1,12} ile znaków może być wpisanych wg poprzedzającego żądania 
// przykł. /^[A-Za-z]{2,14}/ wyszukuje tylko wyrazy od 2 do 14 znaków
// \s wyszukuje spacje, tabulacje, nowy wiersz itp
// \S odwrotność \s 
// ? znak przed ? oznacza opcjonalny znak ;)
// (?=u) zwraca poprzedzający ciąg/warunek jeśli następnie występuje u
// (?!u) odwrotnie, zwraca jeśli coś nie występuje
let valFName = /^[A-Z][a-z]{2,11}$/;
let valSName = /^[A-Z][a-z]{2,11}$/;
let valCountry = /^[A-Z][a-z]{2,11}$/;
let valCity = /^[A-Z][a-z]{2,11}$/;
let valStreet = /^[A-Z][a-z]{2,11}$/;
let valHouseNumber = /^[0-9]{0,3}$/;
let valFlatNumber = /^[0-9]{1,3}$/;
let valTelNumber = /^[0-9]{3}-?\.?[0-9]{3}-?\.?[0-9]{3}$/; // jako string ??
let valEMailNumber = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

let FName = document.querySelector('#fName');
let sName = document.querySelector('#sName');
let country = document.querySelector('#country');
let city = document.querySelector('#city');
let street = document.querySelector('#street');
let houseNumber = document.querySelector('#houseNumber');
let flatNumber = document.querySelector('#flatNumber');
let telNumber = document.querySelector('#telNumber');
let eMail = document.querySelector('#eMail');

let address = document.querySelector('#address');



address.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(valFName.test(FName.value))
    let err = document.createElement('h1');
    err.innerText = "Uppss something went wrong, probably with speling. Luckily I set validation only on first input. ;)"
    if (valFName.test(FName.value) === false) {
        console.log(address.style.backgroundColor = "red") || (address.appendChild(err))
    }
});
