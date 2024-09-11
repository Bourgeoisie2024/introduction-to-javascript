document.getElementById('registrationForm').addEventListener('submit', function(event) {
    let valid = true;
    let errorMessage = '';

    // Name validation
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        valid = false;
        errorMessage += 'Name is required.\n';
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        valid = false;
        errorMessage += 'Please enter a valid email address.\n';
    }

    // Password validation
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        valid = false;
        errorMessage += 'Password must be at least 8 characters long.\n';
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        valid = false;
        errorMessage += 'Passwords do not match.\n';
    }

    // Age validation
    const age = document.getElementById('age').value;
    if (isNaN(age) || age < 18 || age > 100) {
        valid = false;
        errorMessage += 'Please enter a valid age between 18 and 100.\n';
    }

    // Terms and Conditions validation
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        valid = false;
        errorMessage += 'You must agree to the terms and conditions.\n';
    }

    if (!valid) {
        alert(errorMessage);
        event.preventDefault();
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    let valid = true;
    let errorMessage = '';

    // Email validation
    const email = document.getElementById('loginEmail').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        valid = false;
        errorMessage += 'Please enter a valid email address.\n';
    }

    // Password validation
    const password = document.getElementById('loginPassword').value;
    if (password.trim() === '') {
        valid = false;
        errorMessage += 'Password is required.\n';
    }

    if (!valid) {
        alert(errorMessage);
        event.preventDefault();
    }
});
