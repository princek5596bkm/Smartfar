
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === 'block') {
        section.style.display = 'none';
    } else {
        section.style.display = 'block';
    }
}


document.getElementById('profile-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('seller-name').value;
    const address = document.getElementById('seller-address').value;

    alert(`Profile Saved:\nName: ${name}\nAddress: ${address}`);
});


document.getElementById('sell-product-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const foodName = document.getElementById('food-name').value;
    const foodSpecies = document.getElementById('food-species').value;
    const foodPhoto = document.getElementById('food-photo').files[0];

    if (foodPhoto) {
        alert(`Product Posted:\nFood Name: ${foodName}\nSpecies: ${foodSpecies}\nPhoto: ${foodPhoto.name}`);
    } else {
        alert('Please upload a product photo.');
    }
});
