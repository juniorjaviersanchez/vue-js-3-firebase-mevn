// Función normal
function sumarDatos(){
    return (2+5);
}
sumarDatos();

// Función flecha sin parámetros
const sumarDatos2 = () => {
    return (2+6);
}
sumarDatos2();

// Función flecha con parámetros
const sumarDatos3 = (num1, num2) => {
    return (num1+num2);
}
sumarDatos3(2,7);

// Sí solo quieres retornal algo puedes optimizar más con esto 
const sumarDatos4 = (num1,num2) => (num1+num2);
sumarDatos4(2,8);

