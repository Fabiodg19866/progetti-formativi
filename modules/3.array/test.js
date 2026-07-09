var arrays = [1, 2, 3, 4, 5];
var clr = ["rosso", "giallo", "arancione", "verde"];
console.log(clr[1]);
//Crea un array di interi e stampane ogni elemento.
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("----------");
//Calcola la somma di tutti gli elementi di un array.
var arr2 = [10, 20, 30, 40];
var somma2 = 0;
for (var i = 0; i < arr2.length; i++) {
    somma2 += arr2[i];
}
console.log("Somma: " + somma2);
// ARRAY PUSH = INSERISCE UN ELEMENTO IN CODA ALL'ARRAY
var col = ["rosso", "verde", "giallo"];
col.push("blu");
console.log(col);
col.push("bianco");
console.log(col);
console.log(col[4]);
// ARRAY POP = RIMUOVE L'ULTIMO ELEMENTO IN CODA ALL'ARRAY
col.pop();
console.log(col);
col.pop();
console.log(col);
// ARRAY UNSHIFT = AGGIUNGE UN ELEMENTO IN PRIMA POSIZIONE
col.unshift("rosa");
console.log(col);
col.unshift("arancione");
// IL METODO SORT ORDINA IN MODO CRESCENTE
col.sort();
// IL METODO REVERSE ORDINA IN MODO DECRESCENTE
col.reverse();
console.log(col);
// RESTITUISCE IL NUMERO DEGLI ELEMENTI PRESENTI IN UN ARRAY
console.log(col.length);
// METODO  SPLICE INSERISCE O RIMUOVE DEGLI ELEMENTI IN UNA CERTA POSIZIONE
// INSERISCO DUE ELEMENTI DALLA POSIZIONE 2
col.splice(2, 0, 'nero', 'bianco');
console.log(col);
// RIMUOVO DUE ELEMENTI DALLA POSIZIONE 2
col.splice(2, 2);
console.log(col);
// FOREACH MOSTRA ELEMENTO E INDICE DI POSIZIONE MOSTRANDO TUTTI GLI ELEMENTI
col.forEach(function (item, index) {
    console.log(item + " " + index);
});
// IL COSTRUTTORE SET PERMETTE DI RIMUOVERE VALORI UGUALI
var elementi = [1, 2, 2, 3, 4, 4, 5];
var unici = new Set(elementi);
console.log(unici);
var lettere = ['a', 'b', 'b', 'c', 'd', 'd', 'e'];
var l = new Set(lettere);
console.log(l);
