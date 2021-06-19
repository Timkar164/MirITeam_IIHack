import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public todo:any;
  constructor(public servise:AppService) { }

  ngOnInit() {
    this.servise.get_todo().subscribe(value => {
      this.todo=value;
      this.todo=this.todo.items;
      console.log(this.todo);
    })
  }

}
