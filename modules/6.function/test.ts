
/*
//Crea una funzione saluta() che stampa "Benvenuti in Typescript".

function saluta(): void { // DICHIARAZIONE DELLA FUNZIONE IN CUI POSSO INSERIRE DEI PARAMETRI CON IL TIPO DI DATO DA RESTITUIRE SE LA FUNZIONE LO RICHIEDE
    console.log("Benvenuti in Typescript"); // LA LOGICA DELLA FUNZIONE CIOE' CIO' CHE LA FUNZIONE DOVRA' ESEGUIRE
}

saluta();  // CHIAMATA DELLA FUNZIONE E GLI ARGOMENTI SE SONO PREVISTI PARAMETRI IN INGRESSO


console.log('-------------------------');

*/

 

//Crea una funzione somma(a, b) che restituisce la somma di due numeri.



/*
function getSomma(a: number, b: number): number {
    return a + b ;
}

//let res: number = getSomma(5, 3);

console.log("Somma: " + getSomma(5, 3));

*/


/*
function getDatiAnagrafici(nome: string, cognome: string, professione: string, nazione: string, eta : number): string|number {
    
  return nome + " " + cognome + " " + professione + "  " + nazione + " " + eta

}

console.log("DATI ANAGRAFICI :" + getDatiAnagrafici('Fabio', 'Di Gloria','Docente e Programmatore Informatico', 'Italia',40));

*/


// CALCOLA LA RETRIBUZIONE ORARIA DI UN DIPENDENTE AZIENDALE

function getDipendente(stipendio: number, oreLavorate: number): number {
    

    return stipendio / oreLavorate
}


console.log("TOTALE RETRIBUZIONE ORARIA :" + " "+ " €  " +getDipendente(1500,160));


 function pariODispari(n: number): void {

    if (n % 2 === 0) {
        console.log(n + " è pari.");
    } else {
        console.log(n + " è dispari.");
    }

}

pariODispari(4);

