

const  PartidoCard=(partido)=>
`
<div class="container py-4">
    <div class="card bg-light">
        <div class="card-header" th:text="${titulo}">
        </div>
        <div class="card-body">
           <ul class="list-group">
              <li class="list-group-item active" th:text="">${contrato.equipolocal} vs ${equipovisitante}</li>
              <li class="list-group-item" th:text=""></li>
              <li class="list-group-item" th:text=""></li>
              <li class="list-group-item" th:text=""></li>
              <li class="list-group-item" th:text=""></li>
              <li class="list-group-item" th:text=""></li>
              <li class="list-group-item" th:text=""></li>
           </ul>
        </div>
    </div>
 </div>

`
export {PartidoCard}