import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Account } from '../../models/account.interface';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const accounts : Account[] = [
      {
        id: 0,
        firstName: 'Andrei',
        lastName: 'Netotea',
        dob: '08-08-1997',
        country: 'Romania',
        city: 'Timisoara',
        email: 'netoteaandrei@gmail.com',
        password: 'laba'
      }
    ];
    return { accounts };
  }
}