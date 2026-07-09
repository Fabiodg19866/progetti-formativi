// EREDITARIETA' E POLIMORFISMO
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
var FatherAccount = /** @class */ (function () {
    function FatherAccount(saldoAttuale, primoVersamento, primoPrelievo, secomdoVersamento, secondoPrelievo) {
        this.saldoAttuale = saldoAttuale;
        this.primoVersamento = primoVersamento;
        this.primoPrelievo = primoPrelievo;
        this.secondoVersamento = secomdoVersamento;
        this.secondoPrelievo = secondoPrelievo;
    }
    FatherAccount.prototype.getPrimoVersamento = function () {
        return this.saldoAttuale + this.primoVersamento;
    };
    FatherAccount.prototype.getPrimoPrelievo = function () {
        return this.getPrimoVersamento() - this.primoPrelievo;
    };
    FatherAccount.prototype.getSecondoVersamento = function () {
        return this.getPrimoPrelievo() + this.secondoVersamento;
    };
    FatherAccount.prototype.getSaldoDefinitivo = function () {
        return this.getSecondoVersamento() - this.secondoPrelievo;
    };
    return FatherAccount;
}());
var account = new FatherAccount(0, 100, 30, 50, 10);
var sd = account.getSaldoDefinitivo();
console.log("SALDO DEFINITIVO FATHER ACCOUNT :" + sd + " €");
// EREDITARIETA' = FAR ACQUISIRE ALLA CLASSE SON ACCOUNT ATTRIBUTI E METODI DELLA CLASSE FATHER ACCOUNT
var SonAccount = /** @class */ (function (_super) {
    __extends(SonAccount, _super);
    function SonAccount(saldoAttuale, primoVersamento, primoPrelievo, secondoVersamento, secondoPrelievo, canoneAnnuo) {
        var _this = _super.call(this, saldoAttuale, primoVersamento, primoPrelievo, secondoVersamento, secondoPrelievo) || this;
        _this.canoneAnnuo = canoneAnnuo;
        return _this;
    }
    // POLIMOFISMO = RIDEFINIRE I METODI GIA' DEFINITI NELLA CLASSE FATHER ACCOUNT
    SonAccount.prototype.getPrimoVersamento = function () {
        return this.saldoAttuale + this.primoVersamento;
    };
    SonAccount.prototype.getPrimoPrelievo = function () {
        return this.getPrimoVersamento() - this.primoPrelievo;
    };
    SonAccount.prototype.getSecondoVersamento = function () {
        return this.getPrimoPrelievo() + this.secondoVersamento;
    };
    SonAccount.prototype.getSecondoPrelievo = function () {
        return this.getSecondoVersamento() - this.secondoPrelievo;
    };
    SonAccount.prototype.getCanoneAnnuo = function () {
        return (this.getSecondoVersamento() * this.canoneAnnuo) / 100;
    };
    SonAccount.prototype.getSaldoDefinitivo = function () {
        return this.getSecondoPrelievo() - this.getCanoneAnnuo();
    };
    return SonAccount;
}(FatherAccount));
var son = new SonAccount(0, 150, 50, 20, 10, 15);
var sds = son.getSaldoDefinitivo();
console.log("SALDO DEFINITIVO SON ACCOUNT :" + sds + " €");
// RICAVARE LO STIPENDIO NETTO MENSILE DOPO AVER SOTTRATTO LE TASSE INPS E IRPEF DEI LAVORATORI AUTONOMI
var Docente = /** @class */ (function () {
    function Docente(redditoAnnuoLordo, coeffRedd, aliquotaInps, aliquotaIrpef) {
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.coeffRedd = coeffRedd;
        this.aliquotaInps = aliquotaInps;
        this.aliquotaIrpef = aliquotaIrpef;
    }
    Docente.prototype.getImponibile = function () {
        return (this.redditoAnnuoLordo * this.coeffRedd) / 100;
    };
    Docente.prototype.getTassaInps = function () {
        return (this.getImponibile() * this.aliquotaInps) / 100;
    };
    Docente.prototype.getTassaIrpef = function () {
        return (this.getImponibile() - this.getTassaInps()) * this.aliquotaIrpef / 100;
    };
    Docente.prototype.getStipendioMensile = function () {
        return (this.redditoAnnuoLordo - (this.getTassaInps() + this.getTassaIrpef())) / 12;
    };
    return Docente;
}());
var docente = new Docente(50000, 78, 26, 15);
var dc = docente.getStipendioMensile();
console.log('STIPENDIO MENSILE DOCENTE :' + dc + ' €');
var Avvocato = /** @class */ (function (_super) {
    __extends(Avvocato, _super);
    function Avvocato(redditoAnnuoLordo, coeffRedd, aliquotaInps, aliquotaIrpef) {
        return _super.call(this, redditoAnnuoLordo, coeffRedd, aliquotaInps, aliquotaIrpef) || this;
    }
    Avvocato.prototype.getImponibile = function () {
        return (this.redditoAnnuoLordo * this.coeffRedd) / 100;
    };
    Avvocato.prototype.getTassaInps = function () {
        return (this.getImponibile() * this.aliquotaInps) / 100;
    };
    Avvocato.prototype.getTassaIrpef = function () {
        return (this.getImponibile() - this.getTassaInps()) * this.aliquotaIrpef / 100;
    };
    Avvocato.prototype.getStipendioMensile = function () {
        return (this.redditoAnnuoLordo - (this.getTassaInps() + this.getTassaIrpef())) / 12;
    };
    return Avvocato;
}(Docente));
var avvocato = new Avvocato(85000, 67, 26, 15);
var av = avvocato.getStipendioMensile();
console.log('STIPENDIO MENSILE AVVOCATO :' + av + ' €');
