import { ConnectionService } from '../connection.service';
import { describe } from 'node_modules/jasmine';
import { nodemailer } from 'node_modules/nodemailer';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

contactForm: FormGroup;
disabledSubmitButton = true;
optionsSelect: Array<any>;

  @HostListener('input') oninput() {

  if (this.contactForm.valid) {
    this.disabledSubmitButton = false;
    }
  }

  constructor(private fb: FormBuilder, private connectionService: ConnectionService) {

  this.contactForm = fb.group({
    'contactFormName': ['', Validators.required],
    'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
    // 'contactFormSubjects': ['', Validators.required],
    'contactFormMessage': ['', Validators.required],
    'contactFormCopy': [''],
    });
  }

  onSubmit() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      // alert('Your message has been sent.');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('Error', error);
    });
  }

  }
