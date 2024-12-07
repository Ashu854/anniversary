function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, Math.random() * 5000 + 5000);
}
setInterval(createHeart, 100);