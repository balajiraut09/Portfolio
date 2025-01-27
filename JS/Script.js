let scrollTimeout;
let hasAnimated = false;

window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    const stickyOffset = navbar.offsetTop;

    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }

    scrollTimeout = setTimeout(function () {
        if (window.scrollY > stickyOffset) {
            navbar.classList.add("sticky");
            
            if (!hasAnimated) {
                navbar.classList.add("sticky-animate");
                hasAnimated = true;
            }
        } else {
            navbar.classList.remove("sticky");
            navbar.classList.remove("sticky-animate");
            hasAnimated = false;
        }
    }, 100);
});


// EMAIL INTEGRATION

// Function to send an email using EmailJS
let sendMail = () => {
    // Collect form input values
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        // num: document.getElementById("mobno").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    // Check if any input field is empty
    if (parms.name === "" || parms.email === "" || parms.subject === "" || parms.message === "") {  //parms.num === "" 
        alert("Enter Valid Information!!!");
        return false; // Prevent sending if any field is empty
    }

    // Send email using EmailJS service
    emailjs.send("service_pw0v9wg", "template_ithavxr", parms)
        .then(() => {
            alert("Email Sent Successfully!!"); // Show success message after email is sent
        })
        .catch((error) => {
            console.error('Email sending failed:', error); // Log any error
            alert("Failed to send email. Please try again.");
        });
}

// Event listener for form submission
window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
        sendMail(); // Call sendMail function on form submit
    });
}
