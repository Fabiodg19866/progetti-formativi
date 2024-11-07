import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-directives3',
  templateUrl: './basic-directives3.component.html',
  styles: [`
  .white-text {
    color: red;
  }
`]
})
export class BasicDirectives3Component  {

  
  showSecret = false;
  log:any = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }


}
