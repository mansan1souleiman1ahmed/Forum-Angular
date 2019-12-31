import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/share/auth.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"]
})
export class ToolbarComponent implements OnInit {
  constructor(
    private _authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  redirectToolbar() {
    if (this._authService.loggedIn) {
      this.router.navigate(["/members"]);
    } else {
      this.router.navigate(["/login"]);
    }
    if (this.router.url === "/login") {
      this.router.navigate([""]);
    }
  }
  ngOnInit() {}
}
