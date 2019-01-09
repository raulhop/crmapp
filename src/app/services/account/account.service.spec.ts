import { TestBed } from '@angular/core/testing';

import { AccountService } from './account.service';
import { Http } from '@angular/http';

describe('AccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  let http: Http;
  it('should be created', () => {
    const service: AccountService = new AccountService(http);
    expect(service).toBeTruthy();
  });
});
