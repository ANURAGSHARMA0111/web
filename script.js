
let slideIndex = 0;
const slides = document.querySelectorAll(".mySlides");

function showSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
  });

  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");

  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Initial call
showSlides();


//progess bar

window.addEventListener("scroll", () => {
  const progressBars = document.querySelectorAll(".progress-bar");
  progressBars.forEach(bar => {
    const value = bar.textContent;
    bar.style.width = value;
  });
});



document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Stop form from reloading page

  emailjs.sendForm('service_p9jfsfp', 'template_p8pl4ng', this)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      document.getElementById("statusMsg").textContent = "Message sent successfully! ✅";
      alert('Thank you for your message! I will get back to you soon.');
    }, function(error) {
      console.log('FAILED...', error);
      document.getElementById("statusMsg").textContent = "Failed to send message ❌";
    });

  this.reset(); // Clear the form
});
