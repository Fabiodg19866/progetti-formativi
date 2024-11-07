import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';


@Component({
  selector: 'app-service-final',
  templateUrl: './service-final.component.html',
  styleUrls: ['./service-final.component.css']
})
export class ServiceFinalComponent implements OnInit {

  
accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {

    this.accounts = this.accountsService.accounts;
  }

}
