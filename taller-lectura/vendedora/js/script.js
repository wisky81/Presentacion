$(function() {
	var Page = (function() {
	var config = {
		$bookBlock : $( '#bb-bookblock' ),
		$navNext : $( '#bb-nav-next' ),
		$navPrev : $( '#bb-nav-prev' ),
		$navJump : $( '#bb-nav-jump' ),
		bb : $( '#bb-bookblock' ).bookblock( {
			speed : 800,
			shadowSides : 0.8,
			shadowFlip : 0.7
		} )
	},
	init = function() {
		initEvents();
	},
	initEvents = function() {
		var $slides = config.$bookBlock.children(),
		totalSlides = $slides.length;
		// add navigation events
		config.$navNext.on( 'click', function() {
			config.bb.next();
			return false;
		} );
		config.$navPrev.on( 'click', function() {
			config.bb.prev();
			return false;
		} );
		config.$navJump.on( 'click', function() {
			config.bb.jump( totalSlides );
			return false;
		} );// add swipe events
		$slides.on( {
			'swipeleft'		: function( event ) {
				config.bb.next();
				return false;
			},
			'swiperight'	: function( event ) {
				config.bb.prev();
				return false;
				}
		} );
		};
			return { init : init };
		})();
		Page.init();
		$('#mal').hide();
		$('#bien').hide();
		$('#respuesta').keyup(function(){
			var orden = $('#respuesta').val();
			if(orden == 'en el cuento las casas no tienen ventanas' || orden == 'las casas no tienen ventanas' || orden == 'ninguna casa tenia ventanas'){
			$('#bien').show();
			$('#mal').hide();
			$('#respuesta').attr('disabled', 'disabled');
			}else if(orden == null || orden.length == 0 || /^\s+$/.test(orden)){
				alert('¡El campo debe tener un valor!');
				return false;
			}else{
				$('#mal').show();
			}
		});
		$('#bien1').css("opacity", "0");
		$('#mal1').css("opacity", "0");
		$('#bien2').css("opacity", "0");
		$('#mal2').css("opacity", "0");
		$('#bien3').css("opacity", "0");
		$('#mal3').css("opacity", "0");
		
		$('#r1').keyup(function(){
			var res1 = $('#r1').val();
			if(res1 == 'lamparas y narices' || res1 == 'lámparas y narices'){
				$('#bien1').show();
				$('#bien1').css("opacity", "1");
				$('#mal1').css("opacity", "0");
				$('#r1').attr('disabled', 'disabled');
				$('#r2').focus();
			}else if(res1 == null || res1.length == 0 || /^\s+$/.test(res1)){
				alert('¡El campo debe tener un valor!');
				return false;
			}else{
				$('#bien1').hide();
				$('#mal1').css("opacity", "1");
				$('#mal1').show();
			}
		});
		$('#r2').keyup(function(){
			var res2 = $('#r2').val();
			if(res2 == 'la anciana se nego a recibir el dinero' || res2 == 'la anciana se negó a recibir el dinero'){
				$('#bien2').css("opacity", "1");
				$('#bien2').show('fast');
				$('#mal2').hide();
				$('#r2').attr('disabled', 'disabled');
				$('#r3').focus();
			}else if(res2 == null || res2.length == 0 || /^\s+$/.test(res2)){
				alert('¡El campo debe tener un valor!');
				return false;
			}else{
				$('#mal2').show();
				$('#mal2').css("opacity", "1");
				$('#bien2').hide();
			}
		});
		$('#r3').keyup(function(){
			var res3 = $('#r3').val();
			if(res3 == 'dos luciernagas' || res3 == 'dos luciérnagas'){
				$('#bien3').css("opacity", "1");
				$('#bien3').show('fast');
				$('#mal3').hide();
				$('#r3').attr('disabled', 'disabled');
			}else if(res3 == null || res3.length == 0 || /^\s+$/.test(res3)){
				alert('¡El campo debe tener un valor!');
				return false;
			}else{
				$('#mal3').show();
				$('#mal3').css("opacity", "1");
				$('#bien3').hide();
			}
		});
		$('#ima3').validate({
			rules: {
				uno: { required: true, number: true},
				dos: { required: true, number: true},
				tres: { required: true, number: true},
				qatro: { required: true, number: true},
				cinco: { required: true, number: true}
			},
			messages: {
				uno: { required: "El campo es obligatorio.", number: "Por favor, introduzca un número válido."},
				dos : { required: "El campo es obligatorio.", number: "Por favor, introduzca un número válido."},
				tres : {required: "El campo es obligatorio.", number:"Por favor, introduzca un número válido."},
				qatro : {required: "El campo es obligatorio.", number:"Por favor, introduzca un número válido."},
				cinco : {required: "El campo es obligatorio.", number:"Por favor, introduzca un número válido."}
			}
		});
		$('#rC1').hide();
		$('#rC2').hide();
		$('#rC3').hide();
		$('#rC4').hide();
		$('#rC5').hide();
		$('#uno').keyup(function(){
			var uno = $('#uno').val();
			if(uno == "2"){
				$('#uno').attr('disabled', 'disabled');
				$('#rC2').show();
				$('#dos').focus();
			}
		});
		$('#dos').keyup(function(){
			var dos = $('#dos').val();
			if(dos == "1"){
				$('#dos').attr('disabled', 'disabled');
				$('#rC1').show();
				$('#tres').focus();
			}
		});
		$('#tres').keyup(function(){
			var tres = $('#tres').val();
			if(tres == "5"){
				$('#tres').attr('disabled', 'disabled');
				$('#rC5').show();
				$('#qatro').focus();
			}
		});
		$('#qatro').keyup(function(){
			var cuatro = $('#qatro').val();
			if(cuatro == "4"){
				$('#qatro').attr('disabled', 'disabled');
				$('#rC4').show();
				$('#cinco').focus();
			}
		});
		$('#cinco').keyup(function(){
			var cinco = $('#cinco').val();
			if(cinco == "3"){
				$('#cinco').attr('disabled', 'disabled');
				$('#rC3').show();
			}
		});
});