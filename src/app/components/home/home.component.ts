import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account/account.service';
import { Client } from '../../models/client.interface';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public loggedInUser: string = this.accountService.loggedInUser;

  constructor(private accountService: AccountService, private clientService: ClientService){}
  ngOnInit() {
    this.clientService.getClients().subscribe((data: Client[]) => {
        this.clientService.clients = data;
        console.log(this.clientService.clients.length);
    });

}
}
