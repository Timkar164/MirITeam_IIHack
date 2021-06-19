import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public chats:any;
  public user:any;
  public mainuser:any;
  public inputt="";
  public val:any;
  public maindialog:any;
  public mainperson:any;
  public messages = [{"type": false, "img": "assets/images/v1_921.png","time":"7:30am","text":"Я ваш личный помошник, обращайтесь. Напишите мне 'что ты умеешь?'", 'sender':200,'receiver':1}];
  constructor(private servise:AppService) { }

  ngOnInit() {
    this.maindialog=this.messages;
    this.mainperson={"name":'Личный помошник Ботя','img':'assets/images/v1_921.png','id':200};
    this.user = window.localStorage.getItem('userinfo');
    this.mainuser = JSON.parse(this.user);
    console.log(this.mainuser);

    this.servise.get_mes(this.mainuser.id).subscribe(value => {

      this.chats=value;
      this.chats=this.chats.items;
      console.log(this.chats);
    })
  }
  botsend(txt){
    if(this.mainperson.id==200) {
      this.maindialog.push({"type": false, "img": "assets/images/v1_921.png", "time": "8:35am", "text": txt, 'sender': 200, 'receiver': this.mainuser.id});
    }
  }

  sendmes(txt){
    console.log(txt);
    this.maindialog.push({"type": true, "img": this.mainuser.img,"time":"8:35am","text": txt,'receiver':this.mainperson.id, 'sender':this.mainuser.id});
    this.send_sql(txt);
    if(this.mainperson.id===200){
    this.servise.bot(txt).subscribe(value => {
      this.val = value;
      console.log(value);
      this.botsend(this.val.bot);
    });}

  }
  changedialog(user){
    this.mainperson=user;
    this.maindialog=[];
    this.servise.get_dialog(this.mainuser.id,user.id).subscribe(value => {
      this.maindialog=value;
      this.maindialog=this.maindialog.items;
      console.log(this.maindialog);
    })
  }
  go_to_bot(user){
    this.mainperson=user;
    this.maindialog=this.messages;
    console.log(this.maindialog);
  }
  send_sql(mes){
    this.servise.set_message(mes,this.mainuser.id,this.mainperson.id).subscribe(value => {
      console.log(value)
    })
  }
}
