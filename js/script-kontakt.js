//HEADER
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 50);
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

// MAPS
document.addEventListener("DOMContentLoaded", function () {
  const warszawaLink = document.getElementById("warszawa-link");
  const poznanLink = document.getElementById("poznan-link");
  const mapContainer = document.getElementById("map-container");

  function displayWarszawaMap() {
    mapContainer.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.673744196301!2d21.034663899999998!3d52.249309399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b90946cb0d3%3A0x2e18058a9284ade6!2sKuchnie%2C%20meble%20na%20wymiar%20-%20mebelhaus!5e0!3m2!1spl!2spl!4v1695043045738!5m2!1spl!2spl"  referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  }

  function displayPoznanMap() {
    mapContainer.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d608.6075986069131!2d16.922313299311337!3d52.3988754711962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b098061f1bd%3A0xdf5d91806fcb42fd!2sKuchnie%2C%20Meble%20Na%20Wymiar%20MEBELHAUS!5e0!3m2!1spl!2spl!4v1695110727978!5m2!1spl!2spl" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  }

  displayWarszawaMap();

  warszawaLink.addEventListener("click", function (event) {
    event.preventDefault();
    displayWarszawaMap();
  });

  poznanLink.addEventListener("click", function (event) {
    event.preventDefault();
    displayPoznanMap();
  });
});
