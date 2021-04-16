import { Component, OnInit } from '@angular/core';
import {ServicebtService} from '../../Service/servicebt.service';

@Component({
  selector: 'app-sidebaradmin',
  templateUrl: './sidebaradmin.component.html',
  styleUrls: ['./sidebaradmin.component.css'],
  providers: [ServicebtService]
})
export class SidebaradminComponent implements OnInit {


  constructor(private  lessonServiceService: ServicebtService) {
    this.lessonServiceService.loaddCss("../../../assets/assets/css/custom.min.css");
  }

  ngOnInit(): void {
  }

}
