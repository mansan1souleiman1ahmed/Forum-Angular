import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthGuard } from "src/app/auth.guard";
import { AuthService } from "src/app/share/auth.service";
@Component({
  selector: "app-welcome-page",
  templateUrl: "./welcome-page.component.html",
  styleUrls: ["./welcome-page.component.scss"]
})
export class WelcomePageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) {}
  redirectToolbar() {
    if (this.auth.loggedIn) {
      this.router.navigate(["/members"]);
    } else {
      this.router.navigate(["/login"]);
    }
  }
  ngOnInit() {}
}
