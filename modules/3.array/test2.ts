//Dato un array di numeri, utilizza il metodo map() per creare un nuovo array contenente il doppio di ogni valore.

// IL METODO MAP SERVE AD ESEGUIRE UNA LOGICA O FUNZIALITA' DI ELEMENTI PRESENTI IN UN ARRAY
let numeriMap: number[] = [2, 4, 6, 8, 10];

let doppi: number[] = numeriMap.map(numero => numero * 2);

console.log(doppi);


//Dato un array di stringhe, utilizza map() per creare un nuovo array con tutti i nomi scritti in maiuscolo.

let nomi: string[] = ["Mario", "Luca", "Anna", "Sara"];

let maiuscolo: string[] = nomi.map(nome => nome.toUpperCase());

console.log(maiuscolo);


 //Dato un array di numeri, utilizza filter() per creare un nuovo array contenente solo i numeri maggiori di 10.

let n: number[] = [5, 12, 8, 25, 3, 18, 10];

let maggiori: number[] = n.filter(numero => numero > 10);

console.log(maggiori);



//Dato un array di numeri, utilizza il metodo find() per trovare il primo numero pari.

let nu: number[] = [3, 7, 9, 10, 12, 15];

let pari: number | undefined = nu.find(numero => numero % 2 == 0);

console.log(pari);

