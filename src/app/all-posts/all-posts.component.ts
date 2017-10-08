import { Component, OnInit } from '@angular/core';
import { BlogAdminService } from '../providers/blog-admin.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts;
  curPage = '1';
  itemsPPage = 10;
  constructor(private blogAdmin: BlogAdminService,private route: ActivatedRoute,public router: Router) {
    this.Getposts();
    this.curPage = route.params['_value']['id'];
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
  //for pagination
  pagination(i,p){    
    return ((Number(this.curPage)- 1)*this.itemsPPage)+i+1;
  }

  changePage(event){
    this.router.navigate(['/AllPostsComponent/'+event]);
    this.curPage = event;
  }
}
