import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RoomChallenge} from './challenge/model/RoomChallenge';
import {RoomUsers} from './challenge/model/RoomUsers';

@Injectable()
export class ServiceService {

  url='http://localhost:8080/challenge';

  constructor(private http:HttpClient) { }

  create(data):Observable<any>{
    return this.http.post<RoomChallenge>(this.url+'/add',data);
  }
  findAll(): Observable<RoomChallenge[]> {
    return this.http.get<RoomChallenge[]>(this.url+'/list');
  }
  add(data):Observable<any>{
    return this.http.post<RoomUsers>(this.url+'/request',data);
  }
  get(id): Observable<any> {
    return this.http.get(`${'http://localhost:8080/challenge/room'}/${id}`);
  }
}
