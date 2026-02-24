console.log("JS conectado");


document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.getElementById("header__carrito");
  const cart = document.getElementById("cart");
  const closeBtn = document.querySelector(".close_button");

  if (menuBtn && cart) {
    menuBtn.addEventListener("click", () => {
      console.log("Click detectado");
      cart.classList.toggle("cart--active");
    });
  }

  if (closeBtn && cart) {
    closeBtn.addEventListener("click", () => {
      cart.classList.remove("cart--active");
    });
  }


  const cartArray = []
  const addButton = document.querySelectorAll(".products__add");

  addButton.forEach(button => {
  button.addEventListener("click", (e) => {

    const product = e.target.closest(".products__item");

    const name = product.querySelector(".products__description").textContent;
    const price = product.querySelector(".products__price").textContent;
    const img = product.querySelector(".products__img").src;

    const productData = {
      name,
      price,
      img
    };

    cartArray.push(productData);

    renderCart();

  });
});
 function renderCart() {

  console.log("Render ejecutado", cartArray.length);

  const cartContainer = document.querySelector(".cart__items");
  const badge = document.getElementById("cart-badge");

  cartContainer.innerHTML = "";

  cartArray.forEach(item => {
    cartContainer.innerHTML += `
      <div class="cart__item">
        <img class="cart__products" src="${item.img}" width="50">
        <p>${item.name}</p>
        <p>${item.price}</p>
      </div>
    `;
  });

   badge.textContent = cartArray.length;

  if (cartArray.length > 0) {
    badge.classList.add("active");
  } else {
    badge.classList.remove("active");
  }

}

});



