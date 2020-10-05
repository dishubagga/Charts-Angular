import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../charts.service';
import { BasicLineChartModel } from 'src/app/models/linechart.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-linear-chart',
  templateUrl: './linear-chart.component.html',
  styleUrls: ['./linear-chart.component.css'],
  providers: [ChartsService]
})
export class LinearChartComponent implements OnInit {

  public serviceList: BasicLineChartModel[];
  private _sub: Subscription;
  constructor(private service: ChartsService) { }

  ngOnInit(): void {
    this.getServiceData();
  }
  public getServiceData(): void {
    this._sub = this.service.getLineChartData().subscribe((services) => {
      this.serviceList = services;
      console.log(this.serviceList);
    });
  }
  OnDestroy(): void {
    if (this._sub) {
      this._sub.unsubscribe();
    }
  }
}
