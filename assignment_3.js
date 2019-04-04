$(function ()
{
   
    $("#firstname_erromsg").hide();
    $("#lastname_erromsg").hide();
    $("#phone_erromsg").hide();
    $("#office_erromsg").hide();
    $("#email_erromsg").hide();
    $("#password_erromsg").hide();
    $("#confpsw_errormsg").hide();
    $("#day_errormsg").hide();
    $("#gender_errormsg").hide();
    $("#interest_errormsg").hide();
    $("#about_errormsg").hide();

    var error_fname = false;
    var error_lname = false;
    var error_ph = false;
    var error_off = false;
    var error_pass = false;
    var error_con = false;
    var error_ema = false;
    var error_gender = false;
    var error_interest = false;
    var error_about = false;

    $("#fname").focusout(function ()
    {
        check_firstname();
    }
    );
    $("#lname").focusout(function ()
    {
        check_lastname();
    }
    );
    $("#ph").focusout(function ()
    {
        check_phone();
    }
    );
    $("#off").focusout(function ()
    {
        check_office();
    }
    );
    $("#ema").focusout(function ()
    {
        check_email();
    }
    );
    $("#pass").focusout(function ()
    {
        check_pass();
    }
    );
    $("#con").focusout(function ()
    {
        check_confpsw();
    }
    );

    $("#days").focusout(function ()
    {
        check_date();
    }
    );

    $("#abt").focusout(function ()
    {
        check_about();
    }
    );

//    $(".radio").focusout(function ()
//    {
//        check_gender();
//    }       
//            
//    );



    function check_firstname()
    {
        var firname = $("#fname").val().length;
        if (firname == "" || firname < 5 || firname > 20)
        {
            $("#firstname_erromsg").css("color","red").html("Please enter the first name");
            $("#firstname_erromsg").show();
            error_fname = true;
        } else
        {
            $("#firstname_erromsg").hide();
        }
    }

    function check_lastname()
    {
        var lastname = $("#lname").val().length;
        if ((lastname == "") || (lastname < 5) || (lastname > 20))
        {
            $("#lastname_erromsg").css("color","red").html("Please enter the last name");
            $("#lastname_erromsg").show();
            error_lname = true;
        } else
        {
            $("#lastname_erromsg").hide();
        }
    }
    function check_phone()
    {
        //var phone = $("#ph").val().length;
        var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
        if (filter.test($("#ph").val()))
        {
            $("#phone_erromsg").hide();
            
        } 
        
        
        else
        {
            $("#phone_erromsg").css("color","red").html("Invalid phone number");
            $("#phone_erromsg").show();
            error_ph = true;
        }

    }

    function check_office()
    {
        //var office = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

        var office = $("#off").val().length;

        if (office == "")
        {
            $("#office_erromsg").css("color","red").html("Please enter the office number");
            $("#office_erromsg").show();
            error_off = true;
        } else
        {
            $("#office_erromsg").hide();
        }
    }
    function check_email()
    {
        var pattern = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

        if (pattern.test($("#ema").val()))
        {
            $("#email_erromsg").hide();
        } else
        {
            $("#email_erromsg").css("color","red").html("Invalid email address");
            $("#email_erromsg").show();
            error_ema = true;
        }
    }

    function check_pass()
    {
        var reg = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
        if (reg.test($("#pass").val()))
        {
            $("#password_erromsg").hide();
        } else
        {
            $("#password_erromsg").css("color","red").html("Invalid password");
            $("#password_erromsg").show();
            error_ema = true;
        }
    }

    function check_confpsw()
    {
        var conpsw = $("#con").val();

        if (conpsw !== ($("#pass").val()))
        {
            $("#confpsw_errormsg").css("color","red").html("Password and confirm password should match!");
            $("#confpsw_errormsg").show();
            error_con = true;
        } else
        {
            $("#confpsw_errormsg").hide();
        }
    }

    function check_date()
    {
        var txtDay = $("#txtDay").val();
        var txtMonth = $("#txtMonth").val();
        var txtYear = $("#txtYear").val();

        if ((txtDay == "") || (txtMonth == "") || (txtYear == ""))
        {
            $("#day_errormsg").css("color","red").html("Please enter these fields");
            $("#day_errormsg").show();
        } else
        {
            $("#day_errormsg").hide();
        }
    }

    function check_about()
    {
        var about = $("#abt").val().length;

        if (about == "")
        {
            $("#about_errormsg").css("color","red").html("Please enter something about yourself");
            $("#about_errormsg").show();
            error_about = true;
        } else
        {
            $("#about_errormsg").hide();
        }
    }

    CalculateAge();

});

$(document).ready(function ()
{
    $("#sub").click(function ()
    {

        var result = $('input[type="radio"]:checked');

        if (result.length > 0)

        {
            $("#gen").html(result.val() + " is checked");
        } else
        {
            $("#gen").css("color","red").html("Please select a gender");
        }

    });

});

$(document).ready(function ()
{
    $("#sub").click(function ()
    {

        var result1 = $('input[type="checkbox"]:checked');

        if (result1.length > 0)

        {
            $("#interest").html(result1.val() + "is checked");
        } else
        {
            $("#interest").css("color","red").html("Please select your interest");
        }

    });

});

function CalculateAge() {
    var curYear = new Date().getUTCFullYear();
    var age = curYear - document.getElementById('txtYear').value;
    document.getElementById('Age').value = age;
}

//function validate(form) {
//
//    // validation code here ...
//
//
//    if (!valid) {
//        alert('Please correct the errors in the form!');
//        return false;
//    } else {
//        return confirm('Do you really want to submit the form?');
//    }
//}

//$(document).ready(function () {
//    $("#sub").on("click", function () {
//        alert("The form has been submitted successfully!");
//    });
//});
