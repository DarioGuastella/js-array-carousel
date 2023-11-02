imagesPath = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
]

let imagesToAdd = "";
for (let i = 0; i < imagesPath.length; i++) {
    const singleImagePath = imagesPath[i];
    imagesToAdd += `<img src="${singleImagePath}">`;
}
document.getElementById("wrapper").innerHTML = imagesToAdd;

let currentImg = 0;
const images = document.querySelectorAll("#wrapper img");
images[currentImg].classList.add("displayed");