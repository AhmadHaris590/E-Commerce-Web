document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart");

    // Retrieve product details from URL
    const params = new URLSearchParams(window.location.search);
    const productData = params.get("product");

    if (productData) {
        const product = JSON.parse(decodeURIComponent(productData));

        if (emptyCartMessage) {
            emptyCartMessage.remove();
        }

        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div>
                <h3>${product.title}</h3>
                <p>Price: $${product.price}</p>
            </div>
            <button class="remove-button">Remove</button>
        `;

        cartItem.querySelector(".remove-button").addEventListener("click", () => {
            cartItem.remove();
            if (!cartItemsContainer.hasChildNodes()) {
                const noProductsMessage = document.createElement("p");
                noProductsMessage.id = "empty-cart";
                noProductsMessage.textContent = "No products in the cart.";
                cartItemsContainer.appendChild(noProductsMessage);
            }
        });

        cartItemsContainer.appendChild(cartItem);
    } else {
        if (!cartItemsContainer.hasChildNodes()) {
            const noProductsMessage = document.createElement("p");
            noProductsMessage.id = "empty-cart";
            noProductsMessage.textContent = "No products in the cart.";
            cartItemsContainer.appendChild(noProductsMessage);
        }
    }
});
