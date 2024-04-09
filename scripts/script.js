/*
Ana-Maria Verenceanu
script.js
17.10.2023
*/

// Global variable 
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var description = document.getElementById("despsrc");

//Hamburger menu function
function Hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}

//Function to display the burpee example video
function burpee() {
    videoSource.src = "media/burpees.mp4";
    descriptionSource.src = "media/burpee-description.vtt";
    video.style.display = "block";
    video.lead ();
}

//Function to display the plank example video
function plank() {
    videoSource.src = "media/plank.mp4";
    descriptionSource.src = "media/plank-description.vtt";
    video.style.display = "block";
    video.load();
}

//Function to display the mountain climbers example video
function mountain() {
    videoSource.src = "media/mo.mp4";
    descriptionSource.src = "media/mountain-description.vtt";
    video.style.display = "block";
    video.load();
}

// Function to display a promo code
function discount() {
    var promo = document.getElementById("special");
    promo.firstChild.nodeValue = "Promo Code: D25START";
    promo.style.color = "#ff0000";
    promo.style.fontsize = "2em";
}