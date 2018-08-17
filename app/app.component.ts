import { Component } from '@angular/core';

//main application component defines the app-root directive, the main scss file and with in 
//the template the router-outlet tells the application to define the routes to be used.  

@Component({
  selector: 'app-root', 
  styleUrls: ['./app.component.scss'],
  template: `
     <div class="app"> 
      <router-outlet></router-outlet>
    </div>
  `
})
   
export class AppComponent {}
 