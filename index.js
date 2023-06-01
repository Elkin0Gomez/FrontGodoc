console.log("Corriendo...")

import {App} from "./routes/App.js"

window.addEventListener("load", App) // cuando haya una carga de la pagina llame APP
window.addEventListener("hashchange", App) // cuando halla un cambio en la URL llame APP, IMPORTANTE
