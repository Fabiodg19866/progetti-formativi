

//Crea un array di interi e stampane ogni elemento.



const arr: number[] = [1, 2, 3, 4, 5];
 
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log('----------');

//Calcola la somma di tutti gli elementi di un array.


const arr2: number[] = [10, 20, 30, 40];
let somma2: number = 0;
 
for (let i = 0; i < arr2.length; i++) {
  somma2 += arr2[i];
}
 
console.log("Somma: " + somma2);


