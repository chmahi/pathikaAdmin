
// External imports
import { Component, OnInit } from '@angular/core';

// Internal imports
import { BlogAdminService } from '../providers/blog-admin.service';

// Component Builder
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

    // Initial Loading
    this.GetAllUsers();
   }

  ngOnInit() {
  }
  
 // To get All Users
 GetAllUsers() {
  this.loading = true;
  this.blogAdmin.getAllusers()
    .then(data => { 
      this.loading = false;     
      this.users = data;
    });
}

// To Suspend User
 suspendUser(idVal) {
  this.loading = true;
  this.blogAdmin.suspendUser(idVal)
    .then(data => { 
      this.loading = false;     
       this.GetAllUsers();
    });
}


// To activate user
 activateUser(idVal) {
  this.loading = true;
  this.blogAdmin.activateUser(idVal)
    .then(data => { 
      this.loading = false;     
       this.GetAllUsers();
    });
}
}
