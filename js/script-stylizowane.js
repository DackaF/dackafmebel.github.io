//HEADER
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 50);
});

//POPUP
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popup-image");
const closePopup = document.getElementById("close-popup");
const prevImage = document.getElementById("prev-image");
const nextImage = document.getElementById("next-image");
const galleryImages = document.querySelectorAll(".gallery-image");

let currentIndex = 0;

function openPopup(index) {
  currentIndex = index;
  popupImage.src = galleryImages[index].src;
  popup.style.display = "block";
}

function closePopupWindow() {
  popup.style.display = "none";
}

function showPrevImage() {
  if (currentIndex > 0) {
    currentIndex--;
    openPopup(currentIndex);
  }
}

function showNextImage() {
  if (currentIndex < galleryImages.length - 1) {
    currentIndex++;
    openPopup(currentIndex);
  }
}

closePopup.addEventListener("click", closePopupWindow);
prevImage.addEventListener("click", showPrevImage);
nextImage.addEventListener("click", showNextImage);

galleryImages.forEach((image, index) => {
  image.addEventListener("click", () => openPopup(index));
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    closePopupWindow();
  }
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
