import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account/account.service';
import { Account } from '../../models/account.interface';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    public error: boolean = false;

    constructor(private router: Router, private accountService: AccountService) {

    }
    ngOnInit() {
        if (typeof this.accountService.users == 'undefined') {
            this.getUsers();
        }
    }

    public getUsers(): void{
        this.accountService
        .getUsers()
        .subscribe((users : Account[]) => this.accountService.users = users);
    }

    public logIn(email: string, password: string) {

        this.accountService.users.forEach(element => {
            console.log(element);
            if (email == element.email && password == element.password) {
                this.router.navigate(['/home']);
                this.accountService.loggedInUser = element;
            }
            else {
                this.error = true;
            }
        });

    }
}