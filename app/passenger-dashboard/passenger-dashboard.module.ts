// Container and Presentational Components live here
// Example of a custom module - good for readable and maintaining clean code 
// This will need to be imported into the main app.module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import hhtpModule to make http requests
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';

// Containers 
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer-component';

// Components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';


//service 
import { PassengerDashboardService } from './passenger-dashboard.service'

@NgModule ({
    //where you define the application components
    declarations : [
        PassengerDashboardComponent,
        PassengerViewerComponent,
        PassengerCountComponent,
        PassengerDetailComponent,
        PassengerFormComponent
    ],

    // define your imported Modules
    imports: [
        CommonModule,
        HttpModule,
        FormsModule
    ],

    // define your Container Components 
    exports: [
        PassengerViewerComponent,
        PassengerDashboardComponent
    ],

    //Define your service providers 
    providers: [
        PassengerDashboardService
    ]
})

//export out custom module

export class PassengerDashboardModule {}