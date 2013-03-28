var s = function(id){
	return document.getElementById(id);
}
s('b').style.display = 'none';
s('b1').style.display = 'none';
s('b2').style.display = 'none';
s('b3').style.display = 'none';
s('b4').style.display = 'none';
s('b5').style.display = 'none';
s('b6').style.display = 'none';
s('b7').style.display = 'none';
s('r1').focus();

function formulario(f){
	if(f.b.value == ''){
		apprise('Digita la respuesta');
		return false;
	}
	return true;
}

function validar_1(){
	var a = s('r1').value;
	var b = s('r2').value;
	var c = s('r3').value;
	var d = s('r4').value;
	var e = s('r5').value;
	var f = s('r6').value;
	var g = s('r7').value;
	var h = s('r8').value;
	
	if(a == 'orden'){
		s('b').style.display = 'block';
		s('r1').disabled = true;
	}
	if(b == 'sugerencia'){
		s('b1').style.display = 'block';
		s('r2').disabled = true;
	}
	if(c == 'orden'){
		s('b2').style.display = 'block';
		s('r3').disabled = true;
	}
	if(d == 'sugerencia'){
		s('b3').style.display = 'block';
		s('r4').disabled = true;
	}
	if(e == 'imperativo'){
		s('b4').style.display = 'block';
		s('r5').disabled = true;
	}
	if(f == 'infinitivo'){
		s('b5').style.display = 'block';
		s('r6').disabled = true;
	}
	if(g =='imperativo'){
		s('b6').style.display = 'block';
		s('r7').disabled = true;
	}
	if(h == 'infinitivo'){
		s('b7').style.display = 'block';
		s('r8').disabled = true;
	}
	if(a =='' || a !='orden'){
		apprise('¡El campo debe tener un valor!');
		return true;
	}
	if(b =='' || b !='sugerencia'){
		apprise('¡Verifica la respuesta!');
		return true;
	}
	if(c == '' || c !='orden'){
		apprise('¡El campo debe tener un valor!');
		return true;
	}
	if(d  == '' || d !='sugerencia'){
		apprise('¡El campo debe tener un valor!');
		return true;
	}
	if(e == '' || e !='imperativo'){
		apprise('¡Verifica la respuesta!');
		return true;
	}
	if(f == '' || f !='infinitivo'){
		apprise('¡El campo debe tener un valor!');
		return true;
	}
	if(g == '' || g !='imperativo'){
		apprise('¡Verifica la respuesta!');
		return true;
	}
	if(h == '' || h !='infinitivo'){
		('¡El campo debe tener un valor!');
		return true;
	}
}

//función para que solo detecte minusculas
var keyDetect = function(e){
	if(e.keyCode < 97 || e.keyCode > 122){
		e.preventDefault();
	}
}
s('r1').onkeypress = keyDetect;
s('r2').onkeypress = keyDetect;
s('r3').onkeypress = keyDetect;
s('r4').onkeypress = keyDetect;
s('r5').onkeypress = keyDetect;
s('r6').onkeypress = keyDetect;
s('r7').onkeypress = keyDetect;
s('r8').onkeypress = keyDetect;
s('consultar').onclick = validar_1;
s('consultar').style.cursor = 'pointer';
s('next').onclick = habili;
