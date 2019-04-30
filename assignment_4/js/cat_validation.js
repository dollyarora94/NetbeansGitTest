$(function ()
{

    $("#name_erromsg").hide();

    $("#pname_erromsg").hide();
    $("#price_erromsg").hide();

    var error_name = false;
    var error_pname = false;
    var error_price = false;

$("#name").focusout(function ()
    {
        check_name();
        
    }
    );

    $("#pname").focusout(function ()
    {
        check_pname();
        console.log("ho");
    }
    );

    $("#price").focusout(function ()
    {
        check_price();
    }
    );

});

function check_name()
{
    var name = $("#name").val().length;
    if (name == "")
    {
        $("#name_erromsg").css("color", "red").html("Please enter the category name");
        $("#name_erromsg").show();
        error_name = true;
    } else
    {
        $("#name_erromsg").hide();
    }
}

function check_pname()
{
    var name = $("#pname").val().length;
    if (name == "")
    {
        $("#pname_erromsg").css("color", "red").html("Please enter the product name");
        $("#pname_erromsg").show();
        error_pname = true;
    } else
    {
        $("#pname_erromsg").hide();
    }
}

function check_price()
{
    var name = $("#price").val().length;
    if (name == "")
    {
        $("#price_erromsg").css("color", "red").html("Please enter the product price");
        $("#price_erromsg").show();
        error_pname = true;
    } else
    {
        $("#price_erromsg").hide();
    }
}



