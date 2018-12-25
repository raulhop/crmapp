import { Component, OnInit } from '@angular/core';
import { Account } from '../../models/account.interface';
import { AccountService } from '../../services/account/account.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

    public user: Account;

    constructor(private router: Router, private accountService: AccountService) { }

    ngOnInit() {
        if (typeof this.accountService.users == 'undefined') {
            this.getUsers();
        }
    }

    public getUsers(): void {
        this.accountService
            .getUsers()
            .subscribe((users: Account[]) => this.accountService.users = users);
    }

    public addUser(firstName: string, lastName: string, dob: Date, country: string, city: string, email: string, password: string) {
        let date: string = dob.toString();
        let id: number = this.accountService.users[this.accountService.users.length - 1].id + 1;
        this.user = {
            id: id,
            firstName: firstName,
            lastName: lastName,
            dob: date,
            country: country,
            city: city,
            email: email,
            password: password
        }
        this.accountService
            .addUser(this.user)
            .subscribe((user: Account) => {
                this.accountService.users.push(user);
                this.accountService.loggedInUser = this.user;
            });
        console.log(this.accountService.users);
    }


}