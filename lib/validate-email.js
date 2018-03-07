$("#email").keyup(function(){
  // $("#email").css("border-color","green")
  console.log(email.value)
  validateEmail(email.value)
})


function validateEmail(email){
  let regex =/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(regex.test(email)){
    $("#email").css("border-color","green")
    $("span").html("good!")
    
  }else{
    $("#email").css("border-color","red")
    $("span").html("<span style ='color:red'>Email invalid!</span>")
  }
}