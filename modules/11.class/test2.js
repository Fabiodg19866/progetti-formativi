var Dipendente = /** @class */ (function () {
    // OGNI CLASSE HA UN COSTRUTTORE DI DEFAULT IL QUALE REFERENZIA ED INIZIALIZZA LE PROPRIETA' DELLA CLASSE
    function Dipendente(nome, cognome, ruolo) {
        // DICHIARAZIONE DEL COSTRUTTORE
        this.nome = nome; // REFERENZIO ED INIZIALIZZO LE PROPRIETA'
        this.cognome = cognome;
        this.ruolo = ruolo;
    }
    // METODO DELLA CLASSE
    Dipendente.prototype.getDipendente = function () {
        return this.nome + " " + this.cognome + " " + this.ruolo;
    };
    Dipendente.prototype.getNome = function () {
        return this.nome;
    };
    return Dipendente;
}());
var dipendente = new Dipendente("Fabio", "Di Gloria", "Docente");
var d = dipendente.getDipendente();
var nome = dipendente.getNome();
console.log(d);
console.log(nome);
// CREA UN CONTO CORRENTE ESEGUENDO 4 OPERAZIONI BANCARIE : 2 DI VERSAMENTO E 2 DI PRELIEVO
// SAPENDO CHE IL SALDO ATTUALE E' DI 50€
// CANONE ANNUO DA SOTTRARRE DOPO LE OPERAZIONI DI VERSAMENTO E PRELIEVO
var ContoCorrente = /** @class */ (function () {
    function ContoCorrente(saldoAttuale, primoVersamento, primoPrelievo, secondoVersamento, secondoPrelievo, canoneAnnuo) {
        this.saldoAttuale = saldoAttuale;
        this.primoVersamento = primoVersamento;
        this.primoPrelievo = primoPrelievo;
        this.secondoVersamento = secondoVersamento;
        this.secondoPrelievo = secondoPrelievo;
        this.canoneAnnuo = canoneAnnuo;
    }
    ContoCorrente.prototype.getPrimoVersamento = function () {
        return this.saldoAttuale + this.primoVersamento;
    };
    ContoCorrente.prototype.getPrimoPrelievo = function () {
        return this.getPrimoVersamento() - this.primoPrelievo;
    };
    ContoCorrente.prototype.getSecondoVersamento = function () {
        return this.getPrimoPrelievo() + this.secondoVersamento;
    };
    ContoCorrente.prototype.getSecondoPrelievo = function () {
        return this.getSecondoVersamento() - this.secondoPrelievo;
    };
    ContoCorrente.prototype.getSaldoDefinitivo = function () {
        return this.getSecondoPrelievo() - this.canoneAnnuo;
    };
    return ContoCorrente;
}());
var conto = new ContoCorrente(50, 100, 30, 200, 50, 50);
var c = conto.getSaldoDefinitivo();
console.log("IL SALDO DEFINITIVO E' :" + " " + c + "€");
// SIMULA UN PREVENTIVO DI UNO SVILUPPATORE WEB GESTENDO TUTTE LE FUNZIONALITA' CHE DOVRA' INTEGRARE ALL'INTERNO DI UN SITO
var Preventivo = /** @class */ (function () {
    function Preventivo(giornateMockup, giornateDatabase, giornateIntegrazioneServiziWeb, giornateTestSito, tariffaGiornaliera) {
        this.giornateMockup = giornateMockup;
        this.giornateDatabase = giornateDatabase;
        this.giornateIntegrazioneServiziWeb = giornateIntegrazioneServiziWeb;
        this.giornateTestSito = giornateTestSito;
        this.tariffaGiornaliera = tariffaGiornaliera;
    }
    Preventivo.prototype.getGiornateMockup = function () {
        return this.tariffaGiornaliera * this.giornateMockup;
    };
    Preventivo.prototype.getGiornateDatabase = function () {
        return this.tariffaGiornaliera * this.giornateDatabase;
    };
    Preventivo.prototype.getGiornateIntegrazioneServiziWeb = function () {
        return this.tariffaGiornaliera * this.giornateIntegrazioneServiziWeb;
    };
    Preventivo.prototype.getGiornateTestSito = function () {
        return this.tariffaGiornaliera * this.giornateTestSito;
    };
    Preventivo.prototype.getTotalePreventivo = function () {
        return (this.getGiornateMockup() +
            this.getGiornateDatabase() +
            this.getGiornateIntegrazioneServiziWeb() +
            this.getGiornateTestSito());
    };
    return Preventivo;
}());
var preventivo = new Preventivo(5, 2, 1, 1, 250);
var p = preventivo.getTotalePreventivo();
console.log("TOTALE PREVENTIVO :" + p + " " + "€");
// CLASSE
// UN MODELLO CHE GESTISCE ALCUNE CARATTERISTICHE AL SUO INTERNO
// ATTRIBUTI
// COSTRUTTORI
// METODI
// VARIABILI DI ISTANZA
// CREA UN CONTO CORRENTE ESEGUENDO 4 OPERAZIONI BANCARIE : 2 DI VERSAMENTO E 2 DI PRELIEVO
// SAPENDO CHE IL SALDO ATTUALE E' DI 50€
// CANONE ANNUO DEL 10% SUL SALDO DEFINIVO DA SOTTRARRE DOPO LE OPERAZIONI DI VERSAMENTO E PRELIEVO
var Conto = /** @class */ (function () {
    // COSTRUTTORE
    // PRENDE IN INGRESSO GLI ATTRIBUTI DELLA CLASSE LI REFERENZIA E INIZIALIZZA
    // OGNI CLASSE PUO' AVERE UN SOLO COSTRUTTORE
    function Conto(
    // DICHIARAZIONE DEL COSTRUTTORE CON INGRESSO I PARAMETRI DELLA CLASSE
    saldoAttuale, primoVersamento, primoPrelievo, secondoVersamento, secondoPrelievo, canoneAnnuo) {
        this.saldoAttuale = saldoAttuale;
        this.primoVersamento = primoVersamento;
        this.primoPrelievo = primoPrelievo;
        this.secondoVersamento = secondoVersamento;
        this.secondoPrelievo = secondoPrelievo;
        this.canoneAnnuo = canoneAnnuo;
    }
    Conto.prototype.getPrimoVersamento = function () {
        return this.saldoAttuale + this.primoVersamento;
    };
    Conto.prototype.getPrimoPrelievo = function () {
        return this.getPrimoVersamento() - this.primoPrelievo;
    };
    Conto.prototype.getSecondoVersamento = function () {
        return this.getPrimoPrelievo() + this.secondoVersamento;
    };
    Conto.prototype.getSecondoPrelievo = function () {
        return this.getSecondoVersamento() - this.secondoPrelievo;
    };
    Conto.prototype.getCanoneAnnuo = function () {
        return (this.getSecondoPrelievo() * this.canoneAnnuo) / 100;
    };
    Conto.prototype.getSaldoDefinitivo = function () {
        return this.getSecondoPrelievo() - this.getCanoneAnnuo();
    };
    return Conto;
}());
var ct = new Conto(50, 100, 30, 50, 10, 10); // INIZIALIZZAZIONE DEL COSTRUTTORE CON I SUOI ARGOMENTI
var sd = ct.getSaldoDefinitivo();
console.log("SALDO DEFINITIVO :" + sd + "€");
