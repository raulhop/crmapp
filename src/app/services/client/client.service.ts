import { Injectable } from '@angular/core';
import { Client } from '../../models/client.interface';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  public clients: Client[];

  constructor(private http: Http) {
  }

  public getClients(): Observable<Client[]> {
    return this.http
      .get(API_URL + '/clients')
      .pipe(
        map((response: Response) => response.json())
      );
  }

  public addClient(client : Client): Observable<Client> {
    return this.http
    .post(API_URL + '/clients', client)
    .pipe(
      map((response: Response) => response.json())
    );
  }

}
