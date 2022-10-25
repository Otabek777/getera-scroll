
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