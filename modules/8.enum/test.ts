// ENUM E' UN ENTITA' SOFTWARE CHE SERVE A RAGGRUPPARE COSTANTI DEFINITE COME COLORI-IMMAGINI-ECC E POTERLE IMPORTARE
// DOVE MI SERVONO
// DA UN ENUM DEFINENDO LA VARIABILE DI ISTANZA POTRA' ACCEDERE A TUTTE LE SUE COSTANTI

enum Color {
  Rosso = 4,
  Verde,
  Blu,
  Rosa,
  Bianco,
}

let colors: Color = Color.Blu;
console.log(colors);


enum Direction {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}


let direction: Direction = Direction.LEFT;
console.log(direction);


enum HeterogeneousEnum {
  N = 0,
  Y = "YES",
}

let heterogene: HeterogeneousEnum = HeterogeneousEnum.N;
let heterogenes : HeterogeneousEnum = HeterogeneousEnum.Y;

console.log(heterogene);
console.log(heterogenes);


/*
Crea un enum chiamato Giorno con i giorni della settimana. Stampa tutti i valori usando un ciclo for.

  */
  
enum Giorno {
    LUNEDI,
    MARTEDI,
    MERCOLEDI,
    GIOVEDI,
    VENERDI,
    SABATO,
    DOMENICA
}

for (let i = 0; i <= Giorno.DOMENICA; i++) {
    console.log(Giorno[i]);
}

/*
Crea un enum Mese e associa ad ogni mese il numero di giorni. Stampa il numero di giorni di un mese.
*/

 enum Mese {
    GENNAIO,
    FEBBRAIO,
    MARZO
}

const giorniMese = {
    [Mese.GENNAIO]: 31,
    [Mese.FEBBRAIO]: 28,
    [Mese.MARZO]: 31
};

let mese: Mese = Mese.FEBBRAIO;

console.log(Giorno);
console.log("Febbraio ha " + giorniMese[mese] + " giorni.");


//Confronta due valori di un enum Livello e stampa quale dei due è maggiore.



enum Livello {
    BASSO,
    MEDIO,
    ALTO
}

let livello1: Livello = Livello.MEDIO;
let livello2: Livello = Livello.ALTO;

if (livello1 < livello2) {
    console.log(Livello[livello1] + " è inferiore a " + Livello[livello2]);
} else if (livello1 > livello2) {
    console.log(Livello[livello1] + " è superiore a " + Livello[livello2]);
} else {
    console.log("I livelli sono uguali.");
}


