import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/share/auth.service";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"]
})
export class ToolbarComponent implements OnInit {
  constructor(private _authService: AuthService) {}

  ngOnInit() {}
}
