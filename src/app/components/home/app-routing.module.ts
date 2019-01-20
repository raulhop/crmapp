import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AddClientComponent } from '../add-client/add-client.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { DeleteClientComponent } from '../delete-client/delete-client.component';
import { UpdateClientComponent } from '../update-client/update-client.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LogOutGuard } from 'src/app/guards/logout.guard';
import { AdsComponent } from '../ads/ads.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: DashboardComponent },
            { path: 'add-client', component: AddClientComponent },
            { path: 'delete-client', component: DeleteClientComponent },
            { path: 'update-client', component: UpdateClientComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'ads', component: AdsComponent }
        ]
    },
    {
        path: '', component: LoginComponent, pathMatch: 'full'
    },
    {
        path: 'register', component: RegisterComponent
    },
    {
        path: 'login', component: LoginComponent,canActivate: [LogOutGuard]
    },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],

})

export class AppRoutingModule { }