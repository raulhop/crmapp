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

  constructor(private accountService: AccountService, private clientService: ClientService) { }
  ngOnInit() {
    
  }
 
}
