const pics = ["Duolingo.png", "LVA1.png", "LVA2.png", "reCAPTCHA.png"];
let current = 0;
const img = document.getElementById("pic");
const count = document.getElementById("counter");

function update() {
    img.src = pics[current];
    count.textContent = "Image " + (current + 1) + " of " + pics.length;
}

function next() {
    current = (current + 1) % pics.length;
    update();
}

function prev() {
    current = (current - 1 + pics.length) % pics.length;
    update();
}

update();

const dark = document.getElementById("dark");
dark.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark"))
        dark.textContent = "☀️";
    else
        dark.textContent = "🌙";
});
