import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onlodaut(){
    window.localStorage.clear();
    this.router.navigate(['/auth']);
  }
}
