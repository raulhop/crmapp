import { Injectable } from '@angular/core';
import { Account } from '../../models/account.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  public users: Account[];
  public loggedInUser: string;

  public ACCOUNT_API: string = '/api/accounts';
  
  constructor(private http: HttpClient) {
   }

  public getUsers() : Observable<Account[]>{
    
    return this.http.get<Account[]>(this.ACCOUNT_API);
  }
  public addUser( newUser : Account) : Observable<Account>{

    return this.http.post<Account>(this.ACCOUNT_API, newUser, httpOptions)
  }

}
