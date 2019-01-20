
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Residence } from 'src/app/models/residence.interface';

const API_URL = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})

export class ResidenceService {

    public residences: Residence[] = [];
    constructor(private http: Http) {
    }

    public getResidence(): Observable<Residence[]> {
        return this.http
            .get(API_URL + '/residence')
            .pipe(
                map((response: Response) => response.json())
            );
    }

    //   public addUser(user : Account): Observable<Account> {
    //     return this.http
    //     .post(API_URL + '/users', user)
    //     .pipe(
    //       map((response: Response) => response.json())
    //     );
    //   }
}
