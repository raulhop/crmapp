import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client.interface';
import { ClientService } from '../../services/client/client.service';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
    selector: 'app-update-client',
    templateUrl: './update-client.component.html',
    styleUrls: ['./update-client.component.scss']
})

export class UpdateClientComponent{
    public selectedClient: Client;
    public edit: boolean = true;
    public edited: boolean;
    constructor(private clientService: ClientService, private accountService: AccountService) { }

    public onEdit(){
        this.edit = !this.edit;
    }

    public saveSelectedClient( firstName, lastName, dob, number, country, city, email, action){
        let date= dob.toString();
        this.selectedClient = {
            id: this.selectedClient.id,
            firstName: firstName,
            lastName: lastName,
            dob: date,
            number: number,
            country: country,
            city: city,
            email: email,
            action: action,
            userId: this.accountService.loggedInUser.id
        };
        this.onSave();
    }

    public onSave(){
        this.edited = false;
        this.clientService.updateClient(this.selectedClient).subscribe((data: Client) => {
            this.clientService.clients = this.clientService.clients.map((client: Client) =>{
                if(client.id == this.selectedClient.id){
                    client = Object.assign({}, client, this.selectedClient);
                }
                return client;
            })
        });
        this.edit = !this.edit;
        this.edited = true;
    }
    
    public onSelect(client: Client){
        this.selectedClient= client;
    }
}