import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Component } from '@angular/core';

@Injectable()
export class BlogAdminService {
  data;
  options;
  constructor(public http: Http) {
    let headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    this.options = new RequestOptions({ headers: headers });
  }

  //get all users
  getAllusers() {
    return new Promise(resolve => {
      this.http.get('https://blogsterlnew.herokuapp.com/users')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err => {
          resolve(err);
        });
    });
  }
  // for get all posts
  getallposts() {
    return new Promise(resolve => {
      this.http.get('https://blogsterlnew.herokuapp.com/posts')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err => {
          resolve(err);
        });
    });
  }
  // for login
  public login(data) {
    return new Promise(resolve => {
      this.http.post('https://blogsterlnew.herokuapp.com/login', data)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data.header);
          this.data = data;
          resolve(this.data);
        }, err => {
          resolve(err);
        });
    });
  }
  // for add category
  public AddCategory(data) {
    return new Promise(resolve => {
      this.http.post('https://blogsterlnew.herokuapp.com/category', data)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err => {
          resolve(err);
        });
    });
  }

  // for get category
  getCategory() {
    return new Promise(resolve => {
      this.http.get('https://blogsterlnew.herokuapp.com/category')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err => {
          resolve(err);
        });
    });
  }
  // for trashed Posts 
  trashedPosts() {
    return new Promise(resolve => {
      this.http.get('https://blogsterlnew.herokuapp.com/trashedPosts')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err => {
          resolve(err);
        });
    });
  }
  // for reported Posts 
  reportedPosts() {
    return new Promise(resolve => {
      this.http.get('https://blogsterlnew.herokuapp.com/reportedPosts')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err => {
          resolve(err);
        });
    });
  }
  // For files Upload
  fileUpload(file) {
    console.log(file);
    let headers = new Headers();
    let formData: FormData = new FormData();
    formData.append('content', file);
    return new Promise(resolve => {
      this.http.post('https://blogsterlnew.herokuapp.com/file/upload', formData, {
        headers: headers
      })
        .map(res => res.json())
        .subscribe(data => {
          // console.log(data)
          this.data = data;
          resolve(this.data);
        })
    });
  }
   deleteCategory(id) {
    return new Promise(resolve => {
      this.http.delete('https://blogsterlnew.herokuapp.com/category/' + id)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  getUserDetails(id) {
    return new Promise(resolve => {
      this.http.get('https://blogsterlnew.herokuapp.com/listUser/' + id)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  public editProfile(idval,data) {
      return new Promise(resolve => {
        this.http.post('https://blogsterlnew.herokuapp.com/profileEdit/'+idval, data)
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          }, err =>{
          resolve(err);
        });
      });
    }

    public fileUploadBase64(fileVal){
      var data:any = {
       imgbase64:fileVal
     }
 
     return new Promise(resolve => {
       this.http.post('https://blogsterlnew.herokuapp.com/file/upload64/', data)    
         .map(res => res.json())
         .subscribe(data => {
           // console.log(data)
           this.data = data;
           resolve(this.data);
         })
     });
   }

}
