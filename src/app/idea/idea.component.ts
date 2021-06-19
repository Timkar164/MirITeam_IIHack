import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {
  public inputt:any;
  public com='';
  public mascard:any;
  public list1 = 18;
  public list2 = 30;

  public comment ='';
  public a1;
  public user:any;
  public mainuser:any;
  public ideas:any;
  constructor(private servise:AppService) { }

  ngOnInit() {
    this.user = window.localStorage.getItem('userinfo');
    this.mainuser = JSON.parse(this.user);
    this.servise.get_idea().subscribe(value => {

      this.ideas=value;
      this.ideas=this.ideas.items;




    })


  }
 add(name,coment){
   this.ideas = [{"img":this.mainuser.img,"maker": this.mainuser.name,"name":name,"coment":coment,"date":"26.03.2021","imgs":[],"rez":[]}].concat(this.ideas);
 }
 addrez(item){
    console.log(item);
    item.rez.push('assets/images/avatar.jpg');
 }
 addpod(item){
    item.imgs.push('assets/images/avatar.jpg');
 }
}
