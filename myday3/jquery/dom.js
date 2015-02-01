$(document).ready(function() {

  // Change the width of the h1 element
  // $("h1").width(64)
  // Increase the font-size of all elements to 120%
  // $("*").css("font-size","120%")

  // Add the highlighted class to the elements that has the 'new' class
  // $(".new").addClass("highlighted")

  // Remove the title class from h1
  // $("h1").removeClass("title")
  // Set the default age range in 20-30
  // $("#age-range").val("20-30")
  // Set the default age range in 20-30 using travesing filters
  // $("#age-range > option").eq(2).prop("selected","selected")
  // $("#age-range > option").eq(4).prop("selected","")

  // Uncheck the "I love learning" checkbox
  // $("#love").prop("checked",false)

  // Select yellow as a favourite color
  // $("#color-yellow").prop("checked",true)

  // Write the selected name of the input in the result div
  // $("#result").text($("#name").attr("value"))
  // Write the text of the selected age in the result div
  // $("#result").text($("#age-range").val())

  // Writes the number of data likes of jquery-ui in the result div
  // $("#result").text($("#jquery-ui").data("likes"))

  // Increase in 100 the number of likes and show the number of likes in the result div
  // $("#result").text($("#jquery-ui").data("likes")+100)

  // Show the absolute position of the result div in the console
  // console.log($("#result").offset())

  // Move the result div to the position 100 top and 150 left
  // $("#result").offset({left: 100, top: 150})

  // Change the width and height of the result up to 300px
  // $("#result").width(300)
  // $("#result").height(300)

  // Add " (User interface)" after "JQueryUI"
  // $("#jquery-ui").after(" (User interface)")

  // Add a li element with the text "Future JQ" between jQueryUI and jQueryMobile
  // $("#jquery-ui").append("<li>Future JQ</li>")

  // Add div containers with the class bordered around every li
  // $("li").wrap('<div class="bordered">')

  // Add a div container with the class bordered around all li
  // $("li").wrapAll('<div class="bordered">')

  // Remove the result div
  // $("#result").remove()

  /**
   *  Final round
   */

  // Set the font color of the color names according to their color
  // Example: The red text should be in red, the blue text should be in blue...
  $("label").has("input[name='color']").css('color', function() {
    return $(this).children().first().val();
  });

  // Add links to the li elements, the url is the name ended with .com
  $("li").html(function() {
    var currentText = $(this).text();
    return "<a href='http://" + currentText + ".com'>" + currentText + "</a>";
  });

});