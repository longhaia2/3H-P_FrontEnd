import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testjlpt',
  templateUrl: './testjlpt.component.html',
  styleUrls: ['./testjlpt.component.css']
})
export class TestjlptComponent implements OnInit {
  constructor() { }
  as_true: 'a';
  sdt: number;

  ngOnInit(): void {
  }
demo(){
    this.sdt=0;
    if(this.as_true=="a")
  this.sdt=this.sdt+1;
    // @ts-ignore
  console.assert(this.sdt +'Điểm');
}
}
