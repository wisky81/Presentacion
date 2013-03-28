var s = function(id){
	return document.getElementById(id);
}

s('back').style.display = 'none';

var funcionORden = function (){
	var orden = document.getElementById('orden').value;
	var invita = document.getElementById('invita').value;
	
	if(orden == 'orden ó mandato' || orden =='orden o mandato'){
		s('orden').disabled = true;
	}
	if(invita == 'invitación ó sugerencia' || invita =='invitacion ó sugerencia' || invita =='invitacion o sugerencia' || invita =='invitación o sugerencia'){
		s('invita').disabled = true;
	}
	
	if(s('orden').disabled && s('invita').disabled){
		s('consultar-2').style.display = 'none';
		s('back').style.display = 'block';
	}else{
		if(orden == null || orden.length == 0 || /^\s+$/.test(orden) && invita == null || invita.length == 0 || /^\s+$/.test(orden)){
			apprise('¡El campo debe tener un valor!');
			return false;
		}else{
			apprise('¡Verifica la respuesta!');
			return false;
		}
	}
}

s('consultar-2').onclick = funcionORden;
s('consultar-2').style.cursor = 'pointer';
s('back').style.cursor = 'pointer';