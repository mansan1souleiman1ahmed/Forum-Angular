import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewChecked
} from "@angular/core";
import { ForumLocationsPagesService } from "src/app/wss-serves/forum-locations-pages.service";
@Component({
  selector: "app-north-america",
  templateUrl: "./north-america.component.html",
  styleUrls: ["./north-america.component.scss"]
})
export class NorthAmericaComponent implements OnInit, AfterViewChecked {
  messageNorthAmerica: string;
  nameNorthAmerica: string;
  namesNorthAmerica: string[] = [];
  messagesNorthAmerica: string[] = [];
  @ViewChild("scrollFrame", { static: false })
  scrollFrame: ElementRef;
  constructor(private forumLocationPages: ForumLocationsPagesService) {}
  sendMessage() {
    this.forumLocationPages.sendMessageNorthAmerica(this.messageNorthAmerica);
    this.messageNorthAmerica = "";
    console.log("sucess");
    this.forumLocationPages.sendNameNorthAmerica(this.nameNorthAmerica);
    this.nameNorthAmerica = "";
  }
  ngOnInit() {
    this.forumLocationPages
      .getMessagesNorthAmerica()
      .subscribe((messageNorthAmerica: string) => {
        this.messagesNorthAmerica.push(messageNorthAmerica);
      });
    this.forumLocationPages
      .getNamesNorthAmerica()
      .subscribe((nameNorthAmerica: string) => {
        this.namesNorthAmerica.push(nameNorthAmerica);
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
