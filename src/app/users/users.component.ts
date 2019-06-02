import { Component, OnInit } from '@angular/core';
import userDetails from '../../assets/users.json';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = userDetails;
  selectedUser: any;
  searchText: string;
  emptyUserList = false;
  constructor() { }

  ngOnInit() {
    if (this.users.length > 0) {
      this.users[0] = Object.assign({}, this.users[0], { 'active': true });
      this.selectedUser = this.users[0];
      for (let i = 1; i < this.users.length; i++) {
        this.users[i] = Object.assign({}, this.users[i], { 'active': false });
      }
      this.emptyUserList = false;
    } else {
      this.emptyUserList = true;
    }
  }

  onSelect(selectuser): void {
    this.selectedUser = selectuser;
    this.users = this.users.map(user => {
      if (this.selectedUser.login.username === user.login.username) {
        user = Object.assign({}, user, { 'active': true });
      } else {
        user = Object.assign({}, user, { 'active': false });
      }
      return user;
    });
  }
}
