const products = [
    { 
        id: 1, 
        name: "Smartphone", 
        category: "electronics", 
        price: 299, 
        rating: 4.5, 
        image: "https://via.placeholder.com/150?text=Smartphone"
    },
    { 
        id: 2, 
        name: "Laptop", 
        category: "electronics", 
        price: 799, 
        rating: 4.8, 
        image: "https://via.placeholder.com/150?text=Laptop"
    },
    { 
        id: 3, 
        name: "T-Shirt", 
        category: "clothing", 
        price: 20, 
        rating: 4.0, 
        image: "https://via.placeholder.com/150?text=T-Shirt"
    },
    { 
        id: 4, 
        name: "Headphones", 
        category: "electronics", 
        price: 50, 
        rating: 4.2, 
        image: "https://via.placeholder.com/150?text=Headphones"
    },
    { 
        id: 5, 
        name: "Backpack", 
        category: "accessories", 
        price: 45, 
        rating: 4.3, 
        image: "https://via.placeholder.com/150?text=Backpack"
    },
    { 
        id: 6, 
        name: "Running Shoes", 
        category: "footwear", 
        price: 120, 
        rating: 4.6, 
        image: "https://via.placeholder.com/150?text=Shoes"
    },
    { 
        id: 7, 
        name: "Watch", 
        category: "accessories", 
        price: 150, 
        rating: 4.8, 
        image: "https://via.placeholder.com/150?text=Watch"
    },
    { 
        id: 8, 
        name: "Gaming Mouse", 
        category: "electronics", 
        price: 40, 
        rating: 4.5, 
        image: "https://via.placeholder.com/150?text=Gaming+Mouse"
    },
    { 
        id: 9, 
        name: "Blender", 
        category: "home appliances", 
        price: 65, 
        rating: 4.1, 
        image: "https://via.placeholder.com/150?text=Blender"
    },
    { 
        id: 10, 
        name: "Desk Chair", 
        category: "furniture", 
        price: 130, 
        rating: 4.4, 
        image: "https://via.placeholder.com/150?text=Desk+Chair"
    }
];


function displayProducts(productList) {
    const productContainer = document.getElementById("product-list");
    productContainer.innerHTML = "";

    productList.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Category: ${product.category}</p>
                <p>Rating: ⭐${product.rating}</p>
                <p class="price">$${product.price}</p>
            </div>
        `;
        productContainer.innerHTML += productCard;
    });
}

function filterProducts() {
    const category = document.getElementById("category").value;
    const maxPrice = document.getElementById("price").value;

    const filteredProducts = products.filter(product => {
        return (category === "all" || product.category === category) && product.price <= maxPrice;
    });

    displayProducts(filteredProducts);
}

function sortProducts() {
    const sortCriteria = document.getElementById("sort").value;
    const displayedProducts = [...document.getElementById("product-list").children].map(card => {
        return products.find(product => product.name === card.querySelector("h3").textContent);
    });

    displayedProducts.sort((a, b) => {
        if (sortCriteria === "low-to-high") return a.price - b.price;
        if (sortCriteria === "high-to-low") return b.price - a.price;
        if (sortCriteria === "rating") return b.rating - a.rating;
        return 0;
    });

    displayProducts(displayedProducts);
}

function updatePriceLabel(value) {
    document.getElementById("price-label").textContent = `Up to $${value}`;
}

document.addEventListener("DOMContentLoaded", () => {
    displayProducts(products);
});