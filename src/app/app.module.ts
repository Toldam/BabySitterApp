import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterBabyComponentComponent } from './register-component/register-baby-component/register-baby-component.component';
import { RegisterSitterComponentComponent } from './register-component/register-sitter-component/register-sitter-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IndexComponent } from './home-component/index/index.component';
import { ContactComponent } from './home-component/contact/contact.component';
import { RegisterSitterComponent } from './home-component/register-sitter/register-sitter.component';
import { RegisterBabyComponent } from './home-component/register-baby/register-baby.component';
import { PortalComponent } from './portal/portal.component';
import { FindABabyComponent } from './portal/find-a-baby/find-a-baby.component';
import { FindASitterComponent } from './portal/find-a-sitter/find-a-sitter.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    RegisterBabyComponentComponent,
    RegisterSitterComponentComponent,
    LoginComponent,
    PageNotFoundComponent,
    IndexComponent,
    ContactComponent,
    RegisterSitterComponent,
    RegisterBabyComponent,
    PortalComponent,
    FindABabyComponent,
    FindASitterComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule //This import was added to use reactive forms. (touch, untouched and ?)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
