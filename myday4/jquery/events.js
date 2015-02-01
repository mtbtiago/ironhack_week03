$(document).ready(function() {

  // When the page is loaded replace the slogan by "Bazinga!"
  $("#slogan").text("Bazinga!")

  // When you click on the input to write my name the previous name is deleted
  // $("#name").click(function(){$(this).val("")});
  // or
  // $("#name").click(function(){$("#name").val("")});
  // or
  // $("#name").click(function(e){$(e.target).val("");});

  // When you move your mouse over one jQuery projects it change the background-color to silver

  // $("#myContent li").mouseenter(function() {
  //   $(this).css("background-color", "silver");
  // });

  // With the previous one active, when the user leaves the element remove the background-color
  // $("#myContent li").mouseleave(function() {
  //   $(this).css("background-color", "");
  // });

  // When you move your mouse enter on each jQuery projects it change the background-color to silver
  // $("#myContent li").mousemove(function() {
  //   $(this).css("background-color", "silver");
  // });

  // When I finish to write my name I want my name written in the result div
  // $("#name").focusout(function(e) {
  //   $("#result").text($(e.target).val())
  // });

  // When I click on any element of the body show the mouse x and y in the result div
  // $("body").mousemove(function(edata){
  // 	$("#result").text("X: "+edata.pageX+" Y: "+edata.pageY);
  // })

  // Adds a div with "Hello" at the end of the body when you click on the result div
  // $("#result").click(function(){
  //   $("body").append("<div>Hello</div>")
  // })

  // Adds a div with "Hello" when you click on the result div only the first time
  // one, unbind

  // a lo bestia
  /*  var counter = 0;
    $("#result").click(function() {
      if (counter === 0) {
        $("body").append("<div>Hello</div>");
      }
      ++counter;
    })
  */

  // or

  /*  $("#result").click(function() {
      $("body").append("<div>Hello</div>");
      $("#result").unbind("click");
    })
  */
  // or

  // $("#result").one("click",function() {
  //   $("body").append("<div>Hello</div>");
  // })

  // Adds a new "jQueryUI" element when clicks over one jQuery project
  // $("#myContent li").click(function() {
  //   $(this).append("<li>Future JQ</li>")
  // });

  // Avoid the navigation when you click a link
  // $("a").click(function(e) {
  //   e.preventDefault()
  // });

  // When you click a link go to ironhack.com
  // $("a").click(function(e) {
  // window.open("http://ironhack.com");
  // e.stopPropagation();

  // or

  // $(this).attr("href", "http://ironhack.com");
  // });

  // When you click on myContent div toggle the class bordered to the result
  // except if jquery-ui element is clicked.
  // $("#myContent li").not("#jquery-ui").click(function(){
  // 	$("#result").toggleClass("bordered")
  // 	// $("#result").text($("#result").text()+"!")
  // })

  // When you select a part of the input name the selected part is shown in the result div
  // $("#name").select(function(e) {
  //   var t = e.target;
  //   var selectedText = t.value.substring(t.selectionStart, t.selectionEnd);
  //   $("#result").text(selectedText);
  // });

  /**
   * Final round
   */
  // Duplicate the jQuery projects when clicks over them
  $("#myContent").delegate("li", "click", function(e) {
    var t = e.target;
    $(t).after(t.outerHTML);
  });

  // When you uncheck "I love learning" you get an alert with "Really???"
  $("#love").click(function(e) {
    var xb = $(e.target);
    if (!xb.prop('checked')) {
      alert("Really???");
    }
  })

  // When you resize the page show the size in the result div
  $(window).on("resize orientationChanged", function() {
    $("#result").text("X: "+$(window).width()+" Y: "+$(window).height());
  });

  // I want the result div follows my mouse until I click (then will be fixed on the page)
  // The mouse should be in the center of the div
  $("body").one("mousedown", function(e) {
    $("#result").css("left",e.pageX);
    $("#result").css("top",e.pageY);
    // console.log(e.pageX);
    // console.log(e.pageY);
  });
});