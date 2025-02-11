document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("showMessageBtn").addEventListener("click", function() {
        document.getElementById("secretMessage").classList.remove("hidden");
    });
});
function startEffect() {
    const container = document.querySelector(".effects-container");
    const emojis = ["💖", "🌸", "💞", "🌹", "💕", "🌻", "💓"];

    for (let i = 0; i < 30; i++) {  // 30 emoji oluştur
        setTimeout(() => {
            let emoji = document.createElement("div");
            emoji.className = "emoji";
            emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
// Rastgele konumda başlat
emoji.style.left = Math.random() * 100 + "vw";
emoji.style.bottom = "0px";
emoji.style.animationDuration = (Math.random() * 2 + 2) + "s"; // 2-4 saniye arasında kaybolsun

container.appendChild(emoji);

// 4 saniye sonra DOM'dan sil
setTimeout(() => {
    emoji.remove();
}, 4000);
}, i * 100); // 100ms aralıklarla ekle
    }
}
document.addEventListener("DOMContentLoaded", startEffect);