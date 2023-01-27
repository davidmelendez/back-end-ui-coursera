$(document).ready(function () {
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });

    $("#btnReserve").click(function () {
        $('#divForm').modal('show');
    });
    $("#btnLogin").click(function () {
        $('#loginModal').modal('show');

     });

     $('[data-toggle="tooltip"]').tooltip();
});

