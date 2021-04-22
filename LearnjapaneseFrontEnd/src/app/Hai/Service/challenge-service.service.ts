import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RoomChallenge} from '../challenge/model/RoomChallenge';

@Injectable()
export class ChallengeServiceService {

  url = 'http://localhost:8080/challenge';

  constructor(private http:HttpClient) { }

  create(data):Observable<any>{
    return this.http.post<RoomChallenge>(this.url+'/add',data);
  }
  findAll(): Observable<RoomChallenge[]> {
    return this.http.get<RoomChallenge[]>(this.url+'/list');
  }
<<<<<<< HEAD
  get(id): Observable<any> {
    return this.http.get(`${'http://localhost:8080/challenge/room'}/${id}`);
=======
  getuser(id_room): Observable<any> {
    return this.http.get<any>(`${'http://localhost:8080/challenge/room'}/${id_room}`);
  }
  getQuestionByLevelAndId(exam_id, id): Observable<any> {
    return this.http.get(`${'http://localhost:8080/exam'}/${exam_id}${'/challenge'}/${id}`);
>>>>>>> origin
  }
}
