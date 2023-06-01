

const RegistrarseFormulario = ()=>
`
<div class="card" style="margin-left: 23%; margin-top: 3%; width: 45rem;">
    <div class="card-body">
      <center><h3>Registrar usuario</h3></center>
      <br>
        <form>
            <!-- 2 column grid layout with text inputs for the first and last names -->
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <input type="text" id="form6Example1" class="form-control" />
                  <label class="form-label" for="form6Example1">Nombres</label>
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <input type="text" id="form6Example2" class="form-control" />
                  <label class="form-label" for="form6Example2">Apellidos</label>
                </div>
              </div>
            </div>
          
            <!-- Text input -->
            <div class="form-outline mb-4">
              <input type="text" id="form6Example3" class="form-control" />
              <label class="form-label" for="form6Example3">Correo</label>
            </div>
          
            <!-- Text input -->
            <div class="form-outline mb-4">
              <input type="password" id="form6Example4" class="form-control" />
              <label class="form-label" for="form6Example4">Contraseña</label>
            </div>
            <div class="form-outline mb-4">
              <input type="password" id="form6Example4" class="form-control" />
              <label class="form-label" for="form6Example4">Confirmación de Contraseña</label>
            </div>
        
          
            <!-- Submit button -->
            <center><button type="submit" class="btn btn-primary btn-block mb-4">Registrar</button></center>
          </form>
    </div>
  </div>
  <br>

`
export {RegistrarseFormulario}