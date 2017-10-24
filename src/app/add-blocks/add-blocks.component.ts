import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalComponent } from 'ng2-bs3-modal';
import { BlogAdminService } from '../providers/blog-admin.service';
@Component({
  selector: 'app-add-blocks',
  templateUrl: './add-blocks.component.html',
  styleUrls: ['./add-blocks.component.css']
})
export class AddBlocksComponent implements OnInit {
  @ViewChild('myFirstModal')
  modal: BsModalComponent;
  // encapsulation: ViewEncapsulation.None
  message: String;
  loading = false;
  add;
  adds;
  // userid;
  user;
  constructor(private blogAdmin: BlogAdminService) {
    this.GetadsBlock();
     this.user = JSON.parse(localStorage.getItem('userData'));
   }

  ngOnInit() {
  }

   // for form Reset
   restForm(validVal: NgForm) {
    validVal.resetForm();
  }

  // for add Ads 
  AddadsBlock(validVal: NgForm) {
    this.loading = true;
      this.blogAdmin.adsBlock(this.user.user_id,this.add)
        .then(
        data => {
          this.loading = false;
          if (validVal.valid) {
            this.restForm(validVal);
            this.GetadsBlock();
          }
        },
        err => {
          // Log errors if any
          console.log(err);
        });
     
  }
  // get ads
  GetadsBlock() {
    this.loading = true;
    this.blogAdmin.getadsBlock(this.user.user_id)
      .then(data => {
        this.loading = false;
        this.adds = data;
      });
  }
}
