import { Component, OnInit } from '@angular/core';
import { ResidenceService } from 'src/app/services/residence/residence.service';
import { Residence } from 'src/app/models/residence.interface';

@Component({
    selector: 'app-ads',
    templateUrl: './ads.component.html',
    styleUrls: ['./ads.component.scss']
})

export class AdsComponent implements OnInit{
    
    constructor(private residenceService: ResidenceService){}
    ngOnInit(){
        this.getClients();
    }

    public getClients() {
        this.residenceService.getResidence().subscribe((data: Residence[])=>{
            this.residenceService.residences = data;
            console.log(this.residenceService.residences);
        });
      }
}
