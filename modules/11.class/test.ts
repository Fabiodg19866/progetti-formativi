


class BankAccounts{

    private balance: number
    private firstDeposit: number
    private firstDraw: number
    private secondDeposit: number
    private secondDraw:number

    constructor( balance = 0,firstDeposit = 0,
    firstDraw = 0,
     secondDeposit = 0,
    secondDraw = 0) {


        this.balance = balance
        this.firstDeposit = firstDeposit
        this.firstDraw = firstDraw
        this.secondDeposit = secondDeposit
        this.secondDraw = secondDraw
    }


    public getFirstDeposit() :number {
    
      return this.balance + this.firstDeposit

    }


    public getFirstDraw() :number {


        return this.getFirstDeposit() - this.firstDraw
    }


    public getSeconDeposit() :number {

        return this.getFirstDraw() + this.secondDeposit
    }

    public getTotalAccount():number {

        return this.getSeconDeposit() - this.secondDraw
    }



}



let accounts = new BankAccounts(0, 300, 100, 50, 30)
console.log(accounts.getTotalAccount());



abstract class Professionista {


    abstract getUtileTasse():number
 
}


interface IProfessionista {


    getTassaInps():number
    getTassaIrpef():number
}


class LavoratoriAutonomi extends Professionista implements IProfessionista {

    private redditoAnnuoLordo: number
    private coeffRedd: number
    private aliquotaInps: number
    private aliquotaIrpef: number


    constructor(redditoAnnuoLordo = 0, coeffRedd = 0,
        aliquotaInps = 0, aliquotaIrpef = 0
    ) {
        super()
        this.redditoAnnuoLordo = redditoAnnuoLordo
        this.coeffRedd = coeffRedd
        this.aliquotaInps = aliquotaInps
        this.aliquotaIrpef = aliquotaIrpef


    }
    

    public getUtileTasse(): number {

        return this.redditoAnnuoLordo * this.coeffRedd / 100
    }
    
    public getTassaInps() :number {
        
        return this.getUtileTasse() * this.aliquotaInps /100
    }
 
    public getTassaIrpef():number {

        return this.getUtileTasse() * this.aliquotaIrpef /100
    }

    public getRedditoAnnuoNetto() : number {

        return this.redditoAnnuoLordo - (this.getTassaInps() + this.getTassaIrpef())
    }

}


let reddito = new LavoratoriAutonomi(85000, 78, 26, 15)
console.log(reddito.getRedditoAnnuoNetto());


class SonAccount {

    private static balance: number
    private static firstDeposit: number
    private static firstDraw: number
    private static secondDeposit: number
    private  static secondDraw: number
    

    constructor(balance = 0, firstDeposit = 0,
        firstDraw = 0, secondDeposit = 0, secondDraw = 0

    ) {

        SonAccount.balance = balance
        SonAccount.firstDeposit = firstDeposit
        SonAccount.firstDraw = firstDraw
        SonAccount.secondDeposit = secondDeposit
        SonAccount.secondDraw = secondDraw


    }
    
    public static getFirstDeposit():number {

        return SonAccount.balance + SonAccount.firstDeposit
    }

    public static getFirstDraw() : number {
          
        return SonAccount.getFirstDeposit() - SonAccount.firstDraw
    }
    
    public static getSecondDeposit() :number {

        return SonAccount.getFirstDraw() + SonAccount.secondDeposit
    }
   
    public static getTotalAccount() :number {

        return SonAccount.getSecondDeposit() - SonAccount.secondDraw
    }


}

let son = new SonAccount(0, 500, 100, 200, 100)
console.log(SonAccount.getTotalAccount());
