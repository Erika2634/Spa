const productos = [
  { nombre: "Laptop",  precio: 1200, cantidad: 5  },
  { nombre: "Mouse",   precio: 25,   cantidad: 20 },
  { nombre: "Teclado", precio: 45,   cantidad: 15 },
  { nombre: "Monitor", precio: 300,  cantidad: 7  },
  { nombre: "USB",     precio: 10,   cantidad: 50 }
];

// ─────────────────────────────────────────────
//  DATOS BASE
// ─────────────────────────────────────────────
console.log("%c═══ DATOS BASE ═══", "color: #89b4fa; font-weight: bold; font-size: 14px");
console.table(productos);


// ─────────────────────────────────────────────
//  EJERCICIO 1 — map, filter, find
// ─────────────────────────────────────────────
console.log("%c═══ EJERCICIO 1 — map / filter / find ═══", "color: #a6e3a1; font-weight: bold; font-size: 14px");

// map → nombres en mayúscula
const nombres = productos.map(p => p.nombre.toUpperCase());
console.log("%cmap → nombres en mayúscula:", "color: #d9a1e3; font-weight: bold");
console.log(nombres);

// filter → precio menor a 50
const baratos = productos.filter(p => p.precio < 50);
console.log("%cfilter → precio menor a 50:", "color: #d9a1e3; font-weight: bold");
console.table(baratos);

// find → buscar "Monitor"
const monitor = productos.find(p => p.nombre === "Monitor");
console.log("%cfind → buscar 'Monitor':", "color: #d9a1e3; font-weight: bold");
console.log(monitor);

// Pregunta adicional: ¿qué pasa si no existe?
const noExiste = productos.find(p => p.nombre === "Impresora");
console.log("%cPregunta adicional → find('Impresora') que no existe:", "color: #d9a1e3; font-weight: bold");
console.log(noExiste); // undefined


// ─────────────────────────────────────────────
//  EJERCICIO 2 — combinar métodos
// ─────────────────────────────────────────────
console.log("%c═══ EJERCICIO 2 — combinar métodos ═══", "color: #a6e3a1; font-weight: bold; font-size: 14px");

// filter → cantidad menor a 10
const pocoStock = productos.filter(p => p.cantidad < 10);
console.log("%cfilter → cantidad menor a 10:", "color: #d9a1e3; font-weight: bold");
console.table(pocoStock);

// map sobre ese resultado → { nombre, valorTotal }
const conValorTotal = pocoStock.map(p => ({
  nombre: p.nombre,
  valorTotal: p.precio * p.cantidad
}));
console.log("%cmap → { nombre, valorTotal }:", "color: #d9a1e3; font-weight: bold");
console.table(conValorTotal);

// reduce → valor total acumulado de esos productos
const totalBajoStock = conValorTotal.reduce((acc, p) => acc + p.valorTotal, 0);
console.log("%creduce → valor total de productos con bajo stock:", "color: #d9a1e3; font-weight: bold");
console.log("$" + totalBajoStock.toLocaleString("es-CO"));


// ─────────────────────────────────────────────
//  EJERCICIO 3 — uso avanzado de reduce
// ─────────────────────────────────────────────
console.log("%c═══ EJERCICIO 3 — uso avanzado de reduce ═══", "color: #a6e3a1; font-weight: bold; font-size: 14px");

// Valor total de todo el inventario
const totalInventario = productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
console.log("%creduce → valor total del inventario:", "color: #d9a1e3; font-weight: bold");
console.log("$" + totalInventario.toLocaleString("es-CO"));

// Producto con mayor cantidad en stock
const maxStock = productos.reduce((acc, p) => p.cantidad > acc.cantidad ? p : acc);
console.log("%creduce → producto con mayor cantidad en stock:", "color: #d9a1e3; font-weight: bold");
console.log(maxStock);

// Clasificar en { caros, baratos } usando reduce
const clasificados = productos.reduce((acc, p) => {
  if (p.precio > 100) {
    acc.caros.push(p);
  } else {
    acc.baratos.push(p);
  }
  return acc;
}, { caros: [], baratos: [] });

console.log("%creduce → clasificar en { caros, baratos }:", "color: #d9a1e3; font-weight: bold");
console.log("Caros (precio > 100):");
console.table(clasificados.caros);
console.log("Baratos (precio <= 100):");
console.table(clasificados.baratos);


// ─────────────────────────────────────────────
//  RETO EXTRA — solo con reduce
// ─────────────────────────────────────────────
console.log("%c═══ RETO EXTRA — solo con reduce ═══", "color: #cba6f7; font-weight: bold; font-size: 14px");

// Nombres de productos con más de 10 unidades usando solo reduce
const nombresConStock = productos.reduce((acc, p) => {
  if (p.cantidad > 10) acc.push(p.nombre);
  return acc;
}, []);

console.log("%creduce → nombres con más de 10 unidades en stock:", "color: #d9a1e3; font-weight: bold");
console.log(nombresConStock);