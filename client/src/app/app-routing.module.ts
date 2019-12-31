import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterPageComponent } from "./components/pages/register-page/register-page.component";
import { LoginPageComponent } from "./components/pages/login-page/login-page.component";
import { WelcomePageComponent } from "./components/pages/welcome-page/welcome-page.component";
import { ErrorPageComponent } from "./components/pages/error-page/error-page.component";
import { MembersLandingPageComponent } from "./components/pages/members-landing-page/members-landing-page.component";
import { AuthGuard } from "./auth.guard";
import { ForumComponent } from "./components/pages/forum/forum.component";
import { EuropeComponent } from "./components/location.pages/europe/europe.component";
import { AfricaComponent } from "./components/location.pages/africa/africa.component";
import { NorthAmericaComponent } from "./components/location.pages/north-america/north-america.component";
import { SouthAmericaComponent } from "./components/location.pages/south-america/south-america.component";
import { WestAsiaComponent } from "./components/location.pages/west-asia/west-asia.component";
import { EastAsiaComponent } from "./components/location.pages/east-asia/east-asia.component";
const routes: Routes = [
  {
    path: "",
    component: WelcomePageComponent
  },
  {
    path: "register",
    component: RegisterPageComponent
  },
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "members",
    component: MembersLandingPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "forum",
    component: ForumComponent
  },

  {
    path: "europe",
    component: EuropeComponent
  },
  {
    path: "africa",
    component: AfricaComponent
  },
  {
    path: "north-america",
    component: NorthAmericaComponent
  },
  {
    path: "south-america",
    component: SouthAmericaComponent
  },
  {
    path: "west-asia",
    component: WestAsiaComponent
  },
  {
    path: "east-asia",
    component: EastAsiaComponent
  },
  {
    path: "**",
    component: ErrorPageComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
