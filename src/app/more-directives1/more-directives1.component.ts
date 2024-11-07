import { Component } from '@angular/core';

@Component({
  selector: 'app-more-directives1',
  templateUrl: './more-directives1.component.html',
  styleUrls: ['./more-directives1.component.css']
})
export class MoreDirectives1Component  {

  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  value = 5;

  constructor() { }

}
