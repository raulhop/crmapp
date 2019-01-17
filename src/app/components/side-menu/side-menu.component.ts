import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../../services/account/account.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit{

  public loggedInUser: Account;

  ngOnInit(){
    this.loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  }

  constructor(){}

  
}
