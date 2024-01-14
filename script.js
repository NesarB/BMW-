function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple check for demonstration purposes
    if (username === 'demo' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password. Try again.');
    }
}