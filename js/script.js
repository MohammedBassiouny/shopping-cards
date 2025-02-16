import Popup from "./Popup.js";
const container = document.querySelector(".row");
const welcome = document.querySelector(".welcome");
const welcomeUser = document.querySelector(".welcome .user-name");
const signout = document.querySelector(".SignOut");
const signIn = document.querySelector(".signIn");
const register = document.querySelector(".register");
const show = document.querySelector(".show");
const productsBtn = document.querySelector("#products-btn");
const cardIcon = document.querySelector(".icon");
const cardsProducts = document.querySelector(".cart-prodcts");
// console.log(cardIcon)

let products = {
  product1: {
    name: "A3 Dual Sim 256GB 8GB",
    type: "mobile",
    brand: "OPPO",
    price: 9800,
    imgUrl: "./images/29-08-2024-10-28-50-280.jpg",
    desc: ["Storage 256 GB ", "Ram 8 GB", "Color PURPLE", "Phone"],
  },
  product2: {
    name: "A18 Dual SIM 64GB 4GB ",
    type: "mobile",
    brand: "OPPO",
    price: 6100,
    imgUrl: "/images/12-01-2024-07-35-44-879.jpg",
    desc: ["Storage 64 GB  ", "Ram 4 GB", "Color Glowing Blue", "Phone"],
  },

  product3: {
    name: "A17k Dual SIM 64GB 3GB",
    type: "mobile",
    brand: "OPPO",
    price: 5050,
    imgUrl: "../images/15-01-2025-04-41-13-021.jpg",
    desc: ["Storage 64 GB  ", "Ram 3 GB", "Color Navy Blue", "Phone"],
  },
  product4: {
    name: "Reno12 Pro 5G Dual SIM 12",
    type: "mobile",
    brand: "OPPO",
    price: 26500,
    imgUrl: "../images/19-10-2024-09-56-05-527.jpg",
    desc: ["Storage 512 GB ", "Ram 12 GB", "Color Nebula black", "Phone"],
  },
  product5: {
    name: "HOT 50 X6882 Dual SIM 256 GB",
    type: "mobile",
    brand: "Infinix",
    price: 7500,
    imgUrl: "../images/16-12-2024-02-29-18-575.jpg",
    desc: ["Storage 256 GB ", "Ram 16 GB", "Color TITANIUM GREY", "Phone"],
  },
  product6: {
    name: "HOT 40i X6528B Dual SIM 256 GB",
    type: "mobile",
    brand: "Infinix",
    price: 6800,
    imgUrl: "../images/10-11-2024-06-18-32-619.jpg",
    desc: ["Storage 256 GB ", "Ram 8 GB", "Color PALM BLUE", "Phone"],
  },
  product7: {
    name: "X6525 SMART 8 Dual SIM 64 GB",
    type: "mobile",
    brand: "Infinix",
    price: 4400,
    imgUrl: "../images/20-05-2024-02-07-02-554.jpg",
    desc: ["Storage 64 GB ", "Ram 4 GB", "Color Crystal Green", "Phone"],
  },
  product8: {
    name: "HONOR X7C Dual SIM 256GB ",
    type: "mobile",
    brand: "honor",
    price: 8990,
    imgUrl: "../images/04-11-2024-03-02-00-593.jpg",
    desc: ["Storage 256 GB ", "Ram 8 GB", "Color Forest Green", "Phone"],
  },
  product9: {
    name: "Lenovo LOQ 14700HX i7 16G ",
    type: "lapTop",
    brand: "Lenovo",
    price: 59900,
    imgUrl: "../images/03-01-2025-07-33-14-097.jpg",
    desc: ["Storage 1 TB ", "Ram 16 GB", "Color Frost Gray", "lapTop"],
  },
  product10: {
    name: "Lenovo LOQ 12450HX i5 8G  ",
    type: "lapTop",
    brand: "Lenovo",
    price: 35950,
    imgUrl: "../images/25-08-2024-12-22-43-030.jpg",
    desc: ["Storage 512 GB ", "Ram 8 GB", "Color Grey", "lapTop"],
  },
  product11: {
    name: "Lenovo IdeaPad 1255U i7 8G ",
    type: "lapTop",
    brand: "Lenovo",
    price: 29900,
    imgUrl: "../images/06-11-2024-04-22-27-702.jpg",
    desc: ["Storage 512 GB ", "Ram 8 GB", "Color Blue", "lapTop"],
  },
  product12: {
    name: "Lenovo1215U i3 4G 256SSD ",
    type: "lapTop",
    brand: "Lenovo",
    price: 18750,
    imgUrl: "../images/24-05-2024-04-45-48-419.jpg",
    desc: ["Storage 256 GB ", "Ram 4 GB", "Color Grey", "lapTop"],
  },
  product13: {
    name: "HP Victus15-Ryzen5 Win10",
    type: "lapTop",
    brand: "Hp",
    price: 40950,
    imgUrl: "../images/18-10-2024-10-15-14-179.jpg",
    desc: ["Storage 512 GB ", "Ram 8 GB", "Color Black", "lapTop"],
  },
  product14: {
    name: "HP 250 G8 th 8G 1TB Win10",
    type: "lapTop",
    brand: "Hp",
    price: 15500,
    imgUrl: "../images/26-04-2024-04-31-09-228.jpg",
    desc: ["Storage 1 TB  ", "Ram 8 GB", "Color Silver", "lapTop"],
  },
  product15: {
    name: "HP 250 G8 I3 256GB Win10",
    type: "lapTop",
    brand: "Hp",
    price: 13500,
    imgUrl: "../images/05-11-2022-05-20-43-097.jpg",
    desc: ["Storage 256 GB  ", "Ram 8 GB", "Color pearl gray", "lapTop"],
  },
  product16: {
    name: "Data Hub ANKER 332 USB C Hub 5X1 A8355H11",
    type: "accessories",
    brand: "Anker",
    price: 1490,
    imgUrl: "../images/13-03-2023-04-01-13-217.jpg",
    desc: ["Memory", "", "Color Black", "accessories"],
  },
  product17: {
    name: "Kingston MEMORY CARD 256GB ",
    type: "accessories",
    brand: "Kingston",
    price: 1250,
    imgUrl: "../images/14-03-2021-09-27-57-581.jpg",
    desc: ["Momery", "", "Color Black", "accessories"],
  },
  product18: {
    name: "Power Core ANKER 30W 20000",
    type: "accessories",
    brand: "Anker",
    price: 2350,
    imgUrl: "../images/24-07-2024-09-03-27-080.jpg",
    desc: ["Power Bank", "", "Color Black", "accessories"],
  },
  product19: {
    name: "Oraimo 4BUILT 12W 20000 mAh OPB ",
    type: "accessories",
    brand: "Oraimo",
    price: 1175,
    imgUrl: "../images/06-09-2024-01-36-06-103.jpg",
    desc: ["Power Bank", "", "Color Black", "accessories"],
  },
  product20: {
    name: "HUAWEI WATCH GT5 VLI B19",
    type: "accessories",
    brand: "Huawei",
    price: 10999,
    imgUrl: "../images/01-10-2024-08-44-19-546.jpg",
    desc: ["Smart Watch", "", "Color BROWN", "accessories"],
  },
  product21: {
    name: "HUAWEI WATCH GT4 PNX B19",
    type: "accessories",
    brand: "Huawei",
    price: 9750,
    imgUrl: "../images/09-11-2023-08-23-14-272.jpg",
    desc: ["Smart Watch", "", "Color Green", "accessories"],
  },
  product22: {
    name: "HUAWEI WATCH GT4 PNX B19 ",
    type: "accessories",
    brand: "Huawei",
    price: 9750,
    imgUrl: "../images/09-11-2023-08-24-36-900.jpg",
    desc: ["Smart Watch", "", "Color Black", "accessories"],
  },
  product23: {
    name: "HUAWEI WATCH FIT 3 SLO B09 ",
    type: "accessories",
    brand: "Huawei",
    price:5999,
    imgUrl: "../images/27-05-2024-12-31-13-624.jpeg",
    desc: ["Smart Watch", "", "Color Black", "accessories"],
  },
  product25: {
    name: "HUAWEI WATCH FIT 2 YDA ",
    type: "accessories",
    brand: "Huawei",
    price:4490,
    imgUrl: "../images/04-04-2023-03-20-28-541.jpg",
    desc: ["Smart Watch", "", "Color Black", "accessories"],
  },
  
};

