import { Component, Input } from '@angular/core';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
 
  public searchToggle: boolean = false;
  constructor(private accountService: AccountService){}
  public search()
  {
    this.searchToggle = !this.searchToggle;
  }
  
}
