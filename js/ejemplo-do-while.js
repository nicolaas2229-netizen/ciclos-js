let formDado = document.getElementById("formDado");
let resultadoDado = document.getElementById("resultadoDado");
let listaDado = document.getElementById("listaDado");
formDado.addEventListener("submit", lanzarDado);

function lanzarDado(evento) {
    evento.preventDefault();
    let numeroBuscado = parseInt(document.getElementById("objetivo").value, 10);
    let dado;
    let lanzamientos = 0;
    listaDado.innerHTML = "";

    // Validar: si el número no está entre 1 y 6 el ciclo nunca terminaría
    if (Number.isNaN(numeroBuscado) || numeroBuscado < 1 || numeroBuscado > 6) {
        resultadoDado.textContent = "Ingresa un número del 1 al 6.";
        return;
    }

    do {
        dado = Math.floor(Math.random() * 6) + 1;
        lanzamientos++;
        let fila = document.createElement("li");
        fila.textContent = "Lanzamiento " + lanzamientos + ": salió " + dado;
        listaDado.appendChild(fila);
    } while (dado !== numeroBuscado);

    resultadoDado.textContent = "Salió el número buscado en " + lanzamientos + " lanzamiento(s).";
}
