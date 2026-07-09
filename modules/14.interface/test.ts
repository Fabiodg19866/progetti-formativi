/*


ESERCIZIO 4 - Gestione dei corsi
Traccia
Una piattaforma e-learning propone diversi corsi.
Crea un'interfaccia ICorso contenente:
•	titolo; 
•	docente; 
•	metodo mostraCorso(). 
Successivamente crea una classe CorsoTypeScript che implementa l'interfaccia.
Il metodo deve stampare tutte le informazioni del corso.

*/

interface ICorso {

    titolo: string;
    docente: string;

    mostraCorso(): void;

}

class CorsoTypeScript implements ICorso {

    constructor(
        public titolo: string,
        public docente: string
    ) {}

    mostraCorso(): void {

        console.log("Titolo:", this.titolo);
        console.log("Docente:", this.docente);

    }

}

let corso = new CorsoTypeScript(
    "TypeScript Base",
    "Luca Bianchi"
);

corso.mostraCorso();
