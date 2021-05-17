import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from '../service/lesson-service.service';
import {ServicebtService} from '../../Service/servicebt.service';
import {TokenStorageService} from '../../_services/token-storage.service';
import {ConfirmLogoutComponent} from '../../Hien/confirm-logout/confirm-logout.component';
import {MatDialog} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {ChatService} from "../../Hai/Service/chat.service";

@Component({
  selector: 'app-headeradmin',
  templateUrl: './headeradmin.component.html',
  styleUrls: ['./headeradmin.component.css'],
  providers: [ChatService]
})
export class HeaderadminComponent implements OnInit {
  id_u:number;

  constructor(private  chat: ChatService,  private tokenStorage: TokenStorageService,
              public dialog: MatDialog, private tsv: ToastrService, private router: Router) {

  }

  ngOnInit(): void {
    let id_score = JSON.parse(sessionStorage.getItem("auth-user"));
    this.id_u = id_score['userId'];
  }

  comeback(){
    this.router.navigate(['/page-home']);
  }
  logout(){
    this.dialog.open(ConfirmLogoutComponent);
  }


}
