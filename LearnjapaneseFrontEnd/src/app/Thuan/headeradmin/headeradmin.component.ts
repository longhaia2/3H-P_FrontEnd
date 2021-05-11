import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from '../service/lesson-service.service';
import {ServicebtService} from '../../Service/servicebt.service';
import {TokenStorageService} from '../../_services/token-storage.service';
import {ConfirmLogoutComponent} from '../../Hien/confirm-logout/confirm-logout.component';
import {MatDialog} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-headeradmin',
  templateUrl: './headeradmin.component.html',
  styleUrls: ['./headeradmin.component.css'],
  providers: [ServicebtService]
})
export class HeaderadminComponent implements OnInit {

  constructor(private  lessonServiceService: ServicebtService,  private tokenStorage: TokenStorageService,
              public dialog: MatDialog, private tsv: ToastrService, private router: Router) {
    this.lessonServiceService.loaddCss("../../../assets/assets/css/custom.min.css");
  }

  ngOnInit(): void {
  }

  logout(){
    this.dialog.open(ConfirmLogoutComponent);
  }

}
