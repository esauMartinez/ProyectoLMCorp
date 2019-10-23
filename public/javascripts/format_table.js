let format_table = function(){
	$('table').DataTable({
		"language": {
			"lengthMenu": "Mostrar _MENU_ datos por pagina",
			"zeroRecords": "Nothing found - sorry",
			"info": "",
			"sSearch": "Buscar:",
			"infoEmpty": "No se encontraron registros",
			"infoFiltered": "(flitrado de _MAX_ registros)",
			"oPaginate": {
				"sFirst": "Primero",
				"sLast": "Último",
				"sNext": "Siguiente",
				"sPrevious": "Anterior"
			}
		}
	});
};