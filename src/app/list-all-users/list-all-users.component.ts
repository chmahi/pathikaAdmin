import { Component, OnInit } from '@angular/core';
import { BlogAdminService } from '../providers/blog-admin.service';
@Component({
  selector: 'app-list-all-users',
  templateUrl: './list-all-users.component.html',
  styleUrls: ['./list-all-users.component.css']
})
export class ListAllUsersComponent implements OnInit {
  users;
  loading = false;
  constructor(private blogAdmin: BlogAdminService) {
    window.scrollTo(0, 0);
    this.GetAllUsers();
   }

  ngOnInit() {
  }
 // for get All Users
 GetAllUsers() {
  this.loading = true;
  this.blogAdmin.getAllusers()
    .then(data => { 
      this.loading = false;     
      this.users = data;
    });
}
}
