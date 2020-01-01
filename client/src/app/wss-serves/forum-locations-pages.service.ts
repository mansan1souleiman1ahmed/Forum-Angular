import { Observable } from "rxjs/Observable";
import * as io from "socket.io-client";

export class ForumLocationsPagesService {
  private urlAfrica = "http://localhost:3600";
  private urlNorthAmerica = "http://localhost:3700";
  private urlSouthAmerica = "http://localhost:3800";
  private urlWestAsia = "http://localhost:3900";
  private urlEastAsia = "http://localhost:4000";
  private socketAfrica;
  private socketNorthAmerica;
  private socketSouthAmerica;
  private socketWestAsia;
  private socketEastAsia;
  constructor() {
    this.socketAfrica = io(this.urlAfrica);
    this.socketNorthAmerica = io(this.urlNorthAmerica);
    this.socketSouthAmerica = io(this.urlSouthAmerica);
    this.socketWestAsia = io(this.urlWestAsia);
    this.socketEastAsia = io(this.urlEastAsia);
  }

  public sendNameAfrica(nameAfrica) {
    this.socketAfrica.emit("new-name-africa", nameAfrica);
  }
  public sendMessageAfrica(messageAfrica) {
    this.socketAfrica.emit("new-message-africa", messageAfrica);
  }

  public getNamesAfrica = () => {
    let observableAfrica = new Observable(observer => {
      this.socketAfrica = io(this.urlAfrica);

      this.socketAfrica.on("name-africa", nameAfrica => {
        observer.next(nameAfrica);
      });
      return () => {
        this.socketAfrica.disconnect();
      };
    });
    return observableAfrica;
  };
  public getMessagesAfrica = () => {
    let observableAfrica = new Observable(observer => {
      this.socketAfrica = io(this.urlAfrica);

      this.socketAfrica.on("message-africa", nameAfrica => {
        observer.next(nameAfrica);
      });
      return () => {
        this.socketAfrica.disconnect();
      };
    });
    return observableAfrica;
  };
  /////////////////////////////////North America WebSocket client
  public sendNameNorthAmerica(nameNorthAmerica) {
    this.socketNorthAmerica.emit("new-name-north-america", nameNorthAmerica);
  }
  public sendMessageNorthAmerica(messageNorthAmerica) {
    this.socketNorthAmerica.emit(
      "new-message-north-america",
      messageNorthAmerica
    );
  }
  public getNamesNorthAmerica = () => {
    let observable = new Observable(observer => {
      this.socketNorthAmerica = io(this.urlNorthAmerica);

      this.socketNorthAmerica.on("name-north-america", nameNorthAmerica => {
        observer.next(nameNorthAmerica);
      });
      return () => {
        this.socketNorthAmerica.disconnect();
      };
    });
    return observable;
  };
  public getMessagesNorthAmerica = () => {
    let observable = new Observable(observer => {
      this.socketNorthAmerica = io(this.urlNorthAmerica);

      this.socketNorthAmerica.on(
        "message-north-america",
        messageNorthAmerica => {
          observer.next(messageNorthAmerica);
        }
      );
      return () => {
        this.socketNorthAmerica.disconnect();
      };
    });
    return observable;
  };
  /////////////////////////////////South America WebSocket client
  public sendNameSouthAmerica(nameSouthAmerica) {
    this.socketSouthAmerica.emit("new-name-south-america", nameSouthAmerica);
  }
  public sendMessageSouthAmerica(messageSouthAmerica) {
    this.socketSouthAmerica.emit(
      "new-message-south-america",
      messageSouthAmerica
    );
  }
  public getNamesSouthAmerica = () => {
    let observable = new Observable(observer => {
      this.socketSouthAmerica = io(this.urlSouthAmerica);

      this.socketSouthAmerica.on("name-south-america", nameSouthAmerica => {
        observer.next(nameSouthAmerica);
      });
      return () => {
        this.socketSouthAmerica.disconnect();
      };
    });
    return observable;
  };
  public getMessagesSouthAmerica = () => {
    let observable = new Observable(observer => {
      this.socketSouthAmerica = io(this.urlSouthAmerica);

      this.socketSouthAmerica.on(
        "message-south-america",
        messageSouthAmerica => {
          observer.next(messageSouthAmerica);
        }
      );
      return () => {
        this.socketSouthAmerica.disconnect();
      };
    });
    return observable;
  };

  /////////////////////////////////West Asia WebSocket client
  /* public sendNameSouthAmerica(nameSouthAmerica) {
    this.socketSouthAmerica.emit("new-name-south-america", nameSouthAmerica);
  }
  public sendMessageSouthAmerica(messageSouthAmerica) {
    this.socketSouthAmerica.emit(
      "new-message-south-america",
      messageSouthAmerica
    );
  }
  public getNamesSouthAmerica = () => {
    let observable = new Observable(observer => {
      this.socketSouthAmerica = io(this.urlSouthAmerica);

      this.socketSouthAmerica.on("message-south-america", nameSouthAmerica => {
        observer.next(nameSouthAmerica);
      });
      return () => {
        this.socketSouthAmerica.disconnect();
      };
    });
    return observable;
  };
  public getMessagesSouthAmerica = () => {
    let observable = new Observable(observer => {
      this.socketSouthAmerica = io(this.urlSouthAmerica);

      this.socketSouthAmerica.on(
        "message-north-america",
        messageSouthAmerica => {
          observer.next(messageSouthAmerica);
        }
      );
      return () => {
        this.socketSouthAmerica.disconnect();
      };
    });
    return observable;
  };
} */
}

/////////////////////////////////East Asia WebSocket client
/* 


}; */
