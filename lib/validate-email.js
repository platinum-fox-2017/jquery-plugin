$("#email").keyup(function () {
    var $email = this.value;
    validateEmail($email);
});

function validateEmail(email) {
    var pattern = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
    if (!pattern.test(email)) {
        $("#email").css("border", "10px solid red")
        $("span").html('<b>Email salah cuy</b>').css("color", "red")
    } else {
        $("#email").css("border", "10px solid green");
        $("span").html('')
    }
}