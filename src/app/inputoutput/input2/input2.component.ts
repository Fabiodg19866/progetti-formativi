import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input2',
  templateUrl: './input2.component.html',
})
export class Input2Component implements OnInit {
@Input()myMessage!:string
@Output() ev = new EventEmitter();
output:string= 'event'
  constructor() { }

  ngOnInit()
  {
    console.log(this.myMessage);
    
  }

  send(){

    this.ev.emit(this.output)
  }

}
