function validacion(){
	var nombre = document.getElementById('nombre').value;
	var correo = document.getElementById('correo').value;
	var telefono = document.getElementById('telefono').value;
	var asunto = document.getElementById('asunto').value;
	var mensaje = document.getElementById('mensaje').value;
	var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){

		Materialize.toast('Campo 	nombre Invalido', 4000,'error');
		return false;
	}

	else if(!expr.test(correo)){
		Materialize.toast('Campo correo invalido', 4000,'error');
		return false;
	} 

	else if(!(/^\d{9}$/.test(telefono))){
		Materialize.toast('Campo telefono invalido', 4000,'error');
		return false;
	}

	else if(asunto == null || asunto.length == 0 || /^\s+$/.test(asunto)){
		Materialize.toast('Campo asunto invalido', 4000,'error');
		return false;
	}

	else if(mensaje == null || mensaje.length == 0 || /^\s+$/.test(mensaje)){
		Materialize.toast('Campo mensaje invalido', 4000,'error');
		return false;
	}
	return true;
};	

function validLogin(){
	var usuario = document.getElementById('usuario').value;
	var password = document.getElementById('password').value;

	if(usuario == null || usuario.length == 0 || /^\s+$/.test(usuario)){

		Materialize.toast('Campo usuario Invalido', 4000,'error');
		return false;
	}

	else if(password == null || password.length == 0 || /^\s+$/.test(password)){
		Materialize.toast('Campo password invalido', 4000,'error');
		return false;
	}
	return true;
};	