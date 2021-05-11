import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../Service/chat.service';

import {WebsocketService} from '../../Service/websocket.service';
@Component({
  selector: 'app-managerquestion',
  templateUrl: './managerquestion.component.html',
  styleUrls: ['./managerquestion.component.css'],
  providers:[WebsocketService]
})
export class ManagerquestionComponent implements OnInit{

  lable: string;
  constructor(private chat: ChatService, private socketService: WebsocketService){
  }
ngOnInit(): void {
  this.chat.messages.subscribe(msg => {
    console.log(msg);
  });
  // this.socketService.listenToServer(Connection.change).subscribe((change) => {
  //   this.onChange(change);
  // });
  // this.socketService.listenToServer(Connection.change).subscribe((user) => {
  //   this.OnCreate(user);

}
  sendMessage(label:string) {
    this.chat.sendMsg(label);
  }

//
//   onChange(change: User){
//     const index=this.users.findIndex((user)=>
//     user.id===change.id);
//     this.users[index].lable=change.lable;
//  }
//   OnCreate(user: User){
//     this.users.push(user);
//   }
//   creatuser(label:string):void{
//     const a= {id: Date.now().toString(), label};
//     this.socketService.emitToServer(a,Connection.create);
//     this.lable='';
//   }
// updateUser(lable:string, id:string): void{
//     this.socketService.emitToServer(Connection.change,{lable,id})
// }

}
