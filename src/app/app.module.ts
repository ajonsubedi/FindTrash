import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from "@angular/router";
import { FindTrashComponent } from './find-trash/find-trash.component';
import { transition } from '@angular/core/src/animation/dsl';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GoToFindTrashComponent } from './go-to-find-trash/go-to-find-trash.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    NavbarComponent,
    FindTrashComponent,
    PageNotFoundComponent,
    GoToFindTrashComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path:'find-trash', component:FindTrashComponent},
      {path:'', redirectTo: 'home', pathMatch:'full'},
      {path:'about', component:AboutComponent},
      {path:'**', component:PageNotFoundComponent}
    ],{useHash:true})    
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
