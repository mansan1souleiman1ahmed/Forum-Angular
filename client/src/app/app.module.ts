import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
//Import for routing
import { Routes, RouterModule } from "@angular/router";
//Material module

import { ReactiveFormsModule } from "@angular/forms";
//
//Service
import { UserService } from "./share/user.service";

//
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserComponent } from "./components/user/user.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";

import { MaterialModule } from "./material/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RegisterPageComponent } from "./components/pages/register-page/register-page.component";
import { LoginPageComponent } from "./components/pages/login-page/login-page.component";
import { WelcomePageComponent } from "./components/pages/welcome-page/welcome-page.component";
import { ErrorPageComponent } from "./components/pages/error-page/error-page.component";
import { UserInputRegisterComponent } from "./components/user-input-register/user-input-register.component";
import { UserInputLoginComponent } from './components/user-input-login/user-input-login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ToolbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    WelcomePageComponent,
    ErrorPageComponent,
    UserInputRegisterComponent,
    UserInputLoginComponent
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
