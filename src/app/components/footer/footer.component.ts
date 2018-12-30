import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account/account.service';
import { Client } from '../../models/client.interface';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private accountService: AccountService, private clientService: ClientService) { }
  ngOnInit() {
    
  }
 
}
