 async function form_producto() {
    document.querySelector('#container_inventario').innerHTML = `
        <div class="jumbotron mt-4">
            <div class="row">
                <div class="col-lg-12">
                    <h4>Registro producto</h4>
                </div>
            </div>
            <form class="mt-3" action="#" id="form-alta-producto">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="">Almacen</label>
                            <!-- <input type="number" class="form-control" name="almacen" required> -->
                            <select class="form-control" name="almacen" required></select>
                        </div>
                    </div>
                    <!--<div class="col-lg-6">
                        <div class="form-group">
                            <label for="">Clave</label>
                            <input type="number" class="form-control" name="clave" required>
                        </div>
                    </div>-->
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="">Descripcion</label>
                            <input type="text" class="form-control" name="descripcion" required>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="form-group">
                            <label for="">Familia/Marca</label>
                            <select class="form-control" name="familia" required></select>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <div class="form-group mt-4">
                            <button type="button" class="btn btn-primary btn-block" onclick="crearFamilia()"><i class="fa fa-plus" style="font-size: 16px;"></i></button>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="form-group">
                            <label for="">Medida</label>
                            <select class="form-control" name="medida" required></select>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <div class="form-group mt-4">
                            <button type="button" class="btn btn-primary btn-block" onclick="crearMedida()"><i class="fa fa-plus" style="font-size: 16px;"></i></button>
                        </div>
                    </div>
                    <div class="col-lg-12 msj-registro"></div> 
                    <div class="col-lg-3 offset-lg-6">
                        <button type="button" class="btn btn-danger btn-block cancelar mt-2">Regresar</button>
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
     
    let response = await fetch('/inventario/almacen');
    let data = response.json();
    data.then(res => {
        document.querySelector('select[name=almacen]').innerHTML = `<option value=""></option>`;
        res.forEach(element => {
            document.querySelector('select[name=almacen]').innerHTML += `
                <option value="${element.nombre}">${element.nombre}</option>
            `;
        });
    });

    let familias = fetch('/inventario/familia')
    familias.then(data => {
        let res = data.json();
        return res;
    }).then(res => {
        document.querySelector('select[name=familia]').innerHTML = `<option value=""></option>`;
        res.forEach(element => {
            document.querySelector('select[name=familia]').innerHTML += `
                <option value="${element.familia}">${element.familia}</option>
            `;
        }); 
    });

    let medidas = fetch('/inventario/medida')
    medidas.then(data => {
        let res = data.json();
        return res;
    }).then(res => {
        document.querySelector('select[name=medida]').innerHTML = `<option value=""></option>`;
        res.forEach(element => {
            document.querySelector('select[name=medida]').innerHTML += `
                <option value="${element.medida}">${element.medida}</option>
            `;
        }); 
    });
    

    document.getElementById('form-alta-producto').addEventListener('submit', function (e) {
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

        fetch('/inventario/producto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        }).then(data => {
            formulario.reset();
            document.querySelector('.msj-registro').innerHTML = `
                <div class="alert alert-success" role="alert">
                    Producto registrado exitosamente
                </div>
            `;
        });

        e.preventDefault();
    });
};


let crearFamilia = function(){
    createModal();
    document.querySelector('.modal-title').innerHTML = `Nueva familia/marca`;
    document.querySelector('.modal-body').innerHTML = `
        <form action="#" id="form-familia">
            <div class="row">
                <div class="col-lg-12" id="msj"></div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="">Nombre familia</label>
                        <input type="text" class="form-control" name="familia" required/>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="form-group mt-4">
                        <button type="submit" class="btn btn-primary btn-block" onclick="newFamilia()">Registrar</button>
                    </div>
                </div>
            </div>
        </form>
        <table class="table table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th>Familia</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="tb-familias"></tbody>
        </table>
    `;
    document.getElementById('form-familia').addEventListener('submit', function(e){
        e.preventDefault();
    });

    let familias = fetch('/inventario/familia')
    familias.then(data => {
        let res = data.json();
        return res;
    }).then(res => {
        res.forEach(element => {
            document.getElementById('tb-familias').innerHTML += `
                <tr>
                    <td>${element.familia}</td>
                    <td><div class="d-flex justify-content-center"><button class="btn btn-danger btn-block"><i class="fa fa-times"></i></button></div></td>
                </tr>
            `;
        });
    });
};

let newFamilia = function(){
    const formulario = document.getElementById('form-familia');
    let obj = {};

    for (let i = 0; i < formulario.length; i++) {
        const element = formulario[i];
        if (element.required === true && element.value === '') {
            return;
        } else if (element.required === true) {
            obj[element.name] = element.value;
        }
    }

    fetch('/inventario/familia', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }).then(data => {
        formulario.reset();
        document.querySelector('#msj').innerHTML = `
            <div class="alert alert-success" role="alert">
                Familia registrada
            </div>
        `;
    });
};

let crearMedida = function(){
    createModal();
    document.querySelector('.modal-title').innerHTML = `Nueva medida`;
    document.querySelector('.modal-body').innerHTML = `
        <form action="#" id="from-medida">
            <div class="row">
                <div class="col-lg-12" id="msj"></div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="">Medida</label>
                        <input type="text" class="form-control" name="medida" required/>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="form-group mt-4">
                        <button type="submit" class="btn btn-primary btn-block" onclick="newMedida()">Registrar</button>
                    </div>
                </div>
            </div>
        </form>
        <table class="table table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th>Medida</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="tb-medidas"></tbody>
        </table>
    `;
    document.getElementById('from-medida').addEventListener('submit', function (e) {
        e.preventDefault();
    });

    let medidas = fetch('/inventario/medida')
    medidas.then(data => {
        let res = data.json();
        return res;
    }).then(res => {
        res.forEach(element => {
            document.getElementById('tb-medidas').innerHTML += `
                <tr>
                    <td>${element.medida}</td>
                    <td><div class="d-flex justify-content-center"><button class="btn btn-danger btn-block"><i class="fa fa-times"></i></button></div></td>
                </tr>
            `;
        });
    });
};

let newMedida = function(){
    const formulario = document.getElementById('from-medida');
    let obj = {};

    for (let i = 0; i < formulario.length; i++) {
        const element = formulario[i];
        if (element.required === true && element.value === '') {
            return;
        } else if (element.required === true) {
            obj[element.name] = element.value;
        }
    }

    fetch('/inventario/medida', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }).then(data => {
        formulario.reset();
        document.querySelector('#msj').innerHTML = `
            <div class="alert alert-success" role="alert">
                Medida registrada
            </div>
        `;
    });
};