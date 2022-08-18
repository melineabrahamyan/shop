export function createItem(item) {
  const div = document.createElement("div");
  div.setAttribute("class", "items-div");

  const image = document.createElement("img");
  image.setAttribute("src", item.img);

  const title = document.createElement("h3");
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
