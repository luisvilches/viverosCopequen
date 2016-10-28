$(document).ready(function(){
	$("#formContacto").submit(function(e) {
		if(validacion()){
			$.ajax({
			type: 'post',
			url: 'contacto.php',
			data: $(this).serialize(),
			success: function(response){
				if (response == 'success') {
					Materialize.toast('Mensaje enviado con exito', 4000,'success');
					$('#formContacto')[0].reset();
				}else{
					Materialize.toast('error', 4000,'error');
				}
			}
		});
		}
		return false;
	})

	/*$("#formLogin").submit(function(e) {
		e.preventDefault();
		if(validLogin()){
			$.ajax({
			type: 'post',
			contentType: "application/text; charset=utf-8",
			headers : {
		        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
		    },
			url: 'http://www.viveroscopequen.cl/intranet/codigonet/entrar',
			data: $(this).serialize(),
			success: function (result) {
        		if (result == "error") {
					Materialize.toast('Usuario o Clave incorrecta', 4000,'error');
					e.preventDefault();
        		}else{
        			$(document.body).html(result);
					console.log(result);
        		}
		    },
		    error: function (xhr, ajaxOptions, thrownError) {
		    	Materialize.toast(xhr, 4000,'error');
		        console.log(xhr);
		    }
			});
		}
		return false;
	})
});*/




    