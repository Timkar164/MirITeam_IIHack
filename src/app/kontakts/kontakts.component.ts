import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-kontakts',
  templateUrl: './kontakts.component.html',
  styleUrls: ['./kontakts.component.css']
})
export class KontaktsComponent implements OnInit {
  public data:any;
  constructor(private ser:AppService) { }

  ngOnInit() {
    this.ser.get_kontact().subscribe(value => {
      console.log(value);
      this.data=value;
      this.data=this.data.items;
    })
  }

}
