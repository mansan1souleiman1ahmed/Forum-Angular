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
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { EuropeModalComponent } from "../../location.recipes/europe/europe-modal/europe-modal.component";

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
  recipesEuropeArray: String[] = [];
  recipesEuropeTitle: String;
  recipesEurope: object[] = [];
  recipesEuropeTitleArray: String[] = [];
  recipesData = {};
  @ViewChild("scrollFrame", { static: false })
  scrollFrame: ElementRef;
  //RecipeSteps = {};

  constructor(
    private forumLocationPages: ForumLocationsPagesService,
    private Recipes: RecipesService,
    public dialog: MatDialog
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(EuropeModalComponent, {
      width: "750px",
      height: "450px"
      // data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      //  this.animal = result;
    });
  }

  /*  sendRecipe() {
    this.Recipes.sendRecipes(this.RecipeSteps).subscribe(res => {
      ///console.log("send" + res);
    }); */
  // this.recipesEurope = "";
  //}
  sendMessage() {
    this.forumLocationPages.sendMessageEurope(this.messageEurope);
    this.messageEurope = "";
    console.log("sucess");
    this.forumLocationPages.sendNameEurope(this.nameEurope);
    this.nameEurope = "";
  }

  ngOnInit() {
    this.Recipes.getRecipesEurope().subscribe(recipesEurope => {
      console.log(recipesEurope[3].recipeTitle);

      // console.log(recipesEurope);
      recipesEurope.forEach(ele => {
        //   console.log(ele);
        this.recipesEuropeArray.push(ele.steps);
        this.recipesEuropeTitleArray.push(ele.recipeTitle);
        let test = ele.recipeTitle;
        console.log("voici les titre" + ">>>>>>>>>>>>>" + test);
      });
      //  console.log(this.recipesEuropeArray);
      //   return this.recipesEuropeArray;
      /*   this.recipesEuropeTitleArray.map(ele => {
        return ele;
      }); */
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
