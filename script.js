const mainimgbox = document.querySelector(".main-imgbox");
const mainImg = document.querySelector(".main_img");
const images = document.querySelectorAll(".img1, .img2, .img3");
const initialImg = "./images/main img.jpg";
let lastClick = null;

function changeImage(image) {
  mainImg.src = image.src;
  lastClick = image;
}
function resetImage() {
  setTimeout(function () {
    if (lastClick && lastClick.classList.contains("img3")) {
      mainImg.src = initialImg;
    }
  }, 7000);
}
images.forEach((img) => {
  img.addEventListener("click", function () {
    changeImage(img);
    resetImage();
  });
});
