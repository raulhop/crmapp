import { Component } from '@angular/core';
import { ResidenceService } from 'src/app/services/residence/residence.service';
import { Residence } from 'src/app/models/residence.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private residenceService: ResidenceService) { }
  ngOnInit() {
  }
}
