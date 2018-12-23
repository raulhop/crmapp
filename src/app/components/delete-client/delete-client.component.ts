import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client.interface';
import { ClientService } from '../../services/client/client.service';

@Component({
    selector: 'app-delete-client',
    templateUrl: './delete-client.component.html',
    styleUrls: ['./delete-client.component.scss']
})

export class DeleteClientComponent implements OnInit {
    public selectedClient: Client;
    constructor(private clientService: ClientService) { }
    ngOnInit() {
        this.clientService.getClients().subscribe((data: Client[]) => {
            this.clientService.clients = data;
            console.log(this.clientService.clients.length);
        });

    }
    public onSelect(client: Client){
        this.selectedClient= client;
    }
}