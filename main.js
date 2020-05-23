// 'use strict';
jQuery (function($) {

    // Языки сайта

    $('.language').click(function(e) {
    e.preventDefault();     
    
        $('.worksMenu').addClass('worksMenu_open');
        $('.language').addClass('worksItems__item_active');

        setTimeout(function() {         
            $('.worksMenu').removeClass('worksMenu_open');       
            $('.language').removeClass('worksItems__item_active');               
        },9000);

        $('.language').click(function(e) {
            e.preventDefault(); 
    
            $('.worksMenu').addClass('worksMenu_open');
            $('.language').addClass('worksItems__item_active');
        });

        $('.worksItems__link').click(function(e) {

            $('.worksMenu').removeClass('worksMenu_open');
            $('.language').removeClass('worksItems__item_active');
        });

    });

    
    // Версии сайта

    $('.version').click(function(e) {
    e.preventDefault();     
    
        $('.versions').addClass('versions_open');
        $('.version').addClass('versions__item_active');

        setTimeout(function() {         
            $('.versions').removeClass('versions_open');       
            $('.version').removeClass('versions__item_active');               
        },9000);

        $('.version').click(function(e) {
            e.preventDefault(); 
    
            $('.versions').addClass('versions_open');
            $('.version').addClass('versions__item_active');
        });

        $('.versions__link').click(function(e) {

            $('.versions').removeClass('versions_open');
            $('.version').removeClass('versions__item_active');
        });

    });


    // Платежные системы для депозита

    $('.pay').click(function(e) {
    e.preventDefault();     
    
        $('.pay-sistems').addClass('pay-sistems_open');
        $('.pay').addClass('pay-sistems__item_active');

        setTimeout(function() {         
            $('.pay-sistems').removeClass('pay-sistems_open');       
            $('.pay').removeClass('pay-sistems__item_active');               
        },9000);

        $('.pay').click(function(e) {
            e.preventDefault(); 
    
            $('.pay-sistems').addClass('pay-sistems_open');
            $('.pay').addClass('pay-sistems__item_active');
        });

        $('.pay-sistems__link').click(function(e) {

            $('.pay-sistems').removeClass('pay-sistems_open');
            $('.pay').removeClass('pay-sistems__item_active');
        });

    });


    // Максимальный лимит на вывод средств

    $('.limited').click(function(e) {
    e.preventDefault();     
    
        $('.limit-menu').addClass('limit-menu_open');
        $('.limited').addClass('limit-menu__item_active');

        setTimeout(function() {         
            $('.limit-menu').removeClass('limit-menu_open');       
            $('.limited').removeClass('limit-menu__item_active');               
        },6000);

        $('.limited').click(function(e) {
            e.preventDefault(); 
    
            $('.limit-menu').addClass('limit-menu_open');
            $('.limited').addClass('limit-menu__item_active');
        });

        $('.limit-menu__link').click(function(e) {

            $('.limit-unset').addClass('limit-unset_open');
            $('.limit-menu').removeClass('limit-menu_open');
            $('.limited').removeClass('limit-menu__item_active');

            setTimeout(function() {         
                $('.limit-unset').removeClass('limit-unset_open');                            
            },2000);
        });

        $('.limit-unset__link').click(function(e) {            
            $('.limit-unset').removeClass('limit-unset_open');
            
        });

    });


    // Платежные системы для депозита

    $('.min-sum').click(function(e) {
    e.preventDefault();     
    
        $('.min-menu').addClass('min-menu_open');
        $('.min-sum').addClass('min-menu__item_active');

        setTimeout(function() {         
            $('.min-menu').removeClass('min-menu_open');       
            $('.min-sum').removeClass('min-menu__item_active');               
        },6000);

        $('.pay').click(function(e) {
            e.preventDefault(); 
    
            $('.min-menu').addClass('min-menu_open');
            $('.min-sum').addClass('min-menu__item_active');
        });

        $('.min-menu__link').click(function(e) {

            $('.min-menu').removeClass('min-menu_open');
            $('.min-sum').removeClass('min-menu__item_active');
        });

    });

    $('.headerBurger').click(function(e) {
        e.preventDefault(); 
        
        $('.bottom-bar__menu').addClass('bottom-bar__menu_open');
        });
      
        $('.headerNavClose').click(function(e) {
        e.preventDefault(); 
          
        $('.bottom-bar__menu').removeClass('bottom-bar__menu_open');
        });
      
        $('.bottom-bar__link').click(function(e) {
                
        $('.bottom-bar__menu').removeClass('bottom-bar__menu_open');
    });


    $('.readMoreSend1').click(function(e) {
        e.preventDefault(); 
        
        $('.conditions-more1').addClass('conditions-more1_open');
        });
      
        $('.readMoreClose1').click(function(e) {
        e.preventDefault(); 
          
        $('.conditions-more1').removeClass('conditions-more1_open');
    });

    $('.readMoreSend2').click(function(e) {
        e.preventDefault(); 
        
        $('.conditions-more2').addClass('conditions-more2_open');
        });
      
        $('.readMoreClose2').click(function(e) {
        e.preventDefault(); 
          
        $('.conditions-more2').removeClass('conditions-more2_open');
    });

    $('.readMoreSend3').click(function(e) {
        e.preventDefault(); 
        
        $('.conditions-more3').addClass('conditions-more3_open');
        });
      
        $('.readMoreClose3').click(function(e) {
        e.preventDefault(); 
          
        $('.conditions-more3').removeClass('conditions-more3_open');
    });


    $('.bonuses-mobile-text').click(function(e) {
        e.preventDefault(); 
        
        $('.main-banner-more').addClass('main-banner-more_open');
        });
      
        $('.main-banner-сlose').click(function(e) {
        e.preventDefault(); 
          
        $('.main-banner-more').removeClass('main-banner-more_open');
    });
});

    // Слайдер

jQuery (function($) {
    $('.main-slider').slick ({
        initialSlide: 0,
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 9000,
        arrows: false,
        prevArrow: '<button class="slick-prevDark" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-nextDark" aria-label="Next" type="button">Next</button>',
        dotsClass: 'slick-dots',        
    });

    $('.slide_link').click(function() {
    
        let slideNum = $(this).attr('data-slide');
        let sliderOffsetTop = $('#slider').offset().top;
    
        $('html, body').stop().animate({
          scrollTop: sliderOffsetTop
        }, 1200); 
    
        $('.main-slider').slick('slickGoTo', slideNum);
    
        return false;
    });

  
});

