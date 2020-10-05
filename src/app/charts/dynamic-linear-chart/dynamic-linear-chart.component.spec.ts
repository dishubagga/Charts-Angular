import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicLinearChartComponent } from './dynamic-linear-chart.component';

describe('DynamicLinearChartComponent', () => {
  let component: DynamicLinearChartComponent;
  let fixture: ComponentFixture<DynamicLinearChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicLinearChartComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicLinearChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
