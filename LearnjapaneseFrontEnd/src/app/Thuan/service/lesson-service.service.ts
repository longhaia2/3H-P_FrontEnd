import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Lesson} from "../model/lesson";
import {HttpClient} from "@angular/common/http";
import {Question} from "../../Hien/model/question";


@Injectable()
export class LessonServiceService {

  url = 'http://localhost:8080/lesson';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.url + "/all");
  }

  findByidlevel(level,term): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(`${'http://localhost:8080/lesson'}/${level}/${term}`);
  }
  getLessonByDesc() : Observable<Lesson[]>{
    return this.http.get<Lesson[]>(this.url+"/all/baimoi")
  }

  findByidlessson(level,idLesson): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(`${'http://localhost:8080/lesson'}/${level}/lesson/${idLesson}`);
  }

  create(data): Observable<any> {
    return this.http.post<Lesson>(this.url + '/add', data);
  }

  get(id): Observable<any> {
    return this.http.get(`${'http://localhost:8080/lesson'}/${id}`);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${'http://localhost:8080/lesson/delete'}/${id}`);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${'http://localhost:8080/lesson'}/${id}`, data);
  }
  findByLesson(searchtext): Observable<Lesson[]>{
    return this.http.get<Lesson[]>(`${'http://localhost:8080/lesson/timkiem'}/${searchtext}`);
  }


}
