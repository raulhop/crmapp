import { Component, Input } from '@angular/core';
import { AccountService } from '../../services/account/account.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  constructor(private accountService: AccountService){}
  
}
