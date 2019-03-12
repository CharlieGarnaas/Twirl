import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-twirlhome',
  templateUrl: './twirlhome.component.html',
  styleUrls: ['./twirlhome.component.css']
})
export class TwirlhomeComponent implements OnInit {


  constructor() {
    $('body').on('click', function() {
      // tslint:disable-next-line:max-line-length
      const css = 'background:green; font-size:50px; animation:fun 4s linear infinite;';
console.log('%cExample %s', css, 'all code runs happy');

    });

  }



  ngOnInit() {

  }
}

