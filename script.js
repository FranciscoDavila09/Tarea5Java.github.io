// Control de Flujo: Manejo de errores y selección de producto
function mostrarTipoPan() {
    try {
        let panSeleccionado = document.getElementById("tipoPan").value;
        let mensaje;
        
        if (!panSeleccionado) {
            throw new Error("Por favor, seleccione un tipo de pan");
        }
        
        switch (panSeleccionado) {
            case "Baguette":
                mensaje = "Has seleccionado un Baguette, delicioso y crujiente";
                break;
            case "Croissant":
                mensaje = "Has seleccionado un Croissant, perfecto para un desayuno especial";
                break;
            case "Rosquilla":
                mensaje = "Has seleccionado una Rosquilla, dulce y tradicional";
                break;
            case "Pan Integral":
                mensaje = "Has seleccionado un Pan Integral, una opción saludable";
                break;
            default:
                mensaje = "Tipo de pan no reconocido";
        }
        
        document.getElementById("mensajePan").innerText = mensaje;
    } catch (error) {
        document.getElementById("mensajePan").innerText = error.message;
    }
}


// Función para calcular el precio con IVA
function calcularPrecio() {
    let precioBase = parseFloat(prompt("Ingrese el precio del producto:"));
    if (isNaN(precioBase) || precioBase <= 0) {
        document.getElementById("resultadoPrecio").innerText = "Ingrese un número válido y mayor que 0.";
        return;
    }
    let precioFinal = precioBase * 1.13;
    document.getElementById("resultadoPrecio").innerText = "El precio final con IVA es: " + precioFinal.toFixed(2) + " colones.";
}






// Funciones con Operadores y Bucles
function verificarDescuento() {
    let edad = prompt("Ingrese su edad:");
    edad = parseInt(edad);
    if (isNaN(edad)) {
        document.getElementById("resultadoDescuento").innerText = "Ingrese un número válido.";
        return;
    }
    if (edad >= 60) {
        document.getElementById("resultadoDescuento").innerText = "Usted tiene un 10% de descuento.";
    } else {
        document.getElementById("resultadoDescuento").innerText = "No aplica descuento.";
    }
}
// Lista de productos 

function mostrarProductos() {
    let productos = ["Pan Francés", "Croissant", "Rosquillas", "Pan Integral", "Baguette"];
    let lista = document.getElementById("listaProductos");
    lista.innerHTML = "";
    for (let i = 0; i < productos.length; i++) {
        let item = document.createElement("li");
        item.innerText = productos[i];
        lista.appendChild(item);
    }
}

// Uso de Fechas y Números
function mostrarFechaHora() {
    let fecha = new Date();
    document.getElementById("fechaHora").innerText = "Fecha y Hora: " + fecha.toLocaleString();
}