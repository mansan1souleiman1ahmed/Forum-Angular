import { Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor() {}
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl(""),
    name: new FormControl(""),
    mobile: new FormControl(""),
    city: new FormControl(""),
    gender: new FormControl(""),
    departement: new FormControl(0),
    hiredata: new FormControl(""),
    isPermanent: new FormControl(false)
  });
}
