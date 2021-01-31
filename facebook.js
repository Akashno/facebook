var alert = document.getElementById('alert')
alert.classList.add("d-none");
//first name validation

function validateFirstname() {
  var firstName = document.getElementById("firstName");
  if (firstName.value == "" || firstName.value.length < 4 ) {
    firstName.classList.remove("is-valid");
    firstName.classList.add("is-invalid");
  } else {
    firstName.classList.add("is-valid");
    firstName.classList.remove("is-invalid");
  }
}
//second name validation
function validateLastname() {
  var lastName = document.getElementById("lastName");
  if (lastName.value == "") {
    lastName.classList.add("is-invalid");
    lastName.classList.remove("is-valid");
  } else {
    lastName.classList.add("is-valid");
    lastName.classList.remove("is-invalid");
  }
}
//phonenumber validation
function validatePhonenumber() {
  var phonenumber = document.getElementById("phonenumber");

  if (phonenumber.value.length != 10) {
    phonenumber.classList.remove("is-valid");
    phonenumber.classList.add("is-invalid");
  } else {
    phonenumber.classList.remove("is-invalid");
    phonenumber.classList.add("is-valid");
  }
}
//emailid validation
function validateEmail() {
  var email = document.getElementById("email");
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (reg.test(email.value)) {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
  } else {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
  }
}
//password validation
function validatePassword() {
  var password = document.getElementById("password");
  if (password.value.length < 8) {
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");
  } else {
    password.classList.add("is-valid");
    password.classList.remove("is-invalid");
  }
}
//password validation Two
function validatePasswordagain() {
  var password = document.getElementById("password");
  var passwordagain = document.getElementById("passwordagain");
  if(password.value == ""){
    return false;
  }
  if (password.value != passwordagain.value || password.value.length < 8) {
    passwordagain.classList.add("is-invalid");
    passwordagain.classList.remove("is-valid");
  } else {
    passwordagain.classList.add("is-valid");
    passwordagain.classList.remove("is-invalid");
  }
  
}
function submitHandler() {
  if (
    firstName.classList.contains("is-valid") &&
    lastName.classList.contains("is-valid") &&
    email.classList.contains("is-valid") &&
    password.classList.contains("is-valid") &&
    passwordagain.classList.contains("is-valid") &&
    phonenumber.classList.contains("is-valid")
  ) {
    alert.classList.remove("bg-danger");
    alert.classList.add("bg-success");
    alert.classList.remove("d-none");
    alert.classList.add("d-block");
    alert.textContent="Registration success";
   
  } else {
    alert.classList.remove("bg-success");
    alert.classList.add("bg-danger");
    alert.classList.remove("d-none");
    alert.classList.add("d-block");
    alert.textContent="Registration failed";
    
    
    
  }
}
