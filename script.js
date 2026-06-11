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
    "K + J",
    "❤️",
    "❤️",
    "K + J"
];

coracao.innerHTML =
    simbolos[Math.floor(Math.random() * simbolos.length)];

    coracao.style.left = Math.random() * 100 + "vw";

    coracao.style.fontSize =
        Math.random() * 20 + 15 + "px";

    document.body.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 8000);
}

setInterval(criarCoracao, 300);