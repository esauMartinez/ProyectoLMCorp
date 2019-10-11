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
                    <table class="table table-bordered mt-3">
                        <thead class="thead-dark">
                            <tr>
                                <th>Clave</th>
                                <th>Descripcion</th>
                                <th>Familia/Marca</th>
                                <th>Proveedor</th>
                                <th>Medida</th>
                                <th>Cantidad</th>
                                <th>IVA</th>
                                <th>Precio</th>
                                <th>Total</th>
                                <th>Stock actual</th>
                                <th>Stock min</th>
                                <th>Stock max</th>
                                <th>Ultima compra</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
                <div class="col-lg-3 offset-lg-9">
                    <button type="button" class="btn btn-danger btn-block cancelar">Regresar</button>
                </div>
            </div>
        </div>
    `;

    document.querySelector('.cancelar').addEventListener('click', function () {
        menu();
    });
};