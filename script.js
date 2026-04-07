document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let event = document.getElementById("event").value;

    let data = JSON.parse(localStorage.getItem("registrations")) || [];
    data.push({ name, event });
    localStorage.setItem("registrations", JSON.stringify(data));

    let message = document.getElementById("message");
    message.innerText = `🎉 ${name}, you're registered for ${event}!`;

    message.style.opacity = 0;
    setTimeout(() => {
        message.style.opacity = 1;
    }, 100);

    document.getElementById("registrationForm").reset();
});
