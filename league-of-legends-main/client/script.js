var header = document.querySelector(".header");
var general_content = document.querySelector(".general");
var home_button = document.querySelector(".start-button");
var shop_button = document.querySelector(".shop-button");

let card = document.querySelectorAll(".card");
card.forEach((item) => {
    if (item.dataset.promotion) {
        item.innerHTML += `<img class="promotion-img" src="../../../client/img/store/discount.png" width="15" height="15">`;
    }
});

function open_start() {
    header.innerHTML = `
    <nav>
                <ul class="d-flex gap-4 text-uppercase">
                    <li class="links-disabled">overview</li>
                    <li style="cursor: pointer;">another sky</li>
                    <li class="links-disabled">lol esports</li>
                    <li class="links-disabled">update notes</li>
                </ul>
            </nav>`;
    header.classList.add("header-start");
    header.classList.remove("header-highlights");
    header.classList.remove("header-champions");

    var general_content = document.querySelector(".general");
    general_content.innerHTML = `<div id="carousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner carousel-start">
                    <!-- PRIMARY -->
                    <div class="carousel-item active">
                        <div class="developed">
                            <p class="rights">This is a project for educational purposes only. It was created just to test my Front/Back-End skills. All copyrights and brand identity belong to Riot Games.</p>
                        </div>
                    </div>
                    <!-- SECOND -->
                    <div class="carousel-item">
                        <div class="developed">
                            <h2 style="margin-bottom: 18px;font-weight: 700; display: flex; justify-content: center;">DEVELOPED BY</h2>
                            <div class="info-devs">
                                <div class="devs">
                                    <h3 style="margin-bottom: 6px;">UlikGames</h3>
                                    <a href="https://github.com/UlikGames" target="_blank"><i style="margin-right: 6px;" class="fab fa-github" aria-hidden="true"></i></a>
                                    <a href="https://www.instagram.com/ulvin_necefov/" target="_blank"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                                    <a href="https://discord.gg/Ap0cal1p3#3818" target="_blank"><i class="fab fa-discord" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="https://live.staticflickr.com/65535/52280173860_fbdca2d4ee_h.jpg" width="800" height="510" alt="wallpaper">`;

    home_button.classList.add("active-1");
    shop_button.classList.remove("active-1");
}

function open_shop() {
    header.innerHTML = `
    <nav>
        <ul class="d-flex gap-4 text-uppercase">
            <li style="cursor: pointer;">Featured</li>
            <li style="cursor: pointer;" onclick="open_store_champions()">Champions</li>
            <li class="links-disabled">skins</li>
            <li class="links-disabled">tft</li>
            <li class="links-disabled">loot</li>
            <li class="links-disabled">accessories</li>
        </ul>
    </nav>
    <div class="d-flex gap-3 header-highlights-buttons">
        <button class="links-disabled">BUY RP</button>
        <button class="links-disabled"><img src="./img/store/present-icon.svg" alt=""></button>
        <button class="links-disabled"><img src="./img/store/settings-icon.svg" alt=""></button>
    </div>`;
    header.classList.add("header-highlights");
    header.classList.remove("header-start");
    header.classList.remove("header-champions");

    general_content.innerHTML = `<object style="height: 100%; width: 100%;" type="text/html" data="./store/highlights/index.html"></object>`;

    home_button.classList.remove("active-1");
    shop_button.classList.add("active-1");
}

function open_store_champions() {
    let header = document.querySelector(".header");
    header.innerHTML = `
    <nav>
        <ul class="d-flex gap-4 text-uppercase">
            <li style="cursor: pointer;" onclick="open_shop()">Featured</li>
            <li style="cursor: pointer;">Champions</li>
            <li class="links-disabled">skins</li>
            <li class="links-disabled">tft</li>
            <li class="links-disabled">loot</li>
            <li class="links-disabled">accessories</li>
        </ul>
    </nav>
    <div class="d-flex gap-3 header-highlights-buttons">
        <button class="links-disabled">BUY RP</button>
        <button class="links-disabled"><img src="./img/store/present-icon.svg" alt=""></button>
        <button class="links-disabled"><img src="./img/store/settings-icon.svg" alt=""></button>
    </div>`;
    header.classList.add("header-champions");
    header.classList.remove("header-highlights");
    header.classList.remove("header-start");

    general_content.innerHTML = `<object style="height: 100%; width: 100%;" type="text/html" data="./store/champions/index.html"></object>`;
}
