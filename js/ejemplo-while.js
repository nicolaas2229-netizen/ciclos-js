let formAhorro = document.getElementById("formAhorro");
let resultadoAhorro = document.getElementById("resultadoAhorro");
formAhorro.addEventListener("submit", calcularAhorro);

function calcularAhorro(evento) {
    evento.preventDefault();

    let ahorro = parseFloat(document.getElementById("ahorroMensual").value);
    let valorMeta = parseFloat(document.getElementById("meta").value);
    let acumulado = 0;
    let meses = 0;

    if (Number.isNaN(ahorro) || Number.isNaN(valorMeta) || ahorro <= 0 || valorMeta <= 0) {
        resultadoAhorro.textContent = "Ingresa valores mayores a cero.";
        return;
    }

    while (acumulado < valorMeta) {
        acumulado += ahorro;
        meses++;
    }

    resultadoAhorro.textContent = `Necesitas ${meses} mes(es) para alcanzar la meta.`;
}