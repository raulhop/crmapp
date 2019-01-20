import { Injectable } from '@angular/core';
import { Account } from '../../models/account.interface';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';


const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  public users: Account[];
  
  constructor(private http: Http) {
  }

  public getUsers(): Observable<Account[]> {
    return this.http
      .get(API_URL + '/users')
      .pipe(
        map((response: Response) => response.json())
      );
  }
  public addUser(user : Account): Observable<Account> {
    return this.http
    .post(API_URL + '/users', user)
    .pipe(
      map((response: Response) => response.json())
    );
  }

}
