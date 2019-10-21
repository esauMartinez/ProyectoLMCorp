let formulario = function(){
	let form_empleado = `
		<form action="#" id="form-empleado">
			<div class="row">
				<div class="col-lg-6">
					<div class="form-group">
						<label for="">Nombre/s</label>
						<input type="text" class="form-control" name="nombre" required>
					</div>
					<div class="form-group">
						<label for="">Apellido paterno</label>
						<input type="text" class="form-control" name="apellido_paterno" required>
					</div>
					<div class="form-group">
						<label for="">Apellido materno</label>
						<input type="text" class="form-control" name="apellido_materno" required>
					</div>
					<div class="form-group d-flex justify-content-around" style="margin-top: 45px; margin-bottom: 34px;">
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="sexo" id="Hombre" value="Hombre">
							<label class="form-check-label" for="">Hombre</label>
						</div>
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="sexo" id="Mujer" value="Mujer">
							<label class="form-check-label" for="">Mujer</label>
						</div>
					</div>
					<div class="form-group">
						<label for="">Rfc</label>
						<input type="text" class="form-control" name="rfc" required>
					</div>
					<div class="form-group">
						<label for="">Curp</label>
						<input type="text" class="form-control" name="curp" required>
					</div>
					<div class="form-group">
						<label for="">Fecha nacimiento</label>
						<input type="date" class="form-control" name="fecha_nac" required>
					</div>
					<div class="form-group">
						<label for="">Nss</label>
						<input type="text" class="form-control" name="nss" required>
					</div>
					<div class="form-group">
						<label for="">Nivel escolar</label>
						<input type="text" class="form-control" name="nivel_escolar" required>
					</div>
					<div class="form-group">
						<label for="">No licencia</label>
						<input type="number" class="form-control" name="num_licencia" required>
					</div>
					<div class="form-group">
						<label for="">Vencineto Licencia</label>
						<input type="date" class="form-control" name="ven_licencia" required>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="form-group">
						<label for="">Fecha ingreso</label>
						<input type="date" class="form-control" name="fecha_ingreso" required>
					</div>
					<div class="form-group">
						<label for="">Tipo sangre</label>
						<input type="text" class="form-control" name="tipo_sangre" required>
					</div>
					<div class="form-group">
						<label for="">Edo civil</label>
						<select class="form-control" name="edo_civil" required>
							<option value=""></option>
							<option value="1">Casado/a</option>
							<option value="2">Divorciado/a</option>
						</select>
					</div>
					<div class="form-group">
						<label for="">Telefono</label>
						<input type="number" class="form-control" name="telefono" required>
					</div>
					<div class="form-group">
						<label for="">Puesto</label>
						<select class="form-control" name="puesto" required>
							<option value=""></option>
							<option value="1">Supervisor</option>
						</select>
					</div>
					<div class="form-group">
						<label for="">Banco</label>
						<select class="form-control" name="banco" required>
							<option value=""></option>
							<option value="1">Banamex</option>
						</select>
					</div>
					<div class="form-group">
						<label for="">Num cuenta</label>
						<input type="number" class="form-control" name="num_cuenta" required>
					</div>
					<div class="form-group">
						<label for="">Campamento</label>
						<select class="form-control" name="campamento" required>
							<option value=""></option>
							<option value="1">Piedras verdes</option>
						</select>
					</div>
					<div class="form-group">
						<label for="">Unidad de trabajo</label>
						<select class="form-control" name="unidad_trabajo" required>
							<option value=""></option>
							<option value="1">Bolivar</option>
						</select>
					</div>
					<div class="form-group">
						<label for="">Correo</label>
						<input type="email" class="form-control" name="correo" required>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-4">
					<div class="form-group">
						<label for="">Cp</label>
						<input type="text" class="form-control" name="cp_dir" required>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="form-group">
						<label for="">Colonia</label>
						<input type="text" class="form-control" name="colonia" required>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="form-group">
						<label for="">Calle</label>
						<input type="text" class="form-control" name="calle" required>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="form-group">
						<label for="">No Exterior</label>
						<input type="text" class="form-control" name="num_ext" required>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="form-group">
						<label for="">No Interior</label>
						<input type="text" class="form-control" name="num_int" required>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="form-group">
						<label for="">Pais</label>
						<select class="form-control" name="pais" required>
							<option value=""></option>
							<option value="1">Mexico</option>
							<option value="2">Estados unidos</option>
							<option value="3">Canada</option>
						</select>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="form-group">
						<label for="">Estado</label>
						<input type="text" class="form-control" name="estado" required>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="form-group">
						<label for="">Municipio</label>
						<input type="text" class="form-control" name="municipio" required>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="form-group">
						<label for="">Localidad</label>
						<input type="text" class="form-control" name="poblacion" required>
					</div>
				</div>
			</div>
			<div class="row mt-2">
				<div class="col-lg-2 offset-lg-2"><button type="button" class="btn btn-warning btn-block">Imprimir</button></div>
				<div class="col-lg-2"><button type="button" class="btn btn-dark btn-block">Datos familiares</button></div>
				<div class="col-lg-2"><button type="button" class="btn btn-success btn-block">Documentacion</button></div>
				<div class="col-lg-2"><button type="button" class="btn btn-danger btn-block">Cancelar</button></div>
				<div class="col-lg-2"><button type="submit" class="btn btn-primary btn-block">Guardar</button></div>
			</div>
		</form>
	`;	
	return form_empleado;
};

module.exports = formulario;