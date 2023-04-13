export async function ServicioHabitacion(){

    const URI="http://localhost:8080/tienda/api/"

    const PETICION={
        method:'GET'
    }

    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()
    return datos


}

