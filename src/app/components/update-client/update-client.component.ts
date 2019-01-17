import { Component, ViewChild, OnInit } from '@angular/core';
import { Client } from '../../models/client.interface';
import { ClientService } from '../../services/client/client.service';
import { AccountService } from 'src/app/services/account/account.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
    selector: 'app-update-client',
    templateUrl: './update-client.component.html',
    styleUrls: ['./update-client.component.scss']
})

export class UpdateClientComponent {
    public selectedClient: Client;
    public edit: boolean = true;
    public edited: boolean;
    public loggedInUser: Account;


    displayedColumns: string[] = ['id', 'firstName', 'lastName', 'action'];
    dataSource = new MatTableDataSource<Client>();
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    ngOnInit() {
        this.getClients();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    }
    constructor(private clientService: ClientService, private accountService: AccountService) { }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }


    public onEdit() {
        this.edit = !this.edit;
    }

    public saveSelectedClient(firstName, lastName, dob, number, country, city, email, action) {
        this.edited = false;
        let date = dob.toString();
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
            userId: parseInt(this.loggedInUser.id)
        };

        this.onSave();
    }

    public onSave() {
        this.edited = false;
        this.clientService.updateClient(this.selectedClient).subscribe((data: Client) => {
            this.clientService.clients = this.clientService.clients.map((client: Client) => {
                if (client.id == this.selectedClient.id) {
                    client = Object.assign({}, client, this.selectedClient);
                    this.getClients();
                }
                return client;
            })
        });

        this.edit = !this.edit;
        this.edited = true;
    }

    public getClients(): void {
        this.clientService.getClients().subscribe((data: Client[]) => {
            data = data.filter((client: Client) => {
                return client.userId == parseInt(this.loggedInUser.id);
            });
            this.clientService.clients = data;
            this.dataSource.data = data;
        });

    }


    public onSelect(client: Client) {
        this.selectedClient = client;

    }
}