function DrawProducts() {
  container.innerHTML = `<h2 class="text-outline text-center fs-1 fw-bold mt-5">Our Products</h2>`;
  container.innerHTML += `
                <ul class="Search-btn nav justify-content-center ">
                        <li class="nav-item">
                            <button class="nav-link Products active" value="Products">All Products</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link Mobile" value="mobile" >Mobiles</button>
                        </li>
                    <li class="nav-item">
                        <button class="nav-link lapTop" value="lapTop">LapTops</button>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link accessories" value="accessories" >Accessories</button>
                    </li>

                    <li class="nav-item">
                        <button class="nav-link Favorites" value="Favorites" >Favorites</button>
                    </li>
                </ul>
    `;

  container.innerHTML += Object.keys(products)
    .map((key) => {
      return createProductCard(key, products[key]);
    })
    .join("");

  const searchBtn = document.querySelectorAll(".Search-btn button");
  const noFavoritesMessage = document.createElement("div");
  noFavoritesMessage.classList.add("text-center", "mt-5", "fs-4");
  noFavoritesMessage.innerHTML = "You don’t have any favorite items yet!";
  noFavoritesMessage.style.display = "none";
  container.appendChild(noFavoritesMessage);

  searchBtn.forEach((button) => {
    button.addEventListener("click", () => {
      let selectedType = button.value;
      let allProducts = document.querySelectorAll(".product");
      searchBtn.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      if (selectedType === "Favorites") {
        const likes = JSON.parse(localStorage.getItem("productLikes")) || {};
        const currentUser = JSON.parse(
          sessionStorage.getItem("currentUser")
        )?.email;
        let userFav = likes[currentUser] || [];

        let hasVisibleProducts = false;
        allProducts.forEach((product) => {
          if (userFav.includes(product.id)) {
            product.style.display = "block";
            hasVisibleProducts = true;
          } else {
            product.style.display = "none";
          }
        });

        noFavoritesMessage.style.display = hasVisibleProducts
          ? "none"
          : "block";
      } else {
        noFavoritesMessage.style.display = "none";
        allProducts.forEach((product) => {
          let productType = product.getAttribute("data-type");
          product.style.display =
            selectedType === "Products" || productType === selectedType
              ? "block"
              : "none";
        });
      }
    });
  });

  setupSeeMoreButtons();
  setupAddToCartButtons();
  setupLikeButtons();
  updateLikesDisplay();
}

