import gallery from './gallery.json' assert{type: 'json'}
console.log(gallery);

let container = document.querySelector(".art-container");
for (let i = 0; i < gallery.length; i++) {
    let card = document.createElement("div");
    card.classList.add("gallery-card");
    container.appendChild(card);


    let paragraph = document.createElement("div");
    paragraph.classList.add("paragraph-text")
    card.appendChild(paragraph)
    paragraph.innerText = gallery[i].name


    let imgArt = document.createElement("div");
    imgArt.classList.add("imgArt-card");
    card.appendChild(imgArt);
    // console.log(card);

    let profile = document.createElement("img")
    profile.setAttribute("src", gallery[i].profile)
    profile.classList.add("profile-img")
    imgArt.appendChild(profile)

    let alphabet = document.createElement("div");
    alphabet.classList.add("albhabet-text")
    card.appendChild(alphabet)
    alphabet.innerText = gallery[i].albhabetWord


    let galleryFaIcons = document.createElement("div");
    galleryFaIcons.classList.add("fa-icons");
    card.appendChild(galleryFaIcons);


    //Heart Icon           
    let likeIcon = document.createElement("i");
    likeIcon.classList.add("fa-regular", "fa-heart");
    galleryFaIcons.appendChild(likeIcon);

    // expand Ixon
    let expand = document.createElement("i");
    expand.classList.add("fas", "fa-expand-alt");
    galleryFaIcons.appendChild(expand);

    // share Icons
    let share = document.createElement("i");
    share.classList.add("fas", "fa-share-alt");
    galleryFaIcons.appendChild(share);

    likeIcon.addEventListener("click", (event) => {
        likeIcon.classList.toggle("fas");
        likeIcon.style.color = "red";
        event.stopPropagation();

    })


    likeIcon.addEventListener("mouseover", (event) => {
        likeIcon.classList.add("fa-bounce");
        event.stopPropagation();
    })
    likeIcon.addEventListener("mouseleave", (event) => {
        likeIcon.classList.remove("fa-bounce");
        event.stopPropagation();
    })
}
