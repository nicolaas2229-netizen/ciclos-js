// Ejercicio 2: Registro de notas de un estudiante (ciclo for)

// 1. Referencias
let formulario = document.getElementById("formulario");
let mensaje = document.getElementById("mensaje");
let listaNotas = document.getElementById("listaNotas");
let promedioTexto = document.getElementById("promedio");
let notasAltasTexto = document.getElementById("notasAltas");
let notaMayorTexto = document.getElementById("notaMayor");
let notaMenorTexto = document.getElementById("notaMenor");

formulario.addEventListener("submit", procesarFormulario);

function procesarFormulario(evento) {
  evento.preventDefault();

  let suma = 0;
  let validas = 0;
  let notasAltas = 0;
  let mayor = 0;
  let menor = 5;
  let huboInvalida = false;
  listaNotas.innerHTML = "";

  // 2. Ciclo for: recorre las cinco notas
  for (let i = 1; i <= 5; i++) {
    let nota = parseFloat(document.getElementById("nota" + i).value);
    let fila = document.createElement("li");

    // 3. Validar rango entre 0 y 5
    if (Number.isNaN(nota) || nota < 0 || nota > 5) {
      huboInvalida = true;
      fila.textContent = "Nota " + i + ": inválida (debe estar entre 0 y 5); se omitió.";
    } else {
      suma += nota;
      validas++;
      fila.textContent = "Nota " + i + ": " + nota;

      if (nota >= 3) {
        notasAltas++;
      }
      if (nota > mayor) {
        mayor = nota;
      }
      if (nota < menor) {
        menor = nota;
      }
    }

    listaNotas.appendChild(fila);
  }

  // 4. Sin notas válidas no se puede calcular nada
  if (validas === 0) {
    promedioTexto.textContent = "—";
    notasAltasTexto.textContent = "—";
    notaMayorTexto.textContent = "—";
    notaMenorTexto.textContent = "—";
    mensaje.textContent = "No se registraron notas válidas. Ingresa valores entre 0 y 5.";
    return;
  }

  // 5. Promedio y resultados
  let promedio = suma / validas;
  promedioTexto.textContent = promedio.toFixed(2);
  notasAltasTexto.textContent = notasAltas;
  notaMayorTexto.textContent = mayor;
  notaMenorTexto.textContent = menor;

  if (promedio >= 3) {
    mensaje.textContent = "El estudiante APROBÓ con un promedio de " + promedio.toFixed(2) + ".";
  } else {
    mensaje.textContent = "El estudiante REPROBÓ con un promedio de " + promedio.toFixed(2) + ".";
  }

  if (huboInvalida) {
    mensaje.textContent += " Se omitieron notas inválidas.";
  }
}