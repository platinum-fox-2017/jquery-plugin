$.fn.validateEmail = function() {
    this.keyup(function(){
        if($(this).val().match(/\S+@\S+\.\S+/)){
            $(this).css('border', '2px solid green')
        }else{
            $(this).css('border', '2px solid red')
        }
    })
};