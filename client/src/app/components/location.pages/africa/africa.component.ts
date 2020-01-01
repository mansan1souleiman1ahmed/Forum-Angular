import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewChecked
} from "@angular/core";

import { ScrollStrategyOptions } from "@angular/cdk/overlay";
import { ForumLocationsPagesService } from "src/app/wss-serves/forum-locations-pages.service";

@Component({
  selector: "app-africa",
  templateUrl: "./africa.component.html",
  styleUrls: ["./africa.component.scss"]
})
export class AfricaComponent implements OnInit, AfterViewChecked {
  messageAfrica: string;
  nameAfrica: string;
  namesAfrica: string[] = [];
  messagesAfrica: string[] = [];
  @ViewChild("scrollTopAfrica", { static: false }) scrollTopAfrica: ElementRef;
  constructor(private forumLocationPages: ForumLocationsPagesService) {}
  sendMessage() {
    this.forumLocationPages.sendMessageAfrica(this.messageAfrica);
    this.messageAfrica = "";
    console.log("sucess");
    this.forumLocationPages.sendNameAfrica(this.nameAfrica);
    this.nameAfrica = "";
  }
  ngOnInit() {
    this.forumLocationPages
      .getMessagesAfrica()
      .subscribe((messageAfrica: string) => {
        this.messagesAfrica.push(messageAfrica);
      });
    this.forumLocationPages.getNamesAfrica().subscribe((nameAfrica: string) => {
      this.namesAfrica.push(nameAfrica);
    });
  }
  scrollTop() {
    this.scrollTopAfrica.nativeElement.scrollTop = this.scrollTopAfrica.nativeElement.scrollHeight;
  }

  ngAfterViewChecked() {
    //Scroll
    this.scrollTop();
  }
}
