import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
declare var jQuery: any;

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute,public router: Router) {

        // Menu Toggle
    // jQuery('.toggle-btn').click(function() {
    //     jQuery(".left-side").getNiceScroll().hide();

    //     if (jQuery('body').hasClass('left-side-collapsed')) {
    //         jQuery(".left-side").getNiceScroll().hide();
    //     }
    //     var body = jQuery('body');
    //     var bodyposition = body.css('position');

    //     if (bodyposition != 'relative') {

    //         if (!body.hasClass('left-side-collapsed')) {
    //             body.addClass('left-side-collapsed');
    //             jQuery('.custom-nav ul').attr('style', '');

    //             jQuery(this).addClass('menu-collapsed');

    //         } else {
    //             body.removeClass('left-side-collapsed chat-view');
    //             jQuery('.custom-nav li.active ul').css({ display: 'block' });

    //             jQuery(this).removeClass('menu-collapsed');

    //         }
    //     } else {

    //         if (body.hasClass('left-side-show'))
    //             body.removeClass('left-side-show');
    //         else
    //             body.addClass('left-side-show');

    //         // mainContentHeightAdjust();
    //     }

    // });

   }

   toggleMenu() {

     if (jQuery('body').hasClass('left-side-collapsed')) {
             jQuery('body').removeClass('left-side-collapsed')
        } else {
          jQuery('body').addClass('left-side-collapsed')
        }

         var body = jQuery('body');
        var bodyposition = body.css('position');
   }

        // Menu Toggle
    // jQuery('.toggle-btn').click(function() {
    //     jQuery(".left-side").getNiceScroll().hide();
    //     if (jQuery('body').hasClass('left-side-collapsed')) {
    //         jQuery(".left-side").getNiceScroll().hide();
    //     }
    //     var body = jQuery('body');
    //     var bodyposition = body.css('position');
    //     if (bodyposition != 'relative') {
    //         if (!body.hasClass('left-side-collapsed')) {
    //             body.addClass('left-side-collapsed');
    //             jQuery('.custom-nav ul').attr('style', '');
    //             jQuery(this).addClass('menu-collapsed');
    //         } else {
    //             body.removeClass('left-side-collapsed chat-view');
    //             jQuery('.custom-nav li.active ul').css({ display: 'block' });
    //             jQuery(this).removeClass('menu-collapsed');
    //         }
    //     } else {
    //         if (body.hasClass('left-side-show'))
    //             body.removeClass('left-side-show');
    //         else
    //             body.addClass('left-side-show');
    //         // mainContentHeightAdjust();
    //     }
    // });
      ngOnInit() {
}

logout(){
  this.router.navigate(['/login']);
  localStorage.removeItem('userData');
}
   }

