import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewChecked
} from "@angular/core";
import { ForumLocationsPagesService } from "src/app/wss-serves/forum-locations-pages.service";

@Component({
  selector: "app-east-asia",
  templateUrl: "./east-asia.component.html",
  styleUrls: ["./east-asia.component.scss"]
})
export class EastAsiaComponent implements OnInit, AfterViewChecked {
  messageEastAsia: string;
  nameEastAsia: string;
  namesEastAsia: string[] = [];
  messagesEastAsia: string[] = [];
  @ViewChild("scrollFrame", { static: false })
  scrollFrame: ElementRef;
  constructor(private forumLocationPages: ForumLocationsPagesService) {}
  sendMessage() {
    this.forumLocationPages.sendMessageEastAsia(this.messageEastAsia);
    this.messageEastAsia = "";
    console.log("sucess");
    this.forumLocationPages.sendNameEastAsia(this.nameEastAsia);
    this.nameEastAsia = "";
  }
  ngOnInit() {
    this.forumLocationPages
      .getMessagesEastAsia()
      .subscribe((messageEastAsia: string) => {
        this.messagesEastAsia.push(messageEastAsia);
      });
    this.forumLocationPages
      .getNamesEastAsia()
      .subscribe((nameEastAsia: string) => {
        this.namesEastAsia.push(nameEastAsia);
      });
  }
  scrollTop() {
    this.scrollFrame.nativeElement.scrollTop = this.scrollFrame.nativeElement.scrollHeight;
  }

  ngAfterViewChecked() {
    //Scroll
    this.scrollTop();
  }
}
