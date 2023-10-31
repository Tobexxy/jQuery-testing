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
$("h1").click(function() {
    
})