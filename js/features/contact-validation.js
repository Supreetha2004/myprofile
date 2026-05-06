function initContactValidation() {
    const form = document.getElementById("contact-form");
    const message = document.getElementById("form-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("contact-name").value;
        const email = document.getElementById("contact-email").value;

        if (name === "" || email === "") {
            message.textContent = "All fields are required";
        } else {
            message.textContent = "Submitted successfully!";
        }
        
    });
}