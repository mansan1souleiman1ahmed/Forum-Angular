import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { RecipeModel } from "./recipeModel";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
  public url = "http://localhost:3000/api/europe";
  private urlHttp;
  constructor(private http: HttpClient, private _router: Router) {}
  //Post recipes => See the components.ts and .html files.
  sendRecipes(recipes) {
    return this.http.post<any>(this.url, recipes);
  }
  //Get recipes=> See the components.ts and .html files.
  public getRecipesEurope(): Observable<RecipeModel[]> {
    return this.http.get<any>("http://localhost:3000/api/europe");
  }
}
