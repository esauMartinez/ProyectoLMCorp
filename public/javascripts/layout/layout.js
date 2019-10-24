let i = -1;
document.querySelector('.btn-ver-menu').addEventListener('click', function () {
	if (i === -1) {
		let left_nav = document.querySelector('.navbar-left');
		left_nav.style.width = '0';

		document.querySelector('.logo').style.visibility = 'hidden';
		document.querySelector('.contenedor-menu').style.visibility = 'hidden';
		document.querySelector('body').style.padding = '0px';
		i = 1;
	} else {
		let left_nav = document.querySelector('.navbar-left');
		left_nav.style.width = '350px';
		
		document.querySelector('.logo').style.visibility = 'visible';
		document.querySelector('.contenedor-menu').style.visibility = 'visible';
		document.querySelector('body').style.padding = '0 0 0 350px';
		i = -1;
	} 
});