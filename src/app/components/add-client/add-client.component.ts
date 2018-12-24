import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client.interface';
import { ClientService } from '../../services/client/client.service';

@Component({
    selector: 'app-add-client',
    templateUrl: './add-client.component.html',
    styleUrls: ['./add-client.component.scss']
})

export class AddClientComponent implements OnInit {
    public client: Client;
    public added: boolean;
    constructor(private clientService: ClientService) { }
    ngOnInit() {
    }

    public addClient(firstName: string, lastName: string, dob: Date, number: string, country: string, city: string, email: string, action: string) {
        let date: string = dob.toString();
        console.log(this.clientService.clients);
        let id: number = this.clientService.clients[this.clientService.clients.length - 1].id + 1;
        console.log(id);
        this.client = {
            id: id,
            firstName: firstName,
            lastName: lastName,
            dob: date,
            number: number,
            country: country,
            city: city,
            email: email,
            action: action
        }
        this.clientService.addClient(this.client).subscribe((data: Client) => {
            this.clientService.clients.concat(data);
            this.added = true;
        });
    }
}