import { Component} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  
})
export class InputComponent{

 myinputMsg:string='ciao'; 
  constructor() { }


  GetChildData(data:any){  
    console.log(data);  
 }  

}
