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

const soloNombres = productos.map(function (producto) {
  return producto.nombre;
});
//// Solo los productos de Electrónica, activos, con sus precios con IVA
const conIVA = productos
  .filter((p) => p.categoria === "Electrónica")
  .filter((p) => p.activo)
  .map((p) => ({
    nombre: p.nombre,
    precioFinal: `$${p.precio * 1.21}`,
  }));

const nombres = productos
  .filter((p) => p.categoria === "Muebles")
  .map((p) => p.nombre);

const producto = productos.find(function(p) {
  return p.id === 6;
});



console.log(`${producto.nombre}| $${producto.precio}`);
