import {Component, Inject, Input, OnInit} from '@angular/core';
import {DialogData, TestjlptComponent} from "../testjlpt/testjlpt.component";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ReviewgrammarService} from "../../../Hien/servicesh/reviewgrammar.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dialog-result-test',
  templateUrl: './dialog-result-test.component.html',
  styleUrls: ['./dialog-result-test.component.css']
})
export class DialogResultTestComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private  route: ActivatedRoute,
              private  router: Router) {}

  ngOnInit(): void {
  }
  resetTimer(){
    this.router.navigate(['/endtest']);
    localStorage.clear();

  }

}
