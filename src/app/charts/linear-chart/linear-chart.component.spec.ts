import { async, ComponentFixture, TestBed, fakeAsync, inject, tick, flush, flushMicrotasks, discardPeriodicTasks } from '@angular/core/testing';

import { LinearChartComponent } from './linear-chart.component';
import { ChartsService } from '../charts.service';
import { of, Subscription } from 'rxjs';
import { BasicLineChartModel } from 'src/app/models/linechart.model';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
const mockServiceList: BasicLineChartModel[] = [{
  'id': 6,
  'xPathName': 'Sat',
  'name': 'f',
  'type': 'line',
  'data': [82, 932, 91, 934, 1290, 1330, 1320]
},
{
  'id': 7,
  'xPathName': 'Sun',
  'name': 'g',
  'type': 'line',
  'data': [82, 932, 91, 934, 1290, 1330, 1320]
}];

describe('LinearChartComponent', () => {
  let component: LinearChartComponent;
  let fixture: ComponentFixture<LinearChartComponent>;
  const mockList: BasicLineChartModel[] = mockServiceList;
  let service: ChartsService;
  let serviceList: BasicLineChartModel[];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LinearChartComponent],
      providers: [{
        provide: ChartsService, useValue: {
          getLineChartData: () => of(mockServiceList)
        }
      }],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearChartComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ChartsService);
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create service', () => {
    expect(service).toBeTruthy();
  });
  it('should get line chart data', () => {
    spyOn(service, 'getLineChartData').and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();
    expect(service.getLineChartData).toHaveBeenCalled();
    expect(component.serviceList).toEqual(mockServiceList);
  });

  // it('testing subscribe method is getting called', fakeAsync(() => {
  //   const serviceSpy = spyOn(service, 'getLineChartData').and.returnValue(of(mockList));
  //   const subSpy = spyOn(service.getLineChartData(), 'subscribe');
  //   component.ngOnInit();
  //   tick(15000);
  //   fixture.whenStable().then(() => {
  //     expect(serviceSpy).toHaveBeenCalledBefore(subSpy);
  //   });
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     expect(subSpy).toHaveBeenCalled();
  //   });
  //   flush();
  //   flushMicrotasks();
  //   // discardPeriodicTasks();
  // }));



  it('testing within subscribe method', fakeAsync(() => {
    component.ngOnInit();
    tick(20000);
    fixture.whenStable().then(() => {
      expect(component['_serviceList']).toBeDefined();
      expect(component['_serviceList'].length).toBeGreaterThan(1);
    });

    flush();
    flushMicrotasks();
    // discardPeriodicTasks();

  }));

});
