const params = new URLSearchParams(window.location.search);

const productId = params.get("id");

fetch("data/inventory.json")
    .then(response => response.json())
    .then(products => {

        const product = products.find(
            item =>
                item.id == productId ||
                item.sku == productId
        );

        if (!product) {

            document.body.innerHTML =
                "<h1>Product Not Found</h1>";

            return;
        }

        document.getElementById("productName").textContent =
            product.name || "";

        document.getElementById("productCategory").textContent =
            product.category || "";

        document.getElementById("productSku").textContent =
            product.id || product.sku || "";

        document.getElementById("productMake").textContent =
            product.make || "";

        document.getElementById("productModel").textContent =
            product.model || "";

        document.getElementById("productYear").textContent =
            product.year || "";

        document.getElementById("productStock").textContent =
            product.stock || "0";

        document.getElementById("productPrice").textContent =
            "JMD $" + (product.price || "0");

        document.getElementById("productDescription").textContent =
            product.description || "";

        document.getElementById("whatsappBtn").href =
            `https://wa.me/1876YOURNUMBER?text=Hello, I would like a quote for ${product.name}`;
    });