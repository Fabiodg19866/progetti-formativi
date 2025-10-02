class SonAccount {
  balance = 0;
  firstDeposit = 0;
  firstDraw = 0;
  secondDeposit = 0;
  secondDraw = 0;



  getFirstDeposit(balance = 0,firstDeposit = 500) {
    return balance + firstDeposit;
  }

  getFirstDraw(firstDraw = 100) {
    return this.getFirstDeposit() - firstDraw;
  }

  getSecondDeposit(secondDeposit = 50) {
    return this.getFirstDraw() + secondDeposit;
  }

  getTotalAccount(secondDraw = 20) {
    return this.getSecondDeposit() - secondDraw;
  }
}

let account = new SonAccount();
console.log("ACCOUNT SON :"+ account.getTotalAccount() + " €");

