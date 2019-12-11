import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterPageComponent } from "./components/pages/register-page/register-page.component";
import { LoginPageComponent } from "./components/pages/login-page/login-page.component";
import { WelcomePageComponent } from "./components/pages/welcome-page/welcome-page.component";
import { ErrorPageComponent } from "./components/pages/error-page/error-page.component";
import { MembersLandingPageComponent } from "./components/pages/members-landing-page/members-landing-page.component";
import { AuthGuard } from "./auth.guard";
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
    path: "**",
    component: ErrorPageComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
