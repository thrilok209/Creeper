import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { McqtestComponent } from './mcqtest/mcqtest.component';
import { TestselectionComponent } from './testselection/testselection.component';

import { QuestionsfromfirebaseService } from './questionsfromfirebase.service';


import { AngularFireModule } from 'angularfire2';

import { RouterModule } from '@angular/router';
import {MomentModule} from 'angular2-moment';

import { routes } from './app.routes';

import { SimpleTimer } from 'ng2-simple-timer';

declare var $: any;

export const firebaseConfig = {
  apiKey: 'AIzaSyAYlf2mrOOefjGIA1C9NNiSMxsAv1PE72g',
  authDomain: 'creeper-fa765.firebaseapp.com',
  databaseURL: 'https://creeper-fa765.firebaseio.com/',
  storageBucket: 'gs://creeper-fa765.appspot.com',
  messagingSenderId: '943257830273'
};


@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    LoginpageComponent,
    McqtestComponent,
    TestselectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
  RouterModule.forRoot(routes),
  MomentModule
  ],
  providers: [McqtestComponent,QuestionsfromfirebaseService
  ,SimpleTimer],
  bootstrap: [AppComponent]
})
export class AppModule {
  $: any;
}
