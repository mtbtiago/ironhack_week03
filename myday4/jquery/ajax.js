$(document).ready(function() {

  var SERVER = 'https://calm-dawn-7104.herokuapp.com';

  var r = $("#result");

  // Replace myContent content with the result of the request google.html
  /*  $("#myContent").load(SERVER + "/google.html");
   */
  // Replace the result div when click on it with the response of submitting 
  // the content of input text "name" to the /hello/
  // Example: If the content is "Luis" you should call '/hello/Luis'
  /*  r.click(function(e) {
      $.get(SERVER + "/hello/" + $("#name").val(), function(data) {
        r.html(data);
      })
    });
  */
  // or just (using function replaceName)
  /*     $("#result").click(function () {
           $.get(SERVER + '/hello/' + $("#name").val(), replaceName);
       });
  */

  // Replace the result div when click on it when the user changes the amount or
  // the currency
  // with the call to /exchange/ with the parameters amount and currency.
  // Example: /exchange/?amount=100&currency=euro
  /*  var exchangeFunction = function() {
      var options = {
        "amount": $("#amount").val(),
        "currency": $("#currency").val()
      };
      $.get(SERVER + '/exchange/', options, replaceJSON);
    };
    $("#amount").keyup(exchangeFunction);
    $("#currency").change(exchangeFunction);
  */
  // Save (POST) the personal form to the /add route when click on the result div
  // Look the the AJAX Response and the status code

  /*  var sendMyForm = function() {
      var options = $("#personal").serialize();
      // console.log('options ' , options);
      $.post(SERVER + "/add", options, replaceName);
    };
    $("#result").click(sendMyForm);
  */
  // Make a get request to /sleep when click on the result div
  // Show loading while the response does not arrive
  // Show the result if everything is ok
  // Show 'Error' if there is some problem and change the background-color to red
  // When the request ends adds the bordered class to the response

  $("#result").click(function(e) {
    $.ajax({
      url: SERVER + "/sleep",
      type: "get",
      data: '',
      beforeSend: beforeSendFunction,
      success: successFunction,
      error: errorFunction,
      complete: completeFunction
    })
  });

  function beforeSendFunction() {
    $("#result").html("<strong>Loading ...</strong>");
    $("body").addClass("loading");
  }

  function successFunction(data) {
    $("#result")
      .text("error").css("background-color", "")
      .text(data);
  }

  function errorFunction() {
    $("#result").
    text("error")
      .css("background-color", "red");
  }

  function completeFunction() {
    $("#result").toggleClass("bordered");
    $("body").removeClass("loading");
  }

  var replaceName = function(data) {
    r.html(data);
  };

  var replaceJSON = function(data) {
    var r = "";
    $.each(data, function(k, v) {
      r += "<p>" + k + ": " + v + "</p>";
    });
    replaceName(r)
  };
});