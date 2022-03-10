// Map = Devuelve otro array
const obtenerPockemones3 = async() => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data = await res.json()
        // console.log(data.results);
        const arrayNuevo = data.results.map(poke => poke.name)
        console.log(arrayNuevo);
    } catch (error) {
        console.log(error);
    }
}
obtenerPockemones3();