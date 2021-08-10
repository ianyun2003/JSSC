/*
 * Implement all your JavaScript in this file!
 */

var userNumbers = [];

$("#clearButton").click(function () {
    $("#display").val("");
});


$("#button0").click(function () {
    $("#display").val($("#display").val() + "0");
});


$("#button1").click(function () {
    $("#display").val($("#display").val() + "1");
});

$("#button2").click(function () {
    $("#display").val($("#display").val() + "2");
});

$("#button3").click(function () {
    $("#display").val($("#display").val() + "3");
});

$("#button4").click(function () {
    $("#display").val($("#display").val() + "4");
});

$("#button5").click(function () {
    $("#display").val($("#display").val() + "5");
});

$("#button6").click(function () {
    $("#display").val($("#display").val() + "6");
});

$("#button7").click(function () {
    $("#display").val($("#display").val() + "7");
});

$("#button8").click(function () {
    $("#display").val($("#display").val() + "8");
});

$("#button9").click(function () {
    $("#display").val($("#display").val() + "9");
});


$("#addButton").click(function () {
    if (userNumbers.length == 0) {
        userNumbers.push($('#display').val())
        $("#display").val("");
    } else {
        $("#display").val(parseInt($("#display").val()) + parseInt(userNumbers[0]));
        userNumbers.pop()
    }
});
