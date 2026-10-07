const btn_OrderNow = document.getElementById("orderNow");
const productsSection = document.getElementById("products");
btn_OrderNow.addEventListener("click", function () {
  productsSection.scrollIntoView({ behavior: "smooth" });
});

const orderButtons = document.querySelectorAll(".product_card button");

const modal = document.getElementById("orderModal");
const closeModal = document.getElementById("closeModal");

const selectedCoffee = document.getElementById("selectedCoffee");
const quantity = document.getElementById("quantity");
const totalPrice = document.getElementById("totalPrice");

const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const confirmOrder = document.getElementById("confirmOrder");

let productPrice = 0;

// Update Total
function updateTotal() {
  const currentQuantity = Number(quantity.textContent);

  const total = productPrice * currentQuantity;

  totalPrice.textContent = Math.round(total);
}

// Open Order
orderButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const card = button.closest(".product_card");

    const name = card.querySelector("h3").textContent;

    const priceText = card.querySelector(".price span").textContent;

    productPrice = parseFloat(priceText.replace(/\D/g, ""));

    selectedCoffee.textContent = name;

    // Reset quantity every new order
    quantity.textContent = "1";

    // Calculate first total
    updateTotal();

    // Show modal
    modal.style.display = "flex";
  });
});

// Plus
plusBtn.addEventListener("click", function () {
  let currentQuantity = Number(quantity.textContent);

  currentQuantity++;

  quantity.textContent = currentQuantity;

  updateTotal();
});

// Minus
minusBtn.addEventListener("click", function () {
  let currentQuantity = Number(quantity.textContent);

  if (currentQuantity > 1) {
    currentQuantity--;

    quantity.textContent = currentQuantity;

    updateTotal();
  }
});

// Close
closeModal.addEventListener("click", function () {
  modal.style.display = "none";

  // Reset quantity
  quantity.textContent = "1";
});

// Confirm Order
confirmOrder.addEventListener("click", function () {
  alert("Your order has been placed successfully!");

  modal.style.display = "none";

  // Reset quantity
  quantity.textContent = "1";
});
