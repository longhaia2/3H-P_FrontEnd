import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Exam} from '../model/Exam';
import {Question} from "../../../Hien/model/question";
// import {url} from "inspector";

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
  getQSByExam(id): Observable<any> {
    return this.http.get(`${'http://localhost:8080/exam/list'}/${id}`);
  }

  findAll(): Observable<Exam[]> {
    return this.http.get<Exam[]>(this.url + '/list');
  }
  getExamNew(): Observable<Exam[]> {
    return this.http.get<Exam[]>(this.url + '/pp');
  }
  QsnotExam(level): Observable<Question[]> {
    return this.http.get<Question[]>(`${'http://localhost:8080/exam/list-qs'}/${level}`);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${'http://localhost:8080/exam/delete'}/${id}`);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${'http://localhost:8080/exam'}/${id}`, data);
  }

  // @ts-ignore
  findByCodeExam(searchtext): Observable<Exam[]> {
    return this.http.get<Exam[]>(`${'http://localhost:8080/exam/timkiem'}/${searchtext}`);
  }

  finByLevelTerm(level, term): Observable<Exam[]> {
    return this.http.get<Exam[]>(`${'http://localhost:8080/exam'}/${level}/ontap/${term}`);
  }

  findBylevelCodeExam(level): Observable<Exam[]> {
    return this.http.get<Exam[]>(`${'http://localhost:8080/exam'}/pp/${level}`);
  }

  getlistExamOrderByJLPTDesc(id): Observable<any> {
    return this.http.get(`${'http://localhost:8080/exam'}/pp/${id}`);
  }
  getlistExamOrderByIdDesc(): Observable<any>{
    return this.http.get(`${'http://localhost:8080/exam'}/all/exam`);
  }
}
