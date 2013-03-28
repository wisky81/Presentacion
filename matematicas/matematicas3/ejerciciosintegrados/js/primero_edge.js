/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'pizarron',
            type:'image',
            rect:['0','0','900px','700px','auto','auto'],
            fill:["rgba(0,0,0,0)","img/pizarron.png",'0px','0px']
         },
         {
            id:'triangulos',
            display:'none',
            type:'image',
            rect:['329px','390px','500px','150px','auto','auto'],
            fill:["rgba(0,0,0,0)","img/triangulos.png",'0px','0px']
         },
         {
            id:'Text',
            display:'none',
            type:'text',
            rect:['71px','53px','761px','57px','auto','auto'],
            text:"Teorema de Pitágoras<br>",
            align:"center",
            font:['Fabada-regular',30,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'introduccion',
            type:'text',
            rect:['71px','-97px','761px','100px','auto','auto'],
            text:"El teorema de Pitágoras señala la relación que existe entre las longitudes de los catetos y la hipotenusa de un TRIÁNGULO RECTÁNGULO.<br>",
            align:"left",
            font:['Fabada-regular',20,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'introduccion2',
            type:'text',
            rect:['71px','-286px','761px','175px','auto','auto'],
            text:"El triángulo rectángulo es el que se caracteriza por tener un ángulo interno recto, es decir mide 90° . El lado opuesto al triángulo rectángulo se llama HIPOTENUSA y los lados que conforman el ángulo se llaman CATETOS,  como se muestra a continuación:<br>",
            align:"left",
            font:['Fabada-regular',20,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'mas_principal',
            type:'rect',
            rect:['0px','0px','900px','696px','auto','auto'],
            opacity:0.54671303093808,
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'txt_play',
            type:'group',
            rect:['265px','239px','400','217','auto','auto'],
            c:[
            {
               id:'play2',
               type:'image',
               rect:['133px','0px','100px','100px','auto','auto'],
               opacity:0.66666666666667,
               fill:["rgba(0,0,0,0)","img/play.png",'0px','0px']
            },
            {
               id:'iniciar',
               type:'text',
               rect:['0px','133px','400px','84px','auto','auto'],
               text:"Da clic para iniciar<br>",
               align:"center",
               font:['Fabada-regular',35,"rgba(255,255,255,1.00)","normal","none",""]
            }]
         },
         {
            id:'mono_desenfoque',
            type:'image',
            rect:['957px','322px','271px','452px','auto','auto'],
            fill:["rgba(0,0,0,0)","img/mono_desenfoque.png",'0px','0px'],
            transform:[[],['-90deg']]
         },
         {
            id:'mono_desenfoque2',
            type:'image',
            rect:['953px','321px','271px','452px','auto','auto'],
            opacity:1,
            fill:["rgba(0,0,0,0)","img/mono_desenfoque2.png",'0px','0px'],
            transform:[[],['-90deg']]
         },
         {
            id:'tct_cate',
            display:'none',
            type:'text',
            rect:['351px','540px','auto','auto','auto','auto'],
            text:"Catetos",
            align:"left",
            font:['Fabada-regular',25,"rgba(255,255,255,1)","normal","none","normal"],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'tct_cate2',
            display:'none',
            type:'text',
            rect:['697px','365px','auto','auto','auto','auto'],
            text:"Catetos",
            align:"left",
            font:['Fabada-regular',25,"rgba(255,255,255,1)","normal","none","normal"],
            textShadow:["rgba(0,0,0,0.65)",3,3,3],
            transform:[[],['-30deg']]
         },
         {
            id:'tct_cate2Copy',
            display:'none',
            type:'text',
            rect:['445px','404px','auto','auto','auto','auto'],
            text:"Hipotenusa",
            align:"left",
            font:['Fabada-regular',25,"rgba(255,255,255,1)","normal","none","normal"],
            textShadow:["rgba(0,0,0,0.65)",3,3,3],
            transform:[[],['29deg']]
         },
         {
            id:'tct_cate2Copy2',
            display:'none',
            type:'text',
            rect:['668px','536px','auto','auto','auto','auto'],
            text:"Hipotenusa",
            align:"left",
            font:['Fabada-regular',25,"rgba(255,255,255,1)","normal","none","normal"],
            textShadow:["rgba(0,0,0,0.65)",3,3,3],
            transform:[[],['0deg']]
         },
         {
            id:'txt_actividad4',
            type:'text',
            rect:['-439px','339px','574px','67px','auto','auto'],
            text:"4.-Obtener la raíz cuadrada de la suma anterior <br>",
            align:"left",
            font:['Fabada-regular',20,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'tria_eje_1',
            display:'none',
            type:'image',
            rect:['362px','271px','283px','180px','auto','auto'],
            fill:["rgba(0,0,0,0)","img/tria_eje_1.png",'0px','0px']
         },
         {
            id:'txt_actividad1',
            display:'none',
            type:'text',
            rect:['-439px','64px','761px','175px','auto','auto'],
            text:"Actividad<br><br>Traza en tu cuaderno un triángulo rectángulo A B C, cuyos catetos midan 3 y 5 cm respectivamente , como el que se muestra:<br>",
            align:"left",
            font:['Fabada-regular',20,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'txt_actividad2',
            display:'none',
            type:'text',
            rect:['-439px','39px','574px','67px','auto','auto'],
            text:"<br>2.- Obtenemos el cuadrado de ambos catetos:<br>",
            align:"left",
            font:['Fabada-regular',20,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'txt_actividad3_1',
            type:'text',
            rect:['71px','276px','257px','48px','auto','auto'],
            text:"9 más 25 = 34",
            align:"left",
            font:['Fabada-regular',20,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'Group3',
            display:'none',
            type:'group',
            rect:['68','365','100','68','auto','auto'],
            c:[
            {
               id:'raiz',
               type:'image',
               rect:['0px','0px','55px','46px','auto','auto'],
               fill:["rgba(0,0,0,0)","img/raiz.png",'0px','0px']
            },
            {
               id:'txt_actividad4_1',
               type:'text',
               rect:['23px','20px','77px','48px','auto','auto'],
               text:"34 = 6",
               align:"left",
               font:['Fabada-regular',20,"rgba(255,255,255,1.00)","normal","none",""],
               textShadow:["rgba(0,0,0,0.65)",3,3,3]
            }]
         },
         {
            id:'txt_actividad3',
            display:'none',
            type:'text',
            rect:['-439px','209px','574px','67px','auto','auto'],
            text:"<br>3.- Sumar el resultado del cuadrado de los catetos<br>",
            align:"left",
            font:['Fabada-regular',20,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'Group',
            type:'group',
            rect:['71','117px','287','54','auto','auto'],
            c:[
            {
               id:'txt_actividad2_5',
               type:'text',
               rect:['30px','6px','257px','48px','auto','auto'],
               text:"= 3 por 3 = 9",
               align:"left",
               font:['Fabada-regular',20,"rgba(255,255,255,1.00)","normal","none",""],
               textShadow:["rgba(0,0,0,0.65)",3,3,3]
            },
            {
               id:'txt_actividad2_1',
               type:'text',
               rect:['0px','6px','34px','46px','auto','auto'],
               text:"3",
               align:"left",
               font:['Fabada-regular',20,"rgba(255,255,255,1.00)","normal","none",""],
               textShadow:["rgba(0,0,0,0.65)",3,3,3]
            },
            {
               id:'txt_actividad2_2',
               type:'text',
               rect:['16px','0px','34px','46px','auto','auto'],
               text:"2",
               align:"left",
               font:['Fabada-regular',12,"rgba(255,255,255,1.00)","normal","none",""],
               textShadow:["rgba(0,0,0,0.65)",3,3,3]
            }]
         },
         {
            id:'Group2',
            type:'group',
            rect:['71','168px','287','54','auto','auto'],
            c:[
            {
               id:'txt_actividad2_5Copy',
               type:'text',
               rect:['30px','6px','257px','48px','auto','auto'],
               text:"= 5 por 5 = 25",
               align:"left",
               font:['Fabada-regular',20,"rgba(255,255,255,1.00)","normal","none",""],
               textShadow:["rgba(0,0,0,0.65)",3,3,3]
            },
            {
               id:'txt_actividad2_3',
               type:'text',
               rect:['0px','6px','34px','46px','auto','auto'],
               text:"5",
               align:"left",
               font:['Fabada-regular',20,"rgba(255,255,255,1.00)","normal","none",""],
               textShadow:["rgba(0,0,0,0.65)",3,3,3]
            },
            {
               id:'txt_actividad2_4',
               type:'text',
               rect:['16px','0px','34px','46px','auto','auto'],
               text:"2",
               align:"left",
               font:['Fabada-regular',12,"rgba(255,255,255,1.00)","normal","none",""],
               textShadow:["rgba(0,0,0,0.65)",3,3,3]
            }]
         },
         
         {
            id:'home',
            display:'none',
            type:'image',
            rect:['756px','568px','51px','50px','auto','auto'],
            fill:["rgba(0,0,0,0)","img/home.png",'0px','0px']
         },
         {
            id:'caminar',
            display:'none',
            type:'rect',
            rect:['453','315','auto','auto','auto','auto']
         },
         {
            id:'robot',
            display:'none',
            type:'rect',
            rect:['-18px','168','auto','auto','auto','auto'],
            transform:[[],[],[],['0.823','0.823']]
         }],
         symbolInstances: [
         {
            id:'caminar',
            symbolName:'caminar'
         },
         {
            id:'robot',
            symbolName:'robot'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Group3}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '1.35px']
         ],
         "${_Text3Copy}": [
            ["style", "top", '175px'],
            ["style", "width", '20.888916015625px']
         ],
         "${_txt_play}": [
            ["style", "left", '265px'],
            ["style", "top", '239px']
         ],
         "${_Text3Copy3}": [
            ["style", "top", '162.65px'],
            ["style", "width", '20.888916015625px'],
            ["style", "left", '84px'],
            ["style", "font-size", '14px']
         ],
         "${_txt_actividad2_3}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '0px'],
            ["style", "font-size", '20px'],
            ["style", "top", '6.02px'],
            ["style", "line-height", '27px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'block'],
            ["style", "height", '45.549999237061px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "opacity", '1'],
            ["style", "width", '34.22216796875px']
         ],
         "${_txt_actividad2_5Copy}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '30px'],
            ["style", "font-size", '20px'],
            ["style", "top", '6.02px'],
            ["style", "opacity", '1'],
            ["style", "text-align", 'left'],
            ["style", "line-height", '27px'],
            ["style", "display", 'block'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "height", '48.000108506944px'],
            ["style", "width", '256.99997287326px']
         ],
         "${_txt_actividad1}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '-539px'],
            ["style", "font-size", '20px'],
            ["style", "top", '64px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["style", "display", 'none'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "line-height", '27px'],
            ["style", "height", '175px']
         ],
         "${_txt_actividad3_1}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '-139px'],
            ["style", "font-size", '20px'],
            ["style", "top", '276px'],
            ["style", "opacity", '0'],
            ["style", "text-align", 'left'],
            ["style", "line-height", '27px'],
            ["style", "display", 'block'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "height", '48.000108506944px'],
            ["style", "width", '256.99997287326px']
         ],
         "${_Group2}": [
            ["style", "top", '167.97px'],
            ["style", "opacity", '0'],
            ["style", "left", '-169px']
         ],
         "${_txt_actividad4_1}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '22.65px'],
            ["style", "font-size", '20px'],
            ["style", "top", '19.57px'],
            ["style", "width", '76.983337402344px'],
            ["style", "text-align", 'left'],
            ["style", "height", '48.000108506944px'],
            ["style", "display", 'block'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "line-height", '27px'],
            ["style", "opacity", '1']
         ],
         "${_tct_cate2Copy}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["transform", "rotateZ", '29deg'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '445.27px'],
            ["style", "font-size", '25px'],
            ["style", "top", '403.6px'],
            ["style", "display", 'none'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "opacity", '0']
         ],
         "${_btn_sig}": [
            ["style", "top", '311px'],
            ["style", "left", '808.55px'],
            ["style", "display", 'none']
         ],
         "${_caminar}": [
            ["style", "display", 'none'],
            ["style", "top", '315px']
         ],
         "${_introduccion2}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '71px'],
            ["style", "font-size", '20px'],
            ["style", "top", '-286px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'block'],
            ["style", "height", '175px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "line-height", '27px'],
            ["style", "opacity", '0']
         ],
         "${_iniciar}": [
            ["style", "top", '133px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", 'Fabada-regular'],
            ["style", "left", '0.02px'],
            ["style", "font-size", '35px']
         ],
         "${_Text3}": [
            ["style", "top", '174.67px'],
            ["style", "width", '42px']
         ],
         "${_tria_eje_1}": [
            ["style", "top", '412.02px'],
            ["style", "display", 'none'],
            ["style", "height", '8.9752477639135px'],
            ["style", "opacity", '1'],
            ["style", "left", '540.9px'],
            ["style", "width", '14.111083984375px']
         ],
         "${_mas_principal}": [
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["style", "opacity", '0.5467130541801453'],
            ["style", "height", '696px'],
            ["style", "width", '900px']
         ],
         "${_txt_actividad4}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '-199px'],
            ["style", "font-size", '20px'],
            ["style", "top", '339px'],
            ["style", "opacity", '0'],
            ["style", "text-align", 'left'],
            ["style", "line-height", '27px'],
            ["style", "height", '67.216667175293px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "display", 'block'],
            ["style", "width", '574.31683349609px']
         ],
         "${_robot}": [
            ["style", "top", '-266.35px'],
            ["transform", "scaleY", '0.8233'],
            ["style", "display", 'none'],
            ["style", "left", '-17.63px'],
            ["transform", "scaleX", '0.8233']
         ],
         "${_tct_cate}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '351px'],
            ["style", "font-size", '25px'],
            ["style", "top", '540px'],
            ["style", "display", 'none'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "opacity", '0']
         ],
         "${_play2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0.66666666666667'],
            ["style", "left", '132.73px']
         ],
         "${_triangulos}": [
            ["style", "top", '390.27px'],
            ["style", "opacity", '0.081761006289308'],
            ["style", "left", '729.45px'],
            ["style", "display", 'none']
         ],
         "${_txt_actividad3}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '-279px'],
            ["style", "font-size", '20px'],
            ["style", "top", '209px'],
            ["style", "opacity", '0'],
            ["style", "text-align", 'left'],
            ["style", "line-height", '27px'],
            ["style", "height", '67.216667175293px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "display", 'none'],
            ["style", "width", '574.31683349609px']
         ],
         "${_Group}": [
            ["style", "top", '116.97px'],
            ["style", "opacity", '0'],
            ["style", "left", '-89px']
         ],
         "${_tct_cate2}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["transform", "rotateZ", '-30deg'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '697px'],
            ["style", "font-size", '25px'],
            ["style", "top", '365px'],
            ["style", "display", 'none'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "opacity", '0']
         ],
         "${_txt_actividad2}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '-479px'],
            ["style", "font-size", '20px'],
            ["style", "top", '39px'],
            ["style", "width", '574.31683349609px'],
            ["style", "text-align", 'left'],
            ["style", "height", '67.216667175293px'],
            ["style", "display", 'none'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "line-height", '27px'],
            ["style", "opacity", '0']
         ],
         "${_txt_actividad2_4}": [
            ["style", "line-height", '27px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '16px'],
            ["style", "font-size", '12px'],
            ["style", "top", '0.02px'],
            ["style", "width", '34.22216796875px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '1'],
            ["style", "display", 'block'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "height", '45.549999237061px'],
            ["subproperty", "textShadow.blur", '3px']
         ],
         "${_txt_actividad2_1}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '0px'],
            ["style", "font-size", '20px'],
            ["style", "top", '6.02px'],
            ["style", "width", '34.22216796875px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '1'],
            ["style", "height", '45.549999237061px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "display", 'block'],
            ["style", "line-height", '27px']
         ],
         "${_Text3Copy2}": [
            ["style", "top", '170.65px'],
            ["style", "font-size", '20px'],
            ["style", "left", '71px'],
            ["style", "width", '20.888916015625px']
         ],
         "${_home}": [
            ["style", "top", '567.77px'],
            ["style", "left", '756.42px'],
            ["style", "display", 'none']
         ],
         "${_txt_actividad2_2}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '16px'],
            ["style", "font-size", '12px'],
            ["style", "top", '0.02px'],
            ["style", "line-height", '27px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'block'],
            ["style", "height", '45.549999237061px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "opacity", '1'],
            ["style", "width", '34.22216796875px']
         ],
         "${_mono_desenfoque2}": [
            ["style", "top", '320.5px'],
            ["transform", "rotateZ", '-90deg'],
            ["style", "display", 'block'],
            ["style", "opacity", '0.40880503144654'],
            ["style", "left", '993.12px']
         ],
         "${_raiz}": [
            ["style", "top", '0.02px'],
            ["style", "height", '45.549999237061px'],
            ["style", "left", '0px'],
            ["style", "width", '54.659999084473px']
         ],
         "${_Text}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '71px'],
            ["style", "font-size", '30px'],
            ["style", "top", '53px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "line-height", '40px'],
            ["style", "opacity", '0']
         ],
         "${_tct_cate2Copy2}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["transform", "rotateZ", '0deg'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '668.27px'],
            ["style", "font-size", '25px'],
            ["style", "top", '535.6px'],
            ["style", "display", 'none'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "opacity", '0']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '900px'],
            ["style", "height", '696px'],
            ["style", "overflow", 'hidden']
         ],
         "${_mono_desenfoque}": [
            ["style", "display", 'block'],
            ["style", "top", '322px'],
            ["style", "left", '997.07px'],
            ["transform", "rotateZ", '-90deg']
         ],
         "${_introduccion}": [
            ["style", "line-height", '27px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '71px'],
            ["style", "font-size", '20px'],
            ["style", "top", '-97px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'block'],
            ["style", "height", '100px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "opacity", '0'],
            ["subproperty", "textShadow.blur", '3px']
         ],
         "${_txt_actividad2_5}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '30px'],
            ["style", "font-size", '20px'],
            ["style", "top", '6.02px'],
            ["style", "width", '256.99997287326px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'block'],
            ["style", "height", '48.000108506944px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "line-height", '27px'],
            ["style", "opacity", '1']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 71750,
         autoPlay: false,
         timeline: [
            { id: "eid136", tween: [ "style", "${_mono_desenfoque2}", "left", '633.12px', { fromValue: '993.12px'}], position: 0, duration: 500 },
            { id: "eid1870", tween: [ "style", "${_introduccion2}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 1000 },
            { id: "eid2159", tween: [ "style", "${_introduccion2}", "opacity", '0.15094339622642', { fromValue: '1'}], position: 35250, duration: 750 },
            { id: "eid137", tween: [ "style", "${_mono_desenfoque}", "left", '637.07px', { fromValue: '997.07px'}], position: 0, duration: 500 },
            { id: "eid3009", tween: [ "style", "${_Group3}", "display", 'block', { fromValue: 'none'}], position: 64250, duration: 0 },
            { id: "eid2097", tween: [ "style", "${_triangulos}", "opacity", '1', { fromValue: '0.08176100254058838'}], position: 7077, duration: 532 },
            { id: "eid2133", tween: [ "style", "${_triangulos}", "opacity", '0.19496855345912', { fromValue: '1'}], position: 34750, duration: 500 },
            { id: "eid2074", tween: [ "style", "${_tct_cate2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2070", tween: [ "style", "${_tct_cate2}", "display", 'block', { fromValue: 'none'}], position: 7077, duration: 0 },
            { id: "eid2300", tween: [ "style", "${_tct_cate2}", "display", 'none', { fromValue: 'block'}], position: 31000, duration: 0 },
            { id: "eid2302", tween: [ "style", "${_tct_cate2}", "display", 'block', { fromValue: 'none'}], position: 31250, duration: 0 },
            { id: "eid2304", tween: [ "style", "${_tct_cate2}", "display", 'none', { fromValue: 'block'}], position: 31369, duration: 0 },
            { id: "eid2306", tween: [ "style", "${_tct_cate2}", "display", 'block', { fromValue: 'none'}], position: 31500, duration: 0 },
            { id: "eid2136", tween: [ "style", "${_tct_cate2}", "display", 'none', { fromValue: 'block'}], position: 35097, duration: 0 },
            { id: "eid2076", tween: [ "style", "${_tct_cate}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2072", tween: [ "style", "${_tct_cate}", "display", 'block', { fromValue: 'none'}], position: 7077, duration: 0 },
            { id: "eid2299", tween: [ "style", "${_tct_cate}", "display", 'none', { fromValue: 'block'}], position: 31000, duration: 0 },
            { id: "eid2301", tween: [ "style", "${_tct_cate}", "display", 'block', { fromValue: 'none'}], position: 31250, duration: 0 },
            { id: "eid2303", tween: [ "style", "${_tct_cate}", "display", 'none', { fromValue: 'block'}], position: 31369, duration: 0 },
            { id: "eid2305", tween: [ "style", "${_tct_cate}", "display", 'block', { fromValue: 'none'}], position: 31500, duration: 0 },
            { id: "eid2138", tween: [ "style", "${_tct_cate}", "display", 'none', { fromValue: 'block'}], position: 35097, duration: 0 },
            { id: "eid141", tween: [ "style", "${_mono_desenfoque2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid2110", tween: [ "style", "${_tct_cate}", "opacity", '1', { fromValue: '0'}], position: 7077, duration: 532 },
            { id: "eid168", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 750 },
            { id: "eid2150", tween: [ "style", "${_Text}", "opacity", '0.15723270440252', { fromValue: '1'}], position: 35250, duration: 750 },
            { id: "eid2803", tween: [ "style", "${_Group}", "opacity", '1', { fromValue: '0'}], position: 54750, duration: 1000, easing: "easeInOutBack" },
            { id: "eid2372", tween: [ "style", "${_txt_actividad1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2373", tween: [ "style", "${_txt_actividad1}", "display", 'block', { fromValue: 'none'}], position: 36000, duration: 0 },
            { id: "eid2808", tween: [ "style", "${_Group2}", "opacity", '1', { fromValue: '0'}], position: 55313, duration: 1074, easing: "easeInOutBack" },
            { id: "eid10", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid152", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid2151", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 36000, duration: 0 },
            { id: "eid2069", tween: [ "style", "${_triangulos}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2068", tween: [ "style", "${_triangulos}", "display", 'block', { fromValue: 'none'}], position: 7077, duration: 0 },
            { id: "eid2134", tween: [ "style", "${_triangulos}", "display", 'none', { fromValue: 'block'}], position: 35250, duration: 0 },
            { id: "eid2991", tween: [ "style", "${_txt_actividad4}", "display", 'block', { fromValue: 'block'}], position: 62750, duration: 0 },
            { id: "eid2075", tween: [ "style", "${_tct_cate2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2071", tween: [ "style", "${_tct_cate2Copy}", "display", 'block', { fromValue: 'none'}], position: 7077, duration: 0 },
            { id: "eid2201", tween: [ "style", "${_tct_cate2Copy}", "display", 'none', { fromValue: 'block'}], position: 27000, duration: 0 },
            { id: "eid2203", tween: [ "style", "${_tct_cate2Copy}", "display", 'block', { fromValue: 'none'}], position: 27250, duration: 0 },
            { id: "eid2205", tween: [ "style", "${_tct_cate2Copy}", "display", 'none', { fromValue: 'block'}], position: 27380, duration: 0 },
            { id: "eid2207", tween: [ "style", "${_tct_cate2Copy}", "display", 'block', { fromValue: 'none'}], position: 27500, duration: 0 },
            { id: "eid2289", tween: [ "style", "${_tct_cate2Copy}", "display", 'none', { fromValue: 'block'}], position: 35097, duration: 0 },
            { id: "eid2399", tween: [ "style", "${_tria_eje_1}", "width", '446.23268682085px', { fromValue: '14.111083984375px'}], position: 36000, duration: 500 },
            { id: "eid2408", tween: [ "style", "${_tria_eje_1}", "width", '410.47229003906px', { fromValue: '446.23268682085px'}], position: 36500, duration: 184 },
            { id: "eid2876", tween: [ "style", "${_txt_actividad3_1}", "left", '71px', { fromValue: '-139px'}], position: 58661, duration: 1089, easing: "easeInOutBack" },
            { id: "eid1856", tween: [ "style", "${_introduccion2}", "top", '241px', { fromValue: '-286px'}], position: 4500, duration: 901 },
            { id: "eid1866", tween: [ "style", "${_introduccion2}", "top", '220px', { fromValue: '241px'}], position: 5401, duration: 99 },
            { id: "eid2763", tween: [ "style", "${_txt_actividad2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutBack" },
            { id: "eid2764", tween: [ "style", "${_txt_actividad2}", "display", 'block', { fromValue: 'none'}], position: 54000, duration: 0, easing: "easeInOutBack" },
            { id: "eid2791", tween: [ "style", "${_txt_actividad2}", "left", '71px', { fromValue: '-479px'}], position: 54000, duration: 1000, easing: "easeInOutBack" },
            { id: "eid2563", tween: [ "style", "${_tria_eje_1}", "opacity", '0', { fromValue: '1'}], position: 53250, duration: 750, easing: "easeInOutBack" },
            { id: "eid2389", tween: [ "style", "${_txt_actividad1}", "left", '71px', { fromValue: '-539px'}], position: 36000, duration: 858 },
            { id: "eid2994", tween: [ "style", "${_txt_actividad4}", "left", '71px', { fromValue: '-199px'}], position: 62750, duration: 904, easing: "easeInOutBack" },
            { id: "eid1854", tween: [ "style", "${_introduccion}", "top", '145px', { fromValue: '-97px'}], position: 3750, duration: 924 },
            { id: "eid1865", tween: [ "style", "${_introduccion}", "top", '123px', { fromValue: '145px'}], position: 4674, duration: 76 },
            { id: "eid2391", tween: [ "style", "${_txt_actividad1}", "opacity", '1', { fromValue: '0'}], position: 36000, duration: 858 },
            { id: "eid2562", tween: [ "style", "${_txt_actividad1}", "opacity", '0', { fromValue: '1'}], position: 53250, duration: 750, easing: "easeInOutBack" },
            { id: "eid2109", tween: [ "style", "${_tct_cate2}", "opacity", '1', { fromValue: '0'}], position: 7077, duration: 532 },
            { id: "eid2834", tween: [ "style", "${_txt_actividad3}", "display", 'block', { fromValue: 'none'}], position: 57907, duration: 0, easing: "easeInOutBack" },
            { id: "eid1874", tween: [ "style", "${_introduccion}", "opacity", '1', { fromValue: '0'}], position: 3750, duration: 1000 },
            { id: "eid2155", tween: [ "style", "${_introduccion}", "opacity", '0.15094339622642', { fromValue: '1'}], position: 35250, duration: 750 },
            { id: "eid2839", tween: [ "style", "${_txt_actividad3}", "left", '71px', { fromValue: '-279px'}], position: 57907, duration: 1093, easing: "easeInOutBack" },
            { id: "eid2405", tween: [ "style", "${_tria_eje_1}", "top", '266.32px', { fromValue: '412.02px'}], position: 36000, duration: 500 },
            { id: "eid2409", tween: [ "style", "${_tria_eje_1}", "top", '279.58px', { fromValue: '266.32px'}], position: 36500, duration: 184 },
            { id: "eid2157", tween: [ "style", "${_introduccion2}", "left", '731px', { fromValue: '71px'}], position: 35250, duration: 750 },
            { id: "eid2404", tween: [ "style", "${_tria_eje_1}", "left", '333.82px', { fromValue: '540.9px'}], position: 36000, duration: 500 },
            { id: "eid2407", tween: [ "style", "${_tria_eje_1}", "left", '345.75px', { fromValue: '333.82px'}], position: 36500, duration: 184 },
            { id: "eid3050", tween: [ "style", "${_Group3}", "left", '68.35px', { fromValue: '1.35px'}], position: 64250, duration: 1000, easing: "easeInOutBack" },
            { id: "eid2762", tween: [ "style", "${_txt_actividad2}", "opacity", '1', { fromValue: '0.000000'}], position: 54000, duration: 1000, easing: "easeInOutBack" },
            { id: "eid142", tween: [ "style", "${_mono_desenfoque}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid2160", tween: [ "style", "${_introduccion2}", "display", 'none', { fromValue: 'block'}], position: 36000, duration: 0 },
            { id: "eid2840", tween: [ "style", "${_txt_actividad3}", "opacity", '1', { fromValue: '0'}], position: 57907, duration: 1093, easing: "easeInOutBack" },
            { id: "eid2111", tween: [ "style", "${_tct_cate2Copy}", "opacity", '1', { fromValue: '0'}], position: 7077, duration: 532 },
            { id: "eid2148", tween: [ "style", "${_Text}", "left", '621px', { fromValue: '71px'}], position: 35250, duration: 750 },
            { id: "eid138", tween: [ "style", "${_mono_desenfoque2}", "opacity", '0.40880503144654', { fromValue: '0.40880503144654'}], position: 500, duration: 0 },
            { id: "eid2363", tween: [ "style", "${_tria_eje_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2377", tween: [ "style", "${_tria_eje_1}", "display", 'block', { fromValue: 'none'}], position: 36000, duration: 0 },
            { id: "eid2501", tween: [ "style", "${_home}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2502", tween: [ "style", "${_home}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid2100", tween: [ "style", "${_triangulos}", "left", '339.45px', { fromValue: '729.45px'}], position: 7077, duration: 532 },
            { id: "eid2500", tween: [ "style", "${_btn_sig}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2499", tween: [ "style", "${_btn_sig}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid2802", tween: [ "style", "${_Group}", "left", '71px', { fromValue: '-89px'}], position: 54750, duration: 1000, easing: "easeInOutBack" },
            { id: "eid2153", tween: [ "style", "${_introduccion}", "left", '-629px', { fromValue: '71px'}], position: 35250, duration: 750 },
            { id: "eid2077", tween: [ "style", "${_tct_cate2Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2073", tween: [ "style", "${_tct_cate2Copy2}", "display", 'block', { fromValue: 'none'}], position: 7077, duration: 0 },
            { id: "eid2202", tween: [ "style", "${_tct_cate2Copy2}", "display", 'none', { fromValue: 'block'}], position: 27000, duration: 0 },
            { id: "eid2204", tween: [ "style", "${_tct_cate2Copy2}", "display", 'block', { fromValue: 'none'}], position: 27250, duration: 0 },
            { id: "eid2206", tween: [ "style", "${_tct_cate2Copy2}", "display", 'none', { fromValue: 'block'}], position: 27380, duration: 0 },
            { id: "eid2208", tween: [ "style", "${_tct_cate2Copy2}", "display", 'block', { fromValue: 'none'}], position: 27500, duration: 0 },
            { id: "eid2290", tween: [ "style", "${_tct_cate2Copy2}", "display", 'none', { fromValue: 'block'}], position: 35097, duration: 0 },
            { id: "eid2995", tween: [ "style", "${_txt_actividad4}", "opacity", '1', { fromValue: '0'}], position: 62750, duration: 904, easing: "easeInOutBack" },
            { id: "eid209", tween: [ "style", "${_robot}", "top", '436.43px', { fromValue: '-266.35px'}], position: 5000, duration: 3000, easing: "easeInOutBack" },
            { id: "eid3053", tween: [ "style", "${_robot}", "top", '-333.57px', { fromValue: '436.43px'}], position: 70000, duration: 1750, easing: "easeInOutBack" },
            { id: "eid204", tween: [ "style", "${_robot}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid206", tween: [ "style", "${_robot}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid3008", tween: [ "style", "${_Group3}", "opacity", '1', { fromValue: '0'}], position: 64250, duration: 1000, easing: "easeInOutBack" },
            { id: "eid145", tween: [ "style", "${_caminar}", "top", '-345px', { fromValue: '315px'}], position: 750, duration: 2500 },
            { id: "eid2809", tween: [ "style", "${_Group2}", "left", '71px', { fromValue: '-169px'}], position: 55313, duration: 1074, easing: "easeInOutBack" },
            { id: "eid2396", tween: [ "style", "${_tria_eje_1}", "height", '283.78890991211px', { fromValue: '8.9752477639135px'}], position: 36000, duration: 500 },
            { id: "eid2406", tween: [ "style", "${_tria_eje_1}", "height", '261.06631218202px', { fromValue: '283.78890991211px'}], position: 36500, duration: 184 },
            { id: "eid2156", tween: [ "style", "${_introduccion}", "display", 'none', { fromValue: 'block'}], position: 36000, duration: 0 },
            { id: "eid2112", tween: [ "style", "${_tct_cate2Copy2}", "opacity", '1', { fromValue: '0'}], position: 7077, duration: 532 },
            { id: "eid2875", tween: [ "style", "${_txt_actividad3_1}", "opacity", '1', { fromValue: '0'}], position: 58661, duration: 1089, easing: "easeInOutBack" },
            { id: "eid139", tween: [ "style", "${_caminar}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid140", tween: [ "style", "${_caminar}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid146", tween: [ "style", "${_caminar}", "display", 'none', { fromValue: 'block'}], position: 3250, duration: 0 }         ]
      }
   }
},
"caminar": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['68px','99px','379px','282px','auto','auto'],
      transform: {},
      id: 'contenedor',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,0.00)'],
      c: [
      {
         type: 'image',
         id: 'caminar2',
         rect: ['258px','-425px','2048px','2700px','auto','auto'],
         transform: [{1:0,0:0},['-90deg']],
         fill: ['rgba(0,0,0,0)','img/caminar2.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_contenedor}": [
            ["style", "top", '98.92px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '281.74997243574px'],
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "left", '68.48px'],
            ["style", "width", '379.35000610352px']
         ],
         "${_caminar2}": [
            ["style", "top", '-424.92px'],
            ["style", "left", '257.52px'],
            ["transform", "rotateZ", '-90deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '2048px'],
            ["style", "width", '2700px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: false,
         labels: {
            "ciclo1": 588
         },
         timeline: [
            { id: "eid53", tween: [ "style", "${_caminar2}", "top", '-424.92px', { fromValue: '-424.92px'}], position: 0, duration: 0 },
            { id: "eid55", tween: [ "style", "${_caminar2}", "top", '-759.9px', { fromValue: '-424.92px'}], position: 83, duration: 0 },
            { id: "eid57", tween: [ "style", "${_caminar2}", "top", '-1100.9px', { fromValue: '-759.9px'}], position: 172, duration: 0 },
            { id: "eid59", tween: [ "style", "${_caminar2}", "top", '-1431.9px', { fromValue: '-1100.9px'}], position: 250, duration: 0 },
            { id: "eid121", tween: [ "style", "${_caminar2}", "top", '-1746.9px', { fromValue: '-1431.9px'}], position: 336, duration: 0 },
            { id: "eid65", tween: [ "style", "${_caminar2}", "top", '-2061.88px', { fromValue: '-1746.9px'}], position: 416, duration: 0 },
            { id: "eid69", tween: [ "style", "${_caminar2}", "top", '-421.82px', { fromValue: '-2061.88px'}], position: 500, duration: 0 },
            { id: "eid72", tween: [ "style", "${_caminar2}", "top", '-761.82px', { fromValue: '-421.82px'}], position: 588, duration: 0 },
            { id: "eid74", tween: [ "style", "${_caminar2}", "top", '-1092.82px', { fromValue: '-761.82px'}], position: 674, duration: 0 },
            { id: "eid76", tween: [ "style", "${_caminar2}", "top", '-1422.82px', { fromValue: '-1092.82px'}], position: 750, duration: 0 },
            { id: "eid78", tween: [ "style", "${_caminar2}", "top", '-1726.82px', { fromValue: '-1422.82px'}], position: 823, duration: 0 },
            { id: "eid82", tween: [ "style", "${_caminar2}", "top", '-2030.82px', { fromValue: '-1726.82px'}], position: 903, duration: 0 },
            { id: "eid85", tween: [ "style", "${_caminar2}", "top", '-428.82px', { fromValue: '-2030.82px'}], position: 1000, duration: 0 },
            { id: "eid87", tween: [ "style", "${_caminar2}", "top", '-726.82px', { fromValue: '-428.82px'}], position: 1077, duration: 0 },
            { id: "eid89", tween: [ "style", "${_caminar2}", "top", '-1044.82px', { fromValue: '-726.82px'}], position: 1163, duration: 0 },
            { id: "eid91", tween: [ "style", "${_caminar2}", "top", '-1356.82px', { fromValue: '-1044.82px'}], position: 1250, duration: 0 },
            { id: "eid93", tween: [ "style", "${_caminar2}", "top", '-1677.82px', { fromValue: '-1356.82px'}], position: 1336, duration: 0 },
            { id: "eid99", tween: [ "style", "${_caminar2}", "top", '-2007.82px', { fromValue: '-1677.82px'}], position: 1413, duration: 0 },
            { id: "eid104", tween: [ "style", "${_caminar2}", "top", '-412.82px', { fromValue: '-2007.82px'}], position: 1500, duration: 0 },
            { id: "eid106", tween: [ "style", "${_caminar2}", "top", '-752.82px', { fromValue: '-412.82px'}], position: 1578, duration: 0 },
            { id: "eid108", tween: [ "style", "${_caminar2}", "top", '-1072.82px', { fromValue: '-752.82px'}], position: 1664, duration: 0 },
            { id: "eid110", tween: [ "style", "${_caminar2}", "top", '-1399.82px', { fromValue: '-1072.82px'}], position: 1750, duration: 0 },
            { id: "eid112", tween: [ "style", "${_caminar2}", "top", '-1729.82px', { fromValue: '-1399.82px'}], position: 1839, duration: 0 },
            { id: "eid116", tween: [ "style", "${_caminar2}", "top", '-2049.82px', { fromValue: '-1729.82px'}], position: 1926, duration: 0 },
            { id: "eid120", tween: [ "style", "${_caminar2}", "top", '-430.82px', { fromValue: '-2049.82px'}], position: 2000, duration: 0 },
            { id: "eid66", tween: [ "style", "${_caminar2}", "left", '257.52px', { fromValue: '257.52px'}], position: 416, duration: 0 },
            { id: "eid70", tween: [ "style", "${_caminar2}", "left", '-278.42px', { fromValue: '257.52px'}], position: 500, duration: 0 },
            { id: "eid122", tween: [ "style", "${_caminar2}", "left", '-274.42px', { fromValue: '-278.42px'}], position: 588, duration: 0 },
            { id: "eid83", tween: [ "style", "${_caminar2}", "left", '-274.42px', { fromValue: '-274.42px'}], position: 903, duration: 0 },
            { id: "eid123", tween: [ "style", "${_caminar2}", "left", '-807.4px', { fromValue: '-274.42px'}], position: 1000, duration: 0 },
            { id: "eid100", tween: [ "style", "${_caminar2}", "left", '-807.4px', { fromValue: '-807.4px'}], position: 1413, duration: 0 },
            { id: "eid124", tween: [ "style", "${_caminar2}", "left", '-1314.4px', { fromValue: '-807.4px'}], position: 1500, duration: 0 },
            { id: "eid117", tween: [ "style", "${_caminar2}", "left", '-1314.4px', { fromValue: '-1314.4px'}], position: 1926, duration: 0 },
            { id: "eid125", tween: [ "style", "${_caminar2}", "left", '-1824.4px', { fromValue: '-1314.4px'}], position: 2000, duration: 0 }         ]
      }
   }
},
"robot": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'body_rb',
      type: 'image',
      rect: ['8px','93px','200px','172px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/body_rb.png','0px','0px']
   },
   {
      id: 'brazo_derrb',
      type: 'image',
      rect: ['0px','107px','43px','120px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/brazo_derrb.png','0px','0px']
   },
   {
      id: 'brazo_izqrb',
      type: 'image',
      rect: ['159px','106px','43px','118px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/brazo_izqrb.png','0px','0px']
   },
   {
      id: 'grupo_cabz',
      type: 'group',
      rect: ['13','0','58','45','auto','auto'],
      c: [
      {
         id: 'cab_rob',
         type: 'image',
         rect: ['18px','0px','144px','110px','auto','auto'],
         fill: ['rgba(0,0,0,0)','img/cab_rob.png','0px','0px']
      },
      {
         id: 'rostro',
         type: 'rect',
         rect: ['46px','43px','auto','auto','auto','auto']
      }]
   }],
   symbolInstances: [
   {
      id: 'rostro',
      symbolName: 'rostro'
   }   ]
   },
   states: {
      "Base State": {
         "${_body_rb}": [
            ["style", "top", '92.65px'],
            ["style", "left", '8px']
         ],
         "${_cab_rob}": [
            ["style", "left", '18.45px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '371px'],
            ["style", "width", '291.58511913733px']
         ],
         "${_rostro}": [
            ["style", "top", '40.49px'],
            ["style", "left", '46.45px']
         ],
         "${_brazo_derrb}": [
            ["style", "top", '106.65px'],
            ["style", "left", '0px']
         ],
         "${_brazo_izqrb}": [
            ["style", "top", '106.07px'],
            ["style", "-webkit-transform-origin", [32.21,12.66], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [32.21,12.66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [32.21,12.66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [32.21,12.66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [32.21,12.66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '159.15px'],
            ["transform", "rotateZ", '1deg']
         ],
         "${_grupo_cabz}": [
            ["style", "-webkit-transform-origin", [160.14,147.44], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [160.14,147.44],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [160.14,147.44],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [160.14,147.44],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [160.14,147.44],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2750,
         autoPlay: false,
         timeline: [
            { id: "eid394", tween: [ "style", "${_brazo_izqrb}", "-webkit-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid3086", tween: [ "style", "${_brazo_izqrb}", "-moz-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid3087", tween: [ "style", "${_brazo_izqrb}", "-ms-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid3088", tween: [ "style", "${_brazo_izqrb}", "msTransformOrigin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid3089", tween: [ "style", "${_brazo_izqrb}", "-o-transform-origin", [32.21,12.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [32.21,12.66]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid395", tween: [ "style", "${_brazo_izqrb}", "left", '159.15px', { fromValue: '159.15px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid369", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 2250, duration: 250 },
            { id: "eid372", tween: [ "transform", "${_grupo_cabz}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 2500, duration: 250 },
            { id: "eid365", tween: [ "style", "${_grupo_cabz}", "-webkit-transform-origin", [160.14,147.44], { valueTemplate: '@@0@@% @@1@@%', fromValue: [160.14,147.44]}], position: 2500, duration: 0 },
            { id: "eid3090", tween: [ "style", "${_grupo_cabz}", "-moz-transform-origin", [160.14,147.44], { valueTemplate: '@@0@@% @@1@@%', fromValue: [160.14,147.44]}], position: 2500, duration: 0 },
            { id: "eid3091", tween: [ "style", "${_grupo_cabz}", "-ms-transform-origin", [160.14,147.44], { valueTemplate: '@@0@@% @@1@@%', fromValue: [160.14,147.44]}], position: 2500, duration: 0 },
            { id: "eid3092", tween: [ "style", "${_grupo_cabz}", "msTransformOrigin", [160.14,147.44], { valueTemplate: '@@0@@% @@1@@%', fromValue: [160.14,147.44]}], position: 2500, duration: 0 },
            { id: "eid3093", tween: [ "style", "${_grupo_cabz}", "-o-transform-origin", [160.14,147.44], { valueTemplate: '@@0@@% @@1@@%', fromValue: [160.14,147.44]}], position: 2500, duration: 0 },
            { id: "eid896", tween: [ "transform", "${_brazo_izqrb}", "rotateZ", '-157deg', { fromValue: '1deg'}], position: 0, duration: 628 },
            { id: "eid897", tween: [ "transform", "${_brazo_izqrb}", "rotateZ", '-119deg', { fromValue: '-157deg'}], position: 628, duration: 197 },
            { id: "eid898", tween: [ "transform", "${_brazo_izqrb}", "rotateZ", '-154deg', { fromValue: '-119deg'}], position: 825, duration: 175 },
            { id: "eid900", tween: [ "transform", "${_brazo_izqrb}", "rotateZ", '-122deg', { fromValue: '-154deg'}], position: 1000, duration: 250 },
            { id: "eid902", tween: [ "transform", "${_brazo_izqrb}", "rotateZ", '-157deg', { fromValue: '-122deg'}], position: 1250, duration: 250 },
            { id: "eid904", tween: [ "transform", "${_brazo_izqrb}", "rotateZ", '-126deg', { fromValue: '-157deg'}], position: 1500, duration: 250 },
            { id: "eid349", tween: [ "transform", "${_brazo_izqrb}", "rotateZ", '0deg', { fromValue: '-126deg'}], position: 1750, duration: 250 },
            { id: "eid396", tween: [ "style", "${_brazo_izqrb}", "top", '106.07px', { fromValue: '106.07px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid420", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rostro}', [] ], ""], position: 0 }         ]
      }
   }
},
"rostro": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'boca_rb',
      type: 'image',
      rect: ['23px','45px','42px','18px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/boca_rb.png','0px','0px']
   },
   {
      id: 'ojo_rb',
      type: 'image',
      rect: ['0px','0px','27px','35px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/ojo_rb.png','0px','0px']
   },
   {
      id: 'ojo_rbCopy',
      type: 'image',
      rect: ['60px','0px','27px','35px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/ojo_rb.png','0px','0px']
   },
   {
      rect: ['0','0','86','35','auto','auto'],
      id: 'Group',
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['0px','0px','27px','35px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'ojo_cerrado',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(230,231,232,1.00)']
      },
      {
         rect: ['59px','0px','27px','35px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'ojo_cerradoCopy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(230,231,232,1.00)']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_ojo_rbCopy}": [
            ["style", "top", '0.01px'],
            ["style", "left", '60px']
         ],
         "${_ojo_cerrado}": [
            ["color", "background-color", 'rgba(230,231,232,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '62.616668701172px'],
            ["style", "width", '87px']
         ],
         "${_boca_rb}": [
            ["style", "top", '44.05px'],
            ["transform", "rotateZ", '-360deg'],
            ["style", "height", '13.546569824219px'],
            ["style", "left", '22.85px'],
            ["style", "width", '42px']
         ],
         "${_ojo_cerradoCopy}": [
            ["style", "left", '59px'],
            ["color", "background-color", 'rgba(230,231,232,1.00)']
         ],
         "${_Group}": [
            ["style", "display", 'none']
         ],
         "${_ojo_rb}": [
            ["style", "top", '0.01px'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: false,
         labels: {
            "ciclo1": 87
         },
         timeline: [
            { id: "eid334", tween: [ "style", "${_boca_rb}", "height", '13.546569824219px', { fromValue: '13.546569824219px'}], position: 155, duration: 0, easing: "easeOutBack" },
            { id: "eid337", tween: [ "style", "${_boca_rb}", "height", '18.950013442561px', { fromValue: '13.546569824219px'}], position: 286, duration: 0 },
            { id: "eid342", tween: [ "style", "${_boca_rb}", "height", '21.379138946533px', { fromValue: '18.950013442561px'}], position: 416, duration: 0 },
            { id: "eid346", tween: [ "style", "${_boca_rb}", "height", '11.245206832886px', { fromValue: '21.379138946533px'}], position: 601, duration: 0 },
            { id: "eid350", tween: [ "style", "${_boca_rb}", "height", '16.901363372803px', { fromValue: '11.245206832886px'}], position: 827, duration: 0 },
            { id: "eid354", tween: [ "style", "${_boca_rb}", "height", '8.3916931152344px', { fromValue: '16.901363372803px'}], position: 1028, duration: 0 },
            { id: "eid357", tween: [ "style", "${_boca_rb}", "height", '17.083326084894px', { fromValue: '8.3916931152344px'}], position: 1145, duration: 0 },
            { id: "eid362", tween: [ "style", "${_boca_rb}", "height", '13.422246932983px', { fromValue: '17.083326084894px'}], position: 1391, duration: 0 },
            { id: "eid366", tween: [ "style", "${_boca_rb}", "height", '20.600013640245px', { fromValue: '13.422246932983px'}], position: 1604, duration: 0 },
            { id: "eid370", tween: [ "style", "${_boca_rb}", "height", '11.667317390442px', { fromValue: '20.600013640245px'}], position: 1776, duration: 0 },
            { id: "eid373", tween: [ "style", "${_boca_rb}", "height", '18.250011861083px', { fromValue: '11.667317390442px'}], position: 2051, duration: 0 },
            { id: "eid377", tween: [ "style", "${_boca_rb}", "height", '12.986846923828px', { fromValue: '18.250011861083px'}], position: 2290, duration: 0 },
            { id: "eid381", tween: [ "style", "${_boca_rb}", "height", '18.866664623925px', { fromValue: '12.986846923828px'}], position: 2541, duration: 0 },
            { id: "eid383", tween: [ "style", "${_boca_rb}", "height", '15.802748680115px', { fromValue: '18.866664623925px'}], position: 2750, duration: 0 },
            { id: "eid250", tween: [ "style", "${_boca_rb}", "height", '13.766666412354px', { fromValue: '15.802748680115px'}], position: 3000, duration: 0 },
            { id: "eid313", tween: [ "style", "${_Group}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid316", tween: [ "style", "${_Group}", "display", 'block', { fromValue: 'none'}], position: 601, duration: 0, easing: "easeOutBack" },
            { id: "eid317", tween: [ "style", "${_Group}", "display", 'none', { fromValue: 'block'}], position: 679, duration: 0, easing: "easeOutBack" },
            { id: "eid320", tween: [ "style", "${_Group}", "display", 'block', { fromValue: 'none'}], position: 1391, duration: 0, easing: "easeOutBack" },
            { id: "eid321", tween: [ "style", "${_Group}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0, easing: "easeOutBack" },
            { id: "eid322", tween: [ "style", "${_Group}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0, easing: "easeOutBack" },
            { id: "eid323", tween: [ "style", "${_Group}", "display", 'none', { fromValue: 'block'}], position: 2358, duration: 0, easing: "easeOutBack" },
            { id: "eid876", tween: [ "transform", "${_boca_rb}", "rotateZ", '-360deg', { fromValue: '-360deg'}], position: 0, duration: 0 },
            { id: "eid256", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 0, duration: 0, easing: "easeInOutBack" },
            { id: "eid332", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 155, duration: 0, easing: "easeOutBack" },
            { id: "eid335", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 416, duration: 0, easing: "easeOutBack" },
            { id: "eid340", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 601, duration: 0, easing: "easeOutBack" },
            { id: "eid344", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 827, duration: 0, easing: "easeOutBack" },
            { id: "eid348", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 1028, duration: 0, easing: "easeOutBack" },
            { id: "eid352", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 1145, duration: 0, easing: "easeOutBack" },
            { id: "eid355", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 1391, duration: 0, easing: "easeOutBack" },
            { id: "eid360", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 1604, duration: 0, easing: "easeOutBack" },
            { id: "eid364", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 1776, duration: 0, easing: "easeOutBack" },
            { id: "eid368", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 2051, duration: 0, easing: "easeOutBack" },
            { id: "eid371", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 2290, duration: 0, easing: "easeOutBack" },
            { id: "eid375", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 2541, duration: 0, easing: "easeOutBack" },
            { id: "eid379", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 2750, duration: 0, easing: "easeOutBack" },
            { id: "eid330", tween: [ "style", "${_boca_rb}", "width", '42px', { fromValue: '42px'}], position: 3000, duration: 0, easing: "easeOutBack" },
            { id: "eid325", tween: [ "style", "${_boca_rb}", "top", '44.05px', { fromValue: '44.05px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid338", tween: [ "style", "${_boca_rb}", "top", '44.05px', { fromValue: '44.05px'}], position: 155, duration: 0 },
            { id: "eid339", tween: [ "style", "${_boca_rb}", "top", '41.63px', { fromValue: '44.05px'}], position: 416, duration: 0 },
            { id: "eid343", tween: [ "style", "${_boca_rb}", "top", '51.5px', { fromValue: '41.63px'}], position: 601, duration: 0 },
            { id: "eid347", tween: [ "style", "${_boca_rb}", "top", '44.92px', { fromValue: '51.5px'}], position: 827, duration: 0 },
            { id: "eid351", tween: [ "style", "${_boca_rb}", "top", '51.43px', { fromValue: '44.92px'}], position: 1028, duration: 0 },
            { id: "eid359", tween: [ "style", "${_boca_rb}", "top", '43.6px', { fromValue: '51.43px'}], position: 1145, duration: 0 },
            { id: "eid358", tween: [ "style", "${_boca_rb}", "top", '46.52px', { fromValue: '43.6px'}], position: 1391, duration: 0 },
            { id: "eid252", tween: [ "style", "${_boca_rb}", "top", '42.4px', { fromValue: '46.52px'}], position: 1604, duration: 0 },
            { id: "eid367", tween: [ "style", "${_boca_rb}", "top", '47.03px', { fromValue: '42.4px'}], position: 1776, duration: 0 },
            { id: "eid378", tween: [ "style", "${_boca_rb}", "top", '44.37px', { fromValue: '47.03px'}], position: 2051, duration: 0 },
            { id: "eid374", tween: [ "style", "${_boca_rb}", "top", '49.17px', { fromValue: '44.37px'}], position: 2290, duration: 0 },
            { id: "eid384", tween: [ "style", "${_boca_rb}", "top", '44.87px', { fromValue: '49.17px'}], position: 2415, duration: 0 },
            { id: "eid385", tween: [ "style", "${_boca_rb}", "top", '43.85px', { fromValue: '44.87px'}], position: 2541, duration: 0 },
            { id: "eid382", tween: [ "style", "${_boca_rb}", "top", '47.2px', { fromValue: '43.85px'}], position: 2750, duration: 0 },
            { id: "eid251", tween: [ "style", "${_boca_rb}", "top", '44.05px', { fromValue: '47.2px'}], position: 3000, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-6620540");
