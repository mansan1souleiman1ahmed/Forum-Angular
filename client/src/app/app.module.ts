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
import { RecipesService } from "./share/recipes.service";
import { ForumService } from "./wss-serves/forum.service";
import { ForumLocationsPagesService } from "./wss-serves/forum-locations-pages.service";
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
import { ForumComponent } from "./components/pages/forum/forum.component";

import { EuropeComponent } from "./components/location.pages/europe/europe.component";
import { AfricaComponent } from "./components/location.pages/africa/africa.component";
import { NorthAmericaComponent } from "./components/location.pages/north-america/north-america.component";
import { SouthAmericaComponent } from "./components/location.pages/south-america/south-america.component";
import { WestAsiaComponent } from "./components/location.pages/west-asia/west-asia.component";
import { EastAsiaComponent } from "./components/location.pages/east-asia/east-asia.component";
import { EuropeModalComponent } from "./components/location.recipes/europe/europe-modal/europe-modal.component";
import { AfricaModalComponent } from "./components/location.recipes/europe/africa-modal/africa-modal.component";

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
    MembersLandingPageComponent,
    ForumComponent,
    EuropeComponent,
    AfricaComponent,
    NorthAmericaComponent,
    SouthAmericaComponent,
    WestAsiaComponent,
    EastAsiaComponent,
    EuropeModalComponent,
    AfricaModalComponent
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
  entryComponents: [EuropeModalComponent],

  providers: [
    UserService,
    AuthService,
    AuthGuard,
    ForumService,
    ForumLocationsPagesService,
    RecipesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
