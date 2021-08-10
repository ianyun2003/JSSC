/*
 * Implement all your JavaScript in this file!
 */

var result = null;
var prevInput = null;
var operation = null;
var currInput = null;

$("#clearButton").click(function () {
    $("#display").val("");
    result = null;
    prevInput = null;
    operation = null;
    currInput = null;
});


$("#button0").click(function () {

    if (operation) {
        $("#display").val("0");
    } else {
        $("#display").val($("#display").val() + "0");
        currInput = currInput + "0"
    }
});


$("#button1").click(function () {
    $("#display").val($("#display").val() + "1");
    currInput = currInput + "1"

});

$("#button2").click(function () {
    $("#display").val($("#display").val() + "2");
    currInput = currInput + "2"

});

$("#button3").click(function () {
    $("#display").val($("#display").val() + "3");
    currInput = currInput + "3"
});

$("#button4").click(function () {
    $("#display").val($("#display").val() + "4");
    currInput = currInput + "4"
});

$("#button5").click(function () {
    $("#display").val($("#display").val() + "5");
    currInput = currInput + "5"
});

$("#button6").click(function () {
    $("#display").val($("#display").val() + "6");
    currInput = currInput + "6"
});

$("#button7").click(function () {
    $("#display").val($("#display").val() + "7");
    currInput = currInput + "7"

});

$("#button8").click(function () {
    $("#display").val($("#display").val() + "8");
    currInput = currInput + "8"

});

$("#button9").click(function () {
    $("#display").val($("#display").val() + "9");
    currInput = currInput + "9"

});


$("#addButton").click(function () {

    if (prevInput == null) {
        prevInput = currInput
        operation = "+"
    } else {
        prevInput = parseInt(currInput) + parseInt(prevInput)
        result = prevInput
        operation = "+"
        $("#display").val(result);
    }

});


$("#equalsButton").click(function () {

    // 1. userNumbers[0] + display 
    // 2. userNumbers = []

    if (prevInput !== null && currInput !== null) {
        if (operation == "+") {
            prevInput = currInput + prevInput
        }
        if (operation == "-") {
            prevInput = currInput - prevInput
        }
        if (operation == "*") {
            prevInput = currInput * prevInput
        }
        if (operation == "/") {
            prevInput = currInput / prevInput
        }
        result = prevInput
        $("#display").val(result);
    }

});


