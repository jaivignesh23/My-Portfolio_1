(function ($) {
    "use strict";

    jQuery(document).on('ready', function () {


        function initNav() {

            /* TOGGLE ANIMATION FOR MENU OPEN AND CLOSE*/
            $('div.toggle-normal').on('click', function () {
                $('i.top-bar').toggleClass('top-transform');
                $('i.middle-bar').toggleClass('middle-transform');
                $('i.bottom-bar').toggleClass('bottom-transform');
            });

            /* MENU CLOSE */

            $('.section,div#menu-options a').on('click', function () {
                $('nav#theMenu').removeClass('menu-open');
                $('i.top-bar').removeClass('top-transform');
                $('i.middle-bar').removeClass('middle-transform');
                $('i.bottom-bar').removeClass('bottom-transform');
            });

            /* MENU OPEN */
            $('div#menuToggle').on('click', function () {
                $('div#menuToggle').toggleClass('active');
                $('body').toggleClass('body-push-toright');
                $('nav#theMenu').toggleClass('menu-open');
            });
        }


        //For main NAV
        initNav();

    });

})(jQuery);


$(function() {
    const d = new Date();
    const hours = d.getHours();
    const night = hours >= 19 || hours <= 7; // between 7pm and 7am
    const body = document.querySelector('body');
    const toggle = document.getElementById('toggle');
    const input = document.getElementById('switch');
  
    body.classList.add('night');
    document.getElementById('switch').checked = true;

    if (night) {
      input.checked = true;
      body.classList.add('night');
    }
  
    toggle.addEventListener('click', function() {
      const isChecked = input.checked;
      if (isChecked) {
        body.classList.remove('night');
      } else {
        body.classList.add('night');
      }
    });
  
  });
