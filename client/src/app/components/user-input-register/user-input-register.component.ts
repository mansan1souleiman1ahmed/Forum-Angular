import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/share/user.service";
@Component({
  selector: "app-user-input-register",
  templateUrl: "./user-input-register.component.html",
  styleUrls: ["./user-input-register.component.scss"]
})
export class UserInputRegisterComponent implements OnInit {
  constructor(private service: UserService) {}

  ngOnInit() {}
}
