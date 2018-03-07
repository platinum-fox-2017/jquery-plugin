$.fn.validate = function(){
    let count = 0 
    this.keyup(()=>{
        let email = $('#email').val()
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let error = `<span id= 'error' style ='color:red' >email format incorrect</span>`
        if(!re.test(email)){
            $('#email').css('border','solid 5px red')
            if(count === 0){
                $('form').append(error)
            }
            count++
        }else{
            $('#email').css('border','solid 5px green')
            $('#error').remove()
        }
    })
}

$('#email').validate()
