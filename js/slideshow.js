/**
 * ---------------------------------------------------------
 * Book Scroll Slideshow Script
 * ---------------------------------------------------------
 * Author: Elif Cetin
 * Institution: University Libraries - University of Louisiana at Lafayette
 *
 * Description:
 *  - Automatically scrolls book covers horizontally
 *  - Lightweight and dependency minimal (only requires jQuery)
 *  - Designed for embedding into LibGuides
 *
 * Features:
 *  ✅ Auto-scrolling
 *  ✅ Hover to pause
 *  ✅ Seamless looping carousel effect
 *  ✅ Responsive width calculation based on image widths
 *
 * Usage:
 *  - Include slideshow.js and styles.css in index.html
 *  - Ensure HTML structure:
 *        <div class="slideshow"><ul><li><img></li> ...</ul></div>
 *
 * ---------------------------------------------------------
 */

$(document).ready(function ($) {

    /* Calculates total width of all list items based on image size */
    function updateWidth() {
        let totalWidth = 0;

        $('.slideshow ul li').each(function () {
            totalWidth += $(this).outerWidth(true);
        });

        $('.slideshow ul').css('width', totalWidth + 'px');
    }

    updateWidth();

    /* Main slideshow animation loop */
    function slideshow() {
        const firstItem = $('.slideshow ul li').first();
        const itemWidth = firstItem.outerWidth(true);

        $('.slideshow ul').animate(
            { marginLeft: '-' + itemWidth + 'px' },
            1000,
            function () {
                $(this).css('marginLeft', '0');
                firstItem.appendTo('.slideshow ul');
            }
        );
    }

    /* Auto-scroll interval */
    let interval = setInterval(slideshow, 3000);

    /* Pause animation when users hover */
    $('.slideshow').hover(
        function () {
            clearInterval(interval);
        },
        function () {
            interval = setInterval(slideshow, 3000);
        }
    );

    /* Recalculate width on window resize */
    $(window).on('resize', updateWidth);
});

