// EREDITARIETA' E POLIMORFISMO

class FatherAccount {
  saldoAttuale: number;
  primoVersamento: number;
  primoPrelievo: number;
  secondoVersamento: number;
  secondoPrelievo: number;

  constructor(
    saldoAttuale: number,
    primoVersamento: number,
    primoPrelievo: number,
    secomdoVersamento: number,
    secondoPrelievo: number,
  ) {
    this.saldoAttuale = saldoAttuale;
    this.primoVersamento = primoVersamento;
    this.primoPrelievo = primoPrelievo;
    this.secondoVersamento = secomdoVersamento;
    this.secondoPrelievo = secondoPrelievo;
  }

  getPrimoVersamento(): number {
    return this.saldoAttuale + this.primoVersamento;
  }

  getPrimoPrelievo(): number {
    return this.getPrimoVersamento() - this.primoPrelievo;
  }

  getSecondoVersamento(): number {
    return this.getPrimoPrelievo() + this.secondoVersamento;
  }

  getSaldoDefinitivo(): number {
    return this.getSecondoVersamento() - this.secondoPrelievo;
  }
}

let account = new FatherAccount(0, 100, 30, 50, 10);
let sd = account.getSaldoDefinitivo();
console.log("SALDO DEFINITIVO FATHER ACCOUNT :" + sd + " €");

// EREDITARIETA' = FAR ACQUISIRE ALLA CLASSE SON ACCOUNT ATTRIBUTI E METODI DELLA CLASSE FATHER ACCOUNT
class SonAccount extends FatherAccount {
  canoneAnnuo: number;

  constructor(
    saldoAttuale: number,
    primoVersamento: number,
    primoPrelievo: number,
    secondoVersamento: number,
    secondoPrelievo: number,
    canoneAnnuo: number,
  ) {
    super(
      saldoAttuale,
      primoVersamento,
      primoPrelievo,
      secondoVersamento,
      secondoPrelievo,
    );

    this.canoneAnnuo = canoneAnnuo;
  }

  // POLIMOFISMO = RIDEFINIRE I METODI GIA' DEFINITI NELLA CLASSE FATHER ACCOUNT
  getPrimoVersamento(): number {
    return this.saldoAttuale + this.primoVersamento;
  }

  getPrimoPrelievo(): number {
    return this.getPrimoVersamento() - this.primoPrelievo;
  }

  getSecondoVersamento(): number {
    return this.getPrimoPrelievo() + this.secondoVersamento;
  }

  getSecondoPrelievo(): number {
    return this.getSecondoVersamento() - this.secondoPrelievo;
  }

  getCanoneAnnuo(): number {
    return (this.getSecondoVersamento() * this.canoneAnnuo) / 100;
  }

  getSaldoDefinitivo(): number {
    return this.getSecondoPrelievo() - this.getCanoneAnnuo();
  }
}

let son = new SonAccount(0, 150, 50, 20, 10, 15);

let sds = son.getSaldoDefinitivo();
console.log("SALDO DEFINITIVO SON ACCOUNT :" + sds + " €");


// RICAVARE LO STIPENDIO NETTO MENSILE DOPO AVER SOTTRATTO LE TASSE INPS E IRPEF DEI LAVORATORI AUTONOMI



class Docente {

    redditoAnnuoLordo: number
    coeffRedd: number
    aliquotaInps: number
    aliquotaIrpef: number
    

    constructor(redditoAnnuoLordo: number, coeffRedd: number, aliquotaInps: number, aliquotaIrpef: number) {


        this.redditoAnnuoLordo = redditoAnnuoLordo
        this.coeffRedd = coeffRedd
        this.aliquotaInps = aliquotaInps
        this.aliquotaIrpef = aliquotaIrpef


    }


    getImponibile() : number {
        return (this.redditoAnnuoLordo * this.coeffRedd) / 100

    }
    

    getTassaInps() :number {

        return (this.getImponibile() * this.aliquotaInps) / 100

    }


    getTassaIrpef() :number {
        

        return (this.getImponibile() - this.getTassaInps()) * this.aliquotaIrpef /100
    }


    getStipendioMensile() : number {

     return (this.redditoAnnuoLordo - (this.getTassaInps() + this.getTassaIrpef()))/12


    }


}

let docente = new Docente(50000, 78, 26, 15)

let dc = docente.getStipendioMensile()
console.log('STIPENDIO MENSILE DOCENTE :' + dc + ' €');





class Avvocato extends Docente {


    constructor(redditoAnnuoLordo: number, coeffRedd: number, aliquotaInps: number, aliquotaIrpef: number) {
         
        super(redditoAnnuoLordo, coeffRedd, aliquotaInps, aliquotaIrpef)


    }
    
      getImponibile() : number {
        return (this.redditoAnnuoLordo * this.coeffRedd) / 100

    }
    

    getTassaInps() :number {

        return (this.getImponibile() * this.aliquotaInps) / 100

    }


    getTassaIrpef() :number {
        

        return (this.getImponibile() - this.getTassaInps()) * this.aliquotaIrpef /100
    }


    getStipendioMensile() : number {

     return (this.redditoAnnuoLordo - (this.getTassaInps() + this.getTassaIrpef()))/12


    }


      

}

let avvocato = new Avvocato(85000, 67, 26, 15)
let av = avvocato.getStipendioMensile()
console.log('STIPENDIO MENSILE AVVOCATO :' + av + ' €');
