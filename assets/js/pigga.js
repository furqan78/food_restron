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

function togglePlan(elementText) {
    var elements = document.getElementsByClassName('plan-toggle-element');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
    var planElement;
    if (elementText === 'Two meals in a day') {
        planElement = document.getElementById('two-meal-plan');
    } else {
        planElement = document.getElementById('one-meal-plan');
    }
    if (planElement.style.display === "none" || planElement.style.display === "") {
        planElement.style.display = "flex";
    } else {
        planElement.style.display = "none";
    }
    document.getElementById('meal-dropdownButton').textContent = elementText;
    document.querySelector('.meal-dropdown-content').classList.remove('show');
}

function toggleOneMealShift(elementText) {
    var elements = document.getElementsByClassName('shift-toggle-element');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
    var planElement;
    if (elementText === 'Afternoon Meal') {
        planElement = document.getElementById('afternoon');
    } else {
        planElement = document.getElementById('night');
    }
    if (planElement.style.display === "none" || planElement.style.display === "") {
        planElement.style.display = "flex";
    } else {
        planElement.style.display = "none";
    }
    document.getElementById('one-meal-dropdownButton').textContent = elementText;
    document.querySelector('.one-meal-dropdown-content').classList.remove('show');
}

function validateEmail(email) {
    // Regular expression for basic email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

// smooth scroll
$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
});

// Get the button and add a click event listener
document.getElementById('dropdownToggle').addEventListener('click', function () {
    document.querySelector('.dropdown-content').classList.toggle('show');
});
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
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


// Get the button and add a click event listenerr
document.getElementById('meal-dropdownToggle').addEventListener('click', function () {
    document.querySelector('.meal-dropdown-content').classList.toggle('show');
});
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
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

document.getElementById('one-meal-dropdownToggle').addEventListener('click', function () {
    document.querySelector('.one-meal-dropdown-content').classList.toggle('show');
});

window.onload = function () {
    toggleElement('monday-meal-1', 'monday-meal-2', 'Monday');
    togglePlan('Two meals in a day');
    toggleOneMealShift('Afternoon Meal');
}

function sendMessage(message) {
    // Encode the message for URL
    var encodedMessage = encodeURIComponent(message);

    // WhatsApp share URL
    var whatsappUrl = "https://wa.me/6263772561?text=" + encodedMessage;
    // Open WhatsApp share URL
    window.open(whatsappUrl, '_blank');
}

document.addEventListener("DOMContentLoaded", function () {
    $('#exampleModal').on('show.bs.modal', function (event) {
        // Get the button that triggered the modal
        var button = $(event.relatedTarget);

        // Extract data from the button's data-* attribute
        var instructions = button.data('description');
        var message = button.data('message');
        // Format the instructions for display in the modal
        if (instructions) {
            var formattedInstructions = instructions.replace(/\n/g, '<br>');
        }

        // Update the modal's content using the formatted data
        var modal = $(this);
        modal.find('.modal-body #modalContent').html(formattedInstructions);
        modal.find('.modal-body #modalMessage').text(message);
    });
});

$('#proceedWithBooking').on('click', function () {
    const nameInput = document.getElementById("name");
    const name = nameInput.value;
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const phoneInput = document.getElementById("phone");
    const phone = phoneInput.value;
    const lunchAddressInput = document.getElementById("lunch-address");
    const lunchAddress = lunchAddressInput.value;
    const dinnerAddressInput = document.getElementById("dinner-address");
    const dinnerAddress = dinnerAddressInput.value;

    switch (true) {
        case !name:
            nameInput.focus();
            alert("Please enter valid name");
            break;
        case name.length < 3:
            nameInput.focus();
            alert("Name should have atleast 3 characters");
            break;
        case !validateEmail(email):
            emailInput.focus();
            alert("Please enter valid email");
            break;
        case phone.length != 10:
            phoneInput.focus();
            alert("Please enter valid phone");
            break;
        default:
            var modal = $('#exampleModal');
            let message = modal.find('#modalMessage').text();
            message = message + `\n\n Name: ${name} \n Email: ${email} \n Mobile no: ${phone} \n Lunch Delivery Address: ${lunchAddress} 
            \n Dinner Delivery Address: ${dinnerAddress}`;
            // Call the function and pass the data
            sendMessage(message);
            // Optionally, close the modal after saving changes
            modal.modal('hide');
            document.getElementById("customerForm").reset();
            break;
    }
});