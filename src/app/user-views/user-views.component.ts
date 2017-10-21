import { Component, OnInit } from '@angular/core';
import { BlogAdminService } from '../providers/blog-admin.service';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-views',
  templateUrl: './user-views.component.html',
  styleUrls: ['./user-views.component.css']
})
export class UserViewsComponent implements OnInit {
  users:any = {};
  constructor(private blogAdmin: BlogAdminService) { 
    this.GetUser();
  }

  ngOnInit() {
  }
 // for get All Users
 GetUser() {
   var a = JSON.parse(localStorage.getItem('userData'));
  console.log(a.firstname);
  this.blogAdmin.getUserDetails(a.userId)
    .then(data => {      
      this.users = data[0];
      console.log(this.users.firstname);
    });
}

EditUser(){
   var a = JSON.parse(localStorage.getItem('userData'));
   this.blogAdmin.editProfile(a.userId,this.users)
   .then(data => {
    console.log(data);
   })
}
}
