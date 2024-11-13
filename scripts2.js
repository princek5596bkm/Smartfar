document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();  // Prevent the default form submission for now

        // Get input values
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;
        const address = document.getElementById('address').value;
        const password = document.getElementById('password').value;

        
        if (fullName === '' || email === '' || mobile === '' || address === '' || password === '') {
            alert('Please fill in all fields');
        } else {
            alert(`Registration successful for ${fullName}`);
            
        }
    });
});
