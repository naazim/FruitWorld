import $ from 'jquery';

$(function(){
    /**
     * When navigation menu is clicked
     */
    $('nav a').on('click', function(){
        if($(this).hasClass('hamburger-icon')) { //For mobile view
            $(this).toggleClass('active').siblings().removeClass('active');;
        }
        else {  //For desktop view
            $(this).addClass('active').siblings().removeClass('active');
        }
    });

    /**
     * Filter the cards based on the checkbox clicked
     */
    $('.filters [type=checkbox]').on('change', function(){
        var selected = $(this).attr('id');  //fetch the id of the checked filter
        $('.content [data-type=' + selected + ']').fadeToggle(); //hide the corresponding fruit card
    });
});