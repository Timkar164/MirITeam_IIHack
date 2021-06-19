import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-studyroom',
  templateUrl: './studyroom.component.html',
  styleUrls: ['./studyroom.component.css']
})
export class StudyroomComponent implements OnInit {
  public type = 1;
  public data:any;
  public mytodo:any;
  public recom:any;
  public all:any;
  constructor(private servis : AppService) { }

  ngOnInit() {
    this.servis.get_kurs().subscribe(value => {
      this.data=value;
      this.mytodo=this.data.my;
      this.recom=this.data.rec;
      this.all=this.data.all;
      console.log(this.mytodo);
    })
  }
  changetype(num){
    this.type=num;
  }

}
