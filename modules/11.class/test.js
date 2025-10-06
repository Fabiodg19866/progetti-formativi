var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccounts = /** @class */ (function () {
    function BankAccounts(balance, firstDeposit, firstDraw, secondDeposit, secondDraw) {
        if (balance === void 0) { balance = 0; }
        if (firstDeposit === void 0) { firstDeposit = 0; }
        if (firstDraw === void 0) { firstDraw = 0; }
        if (secondDeposit === void 0) { secondDeposit = 0; }
        if (secondDraw === void 0) { secondDraw = 0; }
        this.balance = balance;
        this.firstDeposit = firstDeposit;
        this.firstDraw = firstDraw;
        this.secondDeposit = secondDeposit;
        this.secondDraw = secondDraw;
    }
    BankAccounts.prototype.getFirstDeposit = function () {
        return this.balance + this.firstDeposit;
    };
    BankAccounts.prototype.getFirstDraw = function () {
        return this.getFirstDeposit() - this.firstDraw;
    };
    BankAccounts.prototype.getSeconDeposit = function () {
        return this.getFirstDraw() + this.secondDeposit;
    };
    BankAccounts.prototype.getTotalAccount = function () {
        return this.getSeconDeposit() - this.secondDraw;
    };
    return BankAccounts;
}());
var accounts = new BankAccounts(0, 300, 100, 50, 30);
console.log(accounts.getTotalAccount());
var Professionista = /** @class */ (function () {
    function Professionista() {
    }
    return Professionista;
}());
var LavoratoriAutonomi = /** @class */ (function (_super) {
    __extends(LavoratoriAutonomi, _super);
    function LavoratoriAutonomi(redditoAnnuoLordo, coeffRedd, aliquotaInps, aliquotaIrpef) {
        if (redditoAnnuoLordo === void 0) { redditoAnnuoLordo = 0; }
        if (coeffRedd === void 0) { coeffRedd = 0; }
        if (aliquotaInps === void 0) { aliquotaInps = 0; }
        if (aliquotaIrpef === void 0) { aliquotaIrpef = 0; }
        var _this = _super.call(this) || this;
        _this.redditoAnnuoLordo = redditoAnnuoLordo;
        _this.coeffRedd = coeffRedd;
        _this.aliquotaInps = aliquotaInps;
        _this.aliquotaIrpef = aliquotaIrpef;
        return _this;
    }
    LavoratoriAutonomi.prototype.getUtileTasse = function () {
        return this.redditoAnnuoLordo * this.coeffRedd / 100;
    };
    LavoratoriAutonomi.prototype.getTassaInps = function () {
        return this.getUtileTasse() * this.aliquotaInps / 100;
    };
    LavoratoriAutonomi.prototype.getTassaIrpef = function () {
        return this.getUtileTasse() * this.aliquotaIrpef / 100;
    };
    LavoratoriAutonomi.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnuoLordo - (this.getTassaInps() + this.getTassaIrpef());
    };
    return LavoratoriAutonomi;
}(Professionista));
var reddito = new LavoratoriAutonomi(85000, 78, 26, 15);
console.log(reddito.getRedditoAnnuoNetto());
var SonAccount = /** @class */ (function () {
    function SonAccount(balance, firstDeposit, firstDraw, secondDeposit, secondDraw) {
        if (balance === void 0) { balance = 0; }
        if (firstDeposit === void 0) { firstDeposit = 0; }
        if (firstDraw === void 0) { firstDraw = 0; }
        if (secondDeposit === void 0) { secondDeposit = 0; }
        if (secondDraw === void 0) { secondDraw = 0; }
        SonAccount.balance = balance;
        SonAccount.firstDeposit = firstDeposit;
        SonAccount.firstDraw = firstDraw;
        SonAccount.secondDeposit = secondDeposit;
        SonAccount.secondDraw = secondDraw;
    }
    SonAccount.getFirstDeposit = function () {
        return SonAccount.balance + SonAccount.firstDeposit;
    };
    SonAccount.getFirstDraw = function () {
        return this.getFirstDeposit() - SonAccount.firstDraw;
    };
    SonAccount.getSecondDeposit = function () {
        return this.getFirstDraw() + SonAccount.secondDeposit;
    };
    SonAccount.getTotalAccount = function () {
        return this.getSecondDeposit() - SonAccount.firstDraw;
    };
    return SonAccount;
}());
var son = new SonAccount(0, 500, 100, 200, 100);
console.log(SonAccount.getTotalAccount());
