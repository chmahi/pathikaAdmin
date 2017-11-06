
// External Imports
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ImageCropperComponent, CropperSettings, Bounds } from 'ng2-img-cropper';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalComponent } from 'ng2-bs3-modal';

// Internal imports
import { BlogAdminService } from '../providers/blog-admin.service';
@Component({
  selector: 'app-user-views',
  templateUrl: './user-views.component.html',
  styleUrls: ['./user-views.component.css']
})

export class UserViewsComponent implements OnInit {
  users: any = {};
  updatedData: any = {};
  @ViewChild('modalNew')
  modal: BsModalComponent;
  message: any;
  encapsulation: ViewEncapsulation.None
  @ViewChild('croppImage')
  cropBox: BsModalComponent;
  data1: any;
  profile: any = {};
  name: any;
  loading = false;
  a: any;
  cropperSettings1: CropperSettings;
  croppedWidth: number;
  croppedHeight: number;
  constructor(private blogAdmin: BlogAdminService) {
    window.scrollTo(0, 0);
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

  // To get All Users
  GetUser() {
    this.loading = true;
    var a = JSON.parse(localStorage.getItem('userData'));
    console.log(a.firstname);
    this.blogAdmin.getUserDetails(a.userId)
      .then(data => {
        this.loading = false;
        this.users = data[0];
      });
  }

  // To modal Popup
  open() {
    this.cropBox.open('md');
  }

  // To modal Popup
  openMessage(textContent) {
    this.message = textContent;
    this.modal.open('sm');
  }

  // To Edit User
  EditUser() {
    this.loading = true;
    var a = JSON.parse(localStorage.getItem('userData'));

    this.blogAdmin.editProfile(a.userId, this.users)
      .then(data => {
        this.loading = false;
        this.openMessage("Update Successfull");
        // console.log(data);
        console.log(JSON.stringify(data))
        this.updatedData = data;
        var userInfo = {
          firstname: this.updatedData[0].firstname,
          lastname: this.updatedData[0].lastname,
          email: this.updatedData[0].email,
          userId: this.updatedData[0].id,
          mobile: this.updatedData[0].mobile,
          state: this.updatedData[0].state,
          country: this.updatedData[0].country
        };
        localStorage.setItem('userData', JSON.stringify(userInfo));
      })
  }

  // Cropped Images
  cropped(bounds: Bounds) {
    this.croppedHeight = bounds.bottom - bounds.top;
    this.croppedWidth = bounds.right - bounds.left;
  }

  // To File Change Listener
  fileChangeListener($event) {
    var image: any = new Image();
    var file: File = $event.target.files[0];
    var myReader: FileReader = new FileReader();
    var that = this;
    myReader.onloadend = function (loadEvent: any) {
      image.src = loadEvent.target.result;
    };
    myReader.readAsDataURL(file);
  }

  // To File Upload
  public uploadImageFile(fileVal) {

    this.loading = true;
    this.blogAdmin.fileUploadBase64(fileVal)
      .then(data => {
        this.loading = false;
        this.openMessage("Image upload successfull");
        this.myfile = data;
        this.users.imageURL = this.myfile.imageURL;
      }, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }

  //  For cropping
  myfile: any;
  cropImage() {
    this.cropBox.open('md');
  }
}
