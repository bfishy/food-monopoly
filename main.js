const chance_card = document.querySelector(".chance__inner");

chance_card.addEventListener("click", function (e) {
  chance_card.classList.toggle('is-flipped');
});

const chest_card = document.querySelector(".chest__inner");

chest_card.addEventListener("click", function (e) {
  chest_card.classList.toggle('is-flipped');
});