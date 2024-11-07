import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-directives1',
  templateUrl: './basics-directives1.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class BasicsDirectives1Component {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
