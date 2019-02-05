import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  constructor() {
    $('body').on('click', function() {
      console.log('yay for jq');
      });


      const word = $('.word').text();
      $('.word').html('');
      for (let i = 0; i < word.length; i++) {
        $('.word').append($('<span class="l">' + word[i] + '</span>'));
      }

      $('.word').click(function() {
        if (!$(this).hasClass('out')) {
          $(this).addClass('out');
          $('.l', this).each(function(index) {
            setTimeout(function() {
              $(this).addClass('out');
            }, bind => (this) (index * 100));
          });
          setTimeout(function() {
            $(this).removeClass('out');
            $('.l', this).removeClass('out');
          }, bind => (this), 2000);
        }
      });
      // $('.word span').mouseenter(function() {
      //   $(this).addClass('out');
      //   $(this).on('animationend', function() {
      //     $(this).removeClass('out');
      //   }, bind => () (this));
      // });
  }

  ngOnInit() {
  }

}


