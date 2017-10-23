import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {Http, RequestOptions, Headers} from '@angular/http';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { BsModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import {ImageCropperComponent} from 'ng2-img-cropper';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
// import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BlogAdminService } from './providers/blog-admin.service';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ListAllUsersComponent } from './list-all-users/list-all-users.component';
import { UserViewsComponent } from './user-views/user-views.component';
import { AddBlocksComponent } from './add-blocks/add-blocks.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { ReportedPostsComponent } from './reported-posts/reported-posts.component';
import { TrashedPostsComponent } from './trashed-posts/trashed-posts.component';
import { MainComponent } from './main/main.component';
import { SigninComponent } from './signin/signin.component';
import { CategoryComponent } from './category/category.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SettingsComponent } from './settings/settings.component';
const appRoutes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'main', component: MainComponent, children: [
      { path: 'ListAllUsersComponent', component: ListAllUsersComponent },
      { path: 'UserViewsComponent', component: UserViewsComponent },
      { path: 'AddBlocksComponent', component: AddBlocksComponent },
      { path: 'AllPostsComponent/:id', component: AllPostsComponent },
         { path: 'ReportedPostsComponent', component: ReportedPostsComponent },
      { path: 'TrashedPostsComponent', component: TrashedPostsComponent },
      { path: 'CategoryComponent', component: CategoryComponent },
      { path: 'Settings', component: SettingsComponent }
  ]},

  // { path: 'category', component: CategoryComponent },
  // { path: 'contact', component: ContactComponent },
];


@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    console.log(this.sanitized.bypassSecurityTrustHtml(value)["changingThisBreaksApplicationSecurity"]);
    return "url("+this.sanitized.bypassSecurityTrustHtml(value)["changingThisBreaksApplicationSecurity"]+")";
  }
}

@Pipe({ name: 'safeHtmlURL'})
export class safeHtmlURL implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    console.log(this.sanitized.bypassSecurityTrustHtml(value)["changingThisBreaksApplicationSecurity"]);
    return this.sanitized.bypassSecurityTrustHtml(value)["changingThisBreaksApplicationSecurity"];
  }
}



@NgModule({
  declarations: [
    AppComponent,
    SafeHtmlPipe,
    safeHtmlURL,
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    ListAllUsersComponent,
    UserViewsComponent,
    MainComponent,
    AddBlocksComponent,
    AllPostsComponent,
    ReportedPostsComponent,
    TrashedPostsComponent,
    SigninComponent,
    CategoryComponent,
    UserProfileComponent,
    ImageCropperComponent,
    SettingsComponent,
    // Ng2Bs3ModalModule,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    FormsModule,
    BsModalModule,
    // Ng2Bs3ModalModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [BlogAdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
