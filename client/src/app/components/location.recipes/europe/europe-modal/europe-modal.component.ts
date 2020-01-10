import { Component, OnInit } from "@angular/core";
import { RecipesService } from "src/app/share/recipes.service";

@Component({
  selector: "app-europe-modal",
  templateUrl: "./europe-modal.component.html",
  styleUrls: ["./europe-modal.component.scss"]
})
export class EuropeModalComponent implements OnInit {
  constructor(private Recipes: RecipesService) {}
  RecipeSteps = {};
  sendRecipe() {
    this.Recipes.sendRecipes(this.RecipeSteps).subscribe(res => {
      ///console.log("send" + res);
    });
  }

  vegeterian(event) {
    console.log("success");
  }
  ngOnInit() {}
}
