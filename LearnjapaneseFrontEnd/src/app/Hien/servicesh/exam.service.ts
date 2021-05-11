import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Question} from '../model/question';
import {Exam} from '../../Hai/admin/model/Exam';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  url = 'http://localhost:8080/exam';
  constructor(private http: HttpClient) { }
  findAll(): Observable<Exam[]>{
    return this.http.get<Exam[]>(this.url + '/all');
  }

}
