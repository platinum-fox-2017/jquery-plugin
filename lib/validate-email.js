$("#email").on("keyup", function() {
    if ($(this).val().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        $(this).css("border", "5px solid green");
        $("span").remove()
    } else {
        $(this).css("border", "5px solid red").html()
        $("span").html("<b>Email salah bos!!</b>").css("background-color", "red")
    }
});