$('#email').keyup(function (){
    let email = this.value
    validateEmail(email)
})
let count = 0
function validateEmail(email){
    let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    if(!regex.test(email)){
        $('#email').css('border','4px solid red')
        if(count === 0){
            $('form').append(`<span id="error_message" style="color:red">Email address is not valid</span>`)
        }
        count++
    } else {
        $('#email').css('border','4px solid green')
        $('#error_message').remove()
        count=0
    }
}