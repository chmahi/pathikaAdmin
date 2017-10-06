import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ListAllUsersComponent } from './list-all-users/list-all-users.component';
import { UserViewsComponent } from './user-views/user-views.component';
import { MainComponent } from './main/main.component';
const appRoutes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'ListAllUsersComponent', component: ListAllUsersComponent },
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
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
