import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/share/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-user-input-login",
  templateUrl: "./user-input-login.component.html",
  styleUrls: ["./user-input-login.component.scss"]
})
export class UserInputLoginComponent implements OnInit {
  loginUserData = {};
  constructor(private _auth: AuthService, private _router: Router) {}
  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(
      res => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this._router.navigate(["/members"]);
      },
      err => console.log(err)
    );
  }

  ngOnInit() {}
}
