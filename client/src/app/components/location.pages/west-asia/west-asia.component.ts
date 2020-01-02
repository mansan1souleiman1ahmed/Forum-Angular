import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewChecked
} from "@angular/core";
import { ForumLocationsPagesService } from "src/app/wss-serves/forum-locations-pages.service";
@Component({
  selector: "app-west-asia",
  templateUrl: "./west-asia.component.html",
  styleUrls: ["./west-asia.component.scss"]
})
export class WestAsiaComponent implements OnInit, AfterViewChecked {
  messageWestAsia: string;
  nameWestAsia: string;
  namesWestAsia: string[] = [];
  messagesWestAsia: string[] = [];
  @ViewChild("scrollFrame", { static: false })
  scrollFrame: ElementRef;
  constructor(private forumLocationPages: ForumLocationsPagesService) {}
  sendMessage() {
    this.forumLocationPages.sendMessageWestAsia(this.messageWestAsia);
    this.messageWestAsia = "";
    console.log("sucess");
    this.forumLocationPages.sendNameWestAsia(this.nameWestAsia);
    this.nameWestAsia = "";
  }
  ngOnInit() {
    this.forumLocationPages
      .getMessagesWestAsia()
      .subscribe((messageWestAsia: string) => {
        this.messagesWestAsia.push(messageWestAsia);
      });
    this.forumLocationPages
      .getNamesWestAsia()
      .subscribe((nameWestAsia: string) => {
        this.namesWestAsia.push(nameWestAsia);
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