function createProductCard(key, product) {
  return `
        <div class="product col-xl-3 col-lg-4 col-md-6 my-3 mt-5 position-relative h-100" id="${key}" data-type="${product.type}">
            <div class="like position-absolute">
                <i class="fa fa-heart fs-3"></i>
            </div>
            <div class="card text-center product-card">
                <img src="${product.imgUrl}" class="card-img-top "  alt="${product.name}" height="400px">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${product.name}</h5>
                    <p class="card-text">${product.brand}</p>
                    <p class="card-text text-primary">${product.price} EGP</p>
                    <ul class="list-unstyled">
                        ${product.desc
                          .filter((key, index) => index !== 3)
                          .map((feature) => `<li>${feature}</li>`)
                          .join("")}
                    </ul>
                    <button class="btn btn-primary any-btn see-more" data-id="${key}">See More</button>
                    <button class="btn btn-primary any-btn add-to-cart" data-id="${key}">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
}



function setupSeeMoreButtons() {
  const seeMore = document.querySelectorAll(".see-more");
  seeMore.forEach((button) => {
    button.addEventListener("click", function () {
      const productId = this.getAttribute("data-id");
      const product = products[productId];
      if (product) {
        drawSeePopus(productId);
      }
    });
  });
}

function drawSeePopus(key) {
  let product = products[key];

  document.body.style.overflow = "hidden";

  let popup = document.createElement("div");
  popup.classList.add("modal", "d-block");
  popup.innerHTML = `
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content position-relative">
                <div class="modal-body text-center">
                <button type="button" class="btn-close position-absolute top-0 end-0 m-2" aria-label="Close"></button>
                    <h5 class="modal-title fw-bold">${product.name}</h5>
                    <p class="card-text">${product.brand}</p>
                    <p class="card-text text-primary">${product.price} EGP</p>
                    <ul class="list-unstyled">
                        ${product.desc
                          .map((feature) => `<li>${feature}</li>`)
                          .join("")}
                    </ul>
                </div>
            </div>
        </div>
    `;

  document.body.appendChild(popup);

  setupPopupCloseHandlers(popup);
}

function setupPopupCloseHandlers(popup) {
  popup.querySelector(".btn-close").addEventListener("click", function () {
    popup.remove();
    document.body.style.overflow = "";
  });

  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.remove();
      document.body.style.overflow = "";
    }
  });
}

function setupAddToCartButtons() {
  const addToCart = document.querySelectorAll(".add-to-cart");
  addToCart.forEach((button) => {
    button.addEventListener("click", function () {
      const productId = this.getAttribute("data-id");
      const product = products[productId];
      if (product) {
        drawCartPopus(productId);
      }
      updateExistingCartItem(productId);
    });
  });
}

function drawCartPopus(key) {
  let product = products[key];

  document.body.style.overflow = "hidden";

  let popup = document.createElement("div");
  popup.classList.add("modal", "d-block");
  popup.innerHTML = `
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content position-relative">
                <div class="modal-body text-center">
                    <button type="button" class="btn-close position-absolute top-0 end-0 m-2" aria-label="Close"></button>
                    <h5 class="modal-title fw-bold">${product.name}</h5>
                    <p class="card-text">${product.brand}</p>
                    <p class="card-text text-primary">${product.price} EGP</p>
                    
                    <form id="shoppingForm">
                        <div class="mb-3">
                            <label for="productPrice" class="form-label">Price</label>
                            <input type="text" class="form-control" id="productPrice" value="${product.price} EGP" readonly data-original-price="${product.price}">
                        </div>
                        <div class="mb-3">
                            <label for="quantity" class="form-label">Amount</label>
                            <div class="input-group">
                                <button type="button" class="decr-btn btn btn-danger">-</button>
                                <input type="number" class="form-control text-center" id="quantity" value="1" min="1">
                                <button type="button" class="incr-btn btn btn-success">+</button>
                            </div>
                        </div>
                        <button type="submit" class="send-to-cart btn any-btn mt-3">Add To Cart</button>
                    </form>
                </div>
            </div>
        </div>
    `;

  document.body.appendChild(popup);
  setupPopupCloseHandlers(popup);
  setupQuantityControls(popup);
  setupShoppingFormSubmit(popup, product, key);
}

function setupQuantityControls(popup) {
  const quantityInput = popup.querySelector("#quantity");
  const priceInput = popup.querySelector("#productPrice");
  const originalPrice = parseFloat(priceInput.dataset.originalPrice);

  function updateQuantity(amount) {
    let currentValue = parseInt(quantityInput.value);
    let newValue = currentValue + amount;
    if (newValue >= 1) {
      quantityInput.value = newValue;
      priceInput.value = `${(originalPrice * newValue).toFixed(2)} EGP`;
    }
  }

  popup
    .querySelector(".incr-btn")
    .addEventListener("click", () => updateQuantity(1));
  popup
    .querySelector(".decr-btn")
    .addEventListener("click", () => updateQuantity(-1));

  quantityInput.addEventListener("input", () => {
    let newValue = parseInt(quantityInput.value);
    if (isNaN(newValue) || newValue < 1) {
      quantityInput.value = 1;
    }
    priceInput.value = `${(originalPrice * quantityInput.value).toFixed(
      2
    )} EGP`;
  });
}

function setupShoppingFormSubmit(popup, product, key) {
  const quantityInput = popup.querySelector("#quantity");

  document.getElementById("shoppingForm").addEventListener("submit", function (event) {
      event.preventDefault();

      let currentUser = JSON.parse(sessionStorage.getItem("currentUser")) || "";
      if (!currentUser || !currentUser.email) {
        return;
      }

      let currentUserEmail = currentUser.email;
      let storedCart = localStorage.getItem("cart");
      let cart = storedCart ? JSON.parse(storedCart) : {};

      if (!cart[currentUserEmail]) {
        cart[currentUserEmail] = [];
      }

      let quantity = parseInt(quantityInput.value);
      let cartItem = {
        id: key,
        name: product.name,
        brand: product.brand,
        price: product.price,
        quantity: quantity,
      };

      handleCartUpdate(cart, currentUserEmail, cartItem, key);

      popup.remove();
      document.body.style.overflow = "";
    });
}

function updateExistingCartItem(productId) {
  let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  if (currentUser && currentUser.email) {
    let storedCart = localStorage.getItem("cart");
    if (storedCart) {
      let cart = JSON.parse(storedCart);
      let userCart = cart[currentUser.email];

      if (userCart) {
        let existingItem = userCart.find((item) => item.id === productId);

        if (existingItem) {
          setTimeout(() => {
            let quantityInput = document.getElementById("quantity");
            if (quantityInput) {
              quantityInput.value = existingItem.quantity;
              let priceInput = document.getElementById("productPrice");
              if (priceInput) {
                let originalPrice = parseFloat(
                  priceInput.dataset.originalPrice
                );
                priceInput.value = `${(
                  originalPrice * existingItem.quantity
                ).toFixed(2)} EGP`;
              }
            }
          }, 100);
        }
      }
    }
  }
}

function setupLikeButtons() {
  const likes = document.querySelectorAll(".like");
  likes.forEach((like) => {
    like.addEventListener("click", function () {
      let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
      if (!currentUser || !currentUser.email) {
        return;
      }

      const productId = this.closest(".product").id;
      const icon = like.querySelector("i");
      toggleProductLike(like, productId, icon);
    });
  });
}

function toggleProductLike(like, productId, icon) {
  let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  let storedLikes = localStorage.getItem("productLikes");
  let likes = storedLikes ? JSON.parse(storedLikes) : {};

  if (!likes[currentUser.email]) {
    likes[currentUser.email] = [];
  }

  if (icon.classList.contains("text-danger")) {
    icon.classList.remove("text-danger");
    likes[currentUser.email] = likes[currentUser.email].filter(
      (id) => id !== productId
    );
    Popup("The product has been removed from your favorites!");
  } else {
    icon.classList.add("text-danger");
    if (!likes[currentUser.email].includes(productId)) {
      likes[currentUser.email].push(productId);
    }
    Popup("The product has been added to your favorites! ❤️");
  }

  localStorage.setItem("productLikes", JSON.stringify(likes));
  const activeFavoritesButton = document.querySelector(
    ".Search-btn .Favorites.active"
  );
  if (activeFavoritesButton) {
    const product = document.getElementById(productId);
    if (product) {
      product.style.display = icon.classList.contains("text-danger")
        ? "block"
        : "none";
    }
  }
}

function updateLikesDisplay() {
  let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  if (currentUser?.email) {
    let storedLikes = localStorage.getItem("productLikes");
    let likes = storedLikes ? JSON.parse(storedLikes) : {};

    if (likes[currentUser.email]) {
      document.querySelectorAll(".like i").forEach((icon) => {
        icon.classList.remove("text-danger");
      });

      likes[currentUser.email].forEach((productId) => {
        let likeButton = document.querySelector(`#${productId} .like i`);
        if (likeButton) {
          likeButton.classList.add("text-danger");
        }
      });
    }
  }
}

