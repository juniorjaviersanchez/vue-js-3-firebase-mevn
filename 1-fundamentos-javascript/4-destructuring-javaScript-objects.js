// Objeto
const autos = {
    material: 'Metal',
    altura:1.25,
    color: 'Azul',
    marcas:['MarcaA','MarcaB','MarcaC']
}

// Destrucción de objetos
// Ejemplo 1
const {material} = autos;
console.log(material);

// Ejemplo2
const {altura, color} = autos;
console.log(altura);
console.log(color);

// Ejemplo3 cambiando de nombre 
// Ejemplo 1
const {material:material2} = autos;
console.log(material2);