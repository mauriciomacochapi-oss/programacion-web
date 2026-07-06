const productos = [
  {
    id: 1,
    nombre: "Auriculares Bluetooth",
    categoria: "Electrónica",
    precio: 15000,
    stock: 8,
    activo: true,
  },
  {
    id: 2,
    nombre: "Teclado Mecánico",
    categoria: "Electrónica",
    precio: 22000,
    stock: 0,
    activo: true,
  },
  {
    id: 3,
    nombre: "Silla Ergonómica",
    categoria: "Muebles",
    precio: 85000,
    stock: 3,
    activo: true,
  },
  {
    id: 4,
    nombre: "Lámpara de Escritorio",
    categoria: "Muebles",
    precio: 9500,
    stock: 12,
    activo: false,
  },
  {
    id: 5,
    nombre: "Mouse Inalámbrico",
    categoria: "Electrónica",
    precio: 7800,
    stock: 20,
    activo: true,
  },
  {
    id: 6,
    nombre: 'Monitor 27"',
    categoria: "Electrónica",
    precio: 120000,
    stock: 2,
    activo: true,
  },
  {
    id: 7,
    nombre: "Alfombra de Escritorio",
    categoria: "Muebles",
    precio: 4200,
    stock: 0,
    activo: false,
  },
  {
    id: 8,
    nombre: "Webcam HD",
    categoria: "Electrónica",
    precio: 18000,
    stock: 5,
    activo: true,
  },
];
//-----------------//
//const soloNombres = productos.map(function (producto) {
//  return producto.nombre;
//});
//-----------------//
//// Solo los productos de Electrónica, activos, con sus precios con IVA
//const conIVA = productos
//  .filter((p) => p.categoria === "Electrónica")
//  .filter((p) => p.activo)
//  .map((p) => ({
//    nombre: p.nombre,
//    precioFinal: `$${p.precio * 1.21}`,
//  }));
///-------------///
//const nombres = productos
//  .filter((p) => p.categoria === "Muebles")
//  .map((p) => p.nombre);
//--------ejercicio-5-----------
//const producto = productos.find(function(p) {
//  return p.id === 5;
//});
//
//console.log("hola",producto)

//if(producto.nombre === "Mouse Inalámbrico") {
//  console.log(`${producto.nombre} Encontrado`)
//} else {
//  console.log(`No encontrado`)
//};
//--------aca termina-------------//
//
//const unNombre = productos.find(function(p) {
//return p.id === 5;
//});

//console.log(`${unNombre.nombre}`)
//console.log(`${producto.nombre}| $${producto.precio}`);
//--ej:6-----//
//const conIVA = productos
//  .filter((p) => p.categoria === "Electrónica")
//  .filter((p) => p.activo === true)
//  .filter((p) => p.stock > 0)
//  .filter((p) => p.precio > 20000)
//  .map((p) => ({
//    nombre: p.nombre,
//    precioFinal: `$${p.precio * 1.21}`,
//    apellido: "Macochapi",
//  }));
//
//console.log(conIVA);
//--------aca termina-----------
/*const todosActivos = productos
  .filter((p) => p.precio > 100000)
  .filter((p) => p.activo === true)
  .filter(
    (p) =>
      p.stock > (0).filter((p) => p.categoria === "Electronica" || p.stock > 0),
  );
console.log(todosActivos);
*/
//..........
//const productosElectronica = productos.every(
//  (p) => p.nombre.includes("Electronica") && p.stock > 0,
//);
//...........
//console.log(productosElectronica); // Respuesta pregunta 4 Ejercicio 6
//const verificacion = productos.some((p) => p.precio > 1000000);

//--------------
//const id = productos.every((p) => p.id === true);
//console.log(id);
//--------------
//const todosproductos = productos.every((p) => p.activo === true);
//console.log(todosproductos);
let activos = 0;
const conIVA = productos
  .filter((p) => p.categoria === "Electrónica")
  .map((p) => {
    if (p.activo) {
      return (activos += 1);
    }
  })
  .map((p) => ({
    total: productos.length,
    activos,
    nombre: p.nombre,
    precioFinal: `${p.precio * 1.21}`,
    sinStock: p.stock,
  }));

console.log(conIVA);
