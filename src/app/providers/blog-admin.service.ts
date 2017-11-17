
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
    const headers = new Headers();
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

  // To get all posts
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

  // To login
  public login(loginData) {
    return new Promise(resolve => {
      this.http.post('https://blogsterlnew.herokuapp.com/login', loginData)
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

  // To add category
  public AddCategory(addCategorydata) {
    return new Promise(resolve => {
      this.http.post('https://blogsterlnew.herokuapp.com/category', addCategorydata)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err => {
          resolve(err);
        });
    });
  }

  // To get category
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

  // To trashed Posts
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

  // To reported Posts
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

  // To files Upload
  fileUpload(file) {
    console.log(file);
    const headers = new Headers();
    const formData: FormData = new FormData();
    formData.append('content', file);
    return new Promise(resolve => {
      this.http.post('https://blogsterlnew.herokuapp.com/file/upload', formData, {
        headers: headers
      })
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
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
  public editProfile(idval, editProfiledata) {
    return new Promise(resolve => {
      this.http.post('https://blogsterlnew.herokuapp.com/profileEdit/' + idval, editProfiledata)
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
    const fileData: any = {
      imgbase64: fileVal
    };
    return new Promise(resolve => {
      this.http.post('https://blogsterlnew.herokuapp.com/file/upload64/', fileData)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  // To ads
  public adsBlock(adsBlockdata) {
    return new Promise(resolve => {
      this.http.post('https://blogsterlnew.herokuapp.com/addAd', adsBlockdata)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err => {
          resolve(err);
        });
    });
  }

  // To Reset ads
  public resetAds(resetAdsdata) {
    console.log(JSON.stringify(resetAdsdata));
    return new Promise(resolve => {
      this.http.post('https://blogsterlnew.herokuapp.com/resetAd', resetAdsdata)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err => {
          resolve(err);
        });
    });
  }

  // To change password
  public changePassword(userId, changePasswordData) {
    return new Promise(resolve => {
      this.http.post('https://blogsterlnew.herokuapp.com/user/' + userId + '/change-password', changePasswordData)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err => {
          resolve(err);
        });
    });
  }

  // To get ads
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

  // To Get Settings Data
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
  updateSettings(updateData) {
    return new Promise(resolve => {
      this.http.post('https://blogsterlnew.herokuapp.com/setting/update', updateData)
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

  // Delete Email by Id
  deleteEmail(id) {
    return new Promise(resolve => {
      this.http.delete('https://blogsterlnew.herokuapp.com/mail/' + id)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  // To suspend the User
  showEmail() {
    return new Promise(resolve => {
      this.http.get('https://blogsterlnew.herokuapp.com/mail/getall/')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err => {
          resolve(err);
        });
    });
  }

  // Edit Category by idvalue
  public editCategory(idval, editCategorydata) {
    return new Promise(resolve => {
      this.http.post('https://blogsterlnew.herokuapp.com/category/' + idval, editCategorydata)
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
