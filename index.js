//  jQuery can be written in diferent format like "$() or jQuery() format"
//console.log($("h1").css("color"));

//changing the size and color of websiye using jQuery
// $("h1").css("font-size", "5rem");
// $("h1").css("color", "red");


//this code ADD a class to the h1 element in the html file 
$("h1").addClass("big-title");

//this code REMOVES a class to the h1 element in the html file 
$("h1").removeClass("big-title");

//this code ADDS MULTIPLE classes to the h1 element in the html file 
$("h1").addClass("big-title back-color t-size");

//to check for the EXISTENCE of a certain type of class
console.log($("h1").hasClass("t-size"));


//CHANGING the text of an element i.e the buttons
//$("button").text("Wagwan Broski");

$("button").html("<b>Wagwan Broski</b>");

// how to ADD OR CHANGE IMAGE and the attribute in jquerry
//FOR IMAGES
$("img").attr("src", "flute.png");

//FOR LINKS
$("a").attr("href", "https://www.youtube.com/");

// using this code directly displays whats inside the element tag i.e the new stuff that was added to it
$("a").attr("href");

// adding event listener in jQuery
//click
$("button").click(function() {
    $("h1").css("color", "red");
})
// keypress
$("input").keypress(function(event) {
    console.log(event.key);
    $("h1").css("color", "red");
});

// to display what was clicked
$(document).keypress(function(event) {
    console.log(event.key);
    $("h1").text(event.key);
});

// detecting mouse hover the h1 tag |||| "on" can be used for multiple things
$("h1").on("mouseover", function() {

    $("h1").css("color", "purple");
});


// ADDING html elements the h1 tag
//BEFORE outside the html tag elemnt
$("h1").before("<h2>color</h2>");

//AFTER outside the html tag elemnt
$("h1").after("<button>click</button>");

//LEFT inside the html tag elemnt
$("h1").prepend("<button>color</button>");

//RIGHT inside the html tag elemnt
$("h1").append("<button>color</button>");


//website effect animation with jQuery

//to hide and show the h1 element everytime the button is clicked
$("button").on("click", function() {
    $("h1").toggle();
})

//fading and out effect
$("button").on("click", function() {
    $("h1").fadeOut();
})

$("button").on("click", function() {
    $("h1").fadeIn();
})
// toggle the fade effect
$("button").on("click", function() {
    $("h1").fadeToggle();
})


// sliding animation effects
$("button").on("click", function() {
    $("h2").slideUp();
})

$("button").on("click", function() {
    $("h1").slideDown();
})

$("button").on("click", function() {
    $("h2").slideToggle();
})

//to animate
$("button").on("click", function() {
    $("h2").animate({opacity: 0.5});
})

//combining the all the codes to animate 
$("button").on("click", function() {
    $("h2").slideUp().slideDown().animate({opacity: 0.5});
})



