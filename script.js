import { data } from "./data.js";
import { createItem } from "./createItem.js";
import { addToCart, showCart } from "./shoppingCart.js";
import { addToFavourites } from "./favourites.js";

const CONTAINER = document.getElementById("container");
const INPUT = document.getElementById("input");

let inputText = "";
let id;
INPUT.addEventListener("keyup", function () {
  inputText = INPUT.value;
  if (id !== undefined) {
    clearTimeout(id);
  }
  id = setTimeout(() => {
    render();
  }, 1500);
});

function render() {
  CONTAINER.innerHTML = "";
  let filteredData = data.filter(
    (item) =>
      item.title.toLocaleLowerCase().indexOf(inputText.toLocaleLowerCase()) !==
      -1
  );
  let filteredDataHTMLElements = filteredData.map((item) => createItem(item));
  CONTAINER.append(...filteredDataHTMLElements);
  addToFavourites();
  addToCart(filteredData);
  showCart();
}

render();
