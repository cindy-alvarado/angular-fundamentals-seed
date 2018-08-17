// For passing data Into a component you need Input for passing data of of a component you need Output and EventEmitter

import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { Passenger } from '../../models/passenger-dashboard.interface';


@Component ({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
        <div>
            <span class="status" [ngClass] = "{'checked-in' : detail.checkedIn}"></span>
            <div *ngIf = "editing">
                <input 
                    type="text" 
                    [value]="detail.fullname"
                    (input) = "onNameChange(name.value)"
                    #name>
            </div>
            <div *ngIf = "!editing">
                {{ detail.fullname }}
            </div>
            <div class="date">
                Check in date: {{ detail.checkInDate ? (detail.checkInDate | date: 'yMMMd' | uppercase ) : 'Not Checked In' }}
            </div>
            <div class="children">
                Children: {{ detail.children?.length || 0 }}
            </div>
            <button (click) = "toggleEditing()">
             {{ editing ? "Done" : "Edit" }}
            </button>
            <button (click) = "onRemove()">
            Remove
           </button>
        </div>    
    `
})

export class PassengerDetailComponent implements OnChanges {
    // @Input marks the detail property that it should be a piece of data
    @Input()
    detail: Passenger;

    // Update the parent object 
    @Output()
    edit: EventEmitter<any> = new EventEmitter();

    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    editing: boolean = false;
    constructor() {}

    // intercepts parent changes example: edit, done buttons
    ngOnChanges(changes) {
        if (changes.detail) {
            this.detail = Object.assign({}, changes.detail.currentValue);
        }
    }

    onNameChange(value: string) {
        // store the local changes of your edit function
        this.detail.fullname = value;
    }

    toggleEditing() {
        if (this.editing) {
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }

    onRemove() {
        this.remove.emit(this.detail);
    }
}