// Show signup/login toggle
function toggleAuth(showSignup) {
    document.getElementById('signup-page').style.display = showSignup ? 'block' : 'none';
    document.getElementById('login-page').style.display = showSignup ? 'none' : 'block';
  }
  
  // Handle Signup
  document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;
  
    if (password !== confirm) {
      alert('Passwords do not match!');
      return;
    }
  
    localStorage.setItem('user', JSON.stringify({ email, password }));
    alert('Signup successful! You can now log in.');
    toggleAuth(false);
  });
  
  // Handle Login
  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const stored = JSON.parse(localStorage.getItem('user'));
  
    if (stored && stored.email === email && stored.password === password) {
      document.getElementById('login-page').style.display = 'none';
      document.getElementById('congrats-message').style.display = 'block';
  
      // Show main after 2 sec
      setTimeout(() => {
        document.getElementById('congrats-message').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
      }, 2000);
    } else {
      alert('Invalid credentials!');
    }
  });
  
  // Car Search Filter
  document.getElementById('search-input').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.car-card');
  
    cards.forEach(card => {
      const name = card.dataset.name.toLowerCase();
      card.style.display = name.includes(query) ? 'inline-block' : 'none';
    });
  });
  