let cartItems = [];
let cartItemsFullDataArray = [];
function addToCart(data) {
  const cartButtons = document.querySelectorAll(".cart-button");

  cartButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      let i = cartItems.indexOf(data[index].title); // checks if the item is already in the cart
      if (i === -1) {
        // doesn't exist in the cart => should be added
        const newItem = {
          title: data[index].title,
          price: data[index].price,
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
          cartItemsFullDataArray[i].qunatity
        );
        cartItemsFullDataArray[i].qunatity++;
      }
    });
  });
  cartItems = [];
}

let cartDiv = document.getElementById("cart-items");
let cart = document.getElementById("right-box");
cartDiv.style.display = "none";

function addToCartDiv(item) {
  const div = document.createElement("div");
  div.append(`${item.title}, ${item.price}, ${item.qunatity} հատ`);
  cartDiv.append(div);
}

function changeItemData(index, title, priceForOne, qunatity) {
  let priceNumber = +priceForOne.slice(0, priceForOne.length - 3);
  let changeQuantity = qunatity + 1;
  let changedPrice = priceNumber * changeQuantity;
  cartDiv.children[
    index
  ].innerHTML = `${title}, ${changedPrice} դր,  ${changeQuantity} հատ`;
}

let isCartShown = false;
function showCart() {
  cart.addEventListener("click", function () {
    window.scrollTo(0, 0);
    if (isCartShown) {
      cartDiv.style.display = "block";
      isCartShown = false;
    } else {
      cartDiv.style.display = "none";
      isCartShown = true;
    }
  });
}

export { addToCart, showCart };
