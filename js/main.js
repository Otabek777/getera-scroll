
setTimeout(function() {
    $(".main").addClass("open");
}, 3500);
setTimeout(function() {
    $(".getera_bg").addClass("none");
}, 5000);

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
$(document).on('wheel', function(e){
    setTimeout(function() {
        if($(".section2").hasClass('active')) {
            $(".section1").addClass("bg-bottom");
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
        deleteClassBg(".section1");
        deleteClassBg(".section2");
        deleteClassBg(".section3");
        deleteClassBg(".section4");
        deleteClassBg(".section5");
    }, 000000001);
});
    