
// Extarnal imports
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Internal Imports
import { BlogAdminService } from '../providers/blog-admin.service';

// Component Builder
@Component({
  selector: 'app-email-box',
  templateUrl: './email-box.component.html',
  styleUrls: ['./email-box.component.css']
})

export class EmailBoxComponent implements OnInit {
  loading = false;
  emails: any = [];
  curPage = '1';
  itemsPPage = 10;
  constructor(private blogAdmin: BlogAdminService, private route: ActivatedRoute, public router: Router) {

    // Initial Loading
    this.GetAllUsers();

    // Route params to get current page
    this.curPage = route.params['_value']['id'];
  }

  ngOnInit() {
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

}
