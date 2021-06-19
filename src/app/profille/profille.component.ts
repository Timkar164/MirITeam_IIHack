import { Component, OnInit } from '@angular/core';

import { first } from "rxjs/operators";
import { randomStatus } from "../helpers";
import {Router} from '@angular/router';
import {AppService} from '../app.service';
import {range} from 'rxjs';
@Component({
  selector: 'app-profille',
  templateUrl: './profille.component.html',
  styleUrls: ['./profille.component.css']
})

export class ProfilleComponent implements OnInit {
  constructor(private servise: AppService) { }
  tab = 'activity';
  activity:any;
  contacts:any;
  user:any;
  mainuser:any;
  users:any;
  data:any;
  ngOnInit(): void {

    //this.contacts=this.getContacts();
    this.user = window.localStorage.getItem('userinfo');
    this.mainuser = JSON.parse(this.user);
    console.log(this.mainuser);
    this.servise.get_action(this.mainuser.id).subscribe(value => {

      this.data=value;
      this.activity=this.data.action;
      this.contacts=this.data.friend;

      console.log(this.activity);
      console.log(this.contacts);



    })

  }
  getStatus() {
    const status = randomStatus();
    console.log(status);
    return status;
  }




 /**
  get_user(){
    this.servise.get_user().subscribe(value => {
      console.log(value);
      if (value.response){
        this.users=value.items;
        console.log(this.users);
        this.byild_data();
      }


    });
  }
  byild_data(){
    this.data=[];

    for(let i=0;i<this.activity.length;i++){
      this.data.push(this.find_user(Number(this.activity[i].users),this.activity[i].actions));

    }
    console.log(this.data);
  }
  find_user(id,type){
    console.log(id);
    for(let i=0;i<this.users.length;i++){
      if (this.users[i].id ===id){
        return {'img':this.users[i].img,'name':this.users[i].name,'type':type}
      }
    }
    return false
  }
*/
  getActivity() {
    const text = [
      "Добавила новый курс в раздел Учебная комната",
      "Вышла на новый уровень ",
      "Просит добавить в друзья",
      "Успешно предложила идею и получила 50 пряников",
      "Успешно прошла курс Управление коллективом",
      "Успешно прошла курс Таймменеджмент",
      "Обновила данные профиля"
    ];
    const data = Array(8)
      .fill(0)
      .map((_, i) => {
        return {
          subtitle: [

          ][Math.floor(Math.random() * 8)],
          title: [
            "Иван Петров",
            "Анастасия решетова",
            "Иван Рудской",
            "Мария петрова",
            "Александра Саломина",
            "Даниил Ромашкин",
            "Анна Райская",
            "Владимир Сепанов"
          ][Math.floor(Math.random() * 8)],
          avatar: `assets/images/face${Math.floor(Math.random() * 4) +
          1}.jpg`,
          body: text[Math.floor(Math.random() * 7)],
          id: i
        };
      });

    return data;
  }


  getContacts() {
    const data = Array(12)
      .fill(0)
      .map((_, i) => {
        return {
          status: [
            "онлайн",
            "не онлайн",
            "онлайн",
            "онлайн",
            "онлайн",
            "не онлайн",
            "не онлайн",
            "онлайн"
          ][Math.floor(Math.random() * 8)],
          name: [
            "Иван Петров",
            "Анастасия решетова",
            "Иван Рудской",
            "Мария петрова",
            "Александра Саломина",
            "Даниил Ромашкин",
            "Анна Райская",
            "Владимир Сепанов"
          ][Math.floor(Math.random() * 8)],
          avatar: `assets/images/face${Math.floor(Math.random() * 7) +
          1}.jpg`,
          id: i
        };
      });

    return data;
  }


}
