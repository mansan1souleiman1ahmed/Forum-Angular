import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewChecked
} from "@angular/core";
import { ForumLocationsPagesService } from "src/app/wss-serves/forum-locations-pages.service";

@Component({
  selector: "app-europe",
  templateUrl: "./europe.component.html",
  styleUrls: ["./europe.component.scss"]
})
export class EuropeComponent implements OnInit, AfterViewChecked {
  messageEurope: string;
  nameEurope: string;
  namesEurope: string[] = [];
  messagesEurope: string[] = [];
  @ViewChild("scrollFrame", { static: false })
  scrollFrame: ElementRef;
  constructor(private forumLocationPages: ForumLocationsPagesService) {}
  sendMessage() {
    this.forumLocationPages.sendMessageEurope(this.messageEurope);
    this.messageEurope = "";
    console.log("sucess");
    this.forumLocationPages.sendNameEurope(this.nameEurope);
    this.nameEurope = "";
  }
  ngOnInit() {
    this.forumLocationPages
      .getMessagesEurope()
      .subscribe((messageEurope: string) => {
        this.messagesEurope.push(messageEurope);
      });
    this.forumLocationPages.getNamesEurope().subscribe((nameEurope: string) => {
      this.namesEurope.push(nameEurope);
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
