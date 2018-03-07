//
// function emailValidation(){
//   let toCheck = document.querySelector('#email').value
//   console.log(toCheck);
//   let result = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(toCheck);
//   if (result !== true) {
//     document.querySelector('.error').textContent = 'Must be an email'
//   } else {
//     document.querySelector('.error').textContent = 'Correct!'
//   }
// }

( function ( $ ) {

  $.fn.emailValidation = function () {
    this.keyup(function(event){
      let toCheck = event.target.value;
        let result = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(toCheck);
        if (result !== true) {
          $('.error').text('Must be an email').css({color:'red'})
        } else {
          $('.error').text('Correct!').css({color:'green'})
        }
    })

  }

}( jQuery ));

$('input').emailValidation()
