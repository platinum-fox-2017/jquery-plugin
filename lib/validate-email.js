$("p").hide()

function validate(textInput) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(textInput).toLowerCase());
}

$("#input-email").keyup(function(){
    let check = validate($("#input-email").val())

    if(check) {
        $("#input-email").css("border-color", "green");
        $("p").hide()
    } else {
        $("#input-email").css("border-color", "red");
        $("p").show()
    }
});