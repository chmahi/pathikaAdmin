
// External imports
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

  // Get all users
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

  // For get all posts
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

  // For login
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

  // For add category
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

  // For get category
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

  // For trashed Posts 
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

  // For reported Posts 
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

  // Delete category by Id
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


  // User details by id
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

  // To Get All mails
  getAllemail() {
    return new Promise(resolve => {
      this.http.get('https://blogsterlnew.herokuapp.com/mail/getall/')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  // Edit profile by idvalue
  public editProfile(idval, data) {
    return new Promise(resolve => {
      this.http.post('https://blogsterlnew.herokuapp.com/profileEdit/' + idval, data)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err => {
          resolve(err);
        });
    });
  }

  // To upload a File
  public fileUploadBase64(fileVal) {
    var data: any = {
      imgbase64: fileVal
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

  // For ads
  public adsBlock(data) {
    return new Promise(resolve => {
      this.http.post('https://blogsterlnew.herokuapp.com/addAd', data)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err => {
          resolve(err);
        });
    });
  }

  // to Reset ads
  public resetAds(data) {
    console.log(JSON.stringify(data));
    return new Promise(resolve => {
      this.http.post('https://blogsterlnew.herokuapp.com/resetAd', data)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err => {
          resolve(err);
        });
    });
  }

  // For change password
  public changePassword(userId, data) {
    return new Promise(resolve => {
      this.http.post('https://blogsterlnew.herokuapp.com/user/' + userId + '/change-password', data)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err => {
          resolve(err);
        });
    });
  }

  // For get ads  
  getadsBlock() {
    return new Promise(resolve => {
      this.http.get('https://blogsterlnew.herokuapp.com/getAds/')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err => {
          resolve(err);
        });
    });
  }

  // Get Settings Data
  getSettings() {
    return new Promise(resolve => {
      this.http.get('https://blogsterlnew.herokuapp.com/setting/get')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err => {
          resolve(err);
        });
    });
  }

  // Default first setting empty var
  setSettings(setData) {
    return new Promise(resolve => {
      this.http.post('https://blogsterlnew.herokuapp.com/setting/set', setData)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err => {
          resolve(err);
        });
    });
  }

  // Update setting empty var
  updateSettings(setData) {
    return new Promise(resolve => {
      this.http.post('https://blogsterlnew.herokuapp.com/setting/update', setData)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err => {
          resolve(err);
        });
    });
  }

  // To suspend the User
  suspendUser(id) {
    return new Promise(resolve => {
      this.http.get('https://blogsterlnew.herokuapp.com/suspend/' + id)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err => {
          resolve(err);
        });
    });
  }

  // To Activate the Suspended User
  activateUser(id) {
    return new Promise(resolve => {
      this.http.get('https://blogsterlnew.herokuapp.com/activate/' + id)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err => {
          resolve(err);
        });
    });
  }
}
