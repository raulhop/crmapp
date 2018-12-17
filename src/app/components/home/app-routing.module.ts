import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AddClientComponent } from '../add-client/add-client.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: '', component: AddClientComponent },
            { path: 'add-client', component: AddClientComponent }
        ]
    },
    {
        path: '', component: LoginComponent, pathMatch: 'full'
    },
    {
        path: 'register', component: RegisterComponent
    },
    {
        path: 'login', component: LoginComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],

})

export class AppRoutingModule { }