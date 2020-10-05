import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { BasicLineChartModel } from '../models/linechart.model';
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  private static readonly FIFTEEN_SECONDS: number = 15000;
  readonly BASE_URL: string = 'http://0.0.0.0:5000/sourcedata';
  constructor(private httpClient: HttpClient) { console.log(this.getLineChartData); }

  private _fetchDataFromServer(): Observable<BasicLineChartModel[]> {
    return this.httpClient.get<BasicLineChartModel[]>(
      this.BASE_URL
    );
  }
  private _returnTimer(): Observable<BasicLineChartModel[]> {
    return timer(0, ChartsService.FIFTEEN_SECONDS).pipe(
      switchMap(() => this._fetchDataFromServer())
    );
  }
  getLineChartData(): Observable<BasicLineChartModel[]> {
    return this._returnTimer();
  }

}
