import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/share/auth.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-members-landing-page",
  templateUrl: "./members-landing-page.component.html",
  styleUrls: ["./members-landing-page.component.scss"]
})
export class MembersLandingPageComponent implements OnInit {
  specialEvents = [];
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {
    this._auth.getMembers().subscribe(
      res => (this.specialEvents = res),
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this._router.navigate(["/login"]);
          }
        }
      }
    );
  }
}
