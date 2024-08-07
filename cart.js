const products = [
    { id: 1, name: 'Cover', image: 'https://i.imgur.com/imageA.jpg', price: 10.0, quantity: 1 },
    { id: 2, name: 'Charger', image: 'https://i.imgur.com/imageB.jpg', price: 15.0, quantity: 1 },
    { id: 3, name: 'Phone', image: 'https://i.imgur.com/imageC.jpg', price: 25.0, quantity: 1 },
    { id: 4, name: 'Headphones', image: 'https://i.imgur.com/imageD.jpg', price: 30.0, quantity: 1 },
    { id: 5, name: 'Tablet', image: 'https://i.imgur.com/imageF.jpg', price: 40.0, quantity: 1 }
];

let filteredProducts = [...products];
let cart = [];

// Function to display products
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear existing products

    filteredProducts.forEach(product => {
        const li = document.createElement('li');
        
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;

        const text = document.createElement('span');
        text.textContent = `${product.name} - $${product.price}`;

        const addButton = document.createElement('button');
        addButton.textContent = 'Add to Cart';
        addButton.className = 'add-to-cart';
        addButton.onclick = () => addToCart(product);

        li.appendChild(img);
        li.appendChild(text);
        li.appendChild(addButton);
        productList.appendChild(li);
    });
}

// Utility function to update cart display
function updateCartDisplay() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const averagePriceElement = document.getElementById('average-price');

    cartItemsList.innerHTML = ''; // Clear existing items

    cart.forEach(product => {
        const li = document.createElement('li');
        
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;

        const text = document.createElement('span');
        text.textContent = `${product.name} - $${product.price} x ${product.quantity}`;

        const plusButton = document.createElement('button');
        plusButton.textContent = '+';
        plusButton.className = 'plus';
        plusButton.onclick = () => increaseQuantity(product.id);

        const minusButton = document.createElement('button');
        minusButton.textContent = '-';
        minusButton.className = 'minus';
        minusButton.onclick = () => removeFromCart(product.id);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove';
        removeButton.onclick = () => removeFromCart(product.id);

        li.appendChild(img);
        li.appendChild(text);
        li.appendChild(plusButton);
        li.appendChild(minusButton);
        li.appendChild(removeButton);
        cartItemsList.appendChild(li);
    });

    totalPriceElement.textContent = totalPrice().toFixed(2);
    averagePriceElement.textContent = averagePrice().toFixed(2);
}

// Add product to cart
function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += product.quantity;
    } else {
        cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Remove product from cart
function removeFromCart(productId) {
    const product = cart.find(item => item.id === productId);
    if (product) {
        if (product.quantity > 1) {
            product.quantity -= 1;
        } else {
            const index = cart.findIndex(item => item.id === productId);
            if (index !== -1) {
                cart.splice(index, 1);
            }
        }
    } else {
        console.error("Product not found in cart");
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

// Increase quantity of a product
function increaseQuantity(productId) {
    const product = cart.find(item => item.id === productId);
    if (product) {
        product.quantity += 1;
    } else {
        console.error("Product not found in cart");
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

// Calculate total price
function totalPrice() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Calculate average price
function averagePrice() {
    if (cart.length === 0) return 0;
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    return total / cart.length;
}

// Filter products by input price
function filterByPrice() {
    const priceInput = document.getElementById('price-input').value;
    const maxPrice = parseFloat(priceInput) || Infinity;
    filteredProducts = products.filter(item => item.price <= maxPrice);
    displayProducts();
}

// Sort filtered products by price
function sortProducts(order = 'asc') {
    filteredProducts.sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);
    displayProducts();
}

// Sort cart by price
function sortCart(order = 'asc') {
    cart.sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);
    updateCartDisplay();
}

// Clear the cart
function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

// Navigate to the cart page
function navigateToCart() {
    window.location.href = 'cart.html';
}

// Navigate to the home page
function navigateToHome() {
    window.location.href = 'index.html';
}

// Initial display
displayProducts();
updateCartDisplay();
