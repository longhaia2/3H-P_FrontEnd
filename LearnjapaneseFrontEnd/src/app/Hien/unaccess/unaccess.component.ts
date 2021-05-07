import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-unaccess',
  templateUrl: './unaccess.component.html',
  styleUrls: ['./unaccess.component.css']
})
export class UnaccessComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  reload() {
    return this.router.navigate(['page-home']);
  }
}
