
export default (ruta)=>{

    if(ruta.length<3){ // no a todos los proyectos se hace esto, length(mira los caracteres que tiene)
        return(ruta==="/") ? ruta:"/:id"
    }
    return `/${ruta}`
}