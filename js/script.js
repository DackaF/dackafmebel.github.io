//HEADER

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 50);
});

// ABOUT ME - BUUTONS

const buttons = [document.getElementById("button1"), document.getElementById("button2"), document.getElementById("button3")];
const texts = [document.getElementById("text1"), document.getElementById("text2"), document.getElementById("text3")];

function toggleText(selectedButton, selectedText) {
  if (selectedText.style.maxHeight) {
    selectedText.style.maxHeight = null;
  } else {
    texts.forEach((text) => {
      if (text !== selectedText) {
        text.style.maxHeight = null;
      }
    });
    selectedText.style.maxHeight = selectedText.scrollHeight + "px";
  }
}

buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    toggleText(button, texts[index]);
  });
});

// MENU - MOBILE

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("icon-menu");
  const navi = document.querySelector(".navi");

  menuButton.addEventListener("click", function () {
    menuButton.classList.toggle("active");
    navi.classList.toggle("open");
  });
});
