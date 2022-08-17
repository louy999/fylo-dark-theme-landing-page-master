const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

let emailInput = document.querySelector(
  'input[type="email"]'
) as HTMLInputElement;
let submit = document.querySelector('input[type="submit"]') as HTMLInputElement;

submit.addEventListener("click", () => {
  if (emailInput.value == "") {
    emailInput.placeholder = "please enter your email";

    setTimeout(() => {
      emailInput.placeholder = "email@example.com";
    }, 5000);
  } else {
    if (emailInput.value.match(re)) {
      console.log("yas");
    } else {
      console.log("no");
    }
  }
});
