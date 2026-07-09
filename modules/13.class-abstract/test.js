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
var PreventivoMobile = /** @class */ (function () {
    function PreventivoMobile() {
    }
    return PreventivoMobile;
}());
var MainPreventivoMobile = /** @class */ (function (_super) {
    __extends(MainPreventivoMobile, _super);
    function MainPreventivoMobile(giornateMockup, giornateDatabase, giornateIntegrazioneServiziWeb, giornateTestApp, giornatePubblicazioneApp, tariffaGiornaliera) {
        var _this = _super.call(this) || this;
        _this.giornateMockup = giornateMockup;
        _this.giornateDatabase = giornateDatabase;
        _this.giornateIntegrazioneServiziWeb = giornateIntegrazioneServiziWeb;
        _this.giornateTestApp = giornateTestApp;
        _this.giornatePubblicazioneApp = giornatePubblicazioneApp;
        _this.tariffaGiornaliera = tariffaGiornaliera;
        return _this;
    }
    MainPreventivoMobile.prototype.getGiornateMockup = function () {
        return this.tariffaGiornaliera * this.giornateMockup;
    };
    MainPreventivoMobile.prototype.getGiornateDatabase = function () {
        return this.tariffaGiornaliera * this.giornateDatabase;
    };
    MainPreventivoMobile.prototype.getGiornateIntegrazioneServiziWeb = function () {
        return this.tariffaGiornaliera * this.giornateIntegrazioneServiziWeb;
    };
    MainPreventivoMobile.prototype.getGiornateTestApp = function () {
        return this.tariffaGiornaliera * this.giornateTestApp;
    };
    MainPreventivoMobile.prototype.getGiornatePubblicazioneApp = function () {
        return this.tariffaGiornaliera * this.giornatePubblicazioneApp;
    };
    MainPreventivoMobile.prototype.getPreventivoMobile = function () {
        return (this.getGiornateMockup() +
            this.getGiornateDatabase() +
            this.getGiornateIntegrazioneServiziWeb() +
            this.getGiornateTestApp() +
            this.getGiornatePubblicazioneApp());
    };
    return MainPreventivoMobile;
}(PreventivoMobile));
var mobile = new MainPreventivoMobile(5, 3, 1, 1, 1, 250);
var app = mobile.getPreventivoMobile();
console.log('PREVENTIVO APP MOBILE :' + app + ' €');
