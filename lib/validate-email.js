$.fn.validateEmail = function() {
    let count = 0;
    this.keyup(()=>{
        let email = $("#email").val()
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!reg.test(email)){
            $('#email').css("border","solid 5px red")
            if (count === 0){
                $("form").append("<span class='stop'>Email address is not valid</span>");
            }
            count++
        }else{
            $('#email').css("border","solid 5px green")
            $(".stop").remove();
        }
    });
}

$("#email").validateEmail()