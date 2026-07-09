// IL TIPO CUSTOM TYPE PERMETTE DI MEMORIZZARE TIPI PRIMITIVI AL SUO INTERNO EVITANDO 
// DI AVERE UN UNICO TIPO IN FASE DI UTILIZZO


type Operazione = (a: number, b: number) => number;

let somma3: Operazione = (a, b) => {
    return a + b;
};

console.log(somma3(5, 3));

