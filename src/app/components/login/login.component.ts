import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {
    public email: string;
    public error: boolean;

    constructor(private router: Router){

    }

    public logIn(email: string, password: string) {
        if (email == "admin" && password == "admin"){
            console.log("Corect!");
            this.router.navigate(['/home']);
        }
        else {
            this.error = true;
        }
    }
}