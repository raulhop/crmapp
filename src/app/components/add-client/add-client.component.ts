import { Component,OnInit } from '@angular/core';
import { Client } from '../../models/client.interface';
import { ClientService } from '../../services/client/client.service';

@Component({
    selector: 'app-add-client',
    templateUrl: './add-client.component.html',
    styleUrls: ['./add-client.component.scss']
})

export class AddClientComponent implements OnInit{
    public  client: Client;
    constructor(private clientService: ClientService) { }
    ngOnInit(){
        this.clientService.getClients().subscribe((data: Client[]) =>{
            console.log(data);
        });
    }

    public addClient(firstName: string, lastName: string, dob: Date, number: string, country: string, city: string, email: string, action: string){
        let date : string = dob.toString();
        let id : number = this.clientService.clients[length].id + 1;
        this.client =  {
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
    }
}