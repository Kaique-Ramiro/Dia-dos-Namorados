function entrar() {

    document.getElementById("tela1").style.display = "none";

    document.getElementById("tela2").style.display = "block";

    document.getElementById("musica").play();

    document.getElementById("videoSurpresa").play();
}
function criarCoracao() {

    const coracao = document.createElement("div");

    coracao.classList.add("heart");

    const simbolos = [
        "❤️",
        "❤️",
        "❤️",
        "K 🤍 J",
        "❤️",
        "❤️",
        "K 🤍 J"
    ];

    coracao.innerHTML =
        simbolos[Math.floor(Math.random() * simbolos.length)];

    if (coracao.innerHTML === "K 🤍 J") {
        coracao.style.fontWeight = "bold";
        coracao.style.fontSize = "28px";
    }else {
    coracao.style.fontSize =
        Math.random() * 20 + 15 + "px";
    }
    

    coracao.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 8000);
}

setInterval(criarCoracao, 300);