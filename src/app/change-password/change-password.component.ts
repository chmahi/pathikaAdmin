
// External imports
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

// Internal imports
import { BlogAdminService } from '../providers/blog-admin.service';

// Component Builder
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  userDetails: any = {};
  data;
  constructor(private blogAdmin: BlogAdminService) { }

  ngOnInit() {
  }

  // To change password
  changePassword(validVal: NgForm) {
    if (validVal.valid) {
      let userData: any = JSON.parse(localStorage.getItem('userData'));
      this.blogAdmin.changePassword(userData.userId, this.userDetails)
        .then(
        data => {
          console.log(data);
          this.data = data;
          if (this.data.status != 500) {
            validVal.resetForm();
            // this.userData = {};
            // this.open('Changed Successfully');
          } else {
            console.log()
            // this.open(JSON.parse(this.data['_body']).error);
          }
        });
    }
  }
}
