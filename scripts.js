
function changeLanguage() {
    const language = document.getElementById('language').value;
    if (language === 'hi') {
        alert("स्वागत है! भाषा हिंदी में बदल गई है।");
    } else {
        alert("Welcome! Language changed to English.");
    }
}


function searchProducts() {
    const query = document.getElementById('search-box').value.toLowerCase();
    alert(`Searching for: ${query}`);
    
}


function buyProduct(productId) {
    alert(`Product ${productId} added to the cart`);
}


function loadProducts() {
    const products = [
        { id: 1, name: "Mangoes", price: 500, location: "Mumbai", image: "images/mango.jpg" },
        { id: 2, name: "Tomatoes", price: 40, location: "Delhi", image: "images/tomato.jpg" }
    ];

    const productSection = document.querySelector('.products');
    productSection.innerHTML = '';

    products.forEach(product => {
        const productDiv = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: ₹${product.price} / kg</p>
                <p>Location: ${product.location}</p>
                <button onclick="buyProduct(${product.id})">Buy Now</button>
            </div>
        `;
        productSection.innerHTML += productDiv;
    });
}


document.addEventListener("DOMContentLoaded", loadProducts);
