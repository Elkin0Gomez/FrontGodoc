 import {Nav} from "../layouts/Nav.js"
 import {Footer} from "../layouts/Footer.js"
 import {ContratosCreados} from "../pages/ContratosCreados.js"
 import { Registrarse } from "../pages/Registrarse.js"
 import {Error404} from "../pages/Error404.js"
 import getHash from "../connections/helpers/getHash.js"
import resolverRutas from "../connections/helpers/resolverRutas.js"
import { IniciarSesion } from "../pages/IniciarSesion.js"
import { RegistrarseFormulario } from "../components/RegistrarseFormulario.js"
import { CrearContrato } from "../pages/CrearContrato.js"

 const Rutas = { // se crean las rutas para las diferentes paginas, y posteriormente llamarlas, las rutas son objetos(porque esta en mayuscula)
    "/":ContratosCreados,
    "/IniciarSesion":IniciarSesion, 
    "/Registrarse":Registrarse,
    "/CrearContrato":CrearContrato
 }


 const App = async()=>{

    const header =document.querySelector("header")
    const main =document.querySelector("main")
    const footer =document.querySelector("footer")

    header.innerHTML= await Nav()// inserta la función Nav, la cual tiene un String (HTML) // AWAIT es una promesa de javaScript
    footer.innerHTML= await Footer()

    let ruta= await resolverRutas(getHash()) // se crea la variable para asignar una ruta, recibe un String (perfil, login .etc)
    let pagina= (Rutas[ruta]) ? Rutas[ruta] : Error404   // se crea una variable, let (variables locales), Esto es un operador ternario
   

   //console.log(location.hash) // se usa para mirar si tiene hash 

    main.innerHTML= await pagina()// es una variable que bota el resultado del operador ternario 
 }

 export {App} // se hace para se llame igual que el index.js