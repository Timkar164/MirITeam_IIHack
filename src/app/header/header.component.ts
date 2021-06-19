import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user;
  public mainuser;
  public img:any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.user = window.localStorage.getItem('userinfo');
    this.mainuser = JSON.parse(this.user);
    console.log(this.mainuser);
    this.img= this.mainuser.img;
    console.log(this.img);


  }
  onlodaut(){
    window.localStorage.clear();
    this.router.navigate(['/auth']);
  }

}
