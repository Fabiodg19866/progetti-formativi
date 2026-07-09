abstract class PreventivoMobile {
  abstract getGiornateMockup(): number;

  abstract getGiornateDatabase(): number;

  abstract getGiornateIntegrazioneServiziWeb(): number;

  abstract getGiornateTestApp(): number;

  abstract getGiornatePubblicazioneApp(): number;

  abstract getPreventivoMobile(): number;
}

class MainPreventivoMobile extends PreventivoMobile {
  giornateMockup: number;
  giornateDatabase: number;
  giornateIntegrazioneServiziWeb: number;
  giornateTestApp: number;
  giornatePubblicazioneApp: number;
  tariffaGiornaliera: number;

  constructor(
    giornateMockup: number,
    giornateDatabase: number,
    giornateIntegrazioneServiziWeb: number,
    giornateTestApp: number,
    giornatePubblicazioneApp: number,
    tariffaGiornaliera: number,
  ) {
    super();
    this.giornateMockup = giornateMockup;
    this.giornateDatabase = giornateDatabase;
    this.giornateIntegrazioneServiziWeb = giornateIntegrazioneServiziWeb;
    this.giornateTestApp = giornateTestApp;
    this.giornatePubblicazioneApp = giornatePubblicazioneApp;
    this.tariffaGiornaliera = tariffaGiornaliera;
  }

  getGiornateMockup(): number {
    return this.tariffaGiornaliera * this.giornateMockup;
  }

  getGiornateDatabase(): number {
    return this.tariffaGiornaliera * this.giornateDatabase;
  }

  getGiornateIntegrazioneServiziWeb(): number {
    return this.tariffaGiornaliera * this.giornateIntegrazioneServiziWeb;
  }

  getGiornateTestApp(): number {
    return this.tariffaGiornaliera * this.giornateTestApp;
  }

  getGiornatePubblicazioneApp(): number {
    return this.tariffaGiornaliera * this.giornatePubblicazioneApp;
  }

  getPreventivoMobile(): number {
    return (
      this.getGiornateMockup() +
      this.getGiornateDatabase() +
      this.getGiornateIntegrazioneServiziWeb() +
      this.getGiornateTestApp() +
      this.getGiornatePubblicazioneApp()
    );
  }
}

let mobile = new MainPreventivoMobile(5, 3, 1, 1, 1, 250);
let app = mobile.getPreventivoMobile();
console.log("PREVENTIVO APP MOBILE :" + app + " €");
