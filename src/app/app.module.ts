import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {Http, RequestOptions, Headers} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
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
import { PostViewComponent } from './post-view/post-view.component';
import { ReportedPostsComponent } from './reported-posts/reported-posts.component';
import { TrashedPostsComponent } from './trashed-posts/trashed-posts.component';
import { MainComponent } from './main/main.component';
const appRoutes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'ListAllUsersComponent', component: ListAllUsersComponent },
  { path: 'UserViewsComponent', component: UserViewsComponent },
  { path: 'AddBlocksComponent', component: AddBlocksComponent },
  { path: 'AllPostsComponent/:id', component: AllPostsComponent },
  { path: 'PostViewComponent', component: PostViewComponent },
  { path: 'ReportedPostsComponent', component: ReportedPostsComponent },
  { path: 'TrashedPostsComponent', component: TrashedPostsComponent },
  // { path: 'category', component: CategoryComponent },
  // { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    ListAllUsersComponent,
    UserViewsComponent,
    MainComponent,
    AddBlocksComponent,
    AllPostsComponent,
    PostViewComponent,
    ReportedPostsComponent,
    TrashedPostsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [BlogAdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
