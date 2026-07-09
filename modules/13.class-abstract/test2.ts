/*

ESERCIZIO 1 - Gestione dei dipendenti di un'azienda
Traccia
Un'azienda gestisce diverse tipologie di dipendenti.
Crea una classe astratta Dipendente che contenga:
•	la proprietà nome; 
•	la proprietà cognome; 
•	un costruttore per inizializzare le proprietà; 
•	un metodo astratto calcolaStipendio() che restituisce un numero. 
Successivamente crea una classe Programmatore che estende Dipendente.
La classe Programmatore deve avere una proprietà aggiuntiva stipendioMensile.
Implementa il metodo calcolaStipendio() restituendo lo stipendio mensile.
Infine:
•	crea un oggetto Programmatore; 
•	stampa nome e cognome; 
•	stampa lo stipendio. 



*/

abstract class Dipendente {
  constructor(
    public nome: string,
    public cognome: string,
  ) {
    this.nome = nome;
    this.cognome = cognome;
  }

  abstract calcolaStipendio(): number;
}

class Programmatore extends Dipendente {
  constructor(
    nome: string,
    cognome: string,
    private stipendioMensile: number,
  ) {
    super(nome, cognome);
  }

  calcolaStipendio(): number {
    return this.stipendioMensile;
  }
}

let programmatore = new Programmatore("Mario", "Rossi", 2800);

console.log(programmatore.nome);
console.log(programmatore.cognome);
console.log(programmatore.calcolaStipendio());
