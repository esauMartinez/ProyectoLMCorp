function form_almacen(){
    document.querySelector('#container_inventario').innerHTML = `
        <div class="jumbotron mt-4">
            <div class="row">
                <div class="col-lg-12">
                    <h4>Registro almacen</h4>
                </div>
            </div>
            <form class="mt-3" action="#" id="form-alta-almacen">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="">Nombre</label>
                            <input type="text" class="form-control" name="nombre" required>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="">Direccion</label>
                            <input type="text" class="form-control" name="direccion" required>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="">Encargado</label>
                            <input type="text" class="form-control" name="encargado" required>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="">Telefono</label>
                            <input type="number" class="form-control" name="telefono" required>
                        </div>
                    </div>
                    <div class="col-lg-12 msj-registro"></div> 
                    <div class="col-lg-3 offset-lg-6">
                        <button type="button" class="btn btn-danger btn-block cancelar mt-2" >Regresar</button>
                    </div>
                    <div class="col-lg-3">
                        <button type="submit" class="btn btn-primary btn-block mt-2">Registrar</button>
                    </div>
                </div>
            </form>
        </div>
    `;

    document.querySelector('.cancelar').addEventListener('click', function () {
        menu();
    });

    document.getElementById('form-alta-almacen').addEventListener('submit', function (e) {
        const formulario = this;
        let obj = {};

        for (let i = 0; i < formulario.length; i++) {
            const element = formulario[i];
            if (element.required === true && element.value === '') {
                return;
            } else if (element.required === true){
                obj[element.name] = element.value;
            }
        }

        fetch('/inventario/almacen', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        }).then(data => {
            formulario.reset();
            document.querySelector('.msj-registro').innerHTML = `
                <div class="alert alert-success" role="alert">
                    Almacen registrado exitosamente
                </div>
            `;
        });

        e.preventDefault();
    });
};