function handleCartUpdate(cart, currentUserEmail, cartItem, key) {
  let existingIndex = cart[currentUserEmail].findIndex(
    (item) => item.id === key
  );

  if (existingIndex !== -1) {
    cart[currentUserEmail][existingIndex].quantity = cartItem.quantity;
  } else {
    cart[currentUserEmail].push(cartItem);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCounter();
  Popup("The product has been successfully added to your cart! 🛒✅");
}

signout.addEventListener("click", () => {
  let status = sessionStorage.getItem("status");
  updateCartCounter();
  if (status) {
    sessionStorage.removeItem("status");
  }
  Popup("You have successfully logged out! 🔒✅", "#add8e6");

  setTimeout(() => {
    location.reload();
  }, 1000);
});

cardIcon.addEventListener("click", () => {
  displayCartProducts();
});


function displayCartProducts() {
  let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  if (!currentUser || !currentUser.email) {
    return;
  }

  const storedCart = localStorage.getItem("cart");
  if (!storedCart) return;

  const cart = JSON.parse(storedCart);
  const userCart = cart[currentUser.email] || [];

  if (!document.querySelector(".cart-products-container")) {
    const cartContainer = document.createElement("div");
    cartContainer.className = "cart-products-container modal d-block";
    cartContainer.innerHTML = `
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Shopping Card</h5>
                        <button type="button" class="btn-close" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="cart-items"></div>
                        <div class="total-price fw-bold mt-3 text-end"></div>
                    </div>
                </div>
            </div>
        `;
    document.body.appendChild(cartContainer);

    cartContainer.querySelector(".btn-close").addEventListener("click", () => {
      cartContainer.remove();
      document.body.style.overflow = "";
    });

    cartContainer.addEventListener("click", (e) => {
      if (e.target === cartContainer) {
        cartContainer.remove();
        document.body.style.overflow = "";
      }
    });
  }

  const cartItems = document.querySelector(".cart-items");
  const totalPriceElement = document.querySelector(".total-price");
  cartItems.innerHTML = "";
  let totalPrice = 0;

  userCart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    totalPrice += itemTotal;
    
    const productType = products[item.id]?.type || "N/A";
    const formattedType = productType.charAt(0).toUpperCase() + productType.slice(1);

    const itemElement = document.createElement("div");
    itemElement.className = "cart-item border-bottom pb-3 mb-3";
    itemElement.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <div class="item-info">
                    <h6 class="mb-0 fw-bold">${item.name}</h6>
                    <small class="text-info d-block fw-bold ">${formattedType}</small>
                    <small class="text-muted">${item.brand}</small>
                    <p class="mb-0">Price: ${item.price} EGP</p>
                </div>
                <div class="item-quantity d-flex align-items-center">
                    <button class="btn btn-sm btn-danger decrease-btn me-2">-</button>
                    <input type="number" value="${item.quantity}" min="1"
                        class="form-control form-control-sm text-center" style="width: 60px">
                    <button class="btn btn-sm btn-success increase-btn ms-2">+</button>
                    <div class="item-total ms-3">
                        <p class="mb-0">Total: ${itemTotal} EGP</p>
                    </div>
                    <button class="btn btn-sm btn-danger delete-btn ms-3">×</button>
                </div>
            </div>
        `;

    const quantityInput = itemElement.querySelector("input");
    const decreaseBtn = itemElement.querySelector(".decrease-btn");
    const increaseBtn = itemElement.querySelector(".increase-btn");
    const deleteBtn = itemElement.querySelector(".delete-btn");

    decreaseBtn.addEventListener("click", () => {
      updateCartItem(index, Math.max(1, parseInt(quantityInput.value) - 1));
    });

    increaseBtn.addEventListener("click", () => {
      updateCartItem(index, parseInt(quantityInput.value) + 1);
    });

    quantityInput.addEventListener("change", () => {
      updateCartItem(index, Math.max(1, parseInt(quantityInput.value) || 1));
    });

    deleteBtn.addEventListener("click", () => {
      deleteCartItem(index);
    });

    cartItems.appendChild(itemElement);
  });

  totalPriceElement.textContent = `Total price: ${totalPrice} EGP`;
  document.body.style.overflow = "hidden";
}

function updateCartItem(index, newQuantity) {
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  if (!currentUser || !currentUser.email) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || {};
  if (!cart[currentUser.email]) return;

  cart[currentUser.email][index].quantity = newQuantity;
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCartProducts();
}

function deleteCartItem(index) {
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  if (!currentUser || !currentUser.email) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || {};
  if (!cart[currentUser.email]) return;

  cart[currentUser.email].splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCounter();

  if (cart[currentUser.email].length === 0) {
    document.querySelector(".cart-products-container").remove();
    document.body.style.overflow = "";
  } else {
    displayCartProducts();
  }

  Popup("The product has been successfully deleted! 🗑✅");
}

function updateCartCounter() {
  const counter = document.querySelector(".counter");
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

  if (currentUser && currentUser.email) {
    const cart = JSON.parse(localStorage.getItem("cart")) || {};
    const userCart = cart[currentUser.email] || [];
    const itemCount = userCart.length;

    counter.textContent = itemCount;

    if (itemCount > 0) {
      counter.style.display = "inline-block";
    } else {
      counter.style.display = "none";
    }
  } else {
    counter.textContent = "0";
    counter.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let status = sessionStorage.getItem("status");
  let currentUser = JSON.parse(sessionStorage.getItem("currentUser")) || "";
  let currentUserEmail = currentUser.email || "";

  if (status) {
    DrawProducts();
    updateCartCounter();
    welcome.classList.add(
      "d-flex",
      "text-light",
      "ms-auto",
      "justify-content-end"
    );
    signIn.classList.add("d-none");
    register.classList.add("d-none");
    welcomeUser.innerHTML = `WelCome<span class="text-info ms-2 text-capitalize"> ${currentUser.firstName} ${currentUser.lastName}</span>`;
    productsBtn.href = "#products";
  } else {
    welcome.classList.add("d-none");
    signout.classList.add("d-none");
    show.classList.add("d-none");
    productsBtn.href = "../pages/login.html";
  }
});
