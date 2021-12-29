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
