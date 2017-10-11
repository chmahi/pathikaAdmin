import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BlogAdminService } from '../providers/blog-admin.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category:any={};
  constructor(private blogAdmin: BlogAdminService) {
    this.Getcategories();
   }

  ngOnInit() {
  }
// for form Reset
restForm(validVal: NgForm) {
  validVal.resetForm();
}
  // for add category 
  addCategory(validVal: NgForm){
    if(validVal.valid){
      this.category.imageLink = "Basic";
    this.blogAdmin.AddCategory(this.category)
        .then(
            data => {
              if(validVal.valid){
                this.restForm(validVal);
               }
            }, 
            err => {
              // Log errors if any
              console.log(err);
            });
    }
  }
    // get categories
    Getcategories() {
      this.blogAdmin.getCategory()
        .then(data => {      
          this.category = data;
        });
    }
}
