import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Passenger } from '../../models/passenger-dashboard.interface';

import { Baggage } from '../../models/baggage.interface';

 

@Component ({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `
        <form (ngSubmit)="handleSubmit(form.value, form.vaild)" #form="ngForm" novalidate>
        {{ detail | json }}
        <div>
            Passenger name:
            <input 
                type="text"
                name="fullname"
                required
                #fullname="ngModel"
                [ngModel]= "detail?.fullname">
            <div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
                Passenger name is required 
            </div>            
        </div>

        <div>
            Passenger ID:
            <input 
                type="number"
                name="id"
                required
                #id="ngModel"
                [ngModel]= "detail?.id"> 
                <!-- Safe Navagation Opertaor --> 
            <div *ngIf="id.errors?.required && id.touched" class="error">
                Passenger ID is required 
            </div>            
        </div>   
        
        <div>
            <label>
                <input 
                 type="checkbox"
                 [value]="true"
                 required
                 name="checkedIn"
                 ngModel= "detail?.checkedin">
            </label>       
        </div>   

        <div>
            Check In Date:
            <input 
                type="number"
                name="checkInDate"
                [ngModel]= "detail?.checkInDate">            
        </div> 

        <div>  
            Luggage:
                <select
                    name="baggage"
                    [ngModel]="detail?.baggage">
                    <option
                        *ngFor="let item of baggage"
                        [value]="item.key"
                        [selected]="item.key === detail?.baggage">
                        {{item.value}}
                    </option>
                </select>                        
        </div> 

        
        <button type="submit" [disabled]="form.invaild">
            Update passenger
        </button>    
        </form>
    `
})

export class PassengerFormComponent {
    @Input()
    detail: Passenger;


    @Output() 
    update: EventEmitter<Passenger> = new EventEmitter<Passenger>();


    baggage: Baggage[] = [{
        key: 'none',
        value: 'No baggage'
    },
    {
        key: 'hand-only',
        value: 'Hand baggage'
    },
    {
        key: 'hold-only',
        value: 'Hold baggage'
    },
    {
        key: 'hand-hold',
        value: 'Hand and Hold baggage'
    }];
    toggleCheckIn(checkedIn: boolean ) {
        if (checkedIn) {
            this.detail.checkInDate = Date.now();
        }
    }

    handleSubmit(passenger: Passenger, isValid: boolean) {
        if (isValid) {

        }

    }
}