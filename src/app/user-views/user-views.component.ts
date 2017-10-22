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
  @ViewChild('modalNew')
  modal: BsModalComponent;
  message:any;
  encapsulation: ViewEncapsulation.None 
  @ViewChild('croppImage')
  cropBox: BsModalComponent;
   data1:any;
   profile:any = {};
   name:any;
   loading = false;
   a:any;
     cropperSettings1:CropperSettings;
    croppedWidth:number;
    croppedHeight:number;
  // @ViewChild('cropper', undefined) cropper:ImageCropperComponent;


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
   this.loading = true;
   var a = JSON.parse(localStorage.getItem('userData'));
  console.log(a.firstname);
  this.blogAdmin.getUserDetails(a.userId)
    .then(data => {      
      this.loading = false;
      this.users = data[0];
      console.log(this.users.firstname);
    });
}


open() {
    // this.message = textContent;
    this.cropBox.open('md');
}
openMessage(textContent) {
    this.message = textContent;
    this.modal.open('sm');
}

EditUser(){
  this.loading = true;
   var a = JSON.parse(localStorage.getItem('userData'));
   this.blogAdmin.editProfile(a.userId,this.users)
   .then(data => {
     this.loading = false;
    this.openMessage("Update Successfull");
    console.log(data);
   })
}
cropped(bounds:Bounds) {
  this.croppedHeight =bounds.bottom-bounds.top;
  this.croppedWidth = bounds.right-bounds.left;
}


fileChangeListener($event) {
  var image:any = new Image();
  var file:File = $event.target.files[0];
  var myReader:FileReader = new FileReader();
  var that = this;
  myReader.onloadend = function (loadEvent:any) {
      image.src = loadEvent.target.result;
      // that.cropper.setImage(image);

  };
  myReader.readAsDataURL(file);
  }


 public uploadImageFile(fileVal){
    // this.modalBig.close();
    // this.showSpinner = true;
    this.loading = true;
    this.blogAdmin.fileUploadBase64(fileVal)
    .then(data => {     
      this.loading = false;
      this.openMessage("Image upload successfull");
      this.myfile = data;
      this.users.imageURL = this.myfile.imageURL;
      // this.profile.userDetails.image = (this.myfile.imageURL);
      // this.showLoading = false;    
      // this.showSpinner = false;
    }, //Bind to view
    err => {
      // Log errors if any
      console.log(err);
    });
 }

myfile:any;
cropImage() {
    this.cropBox.open('md');
}
}
