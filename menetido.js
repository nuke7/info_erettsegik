let gomb = document.querySelector("#menetido");
let gom2 = document.querySelector("#Dani")

function calculateMenetido() {
    let oda = document.querySelector("#odaut").value;
    let vissza = document.querySelector("#visszaut").value;
    let percek = Math.abs(vissza - oda);
    return percek;
}

function menetidoPercben() {
    let perc = calculateMenetido();
    if (perc === 0) {
        alert("Ugyanott vagy te idióta!");
    } else {
        alert(`A menetidő: ${perc}`);
    }
}



function loadpadge() {
    window.location = "index2.html"

}

gomb.addEventListener("click", menetidoPercben);
gomb2.addEventListener("click", loadpadge)