import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { RegisterBabyComponentComponent } from './register-component/register-baby-component/register-baby-component.component';
import { RegisterSitterComponentComponent } from './register-component/register-sitter-component/register-sitter-component.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IndexComponent } from './home-component/index/index.component';
import { ContactComponent } from './home-component/contact/contact.component';
import { PortalComponent } from './portal/portal.component';
import { FindABabyComponent } from './portal/find-a-baby/find-a-baby.component';
import { FindASitterComponent } from './portal/find-a-sitter/find-a-sitter.component';

// Her konfigurerer vi forskellige routes. Hver route er et objekt der indeholder en path(url)
// og en henvisning til det component der skal renderes når vi navigerer via denne path.
const routes: Routes = [
  
  //If no path, go to home
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  //Home path with childrens
  {path: 'home', component: HomeComponentComponent, children:
  [
    {path: 'index', component: IndexComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register-sitter', component: RegisterSitterComponentComponent},
    {path: 'register-baby', component: RegisterBabyComponentComponent},
  ]},

  //Portal path with childrens
  {path: 'portal', component: PortalComponent, children:
  [
    {path: 'find-a-baby', component: FindABabyComponent},
    {path: 'find-a-sitter', component: FindASitterComponent}
  ]},

  //PAge not found
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//For at undgå at vi dublikerer imports statement i både app-routing.module.ts og app.module.ts.
//Måden jeg gør dette på er at lave et array med imports. exporterer den fra denne fil og derefter
//importerer den i app.module.ts. Dette gør at jeg kun skal importerer det her. så bliver den 
//automatisk importeret i app.module.ts
export const routingComponents = [
  PageNotFoundComponent, 
  LoginComponent,
  RegisterComponentComponent,
  ContactComponentComponent,
  HomeComponentComponent,
  RegisterBabyComponentComponent,
  RegisterSitterComponentComponent
]

/*
<button routerLink="home">Home</button>
<button routerLink="contact">Contact</button>
<button routerLink="login">Login</button>
<button routerLink="register">Register</button>

<button routerLink="baby">Register a Baby</button>
<button routerLink="sitter">Register as a Sitter</button>
*/