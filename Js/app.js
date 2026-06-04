let PRODUCTS = [];

async function loadProducts() {
    try {

        const response = await fetch("./data/products.json");

        PRODUCTS = await response.json();

        console.log(`${PRODUCTS.length} products loaded`);

        loadFromURL();

    } catch (error) {

        console.error("Failed to load products:", error);

        document.getElementById("productsGrid").innerHTML =
            "<h2>Failed to load products</h2>";
    }
}

loadProducts();