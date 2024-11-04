function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const phone = document.getElementById("phone").value.trim();

  // Basic name validation (not empty)
  if (name === "") {
    alert("Please enter your name.");
    return false;
  }

  // Basic email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Basic password validation (minimum 6 characters)
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }

  // Basic phone validation (10 digits)
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }

  // If all validations pass
  alert("Registration successful!");
  return true;
}
