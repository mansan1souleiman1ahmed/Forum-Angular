import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/share/user.service";
@Component({
  selector: "app-user-input-login",
  templateUrl: "./user-input-login.component.html",
  styleUrls: ["./user-input-login.component.scss"]
})
export class UserInputLoginComponent implements OnInit {
  constructor(private service: UserService) {}

  ngOnInit() {}
}
