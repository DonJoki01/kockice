$(document).ready(function() {
    $(".readMore").next("span").hide(); 
    $(".readMore").on("click", function() {
        const $span = $(this).next("span"); 
        $span.slideToggle(); 

        if ($(this).text() === "Saznaj više") {
            $(this).text("Sakrij");
        } else {
            $(this).text("Saznaj više");
        }
    });
});