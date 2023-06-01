
//const API="https://rickandmortyapi.com/api/character"
const API="https://29967fbb-83b2-4051-ba10-fb7e40aa0798.mock.pstmn.io"

export default async (id)=>{

    const apiUrl=(id) ? `${API}$id`: API // en otros proyectos esta condicion puede cambiar, de resto todo es igual

    try {
        const response=await fetch(apiUrl) //await: promesa, fetch: va y consulta y se conecta a la url, y trae la respuesta.
        const data=await response.json() // cuando entrega la respues, que la convierta a json.
        return data
    } catch (error) {
        console.log("Error en el fetch", error)
        
    }

}

// FORMA SIMPLE DE CONSUMIR UNA API