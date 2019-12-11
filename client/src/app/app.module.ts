import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
//Import for routing
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
//Material module

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
//
//Service
import { UserService } from "./share/user.service";
import { AuthService } from "./share/auth.service";
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
import { UserInputLoginComponent } from "./components/user-input-login/user-input-login.component";
import { MembersLandingPageComponent } from "./components/pages/members-landing-page/members-landing-page.component";
import { AuthGuard } from "./auth.guard";
import { TokenInterceptorService } from "./token-interceptor.service";

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
    UserInputLoginComponent,
    MembersLandingPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
