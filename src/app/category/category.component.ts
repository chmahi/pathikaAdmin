
// Externel iports
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsModalComponent } from 'ng2-bs3-modal';

// Internal Imports
import { BlogAdminService } from '../providers/blog-admin.service';

// Cmponent Builder
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
  @ViewChild('myFirstModal')
  modal: BsModalComponent;
  message: String;
  category: any = {};
  categories: any = {};
  Categories;
  loading = false;
  showLoading = false;
  constructor(private blogAdmin: BlogAdminService) {

    // Initial Loading
    this.Getcategories();
    window.scrollTo(0, 0);
  }

  ngOnInit() {
  }
  // For form Reset
  restForm(validVal: NgForm) {
    validVal.resetForm();
  }

  // Modal poppup
  open(textContent: any) {
    this.message = textContent;
    this.modal.open('sm');
  }

  // To File Upload
  myfile: any;
  fileChange(fileInput: any) {
    this.showLoading = true;
    this.myfile = fileInput.target.files[0];
    this.blogAdmin.fileUpload(this.myfile)
      .then(data => {
        this.category.imageLink = '';
        this.category.imageLink = (data['files'][0].url);
        this.showLoading = false;
      }, // Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }

  // For add category
  addCategory(validVal: NgForm) {
    this.loading = true;
    if (validVal.valid && this.category.imageLink !== '') {

      this.blogAdmin.AddCategory(this.category)
        .then(
        data => {
          this.loading = false;
          if (validVal.valid) {
            this.restForm(validVal);
            this.Getcategories();
          }
        },
        err => {
          // Log errors if any
          console.log(err);
        });
    } else if (this.category.imageLink === '') {
      this.open('Upload an image!!');
    } else {
      this.open('Please fill all fields!!');
    }
  }

  // To get categories
  Getcategories() {
    this.loading = true;
    this.blogAdmin.getCategory()
      .then(data => {
        this.loading = false;
        this.categories = data;
      });
  }

  // Delete category
  DelCategory(cate) {
    console.log(cate);
    this.blogAdmin.deleteCategory(cate.id)
      .then(data => {
        this.Getcategories();
      }, // Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }
}
