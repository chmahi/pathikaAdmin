import { Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BlogAdminService } from '../providers/blog-admin.service';
import { BsModalComponent  } from 'ng2-bs3-modal';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
   @ViewChild('myFirstModal')
  modal: BsModalComponent;
  // encapsulation: ViewEncapsulation.None
  message:String;
  category:any={};
  categories: any = {};
  Categories;
  constructor(private blogAdmin: BlogAdminService) {
    this.Getcategories();
   }

  ngOnInit() {
  }
// for form Reset
restForm(validVal: NgForm) {
  validVal.resetForm();
}
  open(textContent:any) {
    this.message = textContent;
    this.modal.open('sm');
  }
  myfile:any;
  fileChange(fileInput: any) {
    this.myfile = fileInput.target.files[0];
    //let fileList: FileList = event.target.files;
      this.blogAdmin.fileUpload(this.myfile)
      .then(data => {
        //console.log(data);
        this.category.imageLink = '';
        this.category.imageLink = (data['files'][0].url);
      }, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }
  // for add category 
  addCategory(validVal: NgForm){
    if(validVal.valid && this.category.imageLink!=""){

    this.blogAdmin.AddCategory(this.category)
        .then(
            data => {
              if(validVal.valid){
                this.restForm(validVal);
                this.Getcategories();
               }
            }, 
            err => {
              // Log errors if any
              console.log(err);
            });
    } else if(this.category.imageLink==""){
      this.open("Upload an image!!");
    } else {
      this.open("Please fill all fields!!");
    }
  }
    // get categories
    Getcategories() {
      this.blogAdmin.getCategory()
        .then(data => {      
          this.categories = data;
        });
    }
    DelCategory(cate) {
      console.log(cate);
      this.blogAdmin.deleteCategory(cate.id)
        .then(
          data => {
        console.log(data);
          }, //Bind to view
          err => {
            // Log errors if any
            console.log(err);
          });
  }
}
