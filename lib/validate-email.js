var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

$.fn.validateEmail = function() {
    console.log(this.val());
    return re.test(String(this.val()).toLowerCase());
}

$("#email").keyup(function(){
    if($("#email").validateEmail()){
        $("#email").css("border-color", "green");
    }else{
        $("#email").css("border-color", "red");
    }
});
