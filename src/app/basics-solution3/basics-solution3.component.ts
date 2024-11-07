import { Component} from '@angular/core';

@Component({
  selector: 'app-basics-solution3',
  templateUrl: './basics-solution3.component.html',
  styleUrls: ['./basics-solution3.component.css']
})
export class BasicsSolution3Component  {

  
  showSecret = false;
  log:any= [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }

}
