import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LogOutGuard implements CanActivate {

    constructor(private router: Router) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.checkLogout();
    }

    public checkLogout() {

        if (localStorage.getItem("loggedInUser")) {
            localStorage.removeItem("loggedInUser");        
            window.confirm("You have been disconnected from your account!");
            return true;
        }
        else{
            return true;
        }
    }
}
