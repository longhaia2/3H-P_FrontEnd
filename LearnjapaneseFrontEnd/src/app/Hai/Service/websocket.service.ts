import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
const url = 'http://localhost:3000';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket;

  // @ts-ignore
  private clientSocket: SocketIOClient.Socket;
  constructor() {
    // @ts-ignore
    this.clientSocket = socketIo.connect(url);
  }
  // @ts-ignore
  listenToServer(connection: Connection): Observable<any>{
    this.clientSocket.on(connection, ( data ) => {
      // @ts-ignore
      subscribe.next(data);
      console.log("Received message from Websocket Server");
      console.log(data);
    });
  }

  connect(): Subject<MessageEvent> {

    // @ts-ignore
    this.socket = socketIo.connect(url);
    let observable = new Observable(observer => {
      this.socket.on('message',(data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    });
    let observer = {
      next: (data: any) => {
        this.socket.emit('message', data);
      },
    };
    return Subject.create(observer, observable);
  }
  connect_s1(): Subject<MessageEvent> {
    // @ts-ignore
    this.socket = socketIo.connect(url);
    let observable = new Observable(observer => {
      this.socket.on('st1',(data) => {
        // console.log("Received id_user from Websocket Server of LapTop");
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    });
    let observer = {
      next: (data: number) => {
        this.socket.emit('st1',data);
      },
    };
    return Subject.create(observer, observable);
  }
  connect2(): Subject<MessageEvent> {

    // @ts-ignore
    this.socket = socketIo.connect(url);
    let observable = new Observable(observer => {
      this.socket.on('st0',(data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    });
    let observer = {
      next: (data: any) => {
        this.socket.emit('st0', data);
      },
    };
    return Subject.create(observer, observable);
  }
  connect_s2(): Subject<MessageEvent> {
    // @ts-ignore
    this.socket = socketIo.connect(url);
    let observable = new Observable(observer => {
      this.socket.on('st2',(data) => {
        // console.log("Received id_user from Websocket Server of LapTop");
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    });
    let observer = {
      next: (data: number) => {
        this.socket.emit('st2',data);
      },
    };
    return Subject.create(observer, observable);
  }
  connect3(): Subject<MessageEvent> {

    // @ts-ignore
    this.socket = socketIo.connect(url);
    let observable = new Observable(observer => {
      this.socket.on('st3',(data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    });
    let observer = {
      next: (data: any) => {
        this.socket.emit('st3', data);
      },
    };
    return Subject.create(observer, observable);
  }
  connect_s3(): Subject<MessageEvent> {
    // @ts-ignore
    this.socket = socketIo.connect(url);
    let observable = new Observable(observer => {
      this.socket.on('i3',(data) => {
        // console.log("Received id_user from Websocket Server of LapTop");
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    });
    let observer = {
      next: (data: number) => {
        this.socket.emit('i3',data);
      },
    };
    return Subject.create(observer, observable);
  }
  connect4(): Subject<MessageEvent> {

    // @ts-ignore
    this.socket = socketIo.connect(url);
    let observable = new Observable(observer => {
      this.socket.on('i2',(data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    });
    let observer = {
      next: (data: any) => {
        this.socket.emit('i2', data);
      },
    };
    return Subject.create(observer, observable);
  }
  connect_s4(): Subject<MessageEvent> {
    // @ts-ignore
    this.socket = socketIo.connect(url);
    let observable = new Observable(observer => {
      this.socket.on('i1',(data) => {
        // console.log("Received id_user from Websocket Server of LapTop");
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    });
    let observer = {
      next: (data: number) => {
        this.socket.emit('i1',data);
      },
    };
    return Subject.create(observer, observable);
  }
  id_connect(): Subject<MessageEvent> {
    // @ts-ignore
    this.socket = socketIo.connect(url);
    let observable = new Observable(observer => {
      this.socket.on('id',(data) => {
        // console.log("Received id_user from Websocket Server of LapTop");
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    });
    let observer = {
      next: (data: number) => {
        this.socket.emit('id',data);
      },
    };
    return Subject.create(observer, observable);
  }
  _connect(): Subject<MessageEvent> {
    // @ts-ignore
    this.socket = socketIo.connect(url);
    let observable = new Observable(observer => {
      this.socket.on('room_id',(data) => {
        // console.log("Received id_user from Websocket Server of LapTop");
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    });
    let observer = {
      next: (data: number) => {
        this.socket.emit('room_id',data);
      },
    };
    return Subject.create(observer, observable);
  }
}
