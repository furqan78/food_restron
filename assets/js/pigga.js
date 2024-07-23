/*!
=========================================================
* Pigga Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

function toggleElement(meal1, meal2, elementText) {
    var elements = document.getElementsByClassName('toggle-element');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
    var mealOne = document.getElementById(meal1);
    var mealTwo = document.getElementById(meal2);
    if ((mealOne.style.display === "none" || mealOne.style.display === "") && (mealTwo.style.display === "none" || mealTwo.style.display === "")) {
        mealOne.style.display = "block";
        mealTwo.style.display = "block";
    } else {
        mealOne.style.display = "none";
        mealTwo.style.display = "none";
    }
    document.getElementById('dropdownButton').textContent = elementText;
    document.querySelector('.dropdown-content').classList.remove('show');
}

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
}); 

// Get the button and add a click event listener
document.getElementById('dropdownToggle').addEventListener('click', function() {
    document.querySelector('.dropdown-content').classList.toggle('show');
});
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.dropbtn *')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

window.onload = function() {
    toggleElement('monday-meal-1', 'monday-meal-2', 'Monday');
}

function sendMessage(message) {            
   // Encode the message for URL
   var encodedMessage = encodeURIComponent(message);
   
   // WhatsApp share URL
   var whatsappUrl = "https://wa.me/9179544270?text=" + encodedMessage;
   
   // Open WhatsApp share URL
   window.open(whatsappUrl, '_blank');
}