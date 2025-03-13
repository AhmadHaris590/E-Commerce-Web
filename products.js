document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");

    // Fetch products from the API
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {
            products.slice(0, 20).forEach(product => {
                const productItem = document.createElement("div");
                productItem.className = "product-item";

                productItem.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p>$${product.price}</p>
                `;

                productItem.addEventListener("click", () => {
                    window.location.href = `productDetails.html?id=${product.id}`;
                });

                productList.appendChild(productItem);
            });
        })
        .catch(error => {
            console.error("Error fetching products:", error);
        });
});
