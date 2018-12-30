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
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

}