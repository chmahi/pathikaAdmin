import { Component, OnInit } from '@angular/core';
import { BlogAdminService } from '../providers/blog-admin.service';
@Component({
  selector: 'app-list-all-users',
  templateUrl: './list-all-users.component.html',
  styleUrls: ['./list-all-users.component.css']
})
export class ListAllUsersComponent implements OnInit {
  users;
  constructor(private blogAdmin: BlogAdminService) {
    this.GetAllUsers();
   }

  ngOnInit() {
  }
 // for get All Users
 GetAllUsers() {
  this.blogAdmin.getAllusers()
    .then(data => {      
      this.users = data;
    });
}
}
