import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewChecked
} from "@angular/core";
import { ForumLocationsPagesService } from "src/app/wss-serves/forum-locations-pages.service";
@Component({
  selector: "app-south-america",
  templateUrl: "./south-america.component.html",
  styleUrls: ["./south-america.component.scss"]
})
export class SouthAmericaComponent implements OnInit {
  messageSouthAmerica: string;
  nameSouthAmerica: string;
  namesSouthAmerica: string[] = [];
  messagesSouthAmerica: string[] = [];
  @ViewChild("scrollFrame", { static: false })
  scrollFrame: ElementRef;
  constructor(private forumLocationPages: ForumLocationsPagesService) {}
  sendMessage() {
    this.forumLocationPages.sendMessageSouthAmerica(this.messageSouthAmerica);
    this.messageSouthAmerica = "";
    console.log("sucess");
    this.forumLocationPages.sendNameSouthAmerica(this.nameSouthAmerica);
    this.nameSouthAmerica = "";
  }
  ngOnInit() {
    this.forumLocationPages
      .getMessagesSouthAmerica()
      .subscribe((messageSouthAmerica: string) => {
        this.messagesSouthAmerica.push(messageSouthAmerica);
      });
    this.forumLocationPages
      .getNamesSouthAmerica()
      .subscribe((nameSouthAmerica: string) => {
        this.namesSouthAmerica.push(nameSouthAmerica);
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
