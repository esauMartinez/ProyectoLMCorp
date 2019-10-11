let formProveedor = function(){
    document.getElementById('jumbotron-proveedor').innerHTML = `
        <form action="#" id="form-proveedor">
            <div class="row mt-3">
                <div class="col-lg-12">
                    <div class="form-group">
                        <label for="">Datos fiscales</label>
                        <div class="card" style="padding: 15px;">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="">Clave</label>
                                        <input type="number" class="form-control" name="clave" required>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="">Telefono</label>
                                        <input type="number" class="form-control" name="telefono" required>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="">Proveedor</label>
                                        <input type="text" class="form-control" name="proveedor" required>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="">Contacto</label>
                                        <input type="text" class="form-control" name="contacto" required>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="">Razon social</label>
                                        <input type="text" class="form-control" name="razon_social" required>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="">Fecha ingreso</label>
                                        <input type="date" class="form-control" name="fecha_ing" required>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="">Rfc</label>
                                        <input type="number" class="form-control" name="rfc" required>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="">Correo</label>
                                        <input type="text" class="form-control" name="correo" required>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="form-group">
                                        <label for="">Tipo proveedor</label>
                                        <select class="form-control" name="tipo_proveedor" required></select>
                                    </div>
                                </div>
                                <div class="col-lg-2">
                                    <div class="form-group mt-4">
                                        <button type="button" class="btn btn-primary btn-block" onclick="crearTipoProvee()"><i class="fa fa-plus" style="font-size: 16px;"></i></button>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="">Pagina web</label>
                                        <input type="text" class="form-control" name="pag_web" required> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
                
                <div class="col-lg-12">
                    <div class="form-group">
                        <label for="">Direccion</label>
                        <div class="card" style="padding: 15px;">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="">Calle</label>
                                        <input type="text" class="form-control" name="calle" required>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="">No exterior</label>
                                        <input type="text" class="form-control" name="no_ext" required>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="">Cp</label>
                                        <input type="number" class="form-control" name="cp" required>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="">Pais</label>
                                        <select class="form-control" name="pais" required>
                                            <option value=""></option>
                                            <option value="mx">Mexico</option>
                                            <option value="eu">Usa</option>
                                            <option value="canada">Canada</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="">Estado</label> 
                                        <input type="text" class="form-control" name="estado" required>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="">Colonia</label>
                                        <select class="form-control" name="colonia" required></select>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="">Municipio</label>
                                        <input type="text" class="form-control" name="municipio" required>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="">Delegacion</label>
                                        <input type="text" class="form-control" name="delegacion" required>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12">
                    <div class="form-group">
                        <label for="">Datos fiscales</label>
                        <div class="card" style="padding: 15px;">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="">Credito</label>
                                        <input type="number" class="form-control" name="credito" required>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="">Limite credito $</label>
                                        <input type="number" class="form-control" name="lim_credito" required>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="">Condicion de pago</label>
                                        <input type="text" class="form-control" name="cond_pago" required>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="">Tipo moneda</label>
                                        <input type="text" class="form-control" name="tipo_moneda" required>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="">Descuento %</label>
                                        <input type="number" class="form-control" name="descuento" required>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="">Iva</label>
                                        <input type="number" class="form-control" name="iva" required>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12">
                    <div class="form-group">
                        <label for="">Observaciones</label>
                        <div class="card" style="padding: 15px;">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <label for="">Observaciones</label>
                                        <textarea class="form-control" rows="5" style="resize: none;" name="observaciones" required></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 msj-registro"></div>

                <div class="col-lg-3 offset-lg-6">
                    <button type="button" class="btn btn-danger btn-block" id="btn-regresar" onclick="regresar()">Cancelar</button>
                </div>
                <div class="col-lg-3">
                    <button type="submit" class="btn btn-primary btn-block" id="btn-guardar">Aceptar</button>
                </div>
            </div>
        </form>
    `;

    document.querySelector('input[name=cp]').addEventListener('keyup', function () {
        let cp = this.value;
        let direccion = fetch('https://api-codigos-postales.herokuapp.com/v2/codigo_postal/' + cp);
        direccion.then(res => {
            return res.json();
        }).then(data => {
            let colonia = data.colonias;
            document.querySelector('input[name=estado]').value = data.estado;
            document.querySelector('input[name=municipio]').value = data.municipio;
            document.querySelector('input[name=municipio]').value = data.municipio;
            document.querySelector('select[name=colonia]').innerHTML = `<option value=""></option>`;
            colonia.forEach(element => {
                document.querySelector('select[name=colonia]').innerHTML += `<option value="${element}">${element}</option>`;
            });
        });
    });

    document.getElementById('form-proveedor').addEventListener('submit', function (e) {
        e.preventDefault();
    });
    tipoProveedor();
};

let crearProveedor = function(){
    const formulario = document.getElementById('form-proveedor');
    let obj = {};

    for (let i = 0; i < formulario.length; i++) {
        const element = formulario[i];
        if (element.required === true && element.value === '') {
            return;
        } else if (element.required === true) {
            obj[element.name] = element.value;
        }
    }

    console.log(obj);

    fetch('/proveedor/proveedor', {
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
};

let tipoProveedor = function(){
    fetch('/proveedor/tipoProveedor')
    .then(data => {
        let response = data.json();  
        return response;
    })
    .then(res => {
        document.querySelector('select[name=tipo_proveedor]').innerHTML = `<option value=""></option>`;
        res.forEach(element => {
            document.querySelector('select[name=tipo_proveedor]').innerHTML += `<option value="${element.tipo}">${element.tipo}</option>`;
        });
    });
};

let crearTipoProvee = function(){
    createModal();
    document.querySelector('.modal-title').innerHTML = `Crear tipo proveedor`;
    document.querySelector('.modal-body').innerHTML = `
        <form action="#" id="form-tipo-proveedor">
            <div class="row">
                <div class="col-lg-12">
                    <div class="form-group">
                        <label for="">Tipo proveedor</label>
                        <input type="text" class="form-control" name="tipo" required/>
                    </div>
                </div>
                <div class="col-lg-12" id="msj"></div>
                <div class="col-lg-3 offset-lg-9">
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block">Registrar</button>
                    </div>
                </div>
            </div>
        </form>
    `;
    document.getElementById('form-tipo-proveedor').addEventListener('submit', function (e) {
        const formulario = this;
        let obj = {};

        for (let i = 0; i < formulario.length; i++) {
            const element = formulario[i];
            if (element.required === true && element.value === '') {
                return;
            } else if (element.required === true) {
                obj[element.name] = element.value;
            }
        }

        fetch('/proveedor/tipoProveedor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        .then(data => {
            formulario.reset();
            document.querySelector('#msj').innerHTML = `
                <div class="alert alert-success" role="alert">
                    Tpo de proveedor registrado exitosamente
                </div>
            `;
            tipoProveedor();
        });
        e.preventDefault();
    });
};

let regresar = function(){
    menu();
};