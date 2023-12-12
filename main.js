let container = document.querySelector(".main-container")
let alphabet;


for (let i = 65, j = 0; i <= 90; i++, j++) {
    alphabet = String.fromCharCode(i)
    let frontCard = document.createElement("div")
    let backCard = document.createElement("div")
    frontCard.setAttribute("class", "front-card")
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



}




