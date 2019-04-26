$('p').hide()

function validate(input) {
  let isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return isEmail.test(input)
}

$('input').keyup(function() {
  let isEmail = validate($('input').val())

  if(isEmail) {
    $("input").css("border", "solid green")
    $('p').hide()
  } else {
    $("input").css("border", "solid red")
    $('p').show()
  }
})