import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

  public notified: boolean = true;
  public messaged: boolean = true;
  public loggedInUser: Account;

  constructor(private router: Router) { }

  ngOnInit(){
    this.loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  }

  public logOut(){
    localStorage.removeItem("loggedInUser");
    this.router.navigate(['/login']);
  }

  public notify() {
    this.notified = false;
  }
  public message() {
    this.messaged = false;
  }
}
