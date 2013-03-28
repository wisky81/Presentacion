/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_txt_play}", "click", function(sym, e) {
         // Ocultar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("mas_principal").hide();
         
         sym.$("txt_play").hide();
         
         
         
         sym.play();
         // Buscar el objeto JavaScript de símbolo de Edge Animate en un elemento que sea
         // una instancia de símbolo. El objeto de símbolo puede usarse para invocar
         // las funciones de símbolo como reproducir, detener, etc.
         var monito = sym.getSymbol("caminar");
         
         monito.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mas_principal}", "click", function(sym, e) {
         sym.$("mas_principal").hide();
         sym.$("txt_play").hide();
         sym.play();
         var monito = sym.getSymbol("caminar");
         monito.play();
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8127, function(sym, e) {
         // introducir código aquí// Buscar el objeto JavaScript de símbolo de Edge Animate en un elemento que sea
         // una instancia de símbolo. El objeto de símbolo puede usarse para invocar
         // las funciones de símbolo como reproducir, detener, etc.
         var anirobot = sym.getSymbol("robot");
         
         anirobot.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 71750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_home}", "click", function(sym, e) {
        window.top.location.href = "../../../index.html";

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'caminar'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // introducir código aquí
         // reproducir la línea de tiempo en la posición determinada (ms o etiqueta)
         sym.play("ciclo1");

      });
      //Edge binding end

   })("caminar");
   //Edge symbol end:'caminar'

   //=========================================================
   
   //Edge symbol: 'rostro'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         
         sym.play("ciclo1");
         

      });
      //Edge binding end

   })("rostro");
   //Edge symbol end:'rostro'

   //=========================================================
   
   //Edge symbol: 'robot'
   (function(symbolName) {   
   
   })("robot");
   //Edge symbol end:'robot'

})(jQuery, AdobeEdge, "EDGE-6620540");
