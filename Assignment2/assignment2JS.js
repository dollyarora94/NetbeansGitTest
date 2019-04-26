
function Validation()
{


    var fname = document.getElementById("fname").value;


    if (fname == "")
    {
        alert("Please enter First Name");
        return false;
    }

    var lname = document.getElementById("lname").value;
    if (lname == "")
    {
        alert("Please enter Last Name")
        return false;
    }
    var ph = document.getElementById("ph").value;



    if (isNaN(ph))
    {
        alert("Please enter a digit");
        return false;
    }

    if (ph.length !== 10)
    {
        alert("Please enter 10 digits");
        return false;
    }

    var p = document.getElementById("pass").value;


    errors = [];
    var off = document.getElementById("off").value;

    if (isNaN(off))
    {
        alert("Please enter a digit");
        return false;
    }

    if (off == "")
    {
        alert("Please enter an office number");
        return false;
    }


    var ema = document.getElementById("ema").value;
    var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

    if (ema == "")
    {
        alert("Please enter an email ID");
        return false;
    } else if (ema.indexOf("@", 0) < 0)
    {
        window.alert("Please enter a valid e-mail address.");
//email.focus();
        return false;
    } else if (ema.indexOf(".", 0) < 0)
    {
        window.alert("Please enter a valid e-mail address.");
//email.focus();
        return false;
    } else if (!(emailfilter.test(ema)))
    {
        alert("Enter the valid email address");

    }
    var pass = document.getElementById("pass").value;

    if (pass == "")
    {
        alert("Please enter a password");
        return false;
    }

    if (p.length < 8) {
        errors.push("Your password must be at least 8 characters");
    }
    if (p.search(/[a-z]/i) < 0) {
        errors.push("Your password must contain at least one letter.");
    }
    if (p.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit.");
    }
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return false;
    }

    var con = document.getElementById("con").value;
    if (pass != con)
    {
        alert("Please enter the same password");
        return false;
    }


    var radio1 = document.getElementById("residence1").checked;
    var radio2 = document.getElementById("residence2").checked;

    if ((radio1 == "") && (radio2 == ""))
    {
        alert("Please select male or female");
        return false;
    }


    var checkbox1 = document.getElementById("checkbox_sample18").checked;
    var checkbox2 = document.getElementById("checkbox_sample19").checked;
    var checkbox3 = document.getElementById("checkbox_sample20").checked;

    if ((checkbox1 == "") && (checkbox2 == "") && (checkbox3 == ""))
    {
        alert("Please select your interest");
        return false;
    }

    var txtMonth = document.getElementById("txtMonth").value;
    var txtYear = document.getElementById("txtYear").value;
    var Age = document.getElementById("Age").value;

    if ((txtMonth == "") && (txtYear == "") && (Age == ""))
    {
        alert("Please enter these fields");
        return false;
    }


    var about = document.getElementById("myTextarea").value;


    if (about == "")
    {
        alert("Please write something about yourself");
        return false;

    }

    CalculateAge();

    return true;
}

function CalculateAge() {


    var curYear = new Date().getUTCFullYear();
    var age = curYear - document.getElementById('txtYear').value;

    document.getElementById('age').innerHTML = age;
    document.getElementById('age').value = age;
}
