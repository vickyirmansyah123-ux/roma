const popup = document.getElementById("info-popup");
const popupImg = document.getElementById("popup-img");
const popupTitle = document.getElementById("popup-title");
const popupDesc = document.getElementById("popup-desc");
const popupLink = document.getElementById("popup-link");
const closeBtn = document.getElementById("close-popup");

const clickSound = document.getElementById("click-sound");

const data = {
    colosseum: {
        title: "Colosseum",
        img: "gambar/download (3).jpg",
        desc: "Amphitheatre megah peninggalan Kekaisaran Romawi.",
        link: "https://colosseo-roma.it/en/?tm=tt&ap=gads&aaid=adaOlNHc91tAV&gad_source=1&gad_campaignid=21743437871&gbraid=0AAAAABY5oygYQQW5n5esIQfBNMzlzAF_H&gclid=Cj0KCQiArt_JBhCTARIsADQZayluxzHh8Ac1M05vFjGBSz-I0LpCxcYKPvTKODeMPdcJtjsPCMh6SSwaAp9iEALw_wcB"
    },
    pantheon: {
        title: "Pantheon",
        img: "gambar/download.jpg",
        desc: "Kuil kuno dengan kubah terbesar pada masanya.",
        link: "https://www.pantheon-tickets.it/fast-track-for-access-to-the-pantheon/?gad_source=1&gad_campaignid=22340120359&gbraid=0AAAAAoPakSQVcaTgZQeuQniW4-MfZow0i&gclid=Cj0KCQiArt_JBhCTARIsADQZaymZlS3b_oJb0CGbz6worfHgeWqHFrcAJHLdVb6oTNNYdLtlhYcmUNYaAj2XEALw_wcB"
    },
    trevi: {
        title: "Trevi Fountain",
        img: "gambar/download (4).jpg",
        desc: "Air mancur paling terkenal di dunia.",
        link: "https://nationalgeographic.grid.id/read/133836584/jadi-ikon-kota-abadi-roma-mengapa-trevi-fountain-sangat-terkenal?page=all"
    },
    vatican: {
        title: "Vatican City",
        img: "gambar/download (1).jpg",
        desc: "Negara terkecil di dunia dan pusat agama Katolik.",
        link: "https://vaticancitypass.com/?gad_source=1&gad_campaignid=22393483912&gbraid=0AAAAABKR1DjmRU2FzKriBIdxfBnusRTLu&gclid=Cj0KCQiArt_JBhCTARIsADQZaylNqpYzB1u9Gs_o43J_TgunaCOa0jIS3IU3bb75efmcDBCr-bP6kuQaAkk5EALw_wcB"
    }
};


document.querySelectorAll(".map-point").forEach(point => {
    point.addEventListener("click", () => {
        const loc = point.dataset.location;

        popupImg.src = data[loc].img;
        popupTitle.textContent = data[loc].title;
        popupDesc.textContent = data[loc].desc;
        popupLink.href = data[loc].link;

        popup.classList.add("show");
        clickSound.currentTime = 0;
        clickSound.play();
    });
});


closeBtn.addEventListener("click", () => {
    popup.classList.remove("show");
});
