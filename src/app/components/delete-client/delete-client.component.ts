import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client.interface';
import { ClientService } from '../../services/client/client.service';

@Component({
    selector: 'app-delete-client',
    templateUrl: './delete-client.component.html',
    styleUrls: ['./delete-client.component.scss']
})

export class DeleteClientComponent{
    public selectedClient: Client;
    public deleted: boolean;
    constructor(private clientService: ClientService) { }

    public deleteClient(){
        this.clientService.deleteClient(this.selectedClient).subscribe((data: Client) => {
            this.clientService.clients= this.clientService.clients.filter((client: Client) =>{
                return client.id !== this.selectedClient.id;
            });
            this.deleted= true;
        });
    }
    
    public onSelect(client: Client){
        this.selectedClient= client;
    }
}