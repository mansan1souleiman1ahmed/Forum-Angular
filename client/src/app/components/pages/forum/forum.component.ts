import { Component, OnInit } from "@angular/core";
import { ForumService } from "src/app/wss-serves/forum.service";
import { ShowOnDirtyErrorStateMatcher } from "@angular/material";

@Component({
  selector: "app-forum",
  templateUrl: "./forum.component.html",

  styleUrls: ["./forum.component.scss"]
})
export class ForumComponent {
  title = "app works!";
  message: string;
  name: string;
  messages: string[] = [];

  constructor(private wssForum: ForumService) {}
  sendMessage() {
    this.wssForum.sendMessage(this.message);
    this.message = "";
    /*  this.wssForum.sendName(this.name);
    this.name = ""; */
  }
  keyBoard(event) {
    console.log(this.message);
  }
  ngOnInit() {
    this.wssForum.getMessages().subscribe((message: string) => {
      this.messages.push(message);
    });

    /* this.wssForum.getName().subscribe((name: string) => {
      this.name;
    }); */
  }
  test() {
    console.log(this.messages);
  }
}
