function addToCart(data) {
  let cartItems = [];
  let itemTitles = [];
  const cartButtons = document.querySelectorAll(".cart-button");

  cartButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      let i = itemTitles.indexOf(data[index].title); // checks if the item is already in the cart
      if (i === -1) {
        cartItems.push({
          title: data[index].title,
          price: data[index].price,
          qunatity: 1,
        });
      } else {
        cartItems[i].qunatity++;
      }

      itemTitles = cartItems.map((item) => item.title);
    });
  });

  cartRender(cartItems);
}

function cartRender(items) {
  const cart = document.getElementById("cart-items-list");
  const cartBox = document.getElementById("right-box");
  const box = document.createElement("div");

  const container = document.getElementById("container");

  cartBox.addEventListener("click", function () {
    console.log(items);

    const itemDivs = items.map((item) => {
      const itemBox = document.createElement("div");

      const title = document.createElement("span");
      title.innerText = item.title + " , ";

      const price = document.createElement("span");
      price.innerText = item.price + ",  ";

      const qunatity = document.createElement("span");
      qunatity.innerText = item.qunatity + " հատ";

      itemBox.append(title, price, qunatity);
      box.append(itemBox);
      cart.append(box);

      container.addEventListener("click", function () {
        box.innerHTML = "";
      });
    });
  });
}

export { addToCart };
