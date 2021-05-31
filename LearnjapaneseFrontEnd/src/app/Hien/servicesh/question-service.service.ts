// @ts-ignore
import { Injectable } from '@angular/core';
// @ts-ignore
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Question} from '../model/question';
// @ts-ignore
import {Observable} from 'rxjs';
import {Lesson} from '../../Thuan/model/lesson';


// @ts-ignore
@Injectable()
export class QuestionServiceService {
  url = 'http://localhost:8080/question';
  constructor(private http: HttpClient) { }
  findAll(): Observable<Question[]>{
    return this.http.get<Question[]>(this.url + '/all');
  }
  // create(data): Observable<any>{
  //   return this.http.post<Question>(this.url + '/add', data);
  // }
  get(id): Observable<any> {
    return this.http.get(`${'http://localhost:8080/question/all'}/${id}`);
  }
  getExamByQS(id_Exam): Observable<any> {
    return this.http.get(`${'http://localhost:8080/question/list'}/${id_Exam}`);
  }

    delete(id): Observable<any> {
      return this.http.delete(`${'http://localhost:8080/question/delete'}/${id}`);
  }
  import(file): Observable<any>
  {
    return this.http.post<any>(this.url + '/upload', file);
  }
  create(data): Observable<any> {
    return this.http.post<Lesson>(this.url + '/add', data);
  }
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.url}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

}
