
import { Component} from '@angular/core';

@Component({
  selector: 'app-basics-databinding',
  templateUrl: './basics-databinding.component.html',
  styles: [` input {margin-left:1%}button{
    margin-left:1%;
  }
    
  `]
})
export class BasicsDatabindingComponent  {
  
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
   

  constructor() { 

    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }
         
  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}
