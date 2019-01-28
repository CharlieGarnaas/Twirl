import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';


const appRoutes: Routes = [
  {
    path: 'app',
    component: AppComponent,
    data: { title: 'Home' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'contact' }
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { title: 'portfolio' }
  },
  {
    path: '',
    redirectTo: '/app',
    pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      [
        { path: 'contact', component: ContactComponent },
        { path: 'portfolio', component: PortfolioComponent }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
