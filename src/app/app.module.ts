import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from 'src/environments/environment';


import { TopPattiComponent } from './top-patti/top-patti.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListViewComponent } from './list-view/list-view.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LogoutPopupComponent } from './top-patti/logout-popup/logout-popup.component';



@NgModule({
  declarations: [
    AppComponent,
    TopPattiComponent,
    NavBarComponent,
    ContactUsComponent,
    EditProfileComponent,
    LogoutPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
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

    ]),
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
