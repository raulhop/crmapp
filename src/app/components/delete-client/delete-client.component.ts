import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../../models/client.interface';
import { ClientService } from '../../services/client/client.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
    selector: 'app-delete-client',
    templateUrl: './delete-client.component.html',
    styleUrls: ['./delete-client.component.scss']
})

export class DeleteClientComponent {
    public selectedClient: Client;
    public deleted: boolean;

    displayedColumns: string[] = ['id', 'firstName', 'lastName', 'dob', 'country', 'city', 'action', 'email', 'number'];
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
            this.clientService.clients = data;
            this.dataSource.data = data;
        });
    }
    constructor(private clientService: ClientService) { }

    public deleteClient() {
        this.clientService.deleteClient(this.selectedClient).subscribe((data: Client) => {
            this.clientService.clients = this.clientService.clients.filter((client: Client) => {
                return client.id !== this.selectedClient.id;
            });
            this.deleted = true;
            this.getClients();
        });
    }

    public onSelect(client: Client) {
        this.selectedClient = client;
    }
}