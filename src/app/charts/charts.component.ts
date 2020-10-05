import { Component, OnInit } from '@angular/core';
import { ChartsService } from './charts.service';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
  providers: [ChartsService]
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
}
