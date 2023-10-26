// CONCETTI SU OPERATORI DI DIVERSO TIPO

let codice_01 = 100; //OPERATORI LOGICI
let codice_02 = 200;
let codice_03 = 300; // && operatore AND
let codice_04 = 300; // || operatore OR
// == uguale a
//! negato

if (codice_03 != codice_04 && codice_01 == codice_02) {
  // restituisce sempre true

  console.log(true);
} else if (codice_03 == codice_04 || codice_03 != codice_04) {
  //restituisce sempre false

  console.log(false);
}

// operatori ternari

let tern = 5 < 3 ? true : false;
console.log(tern);

let anno = 2023;
let check = anno > 2022 ? true : false;
console.log(check);

let stop = false,
  age = 18;

age >= 18
  ? alert("Marco potrà guidare l'automobile")
  : ((stop = true), alert("Marco non potrà ancora guidare l'automobile"));
