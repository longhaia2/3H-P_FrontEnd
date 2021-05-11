import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../modelm/user";

@Injectable()

export class UserServiceService {
  url = 'http://localhost:8080/user'
  constructor(private http: HttpClient) {


  }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url+'/all');
  }
  update(id, data): Observable<any> {
    return this.http.put(`${'http://localhost:8080/user'}/${id}`, data);
  }
  create(data): Observable<any> {
    return this.http.post<User>(this.url + '/add', data);
  }
  get(id): Observable<any> {
    return this.http.get(`${'http://localhost:8080/user'}/${id}`);
  }
  delete(id): Observable<any> {
    return this.http.delete(`${'http://localhost:8080/user/delete'}/${id}`);
  }
}
