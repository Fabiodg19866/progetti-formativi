//Esercizio 1 -  Scrivi un programma che controlla se un numero è positivo o negativo.

/*
let positivo: number = 5;

if (positivo >= 0) {
  console.log("Il numero è positivo.");
} else console.log("Il numero è negativo.");

//Esercizio 2 - Verifica se un numero è pari o dispari.

let pari: number = 8;

if (pari % 2 == 0) {
  console.log("Il numero è pari.");
} else console.log("Il numero è dispari.");

// Esercizio 12 - Dato un numero, stampa "divisibile per 2 e 3",
// "solo per 2", "solo per 3" oppure "nessuno".

let numer: number = 12;

if (numer % 2 == 0 && numer % 3 == 0) {
  console.log("Divisibile per 2 e 3.");
} else if (numer % 2 == 0) {
  console.log("Divisibile solo per 2.");
} else if (numer % 3 == 0) {
  console.log("Divisibile solo per 3.");
} else {
  console.log("Non è divisibile né per 2 né per 3.");
}

// ESERCIZIO 1 – Usa uno switch-case per stampare il giorno della settimana dato un numero da 1 a 7.

let giorno: number = 3;

switch (giorno) {
  case 1:
    console.log("Lunedì");
    break;
  case 2:
    console.log("Martedì");
    break;
  case 13:
    console.log("Mercoledì");
    break;
  case 4:
    console.log("Giovedì");
    break;
  case 5:
    console.log("Venerdì");
    break;
  case 6:
    console.log("Sabato");
    break;
  case 7:
    console.log("Domenica");
    break;
  default:
    console.log("Numero non valido");
}

// ESERCIZIO 2 - Usa uno switch per stampare la stagione dato un mese.

let mese: number = 4;

switch (mese) {
  case 12:
  case 1:
  case 2:
    console.log("Inverno");
    break;

  case 3:
  case 4:
  case 5:
    console.log("Primavera");
    break;

  case 6:
  case 7:
  case 8:
    console.log("Estate");
    break;

  case 9:
  case 10:
  case 11:
    console.log("Autunno");
    break;

  default:
    console.log("Mese non valido");
}

// CICLO FOR

for (let i = 10; i >= 1; i = i - 2) {
  if (i == 6) {
    continue;
  }

  console.log(i);
}

//Scrivi un programma che calcoli la somma dei numeri da 1 a 100 usando un ciclo for.

let sum: number = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log("Somma: " + sum);

/*

Esercizio 1 — Stampa dei numeri da 1 a 10
Traccia
Scrivi un programma che stampi i numeri da 1 a 10 usando un ciclo while.

  */


// INCREMENTO

/*
let ciclo: number = 1;

while (ciclo <= 10) {
  console.log(ciclo);
  ciclo++;
}

// DECREMENTO

let ciclo2: number = 10

while (ciclo2 >=1) {
  console.log(ciclo2);
  ciclo2--;
  
}
*/

/*
Esercizio 2 — Somma dei numeri da 1 a 100
Traccia
Scrivi un programma che calcoli la somma dei numeri da 1 a 100 usando un ciclo while.
 */

/*
let sommaDo: number = 0;
let cicloDo: number = 1;

while (cicloDo <= 100) {
  sommaDo += cicloDo;
  cicloDo += cicloDo;
}

console.log("Somma: " + sommaDo);
*/


// DO-WHILE

//ESERCIZIO 1 - Stampa da 1 a 10


// INCREMENTO


let incremento: number = 1;

do {
    console.log(incremento);
  incremento++;
} while (incremento <= 10);

console.log('---------------');


// DECREMENTO

let decremento: number = 10;

do {
    console.log(decremento);
    decremento --;
} while (decremento >= 1);
