let formulario = function(){
	let form = `
		<form action="#" id="form-unidad" enctype="multipart/form-data">
			<div class="row">
				<div class="col-lg-2">
					<div class="form-group">
						<label for="">Num economico</label>
						<input type="text" class="form-control" name="economico" required>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="form-group">
						<label for="">Tipo</label>
						<select class="form-control" name="tipo" required>
							<option value=""></option>
							<option value="jumbo">Jumbo</option>
						</select>
					</div>
				</div>
				<div class="col-lg-1">
					<div class="form-group mt-4">
						<button type="button" class="btn btn-primary btn-block"><i class="fa fa-plus"></i></button>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="form-group">
						<label for="">Condicion</label>
						<select class="form-control" name="condicion" required>
							<option value=""></option>
							<option value="nevo">Nuevo</option>
						</select>
					</div>
				</div>
				<div class="col-lg-1">
					<div class="form-group mt-4">
						<button type="button" class="btn btn-primary btn-block"><i class="fa fa-plus"></i></button>
					</div>
				</div>
				<div class="col-lg-2">
					<div class="form-group">
						<label for="">Placas</label>
						<input type="text" class="form-control" name="placas" required>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="form-group">
						<label for="">Marca</label>
						<select class="form-control" name="marca" required>
							<option value=""></option>
							<option value="ford">Ford</option>
						</select>
					</div>
				</div>
				<div class="col-lg-1">
					<div class="form-group mt-4">
						<button type="button" class="btn btn-primary btn-block"><i class="fa fa-plus"></i></button>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="form-group">
						<label for="">Modelo</label>
						<select class="form-control" name="modelo" required>
							<option value=""></option>
							<option value="silverado">Silverado</option>
						</select>
					</div>
				</div>
				<div class="col-lg-1">
					<div class="form-group mt-4">
						<button type="button" class="btn btn-primary btn-block"><i class="fa fa-plus"></i></button>
					</div>
				</div>
				<div class="col-lg-2">
					<div class="form-group">
						<label for="">Color</label>
						<input type="color" class="form-control" name="color" required>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="form-group">
						<label for="">Combustible</label>
						<select class="form-control" name="combustible" required>
							<option value=""></option>
							<option value="diesel">Diesel</option>
						</select>
					</div>
				</div>
				<div class="col-lg-1">
					<div class="form-group mt-4">
						<button type="button" class="btn btn-primary btn-block"><i class="fa fa-plus"></i></button>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="form-group">
						<label for="">Adquisicion</label>
						<select class="form-control" name="adquisicion" required>
							<option value=""></option>
							<option value="propia">Propia</option>
						</select>
					</div>
				</div>
				<div class="col-lg-1">
					<div class="form-group mt-4">
						<button type="button" class="btn btn-primary btn-block"><i class="fa fa-plus"></i></button>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="form-group">
						<label for="">Km inicial</label>
						<input type="number" class="form-control" name="km_inicial" required>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="form-group">
						<label for="">Vencimiento de poliza</label>
						<input type="date" class="form-control" name="vencimiento" required>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="form-group">
						<label for="">Fecha adquisicion</label>
						<input type="date" class="form-control" name="fecha_adquisicion" required>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="form-group">
						<label for="">Poliza de seguro</label>
						<input type="file" class="form-control" name="poliza">
					</div>
				</div>
				<div class="col-lg-6">
					<div class="form-group">
						<label for="">Foto</label>
						<input type="file" class="form-control" name="foto">
					</div>
				</div>
				<div class="col-lg-12 div-msj"></div>
				<div class="col-lg-3 offset-lg-6">
					<div class="form-group">
						<button type="button" class="btn btn-danger btn-block" id="btn-cancelar">Cancelar</button>
					</div>
				</div>
				<div class="col-lg-3">
					<div class="form-group">
						<button type="submit" class="btn btn-primary btn-block" id="btn-guardar">Aceptar</button>
					</div>
				</div>
			</div>
		</form>
	`;

	return form;
};

module.exports = formulario;