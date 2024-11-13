document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();  // Prevent form submission for validation

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Basic validation
        if (email === '' || password === '') {
            alert('Both fields are required');
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address');
        } else {
            alert('Login successful');
            
            form.submit();
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
});
