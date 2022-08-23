function addToFavourites() {
  const likeButtons = document.querySelectorAll(".like-button");
  likeButtons.forEach((button) => {
    markRed(button);
  });
}

function markRed(button) {
  let added = false;
  button.addEventListener("click", function () {
    if (added) {
      button.style.color = "black";
      added = false;
    } else {
      button.style.color = "#E12E2EFF";
      added = true;
    }
  });
}

export { addToFavourites };
