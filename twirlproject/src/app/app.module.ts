import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
declare var $: any;
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { CultureComponent } from './culture/culture.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import {  MatListModule } from '@angular/material';



const appRoutes: Routes = [
  {
    path: 'app', component: AppComponent, data: { title: 'Home' }
  },
  {
    path: 'contact', component: ContactComponent, data: { title: 'contact' }
  },
  {
    path: 'portfolio', component: PortfolioComponent, data: { title: 'portfolio' }
  },
  {
    path: 'expertise', component: ExpertiseComponent, data: { title: 'expertise' }
  },
  {
    path: '', redirectTo: '/app', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    PortfolioComponent,
    ContactComponent,
    CultureComponent,
    ExpertiseComponent
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    AppRoutingModule
 ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    AppRoutingModule,
    RouterModule.forRoot(
      [
        { path: 'contact', component: ContactComponent },
        { path: 'portfolio', component: PortfolioComponent },
        { path: 'culture', component: CultureComponent },
        { path: 'expertise', component: ExpertiseComponent }
      ]
    ),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
