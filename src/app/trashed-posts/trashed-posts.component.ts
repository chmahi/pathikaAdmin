
// External Imports
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Internal imports
import { BlogAdminService } from '../providers/blog-admin.service';

// Component Builder
@Component({
  selector: 'app-trashed-posts',
  templateUrl: './trashed-posts.component.html',
  styleUrls: ['./trashed-posts.component.css']
})
export class TrashedPostsComponent implements OnInit {
  userid;
  posts;
  loading = false;
  curPage = '1';
  itemsPPage = 10;
  constructor(private blogAdmin: BlogAdminService, private route: ActivatedRoute, public router: Router) {
    window.scrollTo(0, 0);

    // Initial Loading
    this.trashedPosts();

    // Route params to get current page
    this.curPage = route.params['_value']['id'];
  }

  ngOnInit() {
  }

  // To delete posts
  trashedPosts() {
    this.loading = true;
    this.blogAdmin.trashedPosts()
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
    this.router.navigate(['/main/TrashedPostsComponent/' + event]);
    this.curPage = event;
  }
}
