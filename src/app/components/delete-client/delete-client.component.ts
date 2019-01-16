import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../../models/client.interface';
import { ClientService } from '../../services/client/client.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
    selector: 'app-delete-client',
    templateUrl: './delete-client.component.html',
    styleUrls: ['./delete-client.component.scss']
})

export class DeleteClientComponent {
    public canDelete: boolean = false;
    public deleted: boolean;
    public nrOfSelectedClients: number = 0;
    public iterator: number;
    public once: boolean = false;

    displayedColumns: string[] = ['id', 'firstName', 'lastName', 'dob', 'country', 'city', 'action', 'email', 'number', 'select'];
    dataSource = new MatTableDataSource<Client>();
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    ngOnInit() {
        this.getClients();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    public getClients(): void {
        this.clientService.getClients().subscribe((data: Client[]) => {
            data = data.filter((client: Client) => {
                return client.userId == this.accountService.loggedInUser.id;
            });
            this.clientService.clients = data;
            this.dataSource.data = data;
        });
    }
    constructor(private clientService: ClientService, private accountService: AccountService) { }

    public deleteClient() {
        this.iterator = 0;
        this.clientService.clients.forEach(element => {
            if (element.selected) {
                this.clientService.deleteClient(element).subscribe((data: Client) => {
                    this.clientService.clients = this.clientService.clients.filter((client: Client) => {
                        return client.id !== element.id;
                    });
                    this.iterator++;
                    console.log("iterator: ",this.iterator);
                    console.log("nrOfSelect: ", this.nrOfSelectedClients);
                    if (this.iterator == this.nrOfSelectedClients) {
                        this.getClients();
                        this.nrOfSelectedClients = 0;
                        console.log("gett");
                    }
                });
            }
        });
        this.deleted = true;

    }

    checkNrOfSelectedClients() {
        if (this.nrOfSelectedClients > 0) {
            this.canDelete = true;

        }
        else {
            this.canDelete = false;
        }
    }

    public onSelect(client: Client) {
        this.canDelete = true;
        if (!this.once) {
            this.clientService.clients.forEach(element => {
                if (client.id == element.id && !element.selected) {
                    element.selected = true;
                    this.nrOfSelectedClients++;
                }
            });
            console.log("select",this.nrOfSelectedClients);
        }
        else {
            this.once = false;
        }
        this.checkNrOfSelectedClients();

    }

    public unselect(client: Client) {
        this.clientService.clients.forEach(element => {
            if (element.id == client.id) {
                element.selected = false;
                this.once = true;
                this.nrOfSelectedClients--;
            }
        });
        this.checkNrOfSelectedClients();
        console.log("unselect",this.nrOfSelectedClients);

    }
}