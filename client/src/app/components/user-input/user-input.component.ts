import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/share/user.service";

@Component({
  selector: "app-user-input",
  templateUrl: "./user-input.component.html",
  styleUrls: ["./user-input.component.scss"]
})
export class UserInputComponent implements OnInit {
  constructor(private service: UserService) {}

  ngOnInit() {}
}
