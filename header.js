let nav =
    `<!-- <Logo/> -->
<div class="logo">
    <img src="assets/logo/Alphabet-Art logo.png.png" alt="Logo">
</div>
<!-- <NavigationMenu/> -->
<nav>
    <div>
        <a href="/Alphabet-Art/stickers/index.html"><img src="../assets/navImages/sticker.png" alt="Stickers"></a>
        <p>Stickers</p>
    </div>
    <div>
        <a href="../workshop/index.html"><img src="../assets/navImages/workshop.png" alt="Workshop"></a>
        <p>Workshop</p>
    </div>
    <div>
        <a href="/Alphabet-Art/contest/index.html"><img src="../assets/navImages/contest.png" alt="Contest"></a>
        <p>Contest</p>
    </div>
</nav>`
let header = document.getElementById("header");
header.innerHTML = nav;