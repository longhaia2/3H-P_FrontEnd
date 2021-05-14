import { Component, OnInit } from '@angular/core';
import {ServicebtService} from '../../../Service/servicebt.service';

@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.component.html',
  styleUrls: ['./homeadmin.component.css'],
  providers: [ServicebtService]
})
export class HomeadminComponent implements OnInit {

  logName: string;

  constructor(private  lessonServiceService: ServicebtService) {
    this.lessonServiceService.loaddCss("../../../assets/assets/css/custom.min.css");
  }



  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
  }

}
