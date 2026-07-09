/*


ESERCIZIO 3 - Gestione dei prodotti
Traccia
Un negozio vende diversi prodotti.
Crea un'interfaccia IProdotto contenente:
•	nome;
•	prezzo;
•	metodo mostraInformazioni().
Successivamente crea una classe Smartphone che implementa l'interfaccia.
Il metodo deve stampare il nome e il prezzo del prodotto.



*/
var Smartphone = /** @class */ (function () {
    function Smartphone(nome, prezzo) {
        this.nome = nome;
        this.prezzo = prezzo;
    }
    Smartphone.prototype.mostraInformazioni = function () {
        console.log("Prodotto:", this.nome);
        console.log("Prezzo:", this.prezzo + " €");
    };
    return Smartphone;
}());
var telefono = new Smartphone("iPhone 16", 1199);
telefono.mostraInformazioni();
