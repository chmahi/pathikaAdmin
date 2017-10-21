import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { BlogAdminService } from '../providers/blog-admin.service';
import {ImageCropperComponent, CropperSettings, Bounds} from 'ng2-img-cropper';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BsModalComponent } from 'ng2-bs3-modal';
@Component({
  selector: 'app-user-views',
  templateUrl: './user-views.component.html',
  styleUrls: ['./user-views.component.css']
})
export class UserViewsComponent implements OnInit {
  users:any = {};
  // @ViewChild('myFirstModal')
  // modal: BsModalComponent;
  message:any;
  encapsulation: ViewEncapsulation.None 
  @ViewChild('croppImage')
  cropBox: BsModalComponent;
   data1:any;
   profile:any = {};
   name:any;
   a:any;
     cropperSettings1:CropperSettings;
    croppedWidth:number;
    croppedHeight:number;
  @ViewChild('cropper', undefined) cropper:ImageCropperComponent;


  constructor(private blogAdmin: BlogAdminService) { 
    this.name = 'Angular2'
    this.cropperSettings1 = new CropperSettings();
    this.cropperSettings1.width = 200;
    this.cropperSettings1.height = 200;

    this.cropperSettings1.croppedWidth = 300;
    this.cropperSettings1.croppedHeight = 300;

    this.cropperSettings1.canvasWidth = 400;
    this.cropperSettings1.canvasHeight = 300;

    this.cropperSettings1.minWidth = 100;
    this.cropperSettings1.minHeight = 100;

    this.cropperSettings1.rounded = false;

    this.cropperSettings1.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
    this.cropperSettings1.cropperDrawSettings.strokeWidth = 2;

    this.data1 = {};
    this.GetUser();
  }

  ngOnInit() {
  }
 // for get All Users
 GetUser() {
   var a = JSON.parse(localStorage.getItem('userData'));
  console.log(a.firstname);
  this.blogAdmin.getUserDetails(a.userId)
    .then(data => {      
      this.users = data[0];
      console.log(this.users.firstname);
    });
}


open(textContent:any) {
    // this.message = textContent;
    this.cropBox.open('sm');
  }

EditUser(){
   var a = JSON.parse(localStorage.getItem('userData'));
   this.blogAdmin.editProfile(a.userId,this.users)
   .then(data => {
    console.log(data);
   })
}
}
