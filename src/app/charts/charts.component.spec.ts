import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsComponent } from './charts.component';
import { LinearChartComponent } from './linear-chart/linear-chart.component';
import { DynamicLinearChartComponent } from './dynamic-linear-chart/dynamic-linear-chart.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ChartsComponent', () => {
  let component: ChartsComponent;
  let fixture: ComponentFixture<ChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsComponent, LinearChartComponent, DynamicLinearChartComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
