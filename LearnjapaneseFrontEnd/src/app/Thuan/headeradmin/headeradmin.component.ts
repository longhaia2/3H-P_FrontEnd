import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from '../service/lesson-service.service';
import {ServicebtService} from '../../Service/servicebt.service';

@Component({
  selector: 'app-headeradmin',
  templateUrl: './headeradmin.component.html',
  styleUrls: ['./headeradmin.component.css'],
  providers: [ServicebtService]
})
export class HeaderadminComponent implements OnInit {

  constructor(private  lessonServiceService: ServicebtService) {
    this.lessonServiceService.loaddCss("../../../assets/assets/css/custom.min.css");
  }

  ngOnInit(): void {
  }

}
