class BankAccounts {
    constructor(balance = 0, firstDeposit = 0, firstDraw = 0, secondDeposit = 0, secondDraw = 0) {
        this.balance = balance;
        this.firstDeposit = firstDeposit;
        this.firstDraw = firstDraw;
        this.secondDeposit = secondDeposit;
        this.secondDraw = secondDraw;
    }
    getFirstDeposit() {
        return this.balance + this.firstDeposit;
    }
    getFirstDraw() {
        return this.getFirstDeposit() - this.firstDraw;
    }
    getSeconDeposit() {
        return this.getFirstDraw() + this.secondDeposit;
    }
    getTotalAccount() {
        return this.getSeconDeposit() - this.secondDraw;
    }
}
let accounts = new BankAccounts(0, 300, 100, 50, 30);
console.log(accounts.getTotalAccount());
class Professionista {
}
class LavoratoriAutonomi extends Professionista {
    constructor(redditoAnnuoLordo = 0, coeffRedd = 0, aliquotaInps = 0, aliquotaIrpef = 0) {
        super();
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.coeffRedd = coeffRedd;
        this.aliquotaInps = aliquotaInps;
        this.aliquotaIrpef = aliquotaIrpef;
    }
    getUtileTasse() {
        return this.redditoAnnuoLordo * this.coeffRedd / 100;
    }
    getTassaInps() {
        return this.getUtileTasse() * this.aliquotaInps / 100;
    }
    getTassaIrpef() {
        return this.getUtileTasse() * this.aliquotaIrpef / 100;
    }
    getRedditoAnnuoNetto() {
        return this.redditoAnnuoLordo - (this.getTassaInps() + this.getTassaIrpef());
    }
}
let reddito = new LavoratoriAutonomi(85000, 78, 26, 15);
console.log(reddito.getRedditoAnnuoNetto());
class SonAccount {
    constructor(balance = 0, firstDeposit = 0, firstDraw = 0, secondDeposit = 0, secondDraw = 0) {
        SonAccount.balance = balance;
        SonAccount.firstDeposit = firstDeposit;
        SonAccount.firstDraw = firstDraw;
        SonAccount.secondDeposit = secondDeposit;
        SonAccount.secondDraw = secondDraw;
    }
    static getFirstDeposit() {
        return SonAccount.balance + SonAccount.firstDeposit;
    }
    static getFirstDraw() {
        return SonAccount.getFirstDeposit() - SonAccount.firstDraw;
    }
    static getSecondDeposit() {
        return SonAccount.getFirstDraw() + SonAccount.secondDeposit;
    }
    static getTotalAccount() {
        return SonAccount.getSecondDeposit() - SonAccount.secondDraw;
    }
}
let son = new SonAccount(0, 500, 100, 200, 100);
console.log(SonAccount.getTotalAccount());
//# sourceMappingURL=test.js.map