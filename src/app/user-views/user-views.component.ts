import { Component, OnInit } from '@angular/core';
import { BlogAdminService } from '../providers/blog-admin.service';
@Component({
  selector: 'app-user-views',
  templateUrl: './user-views.component.html',
  styleUrls: ['./user-views.component.css']
})
export class UserViewsComponent implements OnInit {
  users;
  constructor(private blogAdmin: BlogAdminService) { }

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
