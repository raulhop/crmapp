import { TestBed, inject } from '@angular/core/testing';

import { Http, HttpModule } from '@angular/http';
import { ClientService } from 'src/app/services/client/client.service';
import { Client } from 'src/app/models/client.interface';
import { AddClientComponent } from './add-client.component';
import { AppModule } from 'src/app/app.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('AddClientComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      AppModule,
      HttpModule,
      HttpClientTestingModule
    ],
    providers: [
      {provide: APP_BASE_HREF, useValue: '/'},
      ClientService
    ],
  }));
  let client: Client = {
    id: 12,
    firstName: "Daniel",
    lastName: "Gligor",
    dob: "1996-10-04",
    number: "0761775637",
    country: "Romania",
    city: "Timisoara",
    email: "dani@yahoo.com",
    action: "sale",
    userId: 1
  }
  it('should create AddClient', () => {
    const fixture = TestBed.createComponent(AddClientComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });
  it('get should work', inject([HttpTestingController, ClientService],
    (httpMock: HttpTestingController, service: ClientService) => {
      service.getClients().subscribe((data: Client[]) => {
        expect(data.length).toBeGreaterThan(0)
      });
    })
  );
  it('post should work', inject([HttpTestingController, ClientService],
    (httpMock: HttpTestingController, service: ClientService) => {
      service.addClient(client).subscribe((data: Client) => {
        expect(data).toEqual(client);
      });
    })
  );
});
