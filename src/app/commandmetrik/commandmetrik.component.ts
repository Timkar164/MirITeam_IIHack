import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import {AppService} from "../app.service";

@Component({
  selector: 'app-commandmetrik',
  templateUrl: './commandmetrik.component.html',
  styleUrls: ['./commandmetrik.component.css']
})
export class CommandmetrikComponent implements OnInit {

  // @ts-ignore
  @ViewChild(BaseChartDirective)
  public chart: BaseChartDirective;
  public radarChartLabels = ['Мининский', 'НГТУ им. Лобачевского', 'ВШЭ', 'ИТМО','НГТУ им.Р.Е. Алексеева'];
  public radarChartData = [
    {data: [0,0, 0, 0,0], label: 'Company team'}

  ];
  public radarChartType = 'radar';
  public metrik:any;
  public teammetr:any;
  public dara:any;
  constructor(private sirvece: AppService) { }

  ngOnInit() {


    this.sirvece.get_program().subscribe(value => {
      console.log(value);
      this.metrik = value;
      this.metrik=this.metrik.response;
      console.log(this.metrik);
    });

  }
  mych(){
    console.log(this.chart.chart);
    this.chart.chart.data.datasets[0].data = [90, 200, 200, 45,90];

    this.chart.chart.update();
  }

}
