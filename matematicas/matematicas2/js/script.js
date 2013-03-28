(function() {
			var lastTime = 0;
			var vendors = ['ms', 'moz', 'webkit', 'o'];
			for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
				window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
				window.cancelAnimationFrame =
						window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
			}
	
			if (!window.requestAnimationFrame)
				window.requestAnimationFrame = function(callback, element) {
					var currTime = new Date().getTime();
					var timeToCall = Math.max(0, 16 - (currTime - lastTime));
					var id = window.setTimeout(function() { callback(currTime + timeToCall); },
							timeToCall);
					lastTime = currTime + timeToCall;
					return id;
				};
	
			if (!window.cancelAnimationFrame)
				window.cancelAnimationFrame = function(id) {
					clearTimeout(id);
				};
		}());
		function Carousel(element)
		{
			var self = this;
			element = $(element);
			var container = $(">ul", element);
			var panes = $(">ul>li", element);
			var pane_width = 0;
			var pane_count = panes.length;
			var current_pane = 0;
			this.init = function() {
				setPaneDimensions();
	
				$(window).on("load resize orientationchange", function() {
					setPaneDimensions();
					//updateOffset();
				})
			};
			function setPaneDimensions() {
				pane_width = element.width();
				panes.each(function() {
					$(this).width(pane_width);
				});
				container.width(pane_width*pane_count);
			};
			this.showPane = function( index ) {
				index = Math.max(0, Math.min(index, pane_count-1));
				current_pane = index;
				var offset = -((100/pane_count)*current_pane);
				setContainerOffset(offset, true);
			};
			function setContainerOffset(percent, animate) {
				container.removeClass("animate");
				if(animate) {
					container.addClass("animate");
				}
				if(Modernizr.csstransforms3d) {
					container.css("transform", "translate3d("+ percent +"%,0,0) scale3d(1,1,1)");
				}
				else if(Modernizr.csstransforms) {
					container.css("transform", "translate("+ percent +"%,0)");
				}
				else {
					var px = ((pane_width*pane_count) / 100) * percent;
					container.css("left", px+"px");
				}
			}
			this.next = function() { return this.showPane(current_pane+1, true); };
			this.prev = function() { return this.showPane(current_pane-1, true); };
			function handleHammer(ev) {
				console.log(ev);
				ev.gesture.preventDefault();
				switch(ev.type) {
					case 'dragright':
					case 'dragleft':
						var pane_offset = -(100/pane_count)*current_pane;
						var drag_offset = ((100/pane_width)*ev.gesture.deltaX) / pane_count;
						if((current_pane == 0 && ev.gesture.direction == Hammer.DIRECTION_RIGHT) ||
							(current_pane == pane_count-1 && ev.gesture.direction == Hammer.DIRECTION_LEFT)) {
							drag_offset *= .4;
						}
						setContainerOffset(drag_offset + pane_offset);
						break;
					case 'swipeleft':
						self.next();
						ev.gesture.stopDetect();
						$('#an-anim').css("display", "block");
						break;
					case 'swiperight':
						self.prev();
						ev.gesture.stopDetect();
						break;
					case 'release':
						if(Math.abs(ev.gesture.deltaX) > pane_width/2) {
							if(ev.gesture.direction == 'right') {
								self.prev();
							} else {
								self.next();
							}
						}
						else {
							self.showPane(current_pane, true);
						}
						break;
				}
			}
			element.hammer({ drag_lock_to_axis: true })
				.on("release dragleft dragright swipeleft swiperight", handleHammer);
		}
		var carousel = new Carousel("#carousel");
		carousel.init();
		
function overlay(){
	document.getElementById('light').style.display='block';
	document.getElementById('fade').style.display='block'
}
function overlay1(){
	document.getElementById('light1').style.display='block';
	document.getElementById('fade1').style.display='block'
}
function overlay2(){
	document.getElementById('light2').style.display='block';
	document.getElementById('fade2').style.display='block'
}
var ValidaSoloNumeros= function () {
 if ((event.keyCode < 48) || (event.keyCode > 57))
  event.returnValue = false;
}
var resultado =function(){
	var uno =document.getElementById('valor').value;
	var dos =document.getElementById('valor1').value;
	
	if(uno == 8 && dos == 2){
		document.getElementById('correcto').style.display='block';
		document.getElementById('resultado').disabled = true;
		document.getElementById('valor').disabled = true;
		document.getElementById('valor1').disabled = true;
		alert('Correcto');
	} else if(uno == null || uno.length == 0 || /^\s+$/.test(uno) && dos == null || dos.length == 0 || /^\s+$/.test(dos)){
			alert('¡El campo debe tener un valor!');
			return false;
		}else{
			document.getElementById('incorrecto').style.display='block';
			document.getElementById('valor').disabled = true;
			document.getElementById('valor1').disabled = true;
			return false;
		}
};
var volver = function(){
	document.getElementById('incorrecto').style.display='none';
	document.getElementById('valor').disabled = false;
	document.getElementById('valor').value = '';
	document.getElementById('valor').focus();
	document.getElementById('valor1').disabled = false;
	document.getElementById('valor1').value = '';
};
document.getElementById('valor').onkeypress = ValidaSoloNumeros;
document.getElementById('valor1').onkeypress = ValidaSoloNumeros;
document.getElementById('resultado').onclick = resultado;
document.getElementById('new').onclick = volver;