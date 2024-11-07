
import { Component, OnInit } from '@angular/core';

import { UserService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.html',
  styleUrls: ['./inactive-users.css']
})
export class InactiveUsersComponent implements OnInit {
  users =[''];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}


