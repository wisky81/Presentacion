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
      
      
      

      

      Symbol.bindElementAction(compId, symbolName, "${_espanol3}", "click", function(sym, e) {
          window.location.href = "espanol/espanol3/contenido/content_E3b5/ejercicio_autobiografias/index.html";

      });
      //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_mate3}", "click", function(sym, e) {
         window.location.href = "matematicas/matematicas3/ejerciciosintegrados/index.html";

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_quimica3}", "click", function(sym, e) {
          window.location.href = "ciencias/quimica/contenidos/bloque3/comprobamos_azucares.html";

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_taller}", "click", function(sym, e) {
         window.location.href = "taller-lectura/indexT.html";

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_icono_portal}", "click", function(sym, e) {
window.location.href = "portal_educa/indexp.html";

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_icono_prese}", "click", function(sym, e) {
window.location.href = "presentacion/index.html";

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mc_espanol13}", "click", function(sym, e) {
          window.location.href = "espanol/espanol1/reglamento_interno.html";

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mc_fisica2}", "click", function(sym, e) {
          window.location.href = "ciencias/fisica/contenidos/bloque3/cambios_estado.html";

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mc_mate2}", "click", function(sym, e) {
          window.location.href = "matematicas/matematicas2/sistema_ecuaciones_dos_incognitas.html";

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mc_espanol2}", "click", function(sym, e) {
         window.location.href = "#";

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mc_biolo1}", "click", function(sym, e) {
         window.location.href = "ciencias/biologia/contenidos/bloque1/index.html";
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mc_mate1}", "click", function(sym, e) {
         window.location.href = "#";

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'mc_espanol1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_espanol}", "click", function(sym, e) {

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 90, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("mc_espanol1");
   //Edge symbol end:'mc_espanol1'

   //=========================================================
   
   //Edge symbol: 'mc_fisica2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_fisica2}", "click", function(sym, e) {

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
         // introducir código aquí
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 145, function(sym, e) {
         
         sym.play();

      });
      //Edge binding end

   })("mc_fisica2");
   //Edge symbol end:'mc_fisica2'

   //=========================================================
   
   //Edge symbol: 'mc_mate1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_mate1}", "click", function(sym, e) {
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 145, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("mc_mate1");
   //Edge symbol end:'mc_mate1'

   //=========================================================
   
   //Edge symbol: 'mc_biolo1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_biologia}", "click", function(sym, e) {
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 75, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("mc_biolo1");
   //Edge symbol end:'mc_biolo1'

   //=========================================================
   
   //Edge symbol: 'mc_espanol2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_espanol2}", "click", function(sym, e) {
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23000, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 125, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("mc_espanol2");
   //Edge symbol end:'mc_espanol2'

   //=========================================================
   
   //Edge symbol: 'mc_mate2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_mate2}", "click", function(sym, e) {

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 100, function(sym, e) {
         // introducir código aquí
      });
      //Edge binding end

   })("mc_mate2");
   //Edge symbol end:'mc_mate2'

})(jQuery, AdobeEdge, "EDGE-24649434");