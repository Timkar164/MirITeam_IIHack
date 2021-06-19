import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-gingerbread',
  templateUrl: './gingerbread.component.html',
  styleUrls: ['./gingerbread.component.css']
})
export class GingerbreadComponent implements OnInit {
  public mascard:any;
  public list1 = 18;
  public list2 = 30;
  public inputt ='';
  public comment ='';
  public a1;
  public user:any;
  public mainuser:any;
  constructor(public servise: AppService) { }

  ngOnInit() {
    this.user = window.localStorage.getItem('userinfo');
    this.mainuser = JSON.parse(this.user);
    this.servise.get_board().subscribe(value => {

      this.mascard=value;
      this.mascard=this.mascard.items;




    })
  }
  mypresent(pipl,what,coment){
    console.log(pipl);
    console.log(what);
    console.log(coment);
    this.list1=this.list1+1;
    this.list2=this.list2-1;
    this.mascard = [{"img":this.mainuser.img,"maker": this.mainuser.name,"type":what,"person":pipl,"comment":coment,"date":"26.03.2021"}].concat(this.mascard);
  }
  retype(type){
    let t=['победы в хакатоне','успехов в обучении','реализации проекта','успехов в получении грата'];
    return t[type-1]
  }

}
