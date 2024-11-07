import { Component } from '@angular/core';

@Component({
  selector: 'app-cmp-databinding-solution',
  templateUrl: './cmp-databinding-solution.component.html',
  
})
export class CmpDatabindingSolution {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }
}
