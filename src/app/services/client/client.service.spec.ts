import { TestBed, inject } from '@angular/core/testing';
import { Http, HttpModule } from '@angular/http';
import { ClientService } from './client.service';
import { Client } from 'src/app/models/client.interface';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { environment } from 'src/environments/environment.prod';
describe('ClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ClientService],
    imports: [
      HttpClientTestingModule,
      HttpModule
    ],
  }));
 
  let http: Http;
  const service: ClientService = new ClientService(http);
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


