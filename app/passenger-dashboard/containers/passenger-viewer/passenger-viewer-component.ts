import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger-dashboard.interface';

@Component ({
    selector: 'passenger-viewer',
    template: `
        <div>
          <passenger-form
            [detail] = "passenger"
            (update)="onUpdatePassenger($event)">
          </passenger-form>
        </div>
    `
})


// Lifecycle hook that is called after data-bound properties of a directive are initialized.

export class PassengerViewerComponent implements OnInit{
    passenger: Passenger;
    //inject passenger service
    constructor( private passengerService: PassengerDashboardService) {}

    ngOnInit() {
        this.passengerService
            .getPassenger(1)
            .subscribe((data: Passenger) => this.passenger = data);
    }

    onUpdatePassenger(event: Passenger) {
        console.log(event);
    }
}


// When setting up each component file the structure should be as follows 
//** at top list your imports, the @Component decorator should define your selector , stlyurls (if needed), and template */

// Then you will export the component class which should contain the logic, service calls, and property definitions will also conatin your constructor 