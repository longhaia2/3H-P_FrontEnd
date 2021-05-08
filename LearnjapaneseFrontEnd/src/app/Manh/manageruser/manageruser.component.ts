import {Component, Inject, OnInit} from '@angular/core';
import {UserServiceService} from "../servicem/user-service.service";
import {User} from "../modelm/user";
import {ActivatedRoute, Router} from "@angular/router";
import {DialogService} from "../shared/dialog.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MathConfirmDialogComponent} from "../math-confirm-dialog/math-confirm-dialog.component";
import {ToastrService} from "ngx-toastr";
@Component({
  selector: 'app-manageruser',
  templateUrl:  './manageruser.component.html',
  styleUrls: ['./manageruser.component.css'],
  providers: [UserServiceService,ToastrService]

})
export class ManageruserComponent implements OnInit {
  Users: User[];
  user:User;
  username: any;
  elseBlock: any;

  constructor(private Userservice: UserServiceService,
              private route: ActivatedRoute,
              private router: Router,
              private dialogService: DialogService,
              private dialog: MatDialog, private tsv: ToastrService


  ) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  search() {
    if (this.username == "") {
      this.ngOnInit();
    } else {
      this.Users = this.Users.filter(res => {
        return res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase())
      })
    }
  }

  reloadData() {
    this.Userservice.findAll().subscribe(data => {
      this.Users = data;
    });
  }

  delete(id: number) {
    const confirmDialog = this.dialog.open(MathConfirmDialogComponent, {
      data: {
        title: 'Confirm Remove Employee',
        message: 'BẠN CÓ MUỐN XÓA HAY KHÔNG: '
      }
    });

    confirmDialog.afterClosed().subscribe(result => {
      if (result == true) {
        this.Userservice.delete(id).subscribe(
          data => {
            console.log(data);
            this.reloadData();
          });
        this.tsv.success('Xóa thành công', 'Xóa thành viên');
      }
    });



  }
}
















