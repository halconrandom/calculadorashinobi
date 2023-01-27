

Highcharts.chart('chartRadar', {

    chart: {
        polar: true,
        type: 'area',
        backgroundColor: null
    },

    title: {
        text: '',
        x: -80
    },

    pane: {
        size: '40%'
    },

    xAxis: {
        categories: ['Fuerza', 'V. Movimiento', 'V. Técnica', 'Reflejo',],
        tickmarkPlacement: 'on',
        lineWidth: 0,
    },
    plotOptions: {
        area: {
            fillColor: 'rgba(125, 91, 166)',
            fillOpacity: 0.5,
        },
        series: {
            marker: {
                enabled: false,
                
            }
        }
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        max: 5000,
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical'
    },

    series: [{
        name: '',
        data: [0,0,0,0],
        pointPlacement: 'on',
        color: 'rgba(100, 49, 115)',
    },
],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'horizontal'
                },
                pane: {
                    size: '40%'
                }
            }
        }]
    }

});


// Declaración de variables de los inputs
const inputFuerzaChart = document.getElementById("inputFuerzaChart");
const inputVMovChart = document.getElementById("inputVMovChart");
const inputVTecChart = document.getElementById("inputVTecChart");
const inputReflejoChart = document.getElementById("inputReflejoChart");

// Eventos de input para actualizar el gráfico en tiempo real
inputFuerzaChart.addEventListener("input", updateData);
inputVMovChart.addEventListener("input", updateData);
inputVTecChart.addEventListener("input", updateData);
inputReflejoChart.addEventListener("input", updateData);

//Función para actualizar los datos del gráfico
function updateData() {
var chart = Highcharts.charts[0];
chart.series[0].update({
data: [
parseFloat(inputFuerzaChart.value),
parseFloat(inputVMovChart.value),
parseFloat(inputVTecChart.value),
parseFloat(inputReflejoChart.value)
]
});
}


// Obtener el botón y el div
const capturarImagenBtn = document.getElementById("capturarImagen");
const miDiv = document.getElementById("fondoFichaTotal");

miDiv.style.height = "800px";
miDiv.style.width = "600px";

// Agregar un evento al botón para capturar la imagen
capturarImagenBtn.addEventListener("click", () => {
    html2canvas(miDiv,  {
            scale:4,
            height: 800,
            width: 600
    }).then(canvas => {
        // Crear una URL para la imagen
        let imageUrl = canvas.toDataURL();
        // Crear un enlace para descargar la imagen
        let link = document.createElement("a");
        link.download = "miImagen.png";
        link.href = imageUrl;
        // Hacer clic en el enlace para descargar la imagen
        link.click();
    });
});



let opcionesAldea = document.getElementById("aldeasOption");
let btnsubmit = document.getElementById("submitGeneralFicha");

function infoBasicaNinja(){
    nombrePJFicha.innerHTML = document.getElementById('nombrePJ').value
    usuarioFicha.innerHTML = document.getElementById('nombreUser').value
    clanFicha.innerHTML = document.getElementById('Clan').value
    rangoFicha.innerHTML = document.getElementById('Rango').value
    tipoChakraFicha.innerHTML = document.getElementById('ChakraInicial').value
}

btnsubmit.addEventListener("click", function() {
   if (opcionesAldea.value === "noelegir") {
     return;
   }else if(opcionesAldea.value === "aldeaCR"){
     document.getElementById("aldeaPNG").style.backgroundImage = "url('img/aldeas/konoha.png')";
    infoBasicaNinja()
     return;
   }else if(opcionesAldea.value === "aldeakumo"){
    document.getElementById("aldeaPNG").style.backgroundImage = "url('img/aldeas/kumogakure.png')";
    infoBasicaNinja()
   }else if(opcionesAldea.value === "aldeakiri"){
    document.getElementById("aldeaPNG").style.backgroundImage = "url('img/aldeas/kirigakure.png')";
    infoBasicaNinja()
   }else if(opcionesAldea.value === "aldeasuna"){
    document.getElementById("aldeaPNG").style.backgroundImage = "url('img/aldeas/sunagakure.png')";
    infoBasicaNinja()
   }else if(opcionesAldea.value === "aldeaiwa"){
    document.getElementById("aldeaPNG").style.backgroundImage = "url('img/aldeas/iwagakure.png')";
    infoBasicaNinja()
   }else if(opcionesAldea.value === "aldeaoto"){
    document.getElementById("aldeaPNG").style.backgroundImage = "url('img/aldeas/otogakure.png')";
    infoBasicaNinja()
   }else if(opcionesAldea.value === "aldeareon"){
    document.getElementById("aldeaPNG").style.backgroundImage = "url('img/aldeas/reongakure.png')";
    infoBasicaNinja()
   }else if(opcionesAldea.value === "aldeayuki"){
    document.getElementById("aldeaPNG").style.backgroundImage = "url('img/aldeas/yukigakure.png')";
    infoBasicaNinja()
   }
 });



// 
// 
// 
// 


// 
// 
// EL CODIGO DE ABAJO ES PARA TRABAJAR CON LA SUBIDA DE LA IMAGEN
// 
// 
// 

document.getElementById("submitGeneralFicha").addEventListener("click", function(){
    var imgFicha = document.getElementById("imgFichaInput").files[0];
    var imgFichaCompa1 = document.getElementById("imgFichaCompa1Input").files[0];
    var imgFichaCompa2 = document.getElementById("imgFichaCompa2Input").files[0];
    var imgFichaCompa3 = document.getElementById("imgFichaCompa3Input").files[0];
 
    var readerFicha = new FileReader();
    var readerFichaCompa1 = new FileReader();
    var readerFichaCompa2 = new FileReader();
    var readerFichaCompa3 = new FileReader();
 
    readerFicha.onloadend = function(){
       localStorage.setItem("imgFicha", readerFicha.result);
       document.getElementById("imgFicha").style.backgroundImage = "url(" + readerFicha.result + ")";
    }
    if(imgFicha){
       readerFicha.readAsDataURL(imgFicha);
    }
 
    readerFichaCompa1.onloadend = function(){
       localStorage.setItem("imgFichaCompa1", readerFichaCompa1.result);
       document.getElementById("equipoCompañero1").style.backgroundImage = "url(" + readerFichaCompa1.result + ")";
    }
    if(imgFichaCompa1){
       readerFichaCompa1.readAsDataURL(imgFichaCompa1);
    }
 
    readerFichaCompa2.onloadend = function(){
       localStorage.setItem("imgFichaCompa2", readerFichaCompa2.result);
       document.getElementById("equipoCompañero2").style.backgroundImage = "url(" + readerFichaCompa2.result + ")";
    }
    if(imgFichaCompa2){
       readerFichaCompa2.readAsDataURL(imgFichaCompa2);
    }
 
    readerFichaCompa3.onloadend = function(){
       localStorage.setItem("imgFichaCompa3", readerFichaCompa3.result);
       document.getElementById("equipoCompañero3").style.backgroundImage = "url(" + readerFichaCompa3.result + ")";
    }
    if(imgFichaCompa3){
       readerFichaCompa3.readAsDataURL(imgFichaCompa3);
    }
 });
 







