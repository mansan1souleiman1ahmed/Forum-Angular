import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import * as io from "socket.io-client";
@Injectable({
  providedIn: "root"
})
export class ForumService {
  private url = "http://localhost:3500";
  private socket;
  constructor() {
    this.socket = io(this.url);
  }
  public sendName(name) {
    this.socket.emit("new-name", name);
  }
  public sendMessage(message) {
    this.socket.emit("new-message", message);
  }
  public getName = () => {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on("name", name => {
        observer.next(name);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  };

  public getMessages = () => {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on("message", message => {
        observer.next(message);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  };
}
