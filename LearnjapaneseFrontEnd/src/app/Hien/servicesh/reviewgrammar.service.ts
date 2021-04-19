import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable()
export class ReviewgrammarService {

  url='http://localhost:8080/exam/list'

  constructor(private http:HttpClient) { }
  get(id): Observable<any> {
    return this.http.get(`${'http://localhost:8080/exam/list'}/${id}`);
  }

}
