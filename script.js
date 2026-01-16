window.addEventListener("load", () => {
  document.querySelector(".hero").classList.add("show");
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

  window.open(
    `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
    "_blank"
  );
});
