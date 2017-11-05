import { Component, OnInit } from '@angular/core';
import { BlogAdminService } from '../providers/blog-admin.service';

@Component({
  selector: 'app-email-box',
  templateUrl: './email-box.component.html',
  styleUrls: ['./email-box.component.css']
})
export class EmailBoxComponent implements OnInit {
loading = false;
emails: any = [];
  constructor(private blogAdmin: BlogAdminService) {
    this. GetAllUsers();
   }

  ngOnInit() {
  }
 GetAllUsers() {
  this.loading = true;
  this.blogAdmin.getAllemail()
    .then(data => { 
      this.loading = false;     
      this.emails = data;
    });
}

}
