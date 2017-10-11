import { Component, OnInit } from '@angular/core';
import { BlogAdminService } from '../providers/blog-admin.service';
@Component({
  selector: 'app-reported-posts',
  templateUrl: './reported-posts.component.html',
  styleUrls: ['./reported-posts.component.css']
})
export class ReportedPostsComponent implements OnInit {
  posts;
  constructor(private blogAdmin: BlogAdminService) { 
    this.reportedPosts();
  }

  ngOnInit() {
  }
 // for delete posts
 reportedPosts(){
  this.blogAdmin.reportedPosts()
  .then(data =>{
   this.posts = data;
  })
}
}
