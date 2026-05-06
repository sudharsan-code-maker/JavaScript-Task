const API = "https://fakestoreapi.com/products/";

const container = document.getElementById("container");
const statusText = document.getElementById("status");
const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("category");
const sortFilter = document.getElementById("sort");

let allProducts = [];

// Fetch API
fetch(API)
  .then(res => res.json())
  .then(data => {
    statusText.style.display = "none";
    allProducts = data;
    displayProducts(data);
  })
  .catch(err => {
    statusText.innerText = "Failed to load data";
  });

// Display Function
function displayProducts(data) {
  container.innerHTML = "";

  data.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${product.image}" />
      <h3>${product.title.substring(0, 50)}</h3>
      <p><b>₹ ${product.price}</b></p>
      <p>${product.description.substring(0, 60)}...</p>
      <button onclick="viewMore(${product.id})">View More</button>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    container.appendChild(card);
  });
}

// View More
function viewMore(id) {
  const product = allProducts.find(p => p.id === id);
  alert(`
Title: ${product.title}
Price: ₹${product.price}

${product.description}
  `);
}

// Add to Cart
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = allProducts.find(p => p.id === id);

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart!");
}

// Search
searchInput.addEventListener("input", () => {
  filterProducts();
});

// Category Filter
categoryFilter.addEventListener("change", filterProducts);

// Sort
sortFilter.addEventListener("change", filterProducts);

// Combined Filter Function
function filterProducts() {
  let filtered = [...allProducts];

  // Search
  const searchValue = searchInput.value.toLowerCase();
  filtered = filtered.filter(p =>
    p.title.toLowerCase().includes(searchValue)
  );

  // Category
  const categoryValue = categoryFilter.value;
  if (categoryValue !== "all") {
    filtered = filtered.filter(p => p.category === categoryValue);
  }

  // Sort
  const sortValue = sortFilter.value;
  if (sortValue === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered);
}
