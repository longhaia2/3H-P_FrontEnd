import { Component, OnInit } from '@angular/core';
import {Lesson} from "../model/lesson";
import {LessonServiceService} from "../service/lesson-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-quanlibaihoc',
  templateUrl: './quanlibaihoc.component.html',
  styleUrls: ['./quanlibaihoc.component.css'],
  providers: [LessonServiceService]
})
export class QuanlibaihocComponent implements OnInit {
  ls: Lesson[];
  description: any;
  p : number = 1;
  constructor(private lessonService: LessonServiceService, private route: ActivatedRoute,
  private router: Router){}

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.lessonService.findAll().subscribe(data =>{
      this.ls =data;
    });
  }
detail(id: number){
    this.router.navigate(['/detail',id])
}
  delete(id: number) {
    alert("bạn có muốn xóa hay không ");
    this.lessonService.delete(id).subscribe(
        data => {
          console.log(data);
          this.reloadData();

        },

        error => console.log(error));
    alert("xóa thành công");
  }
   updatelesson(id: number){
    this.router.navigate(['/edit',id])
  }
  Search() {
    if (this.description == "") {
      this.ngOnInit();
    } else {
      this.ls = this.ls.filter( rs=>{
        return rs.description.toLocaleLowerCase().match(this.description.toLocaleLowerCase());
      });
    }
  }
}

