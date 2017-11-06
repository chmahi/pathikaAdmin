
// External imports
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalComponent } from 'ng2-bs3-modal';

// Internal Imports
import { BlogAdminService } from '../providers/blog-admin.service';

// Component Bulder
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
  add: any = {};
  adds: any = [];
  noAds: any = [];
  user: any = {};
  selectedValue = null;
  adPlacementsValue: any = [
    { id: 'S-TOP', name: 'Sidebar TOP' },
    { id: 'S-BOT', name: 'Sidebar Bottom' },
    { id: 'SPP', name: 'Single Post page' },
    { id: 'HOME', name: 'Home page' }
  ];
  constructor(private blogAdmin: BlogAdminService) {
    // To Get data from the Local Storage
    this.user = JSON.parse(localStorage.getItem('userData'));

    // Initial Loading
    this.GetadsBlock();
  }

  ngOnInit() {
  }

  // For form Reset
  restForm(validVal: NgForm) {
    validVal.resetForm();
  }

  // For add Ads
  AddadsBlock(validVal: NgForm) {
    this.loading = true;
    this.blogAdmin.adsBlock(this.add)
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

  // To Get ads
  GetadsBlock() {
    this.loading = true;
    this.adds = [];
    this.noAds = [];
    this.blogAdmin.getadsBlock()
      .then(data => {
        this.loading = false;
        const dataHold: any = data;
        dataHold.forEach(element => {
          if (element.blockedStatus) {
            this.adds.push(element);
          } else {
            this.noAds.push(element);
          }

        });
      });
  }

  // Reset Ads
  resetadsBlock(adId) {
    this.loading = true;
    const val = {
      adId: adId
    };
    this.blogAdmin.resetAds(val)
      .then(
      data => {
        this.loading = false;
        this.GetadsBlock();
      },
      err => {
        // Log errors if any
        console.log(err);
      });

  }


}
