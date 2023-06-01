import getContratos from "../connections/helpers/getContratos.js"


const ContratosCreados= async ()=>{

    const contratos = await getContratos()

    return(
    `
    <div class="container mt-3 mb-3">
        <div class="row justify-content-md-center">
            <div class="col col-sm-12 col-md-8 col-lg-6">
                <div class="card-body">
                    <h3 class="text-center">Contratos creados</h3>
                    ${
                        contratos.map(contrato=> // se llama a contratos, que es todo el JSON, pa traer todo se usa el map o for
                                ContratoCard(contrato, true)
                            )
                    }
                </div>

            </div>

        </div>

    </div>
    `
    )
}

export {ContratosCreados}