import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from '../service/lesson-service.service';
import {ServicebtService} from '../../Service/servicebt.service';
import {TokenStorageService} from '../../_services/token-storage.service';

@Component({
  selector: 'app-headeradmin',
  templateUrl: './headeradmin.component.html',
  styleUrls: ['./headeradmin.component.css'],
  providers: [ServicebtService]
})
export class HeaderadminComponent implements OnInit {

  constructor(private  lessonServiceService: ServicebtService,  private tokenStorage: TokenStorageService) {
    this.lessonServiceService.loaddCss("../../../assets/assets/css/custom.min.css");
  }

  ngOnInit(): void {
  }
  logout(): void {
    this.tokenStorage.signOut();
    confirm('Bạn thật sự muốn đăng xuất?');
    // @ts-ignore
    this.router.navigate(['page-home']);
    window.location.reload();

  }
}
