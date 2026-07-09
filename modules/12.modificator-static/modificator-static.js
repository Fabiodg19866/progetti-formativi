var MyAccount = /** @class */ (function () {
    //proprietà della classe
    function MyAccount(balance, firstDeposit, firstDraw) {
        //costruttore della classe
        MyAccount.balance = balance;
        MyAccount.firstDeposit = firstDeposit;
        MyAccount.firstDraw = firstDraw;
    }
    MyAccount.getFirstDeposit = function () {
        return this.balance + this.firstDeposit;
    };
    MyAccount.getTotalAccount = function () {
        return this.getFirstDeposit() - this.firstDraw;
    };
    return MyAccount;
}());
var m = new MyAccount(0, 500, 100);
var total = MyAccount.getTotalAccount(); // chiamo il metodo static
console.log(total);
// SIMULA UN PREVENTIVO DI UNO SVILUPPATORE WEB GESTENDO TUTTE LE FUNZIONALITA' CHE DOVRA' INTEGRARE ALL'INTERNO DI UN SITO
var PreventivoWeb = /** @class */ (function () {
    function PreventivoWeb(giornateMockup, giornateDatabase, giornateIntegrazioneServiziWeb, giornateTest, tariffaGiornaliera) {
        PreventivoWeb.giornateMockup = giornateMockup;
        PreventivoWeb.giornateDatabase = giornateDatabase;
        PreventivoWeb.giornateIntegrazioneServiziWeb =
            giornateIntegrazioneServiziWeb;
        PreventivoWeb.giornateTest = giornateTest;
        PreventivoWeb.tariffaGiornaliera = tariffaGiornaliera;
    }
    PreventivoWeb.getGiornateMockup = function () {
        return PreventivoWeb.tariffaGiornaliera * PreventivoWeb.giornateMockup;
    };
    PreventivoWeb.getGiornateDatabase = function () {
        return PreventivoWeb.tariffaGiornaliera * PreventivoWeb.giornateDatabase;
    };
    PreventivoWeb.getIntegrazioneServiziWeb = function () {
        return (PreventivoWeb.tariffaGiornaliera *
            PreventivoWeb.giornateIntegrazioneServiziWeb);
    };
    PreventivoWeb.getGiornateTest = function () {
        return PreventivoWeb.tariffaGiornaliera * PreventivoWeb.giornateTest;
    };
    PreventivoWeb.getPreventivo = function () {
        return (PreventivoWeb.getGiornateMockup() +
            PreventivoWeb.getGiornateDatabase() +
            PreventivoWeb.getIntegrazioneServiziWeb() +
            PreventivoWeb.getGiornateTest());
    };
    return PreventivoWeb;
}());
var st = new PreventivoWeb(5, 3, 2, 1, 250);
var pv = PreventivoWeb.getPreventivo();
console.log("TOTALE PREVENTIVO :" + pv + " €");
