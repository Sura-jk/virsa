/*------------------------------
// For Tabs 
----------------------------*/
$('ul.tabs li').click(function() {
    var tab_id = $(this).attr('data-tab');

    $(this).siblings().removeClass('current')
    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
    $("#" + tab_id).siblings().removeClass('current');
});

/*------------------------------
// Start rating js
------------------------------*/
$(document).ready(function() {

    /* 1. Visualizing things on Hover - See next part for action on click */
    $('#stars li').on('mouseover', function() {
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('li.star').each(function(e) {
            if (e < onStar) {
                $(this).addClass('hover');
            } else {
                $(this).removeClass('hover');
            }
        });

    }).on('mouseout', function() {
        $(this).parent().children('li.star').each(function(e) {
            $(this).removeClass('hover');
        });
    });

    /* 2. Action to perform on click */
    $('#stars li').on('click', function() {
        var onStar = parseInt($(this).data('value'), 10); // The star currently selected
        var stars = $(this).parent().children('li.star');

        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
        }
    });
});

/*------------------------------
// Mainservices Slider
----------------------------*/
$('.category__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    fade: false,
    infinite: true,

    arrows: false,
    speed: 1000,
    autoplay: true,


    responsive: [{
            breakpoint: 1101,
            settings: {

                slidesToShow: 4,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 992,
            settings: {

                slidesToShow: 3,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 768,
            settings: {

                slidesToShow: 3,
                slidesToScroll: 1,

            }
        }, {
            breakpoint: 576,
            settings: {

                slidesToShow: 2,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 481,
            settings: {

                slidesToShow: 1,
                slidesToScroll: 1,

            }
        },
    ]

});
$('.testimonialBtnHolder__btn--left').click(function() {
    $(".category__slider").slick('slickPrev');
});
$('.testimonialBtnHolder__btn--right').click(function() {
    $(".category__slider").slick('slickNext');
});

/*------------------------------
// Search Box header
------------------------------*/
$("#search-icon").click(function() {
        $(".search-popup").addClass("show")
    }),
    $("#close-search").click(function() {
        $(".search-popup").removeClass("show")
    })


/*------------------------------
// product Details page slider 
------------------------------*/
$('.product-may-like').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    fade: false,
    infinite: true,
    arrows: false,
    speed: 500,
    asNavFor: '.product-slider-thumb',
    autoplay: true,

    responsive: [{
            breakpoint: 1367,
            settings: {

                slidesToShow: 1,
                slidesToScroll: 1,

            }
        },

        {
            breakpoint: 992,
            settings: {

                slidesToShow: 1,
                slidesToScroll: 1,

            }
        }, {
            breakpoint: 768,
            settings: {

                slidesToShow: 1,
                slidesToScroll: 1,

            }
        }, {
            breakpoint: 576,
            settings: {

                slidesToShow: 1,
                slidesToScroll: 1,

            }
        },
    ]


});
$('.product-slider-thumb').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    asNavFor: '.product-may-like',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    vertical: true,
    responsive: [{
            breakpoint: 1200,
            settings: {
                vertical: false,
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 3,

            }
        },
        {
            breakpoint: 992,
            settings: {
                vertical: true,
                arrows: false,
                slidesToShow: 5,
                slidesToScroll: 5,

            }
        },
        {
            breakpoint: 769,
            settings: {
                vertical: false,
                arrows: false,
                slidesToShow: 5,
                slidesToScroll: 5,

            }
        },
        {
            breakpoint: 576,
            settings: {
                vertical: false,
                arrows: false,
                slidesToShow: 5,
                slidesToScroll: 1,

            }
        }
    ]
});

//keeps thumbnails active when changing main image, via mouse/touch drag/swipe
$('.product-may-like').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    //remove all active class
    $('.product-slider-thumb .slick-slide').removeClass('slick-current');
    //set active class for current slide
    $('.product-slider-thumb .slick-slide:not(.slick-cloned)').eq(currentSlide).addClass('slick-current');
});

$('.banner-inner').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    lazyLoad: 'progressive',
    fade: true,


});

// Banner Slider
/*------------------------------
// Show the first tab by default
------------------------------*/
$('.tabs-stage div').hide();
$('.tabs-stage div:first').show();
$('.tabs-nav li:first').addClass('tab-active');

/*------------------------------
// Change tab class and display content
------------------------------*/

