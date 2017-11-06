
// External Imports
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Internal imports
import { BlogAdminService } from '../providers/blog-admin.service';

// Component builder
@Component({
  selector: 'app-reported-posts',
  templateUrl: './reported-posts.component.html',
  styleUrls: ['./reported-posts.component.css']
})
export class ReportedPostsComponent implements OnInit {
  posts;
  loading = false;
  curPage = '1';
  itemsPPage = 10;
  constructor(private blogAdmin: BlogAdminService, private route: ActivatedRoute, public router: Router) {
    window.scrollTo(0, 0);

    // Initial loading
    this.reportedPosts();

    // Route params to get current page
    this.curPage = route.params['_value']['id'];
  }

  ngOnInit() {
  }

  // For delete posts
  reportedPosts() {
    this.loading = true;
    this.blogAdmin.reportedPosts()
      .then(data => {
        this.loading = false;
        this.posts = data;
      });
  }

  // For pagination
  pagination(i, p) {
    return ((Number(this.curPage) - 1) * this.itemsPPage) + i + 1;
  }
  changePage(event) {
    this.router.navigate(['/main/ReportedPostsComponent/' + event]);
    this.curPage = event;
  }
}
