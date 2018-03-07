function validateEmail(password){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(password)
}

$("#email").keyup(function () {
    if(validateEmail($("#email").val())){
        $("input").css({"border-color":"green"})
    } else {
        $("input").css({"border-color":"red"})
    }
})