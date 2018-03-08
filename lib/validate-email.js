function validateEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!emailReg.test(email)) {
        // console.log('Email address is not valid');
        return false
    } else {
        // console.log('Email address is valid!');
        return true
    }
}