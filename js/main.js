// Percorso immagini
imagesPath = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
]

// Inserimento immagini

let imagesToAdd = "";
for (let i = 0; i < imagesPath.length; i++) {
    const singleImagePath = imagesPath[i];
    imagesToAdd += `<img src="${singleImagePath}">`;
}
document.getElementById("wrapper").innerHTML += imagesToAdd;


// Visualizzo la prima immagine

let currentImg = 0;
const images = document.querySelectorAll("#wrapper img");
images[currentImg].classList.add("displayed");

// Pulsante SU

document.getElementById("arrowUp").addEventListener("click", function () {
    if (currentImg < images.length - 1) {
        images[currentImg].classList.remove("displayed");
        currentImg++;
        images[currentImg].classList.add("displayed");
    } else if (currentImg == 4) {
        images[currentImg].classList.remove("displayed");
        currentImg = 0;
        images[currentImg].classList.add("displayed");
    }
});

// Pulsante GIU 

document.getElementById("arrowDown").addEventListener("click", function () {
    if (currentImg > 0) {
        images[currentImg].classList.remove("displayed");
        currentImg--;
        images[currentImg].classList.add("displayed");
    } else if (currentImg == 0) {
        images[currentImg].classList.remove("displayed");
        currentImg = 4;
        images[currentImg].classList.add("displayed");
    }
});