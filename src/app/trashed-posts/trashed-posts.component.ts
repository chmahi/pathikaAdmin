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
  constructor(private blogAdmin: BlogAdminService) { 
    this.trashedPosts();
  }

  ngOnInit() {
  }
 // for delete posts
 trashedPosts(){
  this.blogAdmin.trashedPosts()
  .then(data =>{
   this.posts = data;
  })
}
}
