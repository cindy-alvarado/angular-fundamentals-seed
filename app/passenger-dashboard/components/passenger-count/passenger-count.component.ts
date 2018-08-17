import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger-dashboard.interface';

@Component ({
    selector: 'passenger-count',
    template: `
    <div>
        <h3>Airline Passengers</h3>
        <div>
            Total Checked In: {{ checkedInCount() }} / {{ items?.length }}
        </div>
    </div>    
    `
})

export class PassengerCountComponent {
    @Input()
    items: Passenger[];
    checkedInCount(): number {
        // make sure there are items avaviable
        if (!this.items) return;

        // filter the passeneger (items) when they are checkin then tell me the length (how many)
        return this.items.filter(( passenger: Passenger ) => passenger.checkedIn).length;
    }
}