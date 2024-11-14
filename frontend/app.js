// Toggle between login and signup forms
function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const signupContainer = document.getElementById('signup-container');
    const formTitle = document.getElementById('form-title');
  
    if (loginForm.style.display === "none") {
      loginForm.style.display = "block";
      signupContainer.style.display = "none";
      formTitle.textContent = "Login";
    } else {
      loginForm.style.display = "none";
      signupContainer.style.display = "block";
      formTitle.textContent = "Sign Up";
    }
  }
  
  // Handle login form submission
  async function login(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  
    const data = await response.json();
    if (data.success) {
      alert('Login successful');
      // Redirect or take other action
    } else {
      alert('Invalid credentials');
    }
  }
  
  // Handle signup form submission
  async function signup(event) {
    event.preventDefault();
    
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
  
    const response = await fetch('http://localhost:8080/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  
    const data = await response.json();
    if (data.success) {
      alert('Sign Up successful');
      toggleForms(); // Switch to login form after signup
    } else {
      alert('Error signing up');
    }
  }
  