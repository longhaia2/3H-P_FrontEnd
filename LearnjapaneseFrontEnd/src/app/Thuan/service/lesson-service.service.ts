import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Lesson} from "../model/lesson";
import {HttpClient} from "@angular/common/http";

@Injectable()
  // providedIn: 'root'

export class LessonServiceService {

  url = 'http://localhost:8080/lesson';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.url + "/all");
  }

  create(data): Observable<any> {
    return this.http.post<Lesson>(this.url + '/add', data);
  }

  get(id): Observable<any> {
    return this.http.get(`${'http://localhost:8080/lesson/'}/${id}`);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${'http://localhost:8080/lesson/delete'}/${id}`);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${'http://localhost:8080/lesson/'}/${id}`, data);
  }
}