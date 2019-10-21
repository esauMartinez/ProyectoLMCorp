function existencias() {
    let formulario = `
        <div class="jumbotron">
            <div class="row">
                <div class="col-lg-12">
                    <h4>Existencias</h4>
                </div>
            </div>
            <form class="mt-3" action="#" id="form-existencia">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="form-group">
                            <label for="">Cantidad</label>
                            <input type="number" class="form-control" name="cantidad" required>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="form-group">
                            <label for="">Costo unidad</label>
                            <input type="number" class="form-control" name="costo_unidad" required>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="form-group">
                            <label for="">Costo total</label>
                            <input type="number" class="form-control" name="costo_total" required>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="form-group">
                            <label for="">IVA</label>
                            <select name="iva" class="form-control" required>
                                <option value="0">0</option>
                                <option value="16">16</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="form-group">
                            <label for="">Stock actual</label>
                            <input type="number" class="form-control" name="stockActual" required>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="form-group">
                            <label for="">Stock minimo</label>
                            <input type="number" class="form-control" name="stockMin" required>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="form-group">
                            <label for="">Stock maximo</label>
                            <input type="number" class="form-control" name="stockMax" required>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="form-group">
                            <label for="">Fecha</label>
                            <input type="date" class="form-control" name="fecha" required>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="form-group">
                            <label for="">Factura</label>
                            <input type="text" class="form-control" name="factura" required>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="form-group">
                            <label for="">Moneda</label>
                            <select name="moneda" class="form-control" required>
                                <option value="mxn">mxn</option>
                                <option value="usd">usd</option>
                            </select>
                        </div>
                    </div>
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

    return formulario;
};
