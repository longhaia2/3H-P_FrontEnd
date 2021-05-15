import { Injectable } from '@angular/core';
import {WebsocketService} from './websocket.service';
import {Observable,Subject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messages: Subject<any>;
  messages1: Subject<any>;
  messages2: Subject<any>;
  messages3: Subject<any>;
  mess_id:Subject<any>;
  mess_id1:Subject<any>;
  mess_id2:Subject<any>;
  mess_id3:Subject<any>;
  id:Subject<any>;
  room_id:Subject<any>;
  id_out:Subject<any>;
  id_r_out:Subject<any>;

  constructor(private wsService: WebsocketService) {
    this.messages = <Subject<any>>wsService.connect();
    map((response: any): any => {
      return response;
    });
    this.messages1= <Subject<any>>wsService.connect2();
      map((response: any): any => {
        return response;
      });
      this.messages2 = <Subject<any>>wsService.connect3();
    map((response: any): any => {
      return response;
    });
    this.messages3= <Subject<any>>wsService.connect4();
      map((response: any): any => {
        return response;
      });
      this.mess_id = <Subject<any>>wsService.connect_s1();
    map((response: any): any => {
      return response;
    });
    this.mess_id1= <Subject<any>>wsService.connect_s2();
      map((response: any): any => {
        return response;
      });
      this.mess_id2 = <Subject<any>>wsService.connect_s3();
    map((response: any): any => {
      return response;
    });
    this.messages3= <Subject<any>>wsService.connect_s4();
      map((response: any): any => {
        return response;
      });
    this.id= <Subject<any>>wsService.id_connect();
    map((response: any): any => {
      return response;
    });
    this.room_id= <Subject<any>>wsService._connect();
    map((response: any): any => {
      return response;
    });
    this.id_out= <Subject<any>>wsService.connect_out();
    map((response: any): any => {
      return response;
    }) ;
    this.id_r_out= <Subject<any>>wsService.connect_id_r_out();
    map((response: any): any => {
      return response;
    })
  }
  sendMsg1(msg) {
    this.messages1.next(msg);
  }
  senID1(msg){
    this.mess_id1.next(msg);
  }
  sendMsg2(msg) {
    this.messages2.next(msg);
  }
  senID2(msg){
    this.mess_id2.next(msg);
  }
  sendMsg(msg) {
    this.messages.next(msg);
  }
  senID(msg){
    this.mess_id.next(msg);
  }
  sendMsg3(msg) {
    this.messages3.next(msg);
  }
  senID3(msg){
    this.mess_id3.next(msg);
  }
  id_sent(msg){
    this.id.next(msg);
  }
  send_idRoom(msg){
    this.room_id.next(msg);
  }
  send_id_out(msg){
    this.id_out.next(msg);
  }
  send_id_r_out(msg){
    this.id_r_out.next(msg);
  }
}
