// Animation Start
setTimeout(function() {
    $(".main").addClass("open");
}, 3500);
setTimeout(function() {
    $(".getera_bg").addClass("none");
}, 5000);

// Burgir
$(".btn_burgir").click(function() {
    var thisClass = $(this);
    if(thisClass.hasClass('active')) {
        $(".menu_bar").addClass("opacity");
        thisClass.removeClass("active");
        setTimeout(function() {
            $(".menu_bar").removeClass("open");
            thisClass.removeClass("one");
        },300);
        setTimeout(function() {
            $(".menu_bar").removeClass("opacity");
        },600);
    } else {
        $(".menu_bar").addClass("open");
        thisClass.addClass("one");
        setTimeout(function() {
            thisClass.addClass("active");
        },300);
    }
});

// Scroll animation Bg
$(document).on('wheel', function(e){
    setTimeout(function() {
        if($(".section2").hasClass('active')) {
            $(".section1").addClass("bg-bottom");
        };
        if($(".section2").hasClass('active')) {
            $(".section3").addClass("bg-top-vh");
        };
        if($(".section3").hasClass('active')) {
            $(".section2").addClass("bg-bottom-vh");
        };
        if($(".section3").hasClass('active')) {
            $(".section4").addClass("bg-top");
        };
        if($(".section4").hasClass('active')) {
            $(".section5").addClass("bg-top");
        };
        if($(".section5").hasClass('active')) {
            $(".section4").addClass("bg-bottom");
        };

        function deleteClassBg (className) {
            if($(className).hasClass('active')) {
                $(className).removeClass("bg-top");
                $(className).removeClass("bg-bottom");
            }
        };
        function deleteClassBg2 (className) {
            if($(className).hasClass('active')) {
                $(className).removeClass("bg-top-vh");
                $(className).removeClass("bg-bottom-vh");
            }
        };
        deleteClassBg(".section1");
        deleteClassBg2(".section2");
        deleteClassBg2(".section3");
        deleteClassBg(".section4");
        deleteClassBg(".section5");
    }, 0);
});
setTimeout(function() {
}, 2000);

// crumbs
$("#link-main").click(function() {
    $( ".fp-sr-only:contains('section1')" ).click();
});
$("#link-services").click(function() {
    $( ".fp-sr-only:contains('section2')" ).click();
});
$("#link-about").click(function() {
    $( ".fp-sr-only:contains('section4')" ).click();
});
$("#link-contact").click(function() {
    $( ".fp-sr-only:contains('section5')" ).click();
});