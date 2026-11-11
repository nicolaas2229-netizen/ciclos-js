// Ejercicio 1: Sistema de compras en una tienda (ciclo while)

// 1. Referencias
let formulario = document.getElementById("formulario");
let mensaje = document.getElementById("mensaje");
let cantidadTexto = document.getElementById("cantidad");
let subtotalTexto = document.getElementById("subtotal");
let descuentoTexto = document.getElementById("descuento");
let totalTexto = document.getElementById("total");

formulario.addEventListener("submit", procesarFormulario);

function procesarFormulario(evento) {
  evento.preventDefault();

  // 2. Datos de entrada: "50000, 120000, 0" -> ["50000", " 120000", " 0"]
  let precios = document.getElementById("precios").value.split(",");
  let subtotal = 0;
  let cantidad = 0;
  let huboInvalido = false;
  let posicion = 0;
  let precio = parseFloat(precios[posicion].trim());

  // 3. Ciclo while: se detiene al encontrar el 0 o al terminar la lista
  while (posicion < precios.length && precio !== 0) {
    if (Number.isNaN(precio) || precio < 0) {
      // Precio inválido o negativo: se omite
      huboInvalido = true;
    } else {
      subtotal += precio;
      cantidad++;
    }

    posicion++;
    if (posicion < precios.length) {
      precio = parseFloat(precios[posicion].trim());
    }
  }

  // 4. Descuento del 10 % si la compra supera $200.000
  let descuento = 0;
  if (subtotal > 200000) {
    descuento = subtotal * 0.10;
  }
  let total = subtotal - descuento;

  // 5. Mostrar resultados
  cantidadTexto.textContent = cantidad;
  subtotalTexto.textContent = "$" + subtotal.toLocaleString("es-CO");
  descuentoTexto.textContent = "$" + descuento.toLocaleString("es-CO");
  totalTexto.textContent = "$" + total.toLocaleString("es-CO");

  if (cantidad === 0) {
    mensaje.textContent = "No se registraron productos válidos.";
  } else if (descuento > 0) {
    mensaje.textContent = "Compra registrada. Se aplicó un descuento del 10 %.";
  } else {
    mensaje.textContent = "Compra registrada. No aplica descuento.";
  }

  if (huboInvalido) {
    mensaje.textContent += " Se omitieron precios inválidos o negativos.";
  }
}