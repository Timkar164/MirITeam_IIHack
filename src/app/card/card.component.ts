import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public card: boolean;
  public text: any;
  public t: boolean;
  public cart= ['<img src="assets/media/4.jpg" width="150px"> <p>Санузел</p> <br> Время уборки: <br>11:15-11:30; 17:45-16:00' , '<img src="assets/images/face4.jpg" width="150px"> <p>Петр Иванов</p> <br> <br> Должность: Директор института <br><br> Телефон: 8(831) 189-89-89 <br> Почта: ivanov@gmail.ru <br>', '<img src="assets/media/1.jpg" width="150px"> \n' +
  '<p>Аудитория 1001</p> <br><br> Внутренний телефон: 11 <br><br> Вместимость: 15 чел. <br><br> Оборудование: Видеопроектор, экран,<br> видеоконферецсвязь', '<img src="assets/images/face2.jpg" width="150"> <p>Полина Вахутина</p> <br> Должность: директор по учебной работе <br> Телефон: 8(831) 152-89-95 <br> Почта: poli@gmail.com'];
  constructor() { }

  ngOnInit() {
    this.t= false;
    this.card=true;

  }
  myprint(txt){
    this.text=this.cart[txt];
    this.t=!this.t;
  }

  editcard(){
    this.card=!this.card;
  }
}
