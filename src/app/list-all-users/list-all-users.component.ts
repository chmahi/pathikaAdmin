
// External imports
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
  curPage = '1';
  itemsPPage = 10;
  constructor(private blogAdmin: BlogAdminService, private route: ActivatedRoute, public router: Router) {
    window.scrollTo(0, 0);

    // Initial Loading
    this.GetAllUsers();

    // Route params to get current page
    this.curPage = route.params['_value']['id'];
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

  // For pagination
  pagination(i, p) {
    return ((Number(this.curPage) - 1) * this.itemsPPage) + i + 1;
  }
  changePage(event) {
    this.router.navigate(['/main/ListAllUsersComponent/' + event]);
    this.curPage = event;
  }
}
