
'use strict';

(function ($) {

/*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });



    // Isotppe Filter
    $(".filter-controls li").on('click', function() {
        var filterData = $(this).attr("data-filter");

        $(".portfolio-filter, .gallery-filter").isotope({
            filter: filterData,
        });

        $(".filter-controls li").removeClass('active');
        $(this).addClass('active');
    });

    $(".portfolio-filter, .gallery-filter").isotope({
        itemSelector: '.pf-item, .gf-item',
        percentPosition: true,
        masonry: {
        // use element for option
        columnWidth: '.pf-item, .gf-item',
        horizontalOrder: true,
      }
    });


})(jQuery);