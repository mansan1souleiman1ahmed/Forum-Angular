import { Component, OnInit } from "@angular/core";
import { ForumService } from "src/app/wss-serves/forum.service";

@Component({
  selector: "app-forum",
  templateUrl: "./forum.component.html",
  styleUrls: ["./forum.component.scss"]
})
export class ForumComponent implements OnInit {
  title = "app works!";
  message: string;
  name: string;
  messages: string[] = [];

  constructor(private wssForum: ForumService) {}
  sendMessage() {
    this.wssForum.sendMessage(this.message);
    this.message = "";
    this.wssForum.sendName(this.name);
    this.name = "";
  }
  ngOnInit() {
    this.wssForum.getMessages().subscribe((message: string) => {
      this.messages.push(message);
    });
    /* this.wssForum.getName().subscribe((name: string) => {
      this.name;
    }); */
  }
}
