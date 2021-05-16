import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RoomChallenge} from '../challenge/model/RoomChallenge';
import {RoomUsers} from '../challenge/model/RoomUsers';

@Injectable()
export class ChallengeServiceService {
  qns: any[];
  seconds: number;
  timer;
  qnProgress: number;
  url = 'http://localhost:8080/challenge';

  constructor(private http:HttpClient) { }

  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }
  create(data):Observable<any>{
    return this.http.post<RoomChallenge>(this.url+'/add',data);
  }
  findAll(): Observable<RoomChallenge[]> {
    return this.http.get<RoomChallenge[]>(this.url+'/list');
  }
  getuser(id_room): Observable<any> {
    return this.http.get<any>(`${'http://localhost:8080/challenge/room'}/${id_room}`);
  }
  getQuestionByLevelAndId(exam_id, id): Observable<any> {
    return this.http.get(`${'http://localhost:8080/exam'}/${exam_id}${'/challenge'}/${id}`);
  }

  upDateUser(id_score, data): Observable<any> {
    return this.http.put(`${'http://localhost:8080/challenge/update-score'}/${id_score}`, data);
  }
  updateStatus(id_score, data): Observable<any> {
    return this.http.put(`${'http://localhost:8080/challenge/update-status'}/${id_score}`, data);
  }
  updateRoom(id_score, data): Observable<any> {
    return this.http.put(`${'http://localhost:8080/challenge/update-room'}/${id_score}`, data);
  }
  updateMember(id_score, data): Observable<any> {
    return this.http.put(`${'http://localhost:8080/challenge/update-member'}/${id_score}`, data);
  }

  getOneUserByRoom(room_id, id): Observable<any> {
    return this.http.get(`${'http://localhost:8080/challenge/user-room'}/${room_id}/${id}`);
  }

  Dem(id:number):Observable<any>{
    return this.http.get(`${'http://localhost:8080/challenge/dem'}/${id}`)
  }


}
