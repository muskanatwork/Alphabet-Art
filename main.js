let container = document.querySelector(".main-container")
let crouselImage = document.querySelector(".crousel")
let dots = document.querySelectorAll(".dot")
let alphabet;

//-------------------This is use for Crousel Image--------------------
let i = 0;
let crousel = [
    "assets/crousel/img-1.jpeg",
    "assets/crousel/img-2.jpeg",
    "assets/crousel/img-3.jpeg"
]
autoplay = setInterval(function () {
    i++;
    let selectedDotId = "#dot" + i;
    let selectedDot = document.querySelector(selectedDotId);

    dots.forEach(dot => dot.style.backgroundColor = "white");
    selectedDot.style.backgroundColor = "black";

    if (i > 2) {
        i = 0;

    }
    crouselImage.setAttribute("src", crousel[i])
}, 1200);



for (let i = 65, j = 0, k = 0; i <= 90; i++, j++, k++) {

    alphabet = String.fromCharCode(i)
    // ------------------This is use for front card and back card--------------------
    let frontCard = document.createElement("div")
    let backCard = document.createElement("div")
    // frontCard.setAttribute("class", "front-card")
    backCard.setAttribute("class", "back-card")
    container.appendChild(backCard)
    container.appendChild(frontCard)


    //--------------------This is use for Alphabet text A to Z--------------
    let text = document.createElement("h1")
    text.setAttribute("class", "text")
    frontCard.appendChild(text)
    text.innerHTML = alphabet

    //--------------------This is use for Alphabet Images A to Z--------------
    let image = document.createElement("img")
    image.setAttribute("src", `assets/alphabetImage/${alphabet.toLowerCase()}.jpeg`)
    image.setAttribute("class", "alphabet-img")
    backCard.appendChild(image)


    // ----------------------This is use for Flip card--------------------------------
    let flipCard = document.createElement("div")
    flipCard.appendChild(frontCard)
    flipCard.appendChild(backCard)
    container.appendChild(flipCard)
    flipCard.setAttribute("class", "flip-card")

    flipCard.addEventListener("click", function () {
        flipCard.classList.toggle("flipped")
        let sound = new SpeechSynthesisUtterance();
        sound.text = soundArr[k]
        window.speechSynthesis.speak(sound);
    })

    // -------------This is use for alphabet sound------------------------
    let soundArr = ["apple", "ball", "cat", "dog", "elephant", "fish", "goat", "hourse", "igloo", "joker", "kite", "lion"
        , "monkey", "nose", "octopus", "pig", "queen", "rocket", "snake", "tiger", "umbrela", "ven", "watermelon", "x-ray", "yak", "zebra"]

    //--------------------This is use for Alphabet Word A to Z--------------
    let word = document.createElement("p")
    word.innerHTML = soundArr[k];
    backCard.appendChild(word)
    word.setAttribute("class", "alphabet-word")

    // --------------This is use for front pattern-------------------------------
    if (j >= 6) {
        j = 0;
    }
    let patterns = ["pattern1", "pattern2", "pattern3", "pattern4", "pattern5", "pattern6"]
    frontCard.classList.add("front-card")
    frontCard.classList.add(patterns[j])


    let faIcons = document.createElement("div")
    faIcons.classList.add("fa-icons")
    backCard.appendChild(faIcons)

    //--------- Create like icon---------------------
    let like = document.createElement("i")
    like.classList.add("fa-regular", "fa-heart")
    faIcons.appendChild(like)

    //--------- Create expend icon---------------------
    let expend = document.createElement("i")
    expend.classList.add("fa-solid", "fa-arrow-rotate-left");
    faIcons.appendChild(expend)

    //--------- Create share icon---------------------
    let share = document.createElement("i")
    share.classList.add("fa-solid", "fa-share-from-square");
    faIcons.appendChild(share)

    //------------------like icon------------
    like.addEventListener("click", (event) => {
        like.classList.toggle("fa-solid")
        like.style.color = "red"
        event.stopPropagation();
    });

    like.addEventListener("mouseover", (event) => {
        like.classList.toggle("fa-bounce")
        event.stopPropagation();
    });

    like.addEventListener("mouseleave", (event) => {
        like.classList.remove("fa-bounce")
        event.stopPropagation();
    });

}




