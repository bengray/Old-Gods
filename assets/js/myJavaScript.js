$(document).ready(function() {
    $("#hamburger-button").click(function() {
        $("#mobile-nav").slideToggle("fast");

        $("#close-button").toggle();
        $("#hamburger-button").toggle();
    });

    $("#close-button").click(function() {
        $("#mobile-nav").slideToggle("fast");

        $("#close-button").toggle();
        $("#hamburger-button").toggle();
    });

    $("a[href^='http']").not("a[href^='http://bendoylegray.com']").attr("target", "_blank");
});