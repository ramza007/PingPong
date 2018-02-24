//user interface

$(document).ready(function () {
    $("form#inputForm").submit(function (event) {
        event.preventDefault();
        var numbers = parsInt($("input#numbers").val());
        $(".output").empty();
    });
});

//end of user interface