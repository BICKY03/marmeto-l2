# Shopping Cart Application

## Pseudo Code

### 1. Initialize Application

1. **Load Products**
   - Fetch or define product data.
   - Display products on the page with "Add to Cart" button.

2. **Display Products**
   - Iterate over the product list.
   - Create and append product elements (image, name, price, "Add to Cart" button).

### 2. Cart Operations

1. **Add Product to Cart**
   - **Function:** `addToCart(product)`
     - Check if the product already exists in the cart.
       - **If Yes:** Increase the quantity of the existing product.
       - **If No:** Add the new product to the cart.
     - Save the updated cart to `localStorage`.

2. **Remove Product from Cart**
   - **Function:** `removeFromCart(productId)`
     - Find the product by ID in the cart.
       - **If Quantity > 1:** Decrease the quantity by 1.
       - **If Quantity = 1:** Remove the product from the cart.
     - Save the updated cart to `localStorage`.

3. **Increase Product Quantity**
   - **Function:** `increaseQuantity(productId)`
     - Find the product by ID in the cart.
     - Increase the quantity by 1.
     - Save the updated cart to `localStorage`.

4. **Filter Products by Price**
   - **Function:** `filterByPrice()`
     - Get the maximum price from user input.
     - Filter the product list to include only products with a price less than or equal to the maximum price.
     - Display the filtered products.

5. **Sort Products**
   - **Function:** `sortProducts(order)`
     - **Order:** 'asc' for ascending, 'desc' for descending.
     - Sort the product list based on price in the specified order.
     - Display the sorted products.

6. **Display Cart**
   - **Function:** `updateCartDisplay()`
     - Load the cart from `localStorage`.
     - Iterate over the cart items.
     - Create and append cart item elements (image, name, price, quantity, buttons for increase/decrease/remove).
     - Calculate and display total and average prices.

7. **Navigate Between Pages**
   - **Function:** `navigateToCart()`
     - Redirect to the cart page.
   - **Function:** `navigateToHome()`
     - Redirect to the home (product list) page.

### 3. Additional Operations

1. **Clear Cart**
   - **Function:** `clearCart()`
     - Empty the cart array.
     - Save the empty cart to `localStorage`.
     - Update the cart display.

## JSON Format


