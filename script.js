// Button Click and Hover Effects
document.getElementById("clickButton").addEventListener("click", function() {
  this.textContent = "You clicked me!";
  this.style.backgroundColor = "lightgreen";
});

// Image Gallery with Next/Previous Buttons
let currentImageIndex = 0;
const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Add your image paths here

document.getElementById("nextBtn").addEventListener("click", function() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.getElementById("gallery").src = images[currentImageIndex];
});

document.getElementById("prevBtn").addEventListener("click", function() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  document.getElementById("gallery").src = images[currentImageIndex];
});

// Tab Content Toggle
document.querySelectorAll(".tab-button").forEach(button => {
  button.addEventListener("click", function() {
    const target = document.getElementById(this.getAttribute("data-target"));
    document.querySelectorAll(".tab-content").forEach(content => content.style.display = "none");
    target.style.display = "block";
  });
});

// Form Validation
document.getElementById("myForm").addEventListener("submit", function(event) {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // Username is required
  if (username === "") {
    event.preventDefault();
    alert("Username is required!");
  }

  // Email format validation
  if (!emailPattern.test(email)) {
    event.preventDefault();
    alert("Please enter a valid email address.");
  }

  // Password length check
  if (password.length < 8) {
    event.preventDefault();
    alert("Password must be at least 8 characters long.");
  }
});

// Real-time Feedback for Username
document.getElementById("username").addEventListener("input", function() {
  const feedback = document.getElementById("username-feedback");
  feedback.textContent = this.value.length < 5 ? "Username is too short!" : "Username looks good!";
});
