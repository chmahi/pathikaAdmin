
// Eternal imports
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
declare var jQuery: any;

// Internal imports
import { BlogAdminService } from '../../providers/blog-admin.service';

// Component Builder
@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  user: any = [];
  private userData: any = {};
  constructor(private route: ActivatedRoute, public router: Router, private blogAdmin: BlogAdminService) {

    // To get data from localstorage
    this.user = JSON.parse(localStorage.getItem('userData'));
    console.log(this.user);
  }

  // To get user name
  getUsername() {
    this.user = JSON.parse(localStorage.getItem('userData'));
    return this.user.firstname;
  }

  // To Get Image
  getimage() {
    if (!this.user.imageURL) {
      return 'assets/images/user.png'
    } else {
      return this.user.imageURL;
    }
  }

  // Toggle menu
  toggleMenu() {

    if (jQuery('body').hasClass('left-side-collapsed')) {
      jQuery('body').removeClass('left-side-collapsed');
    } else {
      jQuery('body').addClass('left-side-collapsed');
    }

    const body = jQuery('body');
    const bodyposition = body.css('position');
  }

  ngOnInit() {
  }

  // To logout
  logout() {
    this.router.navigate(['/login']);
    localStorage.removeItem('userData');
  }
}

