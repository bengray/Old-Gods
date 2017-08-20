$(document).ready(function() {
    $("#hamburger-button").click(function() {
        $("#mobile-nav").toggle("fast");

        $("#close-button").toggle();
        $("#hamburger-button").toggle();
    });

    $("#close-button").click(function() {
        $("#mobile-nav").toggle("fast");

        $("#close-button").toggle();
        $("#hamburger-button").toggle();
    });
});