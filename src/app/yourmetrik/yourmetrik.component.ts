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
  public polarAreaChartLabels = ['Анализ данных','Инженерия машинного обучения','Програмная инженерия','Вычислительные машины','Прикладная математика и информатика','Наука о данных','Анализ данных в биологии и медицине'];
  public polarAreaChartData = [0,0,0,0,0,0,0];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';
  constructor(private service : AppService) { }

  ngOnInit() {
    this.service.get_metrik(1).subscribe(value => {

      this.data=value;
      console.log(value);
      console.log(this.chart.chart);
      this.chart.chart.data.datasets[0].data = this.data.met;
      this.chart.chart.data.labels = this.data.name;
      this.chart.chart.update();
    })
  }


}
