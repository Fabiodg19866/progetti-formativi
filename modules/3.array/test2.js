//Dato un array di numeri, utilizza il metodo map() per creare un nuovo array contenente il doppio di ogni valore.
// IL METODO MAP SERVE AD ESEGUIRE UNA LOGICA O FUNZIALITA' DI ELEMENTI PRESENTI IN UN ARRAY
var numeriMap = [2, 4, 6, 8, 10];
var doppi = numeriMap.map(function (numero) { return numero * 2; });
console.log(doppi);
//Dato un array di stringhe, utilizza map() per creare un nuovo array con tutti i nomi scritti in maiuscolo.
var nomi = ["Mario", "Luca", "Anna", "Sara"];
var maiuscolo = nomi.map(function (nome) { return nome.toUpperCase(); });
console.log(maiuscolo);
//Dato un array di numeri, utilizza filter() per creare un nuovo array contenente solo i numeri maggiori di 10.
var n = [5, 12, 8, 25, 3, 18, 10];
var maggiori = n.filter(function (numero) { return numero > 10; });
console.log(maggiori);
//Dato un array di numeri, utilizza il metodo find() per trovare il primo numero pari.
var nu = [3, 7, 9, 10, 12, 15];
var pari = nu.find(function (numero) { return numero % 2 == 0; });
console.log(pari);
