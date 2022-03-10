// Async - Await
// Recordar que se tiene que hacer dentro una función
const obtenerPockemones = () => {

}
// Agregar el async
const obtenerPockemones2 = async() => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const data = await res.json()
    // console.log(data.results);
    data.results.forEach(element => {
        console.log(element.name);
    });
}
obtenerPockemones2()

// Se recomienda utilizar el try catch para manejar errores
const obtenerPockemones3 = async() => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data = await res.json()
        // console.log(data.results);
        data.results.forEach(element => {
            console.log(element.name);
        });
    } catch (error) {
        console.log(error);
    }
}
obtenerPockemones3();