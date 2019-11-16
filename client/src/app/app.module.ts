import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserComponent } from "./components/user/user.component";
import { RegisterComponent } from "./pages/register/register.component";
import { LogInComponent } from "./pages/log-in/log-in.component";
//Material module
import { MaterialModule } from "./material/material.module";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    LogInComponent
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
