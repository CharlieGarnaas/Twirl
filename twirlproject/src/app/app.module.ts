import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { describe } from 'node_modules/jasmine';
import { nodemailer } from 'node_modules/nodemailer';
import { HttpClientModule } from '@angular/common/http';
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
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TwirlhomeComponent } from './twirlhome/twirlhome.component';




const appRoutes: Routes = [
  {
    path: 'app', component: AppComponent, data: { title: 'twirlhome' }
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
    path: 'expertise', component: TwirlhomeComponent, data: { title: 'expertise' }
  },

  {
    path: '', redirectTo: '/twirlhome', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    PortfolioComponent,
    ContactComponent,
    CultureComponent,
    ExpertiseComponent,
    TwirlhomeComponent
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule
 ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: 'twirlhome', component: TwirlhomeComponent },
        { path: 'contact', component: ContactComponent },
        { path: 'portfolio', component: PortfolioComponent },
        { path: 'culture', component: CultureComponent },
        { path: 'expertise', component: ExpertiseComponent },
        { path: 'nav', component: NavComponent },
      ]
    ),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
