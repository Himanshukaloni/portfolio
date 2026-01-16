document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent successfully!");
});
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let phoneNumber = "917452083547"; 

  let whatsappMessage =
    `Hello Himanshu,%0A%0A` +
    `Name: ${name}%0A` +
    `Email: ${email}%0A` +
    `Message: ${message}`;

  let whatsappURL =
    `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  window.open(whatsappURL, "_blank");
});
window.addEventListener("load", () => {
  document.querySelector(".hero").classList.add("show");
});
