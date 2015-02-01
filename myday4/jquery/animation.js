$(document).ready(function() {

  // Hide the result div
  // $("#result").hide();

  // Hide the result div using fade with 1s duration
  // $("#result").fadeOut(400);

  // Hide and show the result div using slide
  // $("#result").slideUp({
  //   duration: 1000,
  //   easing: "swing",
  //   complete: function() {
  //     console.log("finished!");

  //   }
  // });

  // or

  // $("#result").slideUp(3000,"swing",function(){console.log("finished!");});

  // Hide using slide, wait one second and fade
  // $("#result").slideUp().delay(1000).fadeIn();

  // Create your own speed and use it
  // $.fx.speeds["mySpeed"] = 2000;
  // $("#result").slideUp("mySpeed");
  // Set the default animation speed to 2000
  // $.fx.speeds["_default"] = 2000;
  // $("#result").slideUp();


  // Slide jquery projects and when it's done show on the result div that it's done
  // $("#myContent > p").eq(1).slideUp(1000,"linear",function(){
  // 	console.log("finished!")	
  // })

  // Move to the left in 10 seconds the result div with linear animation
  $("#result").animate({left:"0"},10000,"linear");

});