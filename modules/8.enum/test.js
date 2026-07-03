// ENUM E' UN ENTITA' SOFTWARE CHE SERVE A RAGGRUPPARE COSTANTI DEFINITE COME COLORI-IMMAGINI-ECC E POTERLE IMPORTARE
// DOVE MI SERVONO
// DA UN ENUM DEFINENDO LA VARIABILE DI ISTANZA POTRA' ACCEDERE A TUTTE LE SUE COSTANTI
var _a;
var Color;
(function (Color) {
    Color[Color["Rosso"] = 4] = "Rosso";
    Color[Color["Verde"] = 5] = "Verde";
    Color[Color["Blu"] = 6] = "Blu";
    Color[Color["Rosa"] = 7] = "Rosa";
    Color[Color["Bianco"] = 8] = "Bianco";
})(Color || (Color = {}));
var colors = Color.Blu;
console.log(colors);
var Direction;
(function (Direction) {
    Direction["UP"] = "UP";
    Direction["DOWN"] = "DOWN";
    Direction["LEFT"] = "LEFT";
    Direction["RIGHT"] = "RIGHT";
})(Direction || (Direction = {}));
var direction = Direction.LEFT;
console.log(direction);
var HeterogeneousEnum;
(function (HeterogeneousEnum) {
    HeterogeneousEnum[HeterogeneousEnum["N"] = 0] = "N";
    HeterogeneousEnum["Y"] = "YES";
})(HeterogeneousEnum || (HeterogeneousEnum = {}));
var heterogene = HeterogeneousEnum.N;
var heterogenes = HeterogeneousEnum.Y;
console.log(heterogene);
console.log(heterogenes);
/*
Crea un enum chiamato Giorno con i giorni della settimana. Stampa tutti i valori usando un ciclo for.

  */
var Giorno;
(function (Giorno) {
    Giorno[Giorno["LUNEDI"] = 0] = "LUNEDI";
    Giorno[Giorno["MARTEDI"] = 1] = "MARTEDI";
    Giorno[Giorno["MERCOLEDI"] = 2] = "MERCOLEDI";
    Giorno[Giorno["GIOVEDI"] = 3] = "GIOVEDI";
    Giorno[Giorno["VENERDI"] = 4] = "VENERDI";
    Giorno[Giorno["SABATO"] = 5] = "SABATO";
    Giorno[Giorno["DOMENICA"] = 6] = "DOMENICA";
})(Giorno || (Giorno = {}));
for (var i = 0; i <= Giorno.DOMENICA; i++) {
    console.log(Giorno[i]);
}
/*
Crea un enum Mese e associa ad ogni mese il numero di giorni. Stampa il numero di giorni di un mese.
*/
var Mese;
(function (Mese) {
    Mese[Mese["GENNAIO"] = 0] = "GENNAIO";
    Mese[Mese["FEBBRAIO"] = 1] = "FEBBRAIO";
    Mese[Mese["MARZO"] = 2] = "MARZO";
})(Mese || (Mese = {}));
var giorniMese = (_a = {},
    _a[Mese.GENNAIO] = 31,
    _a[Mese.FEBBRAIO] = 28,
    _a[Mese.MARZO] = 31,
    _a);
var mese = Mese.FEBBRAIO;
console.log(Giorno);
console.log("Febbraio ha " + giorniMese[mese] + " giorni.");
//Confronta due valori di un enum Livello e stampa quale dei due è maggiore.
var Livello;
(function (Livello) {
    Livello[Livello["BASSO"] = 0] = "BASSO";
    Livello[Livello["MEDIO"] = 1] = "MEDIO";
    Livello[Livello["ALTO"] = 2] = "ALTO";
})(Livello || (Livello = {}));
var livello1 = Livello.MEDIO;
var livello2 = Livello.ALTO;
if (livello1 < livello2) {
    console.log(Livello[livello1] + " è inferiore a " + Livello[livello2]);
}
else if (livello1 > livello2) {
    console.log(Livello[livello1] + " è superiore a " + Livello[livello2]);
}
else {
    console.log("I livelli sono uguali.");
}
