import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Passenger } from './models/passenger-dashboard.interface';

const PASSENGER_API: string = 'api/passengers';


// the injectable decorator declares the service, sets up the REST calls that will be made. 
@Injectable()
export class PassengerDashboardService {

    //decalreing a private method
    constructor(private http: Http) { }
    // define your getPassengers() function, get passenger data from the constant PASSENGER_API
    // map the response to json 
    //doing a simple get, update, and delete request, mapping the reponse to jason and setting an oberservable to watch for errors. 
    // set oberserable to return an array of passengers


    // REST API CALLS : GET - read data, POST - create data , PUT and Patch - update data, DELETE - delete data 
    // return all passenger
    getPassengers(): Observable<Passenger[]> {
        return this.http
            .get(PASSENGER_API)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()));
    }


    getPassenger(id: number) : Observable<Passenger> {
        return this.http 
        //conversion to ES6 strings
            .get(`${PASSENGER_API}/${id}`)
            .map((response : Response) => response.json)
            .catch((error : any ) => Observable.throw(error.json));


    }

    // update Passenger data     
    updatePassengers(passenger: Passenger): Observable<Passenger> {
        // define what should be set in the header: Content-type, auth, token-values etc 
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        let options = new RequestOptions({
            headers: headers
        })
        return this.http
            .put(`${PASSENGER_API} / ${passenger.id}`, passenger, options)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()));
    }

    // delete Passenger data     
    removePassenger(passenger: Passenger): Observable<Passenger> {
        return this.http
            .delete(`${PASSENGER_API} / ${passenger.id}`)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()));
    }
}