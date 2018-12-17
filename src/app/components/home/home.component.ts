import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public loggedInUser: string = this.accountService.loggedInUser;

  constructor(private accountService: AccountService){}
}
