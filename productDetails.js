
document.addEventListener("DOMContentLoaded", () => {
    // to get url id of selected product
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");

    const productImage = document.getElementById("product-image");
    const productTitle = document.getElementById("product-title");
    const productDescription = document.getElementById("product-description");
    const productPrice = document.getElementById("product-price");
    const productCategory = document.getElementById("product-category");
    const addToCartButton = document.getElementById("add-to-cart-button");

     // Fetch product details from API
    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => response.json())
        .then(product => {
            productImage.src = product.image;
            productTitle.textContent = product.title;
            productDescription.textContent = product.description;
            productPrice.textContent = product.price;
            productCategory.textContent = product.category;

            addToCartButton.addEventListener("click", () => {
                // Passing product to cart
                const productDetails = encodeURIComponent(JSON.stringify(product));
                window.location.href = `cart.html?product=${productDetails}`;
            });
        })
        .catch(error => {
            console.error("Error fetching product details:", error);
        });
});
