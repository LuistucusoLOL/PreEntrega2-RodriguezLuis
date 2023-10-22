let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
saludar(nombre, apellido);

function saludar(nombre, apellido) {
    if (nombre && apellido) {
        alert(`Hola ${nombre} ${apellido} Bienvenido :D`);
    } else {
        alert("Por favor, ingrese su nombre y apellido.");
    }
}

let saldo = 0;
Saldo(saldo);

function Saldo(saldo) {
    alert(`Su saldo actual para comprar es de: ${saldo} USD`);
}

let deposito = parseFloat(prompt("ingrese el dinero para comprar"));
saldo = Deposito(saldo, deposito);

function Deposito(saldo, monto) {
    if (!isNaN(monto) && monto > 0) {
        saldo += monto;
        actualizar(saldo);
        alert(`ingreso exitoso. Su nuevo saldo es: ${saldo} USD`);
    } else {
        alert("Ingrese un monto válido para poder comprar.");
    }
    return saldo;
}
function actualizar(saldo) {
    alert(`Su saldo actual es: ${saldo} USD`);


}


const productos = [
    { id: 1, producto: "Papa", precio: 1.25 },
    { id: 2, producto: "Zanahoria", precio: 7.71 },
    { id: 3, producto: "Tomate", precio: 5.32 },
    { id: 4, producto: "Lechuga", precio: 1.99 },
    { id: 5, producto: "Mazorca", precio: 6.45 },
    { id: 6, producto: "Zapallo", precio: 8.67 }
  ];
  
  class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  
    barato() {
      return this.precio <= 3.00;
    }
  }
  
  const productoConPrecio = productos.map(producto => new Producto(producto.producto, producto.precio));
  

  let lista= "Productos:\n";
  productoConPrecio.forEach(producto => {
    lista += `${producto.nombre} - Precio: ${producto.precio}\n`;
  });
  
  alert(lista);
  
  let buscarOtro = "sí";
  
  while (buscarOtro.toLowerCase() === "sí" || buscarOtro.toLowerCase() === "si") {
    const buscar = prompt("Ingrese el nombre del producto a buscar:");
    const encontrado = productoConPrecio.find(producto => producto.nombre.toLowerCase() === buscar.toLowerCase());
  
    if (encontrado) {
      const mensaje = encontrado.barato() ? "barato" : "caro";
      alert(`${encontrado.nombre} es ${mensaje} y está disponible`);
    } else {
      alert("Producto no disponible.");
    }
  
    buscarOtro = prompt("¿Desea buscar otro producto? (Sí/No):");
  }
  
  alert("Gracias por venir a la tienda de pepe :D.");

  
  
  
  
  
  

  
  

  



