class Dipendente {
  // CARATTERISTICHE DI UNA CLASSE

  // PROPRIETA'

  nome: string;
  cognome: string;
  ruolo: string;

  // OGNI CLASSE HA UN COSTRUTTORE DI DEFAULT IL QUALE REFERENZIA ED INIZIALIZZA LE PROPRIETA' DELLA CLASSE
  constructor(nome: string, cognome: string, ruolo: string) {
    // DICHIARAZIONE DEL COSTRUTTORE

    this.nome = nome; // REFERENZIO ED INIZIALIZZO LE PROPRIETA'
    this.cognome = cognome;
    this.ruolo = ruolo;
  }

  // METODO DELLA CLASSE
  getDipendente(): string {
    return this.nome + " " + this.cognome + " " + this.ruolo;
  }
  getNome(): string {
    return this.nome;
  }
}

let dipendente = new Dipendente("Fabio", "Di Gloria", "Docente");
let d = dipendente.getDipendente();
let nome = dipendente.getNome();

console.log(d);
console.log(nome);

// CREA UN CONTO CORRENTE ESEGUENDO 4 OPERAZIONI BANCARIE : 2 DI VERSAMENTO E 2 DI PRELIEVO
// SAPENDO CHE IL SALDO ATTUALE E' DI 50€
// CANONE ANNUO DA SOTTRARRE DOPO LE OPERAZIONI DI VERSAMENTO E PRELIEVO

class ContoCorrente {
  saldoAttuale: number;
  primoVersamento: number;
  primoPrelievo: number;
  secondoVersamento: number;
  secondoPrelievo: number;
  canoneAnnuo: number;

  constructor(
    saldoAttuale: number,
    primoVersamento: number,
    primoPrelievo: number,
    secondoVersamento: number,
    secondoPrelievo: number,
    canoneAnnuo: number,
  ) {
    this.saldoAttuale = saldoAttuale;
    this.primoVersamento = primoVersamento;
    this.primoPrelievo = primoPrelievo;
    this.secondoVersamento = secondoVersamento;
    this.secondoPrelievo = secondoPrelievo;
    this.canoneAnnuo = canoneAnnuo;
  }

  getPrimoVersamento(): number {
    return this.saldoAttuale + this.primoVersamento;
  }

  getPrimoPrelievo() {
    return this.getPrimoVersamento() - this.primoPrelievo;
  }

  getSecondoVersamento() {
    return this.getPrimoPrelievo() + this.secondoVersamento;
  }

  getSecondoPrelievo() {
    return this.getSecondoVersamento() - this.secondoPrelievo;
  }

  getSaldoDefinitivo() {
    return this.getSecondoPrelievo() - this.canoneAnnuo;
  }
}

let conto = new ContoCorrente(50, 100, 30, 200, 50, 50);
let c = conto.getSaldoDefinitivo();
console.log("IL SALDO DEFINITIVO E' :" + " " + c + "€");

// SIMULA UN PREVENTIVO DI UNO SVILUPPATORE WEB GESTENDO TUTTE LE FUNZIONALITA' CHE DOVRA' INTEGRARE ALL'INTERNO DI UN SITO

class Preventivo {
  giornateMockup: number;
  giornateDatabase: number;
  giornateIntegrazioneServiziWeb: number;
  giornateTestSito: number;
  tariffaGiornaliera: number;

  constructor(
    giornateMockup: number,
    giornateDatabase: number,
    giornateIntegrazioneServiziWeb: number,
    giornateTestSito: number,
    tariffaGiornaliera: number,
  ) {
    this.giornateMockup = giornateMockup;
    this.giornateDatabase = giornateDatabase;
    this.giornateIntegrazioneServiziWeb = giornateIntegrazioneServiziWeb;
    this.giornateTestSito = giornateTestSito;
    this.tariffaGiornaliera = tariffaGiornaliera;
  }

  getGiornateMockup() {
    return this.tariffaGiornaliera * this.giornateMockup;
  }

  getGiornateDatabase() {
    return this.tariffaGiornaliera * this.giornateDatabase;
  }

  getGiornateIntegrazioneServiziWeb() {
    return this.tariffaGiornaliera * this.giornateIntegrazioneServiziWeb;
  }

  getGiornateTestSito() {
    return this.tariffaGiornaliera * this.giornateTestSito;
  }

  getTotalePreventivo() {
    return (
      this.getGiornateMockup() +
      this.getGiornateDatabase() +
      this.getGiornateIntegrazioneServiziWeb() +
      this.getGiornateTestSito()
    );
  }
}

let preventivo = new Preventivo(5, 2, 1, 1, 250);
let p = preventivo.getTotalePreventivo();
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

class Conto {
  // ATTRIBUTI

  saldoAttuale: number;
  primoVersamento: number;
  primoPrelievo: number;
  secondoVersamento: number;
  secondoPrelievo: number;
  canoneAnnuo : number


  // COSTRUTTORE

  // PRENDE IN INGRESSO GLI ATTRIBUTI DELLA CLASSE LI REFERENZIA E INIZIALIZZA
  // OGNI CLASSE PUO' AVERE UN SOLO COSTRUTTORE

  constructor(
    // DICHIARAZIONE DEL COSTRUTTORE CON INGRESSO I PARAMETRI DELLA CLASSE
    saldoAttuale: number,
    primoVersamento: number,
    primoPrelievo: number,
    secondoVersamento: number,
    secondoPrelievo: number,
    canoneAnnuo: number
  ) {
    this.saldoAttuale = saldoAttuale;
    this.primoVersamento = primoVersamento;
    this.primoPrelievo = primoPrelievo;
    this.secondoVersamento = secondoVersamento;
    this.secondoPrelievo = secondoPrelievo;
    this.canoneAnnuo = canoneAnnuo
  }

  getPrimoVersamento(): number {
    return this.saldoAttuale + this.primoVersamento;
  }

  getPrimoPrelievo() {
    return this.getPrimoVersamento() - this.primoPrelievo;
  }

  getSecondoVersamento() {
    return this.getPrimoPrelievo() + this.secondoVersamento;
  }

  getSecondoPrelievo() {
    return this.getSecondoVersamento() - this.secondoPrelievo;
  }

   getCanoneAnnuo () {
  
     return (this.getSecondoPrelievo() * this.canoneAnnuo) /100
  
   }
  
  getSaldoDefinitivo() {

    return this.getSecondoPrelievo() - this.getCanoneAnnuo()
  }

}

let ct = new Conto(50, 100, 30, 50, 10,10); // INIZIALIZZAZIONE DEL COSTRUTTORE CON I SUOI ARGOMENTI
let sd = ct.getSaldoDefinitivo();
console.log("SALDO DEFINITIVO :" + sd + "€");

