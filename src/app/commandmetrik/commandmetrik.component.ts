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

    this.sirvece.get_team(1).subscribe(value => {

      this.dara=value;
      console.log(this.dara);
      this.teammetr=this.dara.items;
      console.log(this.teammetr);

      for (let i=0; i< this.teammetr.length; i++){
         let metsum = 0;
         metsum=this.teammetr[i].M1+this.teammetr[i].M2+this.teammetr[i].M3+this.teammetr[i].M4+this.teammetr[i].M5+this.teammetr[i].M6+this.teammetr[i].M7;
        this.chart.chart.data.datasets[0].data[i]=metsum/7;
        this.chart.chart.update();
      }
    })

  }
  mych(){
    console.log(this.chart.chart);
    this.chart.chart.data.datasets[0].data = [90, 200, 200, 45,90];

    this.chart.chart.update();
  }

}
