import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCategoriesMaterielsComponent } from './components/create-categories-materiels/create-categories-materiels.component';
import { ListCategoriesMaterielsComponent } from './components/list-categories-materiels/list-categories-materiels.component';
import { NavbarComponent } from './components/navbar/navbar.component';


import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateMaterielsStudiosComponent } from './components/create-materiels-studios/create-materiels-studios.component';
import { ListMaterielsStudiosComponent } from './components/list-materiels-studios/list-materiels-studios.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCategoriesMaterielsComponent,
    ListCategoriesMaterielsComponent,
    NavbarComponent,
    CreateMaterielsStudiosComponent,
    ListMaterielsStudiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
