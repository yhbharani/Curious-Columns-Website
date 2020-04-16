import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopPattiComponent } from './top-patti/top-patti.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListViewComponent } from './list-view/list-view.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TopPattiComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([ 
      { 
        path:'', 
        component: HomePageComponent
      },
      { 
        path:'list/:navView', 
        component: ListViewComponent
      },
      { 
        path:'profile/:id/:username', 
        component: StudentProfileComponent
      },
      { 
        path:'**', 
        component:PageNotFoundComponent
      },

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
