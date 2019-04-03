function Validation()
{
   var fname=document.getElementById("fname").value;
   var lname=document.getElementById("lname").value;
   var ph=document.getElementById("ph");
   var off=document.getElementById("off");
   var ema=document.getElementById("ema");
   var pass=document.getElementById("pass");
   var con=document.getElementById("con");


if(fname == null|| fname == "")
{
    alert("Please enter First Name!");
}

if(lname == null|lname == "")
{
    alert("Please enter First Name!");
}

if(ph == null|ph == ""|ph < 1|ph > 10)
{
    alert("Please enter valid Phone number!");
}

if(off == null|off == ""|off < 1|off > 10)
{
    alert("Please enter valid Phone number!");
}


pass.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(pass.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(pass.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(pass.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(pass.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

};
}
