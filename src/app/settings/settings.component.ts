
// External imports
import { Component, OnInit } from '@angular/core';

// Internal imports
import { BlogAdminService } from '../providers/blog-admin.service';

// Component Builder
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  add: any = {};
  settingData: any = {};
  loading = false;
  constructor(private blogAdmin: BlogAdminService) {
    window.scrollTo(0, 0);

    // Initial Loading
    this.getSettings();
  }

  ngOnInit() {
  }

  // To update Settings
  settingDataFub() {
    this.loading = true;
    this.blogAdmin.updateSettings(this.settingData)
      .then(data => {
        this.loading = false;
        console.log(data[0]);
        this.settingData = data[0];
        this.getSettings();
      });
  }

  // To get Settings
  getSettings() {
    this.loading = true;
    this.blogAdmin.getSettings()
      .then(data => {
        this.loading = false;
        const some: any = data;
        if (some.length === 0) {
          this.firstRun();
        }
        console.log(data[0]);
        this.settingData = data[0];
      });
  }

  // To set Settings
  firstRun() {
    const firstBasic = {
      websiteTitle: '',
      Address1: '',
      Address2: '',
      FBAppId: '',
      facebook: '',
      linkedin: '',
      youtube: '',
      twitter: '',
      instagram: '',
      contactMail: '',
      API: '',
      titleCss: ''
    };
    this.blogAdmin.setSettings(firstBasic)
      .then(data => {
        this.loading = false;
        console.log(data[0]);
        this.settingData = data[0];
        this.getSettings();
      });
  }

}
