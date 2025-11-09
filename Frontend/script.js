// Toggle between login and signup pages
function toggleAuth(showSignup) {
  document.getElementById('signup-page').style.display = showSignup ? 'block' : 'none';
  document.getElementById('login-page').style.display = showSignup ? 'none' : 'block';
}

// Wait until page is loaded
document.addEventListener("DOMContentLoaded", () => {

  // ---------------- SIGNUP HANDLER ----------------
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const email = document.getElementById('signup-email').value.trim();
      const password = document.getElementById('signup-password').value;
      const confirm = document.getElementById('signup-confirm').value;

      // Password validation rules
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

      if (password !== confirm) {
        alert("❌ Passwords do not match!");
        return;
      }

      if (!passwordRegex.test(password)) {
        alert("⚠️ Password must be at least 8 characters long and include:\n• One uppercase letter\n• One number\n• One special character (!@#$%^&*)");
        return;
      }

      try {
        const res = await fetch('http://localhost:5000/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (res.ok) {
          alert(data.message || "Signup successful! You can now log in.");
          toggleAuth(false); // switch to login
        } else {
          alert(data.error || "Signup failed. Try again!");
        }
      } catch (error) {
        alert("⚠️ Error connecting to server. Please check if backend is running.");
        console.error(error);
      }
    });
  }

  // ---------------- LOGIN HANDLER ----------------
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const email = document.getElementById('login-email').value.trim();
      const password = document.getElementById('login-password').value;

      try {
        const res = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (data.message === "Login successful") {
          document.getElementById('login-page').style.display = 'none';
          document.getElementById('congrats-message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('congrats-message').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
          }, 2000);
        } else {
          alert(data.error || "Invalid login credentials.");
        }
      } catch (error) {
        alert("⚠️ Error connecting to server.");
        console.error(error);
      }
    });
  }

  // ---------------- CONTACT FORM HANDLER ----------------
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !message) {
        alert("⚠️ Please fill in all fields.");
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });

        const data = await res.json();
        alert(data.message || data.error);

        if (res.ok) {
          contactForm.reset();
        }
      } catch (error) {
        alert("⚠️ Error connecting to the server. Please try again later.");
        console.error(error);
      }
    });
  }
});
