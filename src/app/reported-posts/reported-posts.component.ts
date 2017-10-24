import { Component, OnInit } from '@angular/core';
import { BlogAdminService } from '../providers/blog-admin.service';
@Component({
  selector: 'app-reported-posts',
  templateUrl: './reported-posts.component.html',
  styleUrls: ['./reported-posts.component.css']
})
export class ReportedPostsComponent implements OnInit {
  posts;
  loading = false;
  constructor(private blogAdmin: BlogAdminService) { 
    window.scrollTo(0, 0);
    this.reportedPosts();
  }

  ngOnInit() {
  }
 // for delete posts
 reportedPosts(){
  this.loading = true;
  this.blogAdmin.reportedPosts()
  .then(data =>{
    this.loading = false;
   this.posts = data;
  })
}
}
