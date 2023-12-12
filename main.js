let container = document.querySelector(".main-container")
let crouselImage = document.querySelector(".crousel")
console.log(crouselImage);
let alphabet;

let i = 0;
let crousel = [
    "assets/crousel/img 1.webp",
    "assets/crousel/crousel-img2.jpg",
    "assets/crousel/crousel-img3.jpg"
]
autoplay = setInterval(function () {
    i++;
    if (i > 2) {
        i = 0;
    }
    crouselImage.setAttribute("src", crousel[i])
}, 1200);


let patterns = ["pattern1", "pattern2", "pattern3", "pattern4", "pattern5", "pattern6"]


for (let i = 65, j = 0; i <= 90; i++, j++) {
    if (j >= 6) {
        j = 0;
    }
    alphabet = String.fromCharCode(i)
    let frontCard = document.createElement("div")
    let backCard = document.createElement("div")
    // frontCard.setAttribute("class", "front-card")
    backCard.setAttribute("class", "back-card")
    container.appendChild(frontCard)
    container.appendChild(backCard)


    let text = document.createElement("h1")
    text.setAttribute("class", "text")
    frontCard.appendChild(text)
    text.innerHTML = alphabet

    let image = document.createElement("img")
    image.setAttribute("src", `assets/alphabet image/${alphabet.toLocaleLowerCase()}.png`)
    image.setAttribute("class", "alphabet-img")
    backCard.appendChild(image)

    let flipCard = document.createElement("div")
    flipCard.appendChild(frontCard)
    flipCard.appendChild(backCard)
    container.appendChild(flipCard)
    flipCard.setAttribute("class", "flip-card")
    console.log(flipCard);


    flipCard.addEventListener("click", function () {
        flipCard.classList.toggle("flipped")
    })

    frontCard.classList.add("front-card")
    frontCard.classList.add(patterns[j])





}




