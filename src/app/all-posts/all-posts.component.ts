import { Component, OnInit } from '@angular/core';
import { BlogAdminService } from '../providers/blog-admin.service';
@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts;
  constructor(private blogAdmin: BlogAdminService) {
    this.Getposts();
   }

  ngOnInit() {
  }
 // for get posts
 Getposts() {
  this.blogAdmin.getallposts()
    .then(data => {      
      this.posts = data;
    });
}
}