$('.tabs-nav a').on('click', function(event) {
    event.preventDefault();
    $('.tabs-nav li').removeClass('tab-active');
    $(this).parent().addClass('tab-active');
    $('.tabs-stage div').hide();
    $($(this).attr('href')).show();
});
/*------------------------------
// kameez measurement pop-up
------------------------------*/
$(".unclick").click(function() {
    $('body').addClass("scroll");
    $('.lightbox-overlay').addClass("active");
});
$('.close-btn').click(function() {
    $('body').removeClass("scroll");
    $('.lightbox-overlay').removeClass("active");
});

/*------------------------------
// Quantity Js
----------------------------*/
$(".quantity-btn").click(function() {
    var inputVal = $(this).parent(".quantity-control").find("input").val();
    var val = 1
    if ($(this).hasClass("plus")) {
        val = parseInt(inputVal) + 1
    } else {
        if (parseInt(inputVal) > 1) {
            val = parseInt(inputVal) - 1
        }
    }
    $(this).parent(".quantity-control").find("input").val(val)
})
$(".quantity-input").change(function() {
    val = parseFloat($(this).val())
    if (val < 1 || val == NaN) {
        $(this).val(1)
    }
})

/*------------------------------
// On scroll class add on body
----------------------------*/

$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('header').addClass('scrool-head');
    } else {
        $('header').removeClass('scrool-head');
    }
});
/*------------------------------
 // Menu toggle
    ----------------------------*/
$(function() {
    $('.toggle-menu').click(function() {
        $('.nav-ul').toggleClass('display');
        $("body").toggleClass("onescroll");
        $(".nav-ul").slideToggle(300);
    });
});
/*------------------------------
// For hiding menu
    ----------------------------*/
function hideMenu() {
    $(".nav-ul").removeClass("display");
    $(".nav-ul").slideUp(300);
    $("body").removeClass("onescroll");
}
/*------------------------------
CART DROPDOWN FUNCTION
----------------------------*/
(function() {

    $("#mini-cart").on("click", function() {
        $(".shopping-cart").fadeToggle("fast");
    });

})();

$(document).ready(function() {
    $(".navbar__menuCarot").click(function() {
        $(this).parent().siblings().find(".navbar__menuCarot").removeClass("active-sub");
        $(this).parent().siblings().find(".dropdownMenu").slideUp(350);
        $(this).parent().find(".dropdownMenu").slideToggle(350);
        $(this).toggleClass("active")
    });
});

// Hide product Detail Section

$(document).ready(function() {
    $(".product-detail-option").hide();

    $("#radio2").click(function() {
        $(".product-detail-option").addClass("activehide");

    });
    $("#radio1").click(function() {
        $(".product-detail-option").removeClass("activehide");

    });
});

// Login page & forgett password section
$("#forgot_button").click(function() {
    $("#login_form").addClass('hide')
    $("#recover").removeClass('hide')

});
$("#cancel_button").click(function() {
    $("#login_form").removeClass('hide')
    $("#recover").addClass('hide')
});


if (window.location.href.indexOf("#recover") > -1) {

    $("#login_form").addClass('hide');
    $("#recover").removeClass('hide');
}


if (window.location.href.indexOf("#recover") > -1) {
    //alert("hi");
    $("#login_form").addClass('hide');
    $("#recover").removeClass('hide');
}


// Add new address toogle

$('.add-addressBtn').click(function() {
    $(this).toggleClass('active-filter');
    $(this).parents('.addNew__Address').find('.mainAddress__form').slideToggle();
});

$('.cancel-btn').click(function() {
    $(this).parents('.addNew__Address').find('.mainAddress__form').slideUp();
    $('.add-addressBtn').removeClass('active-filter');
});



// Edit Address Toogle
$('.editAddress__btn').click(function() {
    $(this).parents('.grid-12').siblings().find('.EditAddress__form').slideUp();
    $(this).toggleClass('active-filter');
    $(this).parents('.addressArea').find('.EditAddress__form').slideToggle();
});

$('.edit-cancel-btn').click(function() {
    $(this).parents('.addressArea').find('.EditAddress__form').slideUp();
    $('.editAddress__btn').removeClass('active-filter');
});

$('.update-btn').click(function() {
    $(this).parents('.addressArea').find('.EditAddress__form').slideUp();
    $('.editAddress__btn').removeClass('active-filter');
});

// 

// Content toggle 
;
$(".accordionButton").click(function() {
    $(".accordionButton").removeClass("on"), $(".accordionContent").slideUp("normal"), $(this).next().is(":hidden") == !0 && ($(this).addClass("on"), $(this).next().slideDown("normal"))
}), $(".accordionButton").mouseover(function() {
    $(this).addClass("over")
}).mouseout(function() {
    $(this).removeClass("over")
}), $(".accordionContent").hide(), $(".firsto").addClass("on"), $(".accordionContent.first").show();