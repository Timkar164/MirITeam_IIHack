import { Component, OnInit } from '@angular/core';
import {Router, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AppService} from '../app.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public name = 'MirITeam';
  public pas='iihuck';
  public rez:any;
  constructor(private router: Router, private servise: AppService) { }

  ngOnInit() {

  }

  avt(name, pas){
    console.log(name);
    console.log(pas);
    if (pas==='iihuck'&& name=='MirITeam'){
      window.localStorage.setItem('user', "true");
      this.router.navigate(['/']);
    }

  }
  avtsql(name,pas){
    console.log(name);
    console.log(pas);
    this.servise.login(name,pas).subscribe(value => {
      console.log(value);
      this.rez=value;
      if (this.rez.response){
        window.localStorage.setItem('user', "true");
        window.localStorage.setItem('userinfo', JSON.stringify(this.rez.items[0]));

        this.router.navigate(['/']);
      }


      })
  }
}
