let cartItems = [];
let cartItemsFullDataArray = [];

function addToCart(data) {
  const cartButtons = document.querySelectorAll(".cart-button");

  cartButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      animateCSS(button, "bounceOutRight");

      let i = cartItems.indexOf(data[index].title); // checks if the item is already in the cart
      if (i === -1) {
        // doesn't exist in the cart => should be added
        const newItem = {
          title: data[index].title,
          price: data[index].price,
          img: data[index].img,
          qunatity: 1,
        };
        addToCartDiv(newItem);

        cartItems.push(newItem.title);
        cartItemsFullDataArray.push(newItem);
      } else {
        // already exists in the cart => the quantity and the price should be increased
        changeItemData(
          i,
          cartItemsFullDataArray[i].title,
          data[index].price,
          data[index].img,
          cartItemsFullDataArray[i].qunatity
        );
        cartItemsFullDataArray[i].qunatity++;
      }
    });
  });

  cartItems = [];
}

function animateCSS(element, animation, prefix = "animate__") {
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    element.style.color = "red";
    element.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      element.style.color = "black";
      event.stopPropagation();
      element.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    element.addEventListener("animationend", handleAnimationEnd, {
      once: true,
    });
  });
}

let cartDiv = document.getElementById("cart-wrapper");
let cart = document.getElementById("cart-button");
let cartWindow = document.getElementById("cart-window");
cartWindow.style.display = "none";
let totalPrice = document.getElementById("total-price");

function addToCartDiv(item) {
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="cart-item">
  <img src=${item.img}>
  <div class="details">
      <h3>${item.title}</h3>
      <p class="quantity">${item.qunatity} հատ</p>
      <p class="price">${item.price}</p>
  </div>
  <div class="remove">x</div>
</div>
  `;
  cartDiv.append(div);
  removeItem();
  totalPrice.innerText = totalPriceCalculation();
}

function changeItemData(index, title, priceForOne, img, qunatity) {
  let priceNumber = +priceForOne.slice(0, priceForOne.length - 3);
  let changeQuantity = qunatity + 1;
  let changedPrice = priceNumber * changeQuantity;
  cartDiv.children[index].innerHTML = `
  <div class="cart-item">
  <img src=${img}>
  <div class="details">
      <h3>${title}</h3>
      <p class="quantity">${changeQuantity} հատ</p>
      <p class="price">${changedPrice} դր</p>
  </div>
  <div class="remove">x</div>
</div>
  `;
  removeItem();
  totalPrice.innerText = totalPriceCalculation();
}

let isCartShown = false;
function showCart() {
  cart.addEventListener("click", function () {
    if (isCartShown) {
      cartWindow.style.display = "block";
      isCartShown = false;
    } else {
      cartWindow.style.display = "none";
      isCartShown = true;
    }
  });
}

function removeItem() {
  let removeButtons = document.querySelectorAll(".remove");
  removeButtons.forEach((button, index) => {
    button.addEventListener("click", function (e) {
      e.target.parentElement.remove();
      totalPrice.innerText = totalPriceCalculation();
    });
  });
}

function totalPriceCalculation() {
  let priceArray = [...document.querySelectorAll(".price")]
    .map((el) => el.innerText)
    .map((el) => el.slice(0, el.length - 2))
    .map((el) => Number(el));

  let price = priceArray.reduce((aggr, val) => {
    return aggr + val;
  }, 0);
  return `Ընդհանուր ${price} դր`;
}

export { addToCart, showCart };
