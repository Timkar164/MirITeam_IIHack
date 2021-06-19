import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AppService} from '../app.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  public userId;
  constructor(private router: Router, private servise: AppService) { }

  ngOnInit() {
    this.userId = window.localStorage.getItem('user');
    console.log(this.userId);

    if (this.userId!='true'){
      this.router.navigate(['/auth']);
    }
    //this.servise.get_users([1,2,4]).subscribe(value => {
     // console.log(value);


    //});
  }

}
