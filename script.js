$.fn.checkEmail = function() {
    let count = 0
    this.keyup(()=>{
        let regex = '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}'
        const value = $('#email').val()
    
        if(value.match(regex) === null){
            $('#email').css('border','3px solid red')
            if(count === 0){
                $("span").html(`email salah bosku!`).css("color","red")
            }
            count++
        }else{
            $('#email').css('border','3px solid green')
            $('span').remove()
                count=0
        }
    })
 }


 $('#email').checkEmail()
 $('#other-email').checkEmail()