import { Component, OnInit } from '@angular/core';
import { BlogAdminService } from '../providers/blog-admin.service';
@Component({
  selector: 'app-trashed-posts',
  templateUrl: './trashed-posts.component.html',
  styleUrls: ['./trashed-posts.component.css']
})
export class TrashedPostsComponent implements OnInit {
  userid;
  posts;
  loading = false;
  constructor(private blogAdmin: BlogAdminService) { 
    window.scrollTo(0, 0);
    this.trashedPosts();
  }

  ngOnInit() {
  }
 // for delete posts
 trashedPosts(){
  this.loading = true;
  this.blogAdmin.trashedPosts()
  .then(data =>{
    this.loading = false;
   this.posts = data;
  })
}
}
