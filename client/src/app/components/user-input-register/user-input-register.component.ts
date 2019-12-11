import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/share/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-input-register",
  templateUrl: "./user-input-register.component.html",
  styleUrls: ["./user-input-register.component.scss"]
})
export class UserInputRegisterComponent implements OnInit {
  registerUserData = {};
  constructor(private _auth: AuthService, private _router: Router) {}
  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe(
      res => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this._router.navigate(["/members"]);
      },
      error => console.log(error)
    );
  }
  ngOnInit() {}
}
