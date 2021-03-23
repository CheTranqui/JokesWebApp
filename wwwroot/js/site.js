// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function toggleAnswer(Id) {
    event.preventDefault();
    let elementId = Id + " Answer";
    let element = document.getElementById(elementId).firstElementChild;
    if (element.style.display != "inline-block") {
        element.style.display = "inline-block";
        element.nextElementSibling.innerText = "\nHide Answer";
    }
    else {
        element.style.display = "none";
        element.nextElementSibling.innerText = "Show Answer";
    }
}