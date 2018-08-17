// import and export staements from ES6 
// Module contains components, 
import { NgModule } from '@angular/core';

// Needed because we are creating a browser application
import { BrowserModule } from '@angular/platform-browser';

// Gives us the directives that are needed 
import { CommonModule } from '@angular/common';

// import component into the module
import { AppComponent } from './app.component';

import { HomeComponent } from './home.component';

// Import form to do two-way data binding 
import { FormsModule } from '@angular/forms'; 

import { RouterModule, Routes } from '@angular/router'

//import in your custom module

import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { PassengerDashboardComponent } from './passenger-dashboard/containers/passenger-dashboard/passenger-dashboard.component';


// Setup routes 
const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full"}
]

// define your AppModule
//@ngModule decorator that defines various parts of the application structure. For example imports, exports, declorations etc. 
@NgModule({
  // imports that are used from angular
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    PassengerDashboardModule,
    RouterModule.forRoot(routes)
  ],

  exports: [
    PassengerDashboardComponent
  ],

  // bootstrap your Component on the app-root
  bootstrap: [
    AppComponent
  ],
   // register the components that are used in the application  
  declarations: [
    AppComponent,
    HomeComponent
  ]
})

// Telling angular to use AppModule as NgModule
export class AppModule {}
