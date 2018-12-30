import { Component } from '@angular/core';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
    public pieChartLabels: string[] = ['Sales', 'Rents'];
    public pieChartData: number[] = [3, 5];
    public pieChartType: string = 'pie';
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;
    public lineChartData:Array<any> = [
        {data: [23, 51, 52, 53, 56, 55, 40, 67, 76, 86, 90, 96], label: 'Agents'},
        {data: [28, 48, 40, 19, 26, 27, 36, 47, 54, 65, 77, 91], label: 'Clients'},
        
      ];
      public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      public lineChartOptions:any = {
        responsive: true
      };
      public lineChartColors:Array<any> = [
        { // grey
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
          backgroundColor: 'rgba(77,83,96,0.2)',
          borderColor: 'rgba(77,83,96,1)',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)'
        }
      ];
      public lineChartLegend:boolean = true;
      public lineChartType:string = 'line';
    
    

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Earnings' },
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Expenses'}
    ];

    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }



}