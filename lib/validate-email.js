// const emailButton = document.querySelector('#emailSubmit');
// const box = document.querySelector('input')
// emailButton.addEventListener('click', (event) => {
//     let flag = box.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
//     if(flag) {
//         // box.value = 'success';
//         alert('Success!!')
//     } else {
//         box.value = '';
//         alert('Incorrect email format')
//     }
// })

$.fn.emailValidator = function() {
    this.keyup(() => {
        if(this.val().match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            this.css({"border":"3px solid green"});
        } else {
            this.css({"border":"3px solid red"});        
        }
    })
};


$('#emailBox').emailValidator()