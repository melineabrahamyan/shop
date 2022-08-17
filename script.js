import { data } from "./data.js";
import { addToCart } from "./shoppingCart.js";
import { addToFavourites } from "./favourites.js";

const container = document.getElementById("container");
const input = document.getElementById("input");

let inputText = "";
let id;
input.addEventListener("keyup", function () {
  inputText = input.value;
  if (id !== undefined) {
    clearTimeout(id);
  }
  id = setTimeout(() => {
    render();
  }, 1500);
});

function render() {
  container.innerHTML = "";
  let items = data
    .filter(
      (item) =>
        item.title
          .toLocaleLowerCase()
          .indexOf(inputText.toLocaleLowerCase()) !== -1
    )
    .map((item) => addItem(item));
  container.append(...items);
  addToFavourites();
  addToCart(data);
}

function addItem(item) {
  const div = document.createElement("div");
  div.setAttribute("class", "items-div");

  const image = document.createElement("img");
  image.setAttribute("src", item.img);

  const title = document.createElement("h4");
  title.innerText = item.title;

  const price = document.createElement("h4");
  price.innerText = item.price;

  const cartButton = document.createElement("button");
  cartButton.setAttribute("class", "cart-button");
  cartButton.innerHTML += '<ion-icon name="cart-outline"></ion-icon>';

  const likeButton = document.createElement("button");
  likeButton.setAttribute("class", "like-button");
  likeButton.innerHTML += '<ion-icon name="heart-outline"></ion-icon>';

  div.append(image, title, price, cartButton, likeButton);
  return div;
}

render();
