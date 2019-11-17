import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
//Material module

import { ReactiveFormsModule } from "@angular/forms";
//
//Service
import { UserService } from "./share/user.service";

//
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserComponent } from "./components/user/user.component";
import { RegisterComponent } from "./pages/register/register.component";
import { LogInComponent } from "./pages/log-in/log-in.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { UserInputComponent } from "./components/user-input/user-input.component";
import { MaterialModule } from "./material/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    LogInComponent,
    ToolbarComponent,
    UserInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
