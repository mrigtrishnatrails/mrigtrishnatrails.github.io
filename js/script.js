// Scroll animation
const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

elements.forEach(el => observer.observe(el));


// Razorpay (if needed on payment page)
function startPayment() {
    var options = {
        "key": "YOUR_KEY_ID",
        "amount": "49900",
        "currency": "INR",
        "name": "Mrigtrishna Trial",
        "description": "Premium Access",
        "handler": function (response){
            alert("Payment Successful: " + response.razorpay_payment_id);
        }
    };

    var rzp1 = new Razorpay(options);
    rzp1.open();
}

function sendWhatsApp(type = "form") {

    let name = document.getElementById("name")?.value || "Not Provided";
    let email = document.getElementById("email")?.value || "Not Provided";
    let people = document.getElementById("people")?.value || "Not Provided";
    let phone = document.getElementById("phone")?.value || "Not Provided";
    let message = document.getElementById("message")?.value || "";

    // 🔥 Get trip name dynamically
    let tripName = document.getElementById("tripTitle")?.innerText || "Unknown Trip";

    // 🔥 Get current page URL
    let pageURL = window.location.href;

    // Optional: selected date (if you add later)
    let selectedDate = document.getElementById("selectedDate")?.innerText || "Not Selected";

    // Validation (only for form)
    if (type === "form" && (!name || !email || !message)) {
        alert("Please fill required fields");
        return;
    }

    // Booking shortcut message
    if (type === "booking") {
        message = "I want to book this trip. Please share full details.";
    }

    let text = `New Inquiry 🚀

Trip: ${tripName}
Page: ${pageURL}
Preferred Date: ${selectedDate}

Name: ${name}
Email: ${email}
People: ${people}
Phone: ${phone}

Message:
${message}`;

    let url = "https://wa.me/919717369295?text=" + encodeURIComponent(text);

    window.open(url, "_blank");
}

function toggleReadMore(btn) {

    let content = btn.previousElementSibling;

    if (content.classList.contains("d-none")) {
        content.classList.remove("d-none");
        btn.innerText = "Show Less ←";
    } else {
        content.classList.add("d-none");
        btn.innerText = "Read More →";
    }
}
function toggleReadMorehiddenrishi(btn) {

    let content = btn.previousElementSibling;

    if (content.classList.contains("d-none")) {
        content.classList.remove("d-none");
        btn.innerText = "Show Less ←";
    } else {
        content.classList.add("d-none");
        btn.innerText = "Read More →";
    }
}
function toggleReadMorenaturerishi(btn) {

    let content = btn.previousElementSibling;

    if (content.classList.contains("d-none")) {
        content.classList.remove("d-none");
        btn.innerText = "Show Less ←";
    } else {
        content.classList.add("d-none");
        btn.innerText = "Read More →";
    }


    // ✅ Countdown Timer (GLOBAL)
    window.onload = function () {

        const timerEl = document.getElementById("timer");

    // If timer not present, don't run
        if (!timerEl) return;

        const launchDate = new Date("2026-06-15T00:00:00").getTime();

        const timer = setInterval(function () {

            let now = new Date().getTime();
            let distance = launchDate - now;

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

            timerEl.innerHTML = `${days}d ${hours}h ${minutes}m`;

            if (distance < 0) {
                clearInterval(timer);
                timerEl.innerHTML = "We Are Live 🎉";
            }

        }, 1000);
    };
}

// ✅ Countdown Timer (GLOBAL)
window.onload = function () {

    const timerEl = document.getElementById("timer");

    // If timer not present, don't run
    if (!timerEl) return;

    const launchDate = new Date("2026-06-15T00:00:00").getTime();

    const timer = setInterval(function () {

        let now = new Date().getTime();
        let distance = launchDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        timerEl.innerHTML = `${days}d ${hours}h ${minutes}m`;

        if (distance < 0) {
            clearInterval(timer);
            timerEl.innerHTML = "We Are Live 🎉";
        }

    }, 1000);
};