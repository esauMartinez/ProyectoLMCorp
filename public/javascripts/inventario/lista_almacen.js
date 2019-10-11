async function listado_almacen() {
    document.querySelector('#container_inventario').innerHTML = `
        <div class="jumbotron mt-4">
            <div class="row">
                <div class="col-lg-12">
                    <h4>Listados de almacenes</h4>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <table class="table table-bordered mt-3">
                        <thead class="thead-dark">
                            <tr>
                                <th>Nombre</th>
                                <th>Direccion</th>
                                <th>Encargado</th>
                                <th>Telefono</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody id="tb-almacen"></tbody>
                    </table>
                </div>
                <div class="col-lg-3 offset-lg-9">
                    <button type="button" class="btn btn-danger btn-block cancelar">Regresar</button>
                </div>
            </div>
        </div>
    `;

    document.querySelector('.cancelar').addEventListener('click', function(){
        menu();
    });

    let response = await fetch('/inventario/almacen');
    let data = response.json();

    data.then(data => {
        for (let i = 0; i < data.length; i++) {
            const almacen = data[i];
            document.getElementById('tb-almacen').innerHTML += `
                <tr class="table-secondary">
                    <td>${almacen.nombre}</td>
                    <td>${almacen.direccion}</td>
                    <td>${almacen.encargado}</td>
                    <td>${almacen.telefono}</td>
                    <td>
                        <div class="row d-flex justify-content-around">
                            <div class="col-lg-4">
                                <button class="btn btn-primary btn-block" id="${almacen._id}" onclick="verAlmacen(this.id)">Ver</button>
                            </div>
                            <div class="col-lg-4">
                                <button class="btn btn-warning btn-block" id="${almacen._id}" onclick="modificarAlmacen(this.id)">Modificar</button>
                            </div>
                            <div class="col-lg-4">
                                <button class="btn btn-danger btn-block" id="${almacen._id}" onclick="eliminarAlmacen(this.id)">Eliminar</button>
                            </div>
                        </div>
                    </td>
                </tr>
            `;
        };
    });
};

let verAlmacen = async function(id) {
    let response = await fetch('/inventario/almacen/' + id);
    let data = response.json();

    data.then((res) => {
        createModal();
        document.querySelector('.modal-title').innerHTML = `Datos del alamcen: <strong>${res.nombre}</strong>`;
        document.querySelector('.modal-body').innerHTML = `
            <div class="row">
                <div class="col-lg-12">
                    <p>Nombre: ${res.nombre}</p>
                    <p>Direccion: ${res.direccion}</p>
                    <p>Encargado: ${res.encargado}</p>
                    <p>Telefono: ${res.telefono}</p>
                </div>
            </div>
        `;
    });
};

let modificarAlmacen = async function(id){
    let response = await fetch('/inventario/almacen/' + id);
    let data = response.json();

    data.then((res) => {
        console.log(res);
        form_almacen();
        document.querySelector('input[name=nombre]').value = res.nombre;
        document.querySelector('input[name=direccion]').value = res.direccion;
        document.querySelector('input[name=encargado]').value = res.encargado;
        document.querySelector('input[name=telefono]').value = res.telefono;
        // document.querySelector('.cancelar').classList.remove('cancelar');
        document.querySelector('.cancelar').addEventListener('click', function () {
            listado_almacen();
        });
    });
};

let eliminarAlmacen = async function(id){
    let response = await fetch('/inventario/almacen/' + id, { method: 'DELETE' });
    let data = response.json();

    data.then((res) => {
        listado_almacen();
    });
};