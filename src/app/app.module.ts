import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppBootstrapModule } from './bootstrap/app-bootstrap.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data/in-memory-data.service';
import { MenuComponent } from './components/menu/menu.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { AppRoutingModule } from './components/home/app-routing.module';
import { HttpModule } from '@angular/http';

const ROUTES: Routes = [
  {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MenuComponent,
    SideMenuComponent,
    AddClientComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
