// THIS SCRIPT SHOWS GREETINGS DEPENDING ON THE TIME OF THE DAY
function showGreetings() {
  const greetingElement = document.getElementById("greetings");
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good morning!";
  } else if (hour < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  greetingElement.textContent = greeting;
}

// THIS SCRIPT DISPLAYS MORE INFORMATION (BIODATA) ABOUT MY PROFILE
function expandBio() {
  const bio = document.getElementById("biodata");
  const button = document.getElementById("bio-toggle-btn");
  const extraText =
    " I also enjoy building various websites, participating in code challenges, and contributing to open-source projects on GitHub!";

  // THIS SECTION CHECKS IF BIODATA ALREADY CONTAINS THE EXTRA PROFILE INFORMATION
  if (biodata.dataset.expanded === "true") {
    biodata.textContent =
      "I am a Business Information and Technology student at JKUAT. I love coding and learning new technologies in the tech industry.";
    biodata.dataset.expanded = "false";
    button.textContent = "Read More";
  } else {
    biodata.textContent += extraText;
    biodata.dataset.expanded = "true";
    button.textContent = "Read Less";
  }
}

// THIS FORM VALIDATES MY FORM BEFORE SUBMITTING IT
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const error = document.getElementById("form-error");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "" || email === "") {
    error.textContent = "Please fill out all fields.";
    return false;
  }

  if (!emailRegex.test(email)) {
    error.textContent = "Please enter a valid email address.";
    return false;
  }

  error.textContent = "";
  alert("Thank you for subscribing!");
  return true;
}

// THIS SCRIPT TRIGGERS AUTOMATIC COPYRIGHT YEAR UPDATE
document.getElementById("year").textContent = new Date().getFullYear();
