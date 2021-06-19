import {Component, OnInit, ViewChild} from '@angular/core';

import { ChartType } from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';
import {AppService} from "../app.service";

@Component({
  selector: 'app-yourmetrik',
  templateUrl: './yourmetrik.component.html',
  styleUrls: ['./yourmetrik.component.css']
})
export class YourmetrikComponent implements OnInit {
  public data:any;
  // @ts-ignore
  @ViewChild(BaseChartDirective)
  public chart: BaseChartDirective;
  // PolarArea
  public polarAreaChartLabels = ['Продуктивность', 'Вовлеченность в общение', 'Кол-во пряников', 'предложенные идеи', 'оринтация в офисе','качество работы','скорость работы'];
  public polarAreaChartData = [0,0,0,0,0,0,0];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';
  constructor(private service : AppService) { }

  ngOnInit() {
    this.service.get_metrik(1).subscribe(value => {

      this.data=value;
      this.chart.chart.data.datasets[0].data = [this.data.items.M1, this.data.items.M2, this.data.items.M3, this.data.items.M4, this.data.items.m5, this.data.items.M6, this.data.items.M7];
      this.chart.chart.update();
    })
  }


}
