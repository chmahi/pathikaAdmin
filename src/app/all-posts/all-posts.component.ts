
// External imports
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Internal imports
import { BlogAdminService } from '../providers/blog-admin.service';

// Component Builder
@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts;
  curPage = '1';
  itemsPPage = 10;
  loading = false;
  constructor(private blogAdmin: BlogAdminService, private route: ActivatedRoute, public router: Router) {

    // Initial Loading
    this.Getposts();

    // Route params to get current page
    this.curPage = route.params['_value']['id'];
    window.scrollTo(0, 0);
  }

  ngOnInit() {
  }

  // For get posts
  Getposts() {
    this.loading = true;
    this.blogAdmin.getallposts()
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
    this.router.navigate(['/main/AllPostsComponent/' + event]);
    this.curPage = event;
  }
}
