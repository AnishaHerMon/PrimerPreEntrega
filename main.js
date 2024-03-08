
let nombreCliente = prompt("Bienvenido a AnnieCoffee. Por favor, ingrese su nombre:");

function realizarPedido() {
    alert(`¡Hola ${nombreCliente}! ¿Estas listo para tu cafe de hoy?`);
    
    let deseaOrdenar = prompt("¿Ya sabes lo que deseas pedir? (SI/NO)");

    if (deseaOrdenar && deseaOrdenar.toUpperCase() === "SI") {
        mostrarMenu();
    } else {
        alert("Esperamos verte pronto. ¡Que tengas un buen día!");
    }
}

function mostrarMenu() {
    let opcionesMenu = "1. Helado Latte\n2. Caramel Macchiato\n3. Cappuccino\n4. Frappuccino\n5. Mocha";
    let opcionElegida = prompt(`Por favor, elija una opción del menú:\n${opcionesMenu}`);

    switch (opcionElegida.toLowerCase()) {
        case "1":
        case "helado latte":
            procesarPedido("Helado Latte", 80);
            break;

        case "2":
        case "caramel macchiato":
            procesarPedido("Caramel Macchiato", 94);
            break;

        case "3":
        case "cappuccino":
            procesarPedido("Cappuccino", 75);
            break;

        case "4":
        case "frappuccino":
            procesarPedido("Frappuccino", 94);
            break;

        case "5":
        case "mocha":
            procesarPedido("Mocha", 96);
            break;

        default:
            alert("Lo siento, no entendí esa opción. Por favor, elija del menú.");
            mostrarMenu();
            break;
    }
}

function procesarPedido(producto, precio) {
    alert(`Gracias por pedir ${producto}. El total es de $${precio}.`);

    let formaDePago = prompt("¿Cómo desea pagar? (Efectivo/Tarjeta)");

        if (formaDePago.toLowerCase() === "efectivo") {
            alert("Por favor, tenga el monto exacto preparado. Se lo recogeremos en breve.");
        } else if (formaDePago.toLowerCase() === "tarjeta") {
            let numTarjeta = prompt("Ingrese el número de su tarjeta de crédito:");
            alert(`Hemos procesado su tarjeta. Su pedido será entregado en breve a la dirección asociada a la tarjeta.`);
        } else {
            alert("Forma de pago no reconocida. El pedido no se procesará.");
            return; // Salir de la función si la forma de pago no es reconocida
        }
    
         prepararOrden(producto);

    

    agradecer();
}

function agradecer() {
    alert(`${nombreCliente}, hemos procesado su pedido. Está en preparación. Pronto será contactado.`);
}

// Inicia el proceso al cargar la página.
realizarPedido();
