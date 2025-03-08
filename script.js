let cart = [];
const cartCount = document.getElementById("cart-count");
const cartContainer = document.getElementById("cart");
const cartItemsList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    cartItemsList.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        let listItem = document.createElement("li");
        listItem.innerHTML = `${item.name} - Rp ${item.price.toLocaleString()} 
            <button onclick="removeFromCart(${index})">X</button>`;
        cartItemsList.appendChild(listItem);
    });

    cartTotal.textContent = total.toLocaleString();
    cartCount.textContent = cart.length;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function toggleCart() {
    cartContainer.classList.toggle("show");
}

// Tutup keranjang jika klik di luar
document.addEventListener("click", function (event) {
    if (!cartContainer.contains(event.target) && !event.target.closest(".cart-container")) {
        cartContainer.classList.remove("show");
    }
});

// Fungsi checkout
function checkout() {
    if (cart.length === 0) {
        alert("Keranjang masih kosong!");
        return;
    }
    alert("Pembayaran berhasil!");
    cart = [];
    updateCart();
}