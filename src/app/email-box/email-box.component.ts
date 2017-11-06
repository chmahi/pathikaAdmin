
// Extarnal imports
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalComponent } from 'ng2-bs3-modal';

// Internal Imports
import { BlogAdminService } from '../providers/blog-admin.service';

// Component Builder
@Component({
  selector: 'app-email-box',
  templateUrl: './email-box.component.html',
  styleUrls: ['./email-box.component.css']
})

export class EmailBoxComponent implements OnInit {
  @ViewChild('myFirstModal')
  modal: BsModalComponent;
  message: String;
  loading = false;
  emails: any = [];
  curPage = '1';
  itemsPPage = 10;
  modalFeild:any=[];
  constructor(private blogAdmin: BlogAdminService, private route: ActivatedRoute, public router: Router) {

    // Initial Loading
    this.GetAllUsers();

    // Route params to get current page
    this.curPage = route.params['_value']['id'];
  }

  ngOnInit() {
  }

  // Modal poppup
  open(textContent: any) {
    this.message = textContent;
    this.modal.open('sm');
  }

  // To get All users
  GetAllUsers() {
    this.loading = true;
    this.blogAdmin.getAllemail()
      .then(data => {
        this.loading = false;
        this.emails = data;
      });
  }

  // For pagination
  pagination(i, p) {
    return ((Number(this.curPage) - 1) * this.itemsPPage) + i + 1;
  }
  changePage(event) {
    this.router.navigate(['/main/emailBox/' + event]);
    this.curPage = event;
  }
  // Delete Email
  DeleteEmail(email) {
    console.log(email);
    this.blogAdmin.deleteEmail(email.id)
      .then(data => {

      }, // Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }

  showEmails(val) {
    this.modalFeild = val;
    this.modal.open();
  }

}
