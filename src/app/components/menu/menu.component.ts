import { Component, Input } from '@angular/core';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public notified: boolean = true;
  public messaged: boolean = true;
  constructor(private accountService: AccountService) { }

  public notify() {
    this.notified = false;
  }
  public message() {
    this.messaged = false;
  }
}
