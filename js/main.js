var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var emailInput = document.querySelector('input[type="email"]');
var submit = document.querySelector('input[type="submit"]');
submit.addEventListener("click", function () {
    if (emailInput.value == "") {
        emailInput.placeholder = "please enter your email";
        setTimeout(function () {
            emailInput.placeholder = "email@example.com";
        }, 5000);
    }
    else {
        if (emailInput.value.match(re)) {
            console.log("yas");
        }
        else {
            console.log("no");
        }
    }
});
