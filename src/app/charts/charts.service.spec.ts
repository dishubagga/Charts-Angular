import { TestBed, async } from '@angular/core/testing';

import { ChartsService } from './charts.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { BasicLineChartModel } from '../models/linechart.model';
describe('ChartsService', () => {
  let httpTestCtrl: HttpTestingController;
  let service: ChartsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      imports: [HttpClientTestingModule],
      providers: [ChartsService]
    }).compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartsService);
    httpTestCtrl = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should check the http client get request', () => {
    const testData: BasicLineChartModel[] = [
      {
        'id': 1,
        'xPathName': 'Mon',
        'name': 'a',
        'type': 'line',
        'data': [220, 182, 191, 234, 290, 330, 310]
      },
      {
        'id': 2,
        'xPathName': 'Tue',
        'name': 'b',
        'type': 'line',
        'data': [150, 232, 201, 154, 190, 330, 410]
      },
    ];
    service['_fetchDataFromServer']().subscribe((data) => {
      expect(testData).toBe(data, 'should check mock data');
    });

    const req = httpTestCtrl.expectOne(service.BASE_URL);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(testData);
  });

});
