import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Exam} from '../model/Exam';

@Injectable({
  providedIn: 'root'
})
export class ExamserviceService {

  url = 'http://localhost:8080/exam';

  constructor(private http: HttpClient) {
  }

  create(data): Observable<any> {
    return this.http.post<Exam>(this.url + '/add', data);
  }
  get(id): Observable<any> {
    return this.http.get(`${'http://localhost:8080/exam'}/${id}`);
  }
  findAll(): Observable<Exam[]> {
    return this.http.get<Exam[]>(this.url + '/list');
  }
  delete(id): Observable<any>{
    return this.http.delete(`${'http://localhost:8080/exam/delete'}/${id}`);
  }
  update(id, data): Observable<any> {
    return this.http.put(`${'http://localhost:8080/exam'}/${id}`, data);
  }
  // @ts-ignore
  findByCodeExam(searchtext): Observable<Exam[]>{
    return this.http.get<Exam[]>(`${'http://localhost:8080/exam/timkiem'}/${searchtext}`);
  }
  finByLevelTerm(level,term): Observable<Exam[]>{
    return  this.http.get<Exam[]>(`${'http://localhost:8080/exam'}/${level}/ontap/${term}`);
  }
}
