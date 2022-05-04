//select h1 and manipulate the style

$("h1").css("color", "green");
$("body").css("backgroundColor", "lightblue");
console.log($("body").css("fontSize"));

//Add a class

$("h1").addClass("big-title");

//Remove a class

$("h1").removeClass("big-title");

//Add multiple classes
$("h1").addClass("big-title margin-50");

//Check if it has a class
console.log($("h1").hasClass("margin-50"));

//Manipulating text
$("p").text("this is some manipulated text");

//Manipulate the html
// $("button").html("<strong>Don't click</strong>");

//Manipulate attributes (e.g src or href)
//Get the attribute
$("a").attr("href");

//Set the attribute
$("a").attr("href", "https://www.linkedin.com/feed/");

//check class
$("h1").attr("class");

//ADDING EVENT LISTENERS
//detect click events
$("h1").click(function () {
  $("h1").css("color", "purple");
});

// $("button").click(function () {
//   $("h1").css("color", "pink");
// });

//detect key strokes
$("input").keypress(function (e) {
  $("h1").text(e.target.value);
});

$(document).keypress(function (e) {
  console.log(e.key);
});

//flexible event listener - on (can use any events from js, e.g click, mouseover, change etc)
$("h1").on("mouseover", function () {
  $("h1").text("mouse over!");
});

//ADDING AND REMOVING ELEMENTS
//add element before
$("h1").before("<button>new</button>");
//add element after
$("h1").after("<p class='new-p'>new paragraph with jQuery</p>");
//prepend - wrap element around other element (content before)
$(".paragraph").prepend("<span>This is prepended before p element: </span>");
//append - wrap element around other element (content after)
$(".paragraph").append("<span> : This is appended after p element  </span>");

//remove element
$(".new-p").remove();

//ANIMATIONS
//hide

// $("button").on("click", function () {
//   $("h1").hide();
// });

//toggle
$("p").on("click", function () {
  $("h1").toggle();
});

//fade out/in
$(".fade").on("click", function () {
  $("h1").fadeOut();
});

//fade toggle
$("input").on("click", function () {
  $("h1").fadeToggle();
});

//slide Up/Down/Toggle
$("input").on("click", function () {
  $("h1").slideUp();
});

//Customize animations

$(".animate").on("click", function () {
  $("h4").animate({ opacity: 0.5, fontSize: "20rem" });
});

//Chain animations
$("input").on("click", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
