import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewChecked
} from "@angular/core";
import { ForumLocationsPagesService } from "src/app/wss-serves/forum-locations-pages.service";
import { RecipesService } from "src/app/share/recipes.service";
import { Observable } from "rxjs";

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
  recipesEuropeArray: any[] = [];
  recipesEurope: object[] = [];
  recipesData = {};
  @ViewChild("scrollFrame", { static: false })
  scrollFrame: ElementRef;
  RecipeSteps = {};

  constructor(
    private forumLocationPages: ForumLocationsPagesService,
    private Recipes: RecipesService
  ) {}
  sendRecipe() {
    this.Recipes.sendRecipes(this.RecipeSteps).subscribe(res => {
      ///console.log("send" + res);
    });
    // this.recipesEurope = "";
  }
  sendMessage() {
    this.forumLocationPages.sendMessageEurope(this.messageEurope);
    this.messageEurope = "";
    console.log("sucess");
    this.forumLocationPages.sendNameEurope(this.nameEurope);
    this.nameEurope = "";
  }

  ngOnInit() {
    this.Recipes.getRecipesEurope().subscribe(recipesEurope => {
      console.log(recipesEurope);
      console.log(recipesEurope[1].steps);
      recipesEurope.forEach(ele => {
        console.log(ele);
        this.recipesEuropeArray.push(ele.steps);
      });
      console.log(this.recipesEuropeArray);
      return this.recipesEuropeArray;
    });

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
