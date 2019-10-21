function listado_productos() {
    document.querySelector('#container_inventario').innerHTML = `
        <div class="jumbotron mt-4">
            <div class="row">
                <div class="col-lg-12">
                    <h4>Listados de productos</h4>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 table-responsive">
                    <table class="table table-bordered mt-3" id="tabla-productos">
                        <thead class="thead-dark">
                            <tr>
                                <th>Descripcion</th>
                                <th>Familia/Marca</th>
                                <th>Proveedor</th>
                                <th>Medida</th>
                                <th>Stock actual</th>
                                <th>Stock min</th>
                                <th>Stock max</th>
                                <th>Ultima compra</th>
                            </tr>
                        </thead>
                        <tbody id="tb-productos"></tbody>
                    </table>
                </div>
                <div class="col-lg-3 offset-lg-9">
                    <button type="button" class="btn btn-danger btn-block cancelar">Regresar</button>
                </div>
            </div>
        </div>
    `;

    let response = fetch('inventario/producto');
    response.then(res => {
        return res.json();
    }).then(res => {
        console.log(res);
        res.forEach(element => {
            let actual = element.entradas;
            let sumaActual = actual[actual.length - 1].stockActual + actual[actual.length - 1].cantidad;
            let salida = element.salidas;
            let sumSalidas = 0;
            salida.forEach(element => {
                sumSalidas += element.cantidad;
            });

            let devolucion = element.devoluciones;
            let sumDevoluciones = 0;
            devolucion.forEach(element => {
                sumDevoluciones += element.cantidad;
            });

            let total = (sumaActual + sumDevoluciones) - sumSalidas;

            document.getElementById('tb-productos').innerHTML += `
                <tr>
                    <td>${element.descripcion}</td>
                    <td>${element.familia}</td>
                    <td>${element.proveedor}</td>
                    <td>${element.medida}</td>
                    <td>${total}</td>
                    <td>${actual[actual.length -1].stockMin}</td>
                    <td>${actual[actual.length -1].stockMax}</td>
                    <td>${((actual[actual.length -1].fecha).split('T')[0]).replace(/-/g, "/")}</td>
                </tr>
            `;
        });
        // $('#tabla-productos').DataTable();
    });

    document.querySelector('.cancelar').addEventListener('click', function () {
        menu();
    });
};