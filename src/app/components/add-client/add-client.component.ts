import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client.interface';
import { ClientService } from '../../services/client/client.service';
import { AccountService } from '../../services/account/account.service';

@Component({
    selector: 'app-add-client',
    templateUrl: './add-client.component.html',
    styleUrls: ['./add-client.component.scss']
})

export class AddClientComponent implements OnInit {
    public client: Client;
    public added: boolean;
    public already: boolean;
    constructor(private clientService: ClientService, private accountService: AccountService) { }
    ngOnInit() {
    }

    public addClient(firstName: string, lastName: string, dob: Date, number: string, country: string, city: string, email: string, action: string) {
        this.already = false;
        let date: string = dob.toString();
        console.log(this.clientService.clients);
        let id: number = this.clientService.clients[this.clientService.clients.length - 1].id + 1;
        let userId: number = this.accountService.loggedInUser.id;
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
            action: action,
            userId: userId
        }
        var keepGoing = true;
        this.clientService.clients.forEach(client => {
            
            if (keepGoing) {
                if ((client.firstName == this.client.firstName) && (client.lastName == this.client.lastName)) {
                    this.already = true;
                    keepGoing = false;
                    console.log(client.firstName, this.client.firstName, client.lastName, this.client.lastName);
                }
                else {
                    this.already = false;
                }
            }
        });
        if (!this.already) {
            this.clientService.addClient(this.client).subscribe((data: Client) => {
                this.clientService.clients.concat(data);
                this.added = true;
            });
        }
    }
}