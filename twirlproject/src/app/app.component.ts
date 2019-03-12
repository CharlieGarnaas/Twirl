import { Component } from '@angular/core';
import { describe } from 'node_modules/jasmine';
import { nodemailer } from 'node_modules/nodemailer';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}

