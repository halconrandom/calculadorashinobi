let buttonInformacionFicha = document.getElementById("buttonExplicacion")
let explicacionesDiv = document.getElementById("explicacionesDiv");
let h3Div = document.getElementById("h3Div");
let pDiv = document.getElementById("pDiv");
let closeWindowDiv = document.getElementById("closeButtonDiv")

function animacionMostrarDiv(){
    hojasfx.play()
    explicacionesDiv.style.display = "flex";
    explicacionesDiv.style.animationName = "desplazamientoDiv";
    explicacionesDiv.style.animationDuration = "2s";
    explicacionesDiv.style.left = "820px";
}

function cerrarExplicacionesDiv(){
    hojasfx.play()
    explicacionesDiv.style.animationName = "desplazamientoDivRegreso";
    explicacionesDiv.style.animationDuration = "3s";
    explicacionesDiv.style.left = "400px";
}


let hojasfx = new Audio("sfx/hojasfx.m4a")
buttonInformacionFicha.addEventListener("click", function(){
    animacionMostrarDiv()
    h3Div.innerHTML ="¡Bienvenid@ a la Academia Ninja"
    pDiv.innerHTML ="¡Hola! Seré tu guia en el papeleo que te toca hacer para poder empezar la academia. Pero no te preocupes, no es para nada dificil. Por favor ten en cuenta que deberás aprender como funciona nuestro mundo, pues desde la Gran Cuarta Guerra Ninja, muchas cosas han surgido como nuevas bestias con cola, elementos e incluso razas de seres como Ghouls. Por lo que si tienes dudas, dejalo saber." 

    closeWindowDiv.addEventListener("click", cerrarExplicacionesDiv);

})

let buttonInformacionName = document.getElementById("buttonExplicacionName")
buttonInformacionName.addEventListener("click", function(){
    animacionMostrarDiv()
    h3Div.innerHTML ="¿Cual es tu nombre?"
    pDiv.innerHTML ="Ten en cuenta que deberás añadir tu nombre y apellido, esto claramente refiriendo hacía el personaje que andas creando. Intenta evitar caracteres especiales pues quizas la imprenta ninja no pueda registrarlo correctamente." 

    closeWindowDiv.addEventListener("click", cerrarExplicacionesDiv);
})

let buttonInformacionAge = document.getElementById("buttonExplicacionAge")
buttonInformacionAge.addEventListener("click", function(){
    animacionMostrarDiv()
    h3Div.innerHTML ="¿Cual es tu edad?"
    pDiv.innerHTML ="La edad de tu personaje es sumamente importante pues va muy de la mano con la interpretación de tu personaje. No puedes tener 15 años y tener una altura exagerada, ni tampoco realizar acciones que claramente un niño no haría. Ten en cuenta que al iniciar en el grupo te recomendamos empezar con 15-17 años por tu rango." 

    closeWindowDiv.addEventListener("click", cerrarExplicacionesDiv);
})

let buttonInformacionClan = document.getElementById("buttonExplicacionClan")
buttonInformacionClan.addEventListener("click", function(){
    animacionMostrarDiv()
    h3Div.innerHTML ="¿Cual es tu edad?"
    pDiv.innerHTML ="La edad de tu personaje es sumamente importante pues va muy de la mano con la interpretación de tu personaje. No puedes tener 15 años y tener una altura exagerada, ni tampoco realizar acciones que claramente un niño no haría. Ten en cuenta que al iniciar en el grupo te recomendamos empezar con 15-17 años por tu rango." 

    closeWindowDiv.addEventListener("click", cerrarExplicacionesDiv);
})

let buttonInformacionElemento = document.getElementById("buttonExplicacionElemento")
buttonInformacionElemento.addEventListener("click", function(){
    animacionMostrarDiv()
    h3Div.innerHTML ="Elemento Base"
    pDiv.innerHTML ="En Naruto existen cinco elementos base, sin contar los elementos adicionales como el Ying o el Yang. Por eso debes tener cuidado con el elemento que deseas usar para iniciar pues este no tiene cambio una vez establecido." 

    closeWindowDiv.addEventListener("click", cerrarExplicacionesDiv);
})

let buttonInformacionAldea = document.getElementById("buttonExplicacionAldea")
buttonInformacionAldea.addEventListener("click", function(){
    animacionMostrarDiv()
    h3Div.innerHTML ="Aldea de Nacimiento"
    pDiv.innerHTML ="La aldea de nacimiento de todos los personajes es sumamente importante pues esto establece de donde provienes. Al nacer en una aldea, tienes una responsabilidad muy grande hacía ella aún si ya no vives en ella sino que te hospedas en otra. Una vez tomada la decisión, estas acatado a las reglas de dicha aldea y su lider." 

    closeWindowDiv.addEventListener("click", cerrarExplicacionesDiv);
})

// 
// 
// 
// ////////////////////////////////////////////////////////////////
// ! FUNCIONES Y OPCIONES PARA QUE FUNCIONE EL REGISTRO

// 
// 

function infoBasicaNinja(){
    innerTextName.innerHTML = document.getElementById('namePJ').value
    valueEdad.innerHTML = document.getElementById('agePJ').value
    valueClan.innerHTML = document.getElementById('clanPJ').value
    valueChakra.innerHTML = document.getElementById('elementoPJ').value
    valueRango.innerHTML = document.getElementById('rangoPJ').value
    valueAldeaNac.innerHTML = document.getElementById('aNacimientoPJ').value
}
function aldeaIcono(){
    if (aNacimientoPJ.value === "noelegir") {
        return;
      }else if(aNacimientoPJ.value === "Republic City"){
        document.getElementById("aldeaPNG").style.backgroundImage = "url('img/aldeas/konoha.png')";
       infoBasicaNinja()
        return;
      }else if(aNacimientoPJ.value === "Kumogakure"){
       document.getElementById("aldeaPNG").style.backgroundImage = "url('img/aldeas/kumogakure.png')";
       infoBasicaNinja()
      }else if(aNacimientoPJ.value === "Kirigakure"){
       document.getElementById("aldeaPNG").style.backgroundImage = "url('img/aldeas/kirigakure.png')";
       infoBasicaNinja()
      }else if(aNacimientoPJ.value === "Sunagakure"){
       document.getElementById("aldeaPNG").style.backgroundImage = "url('img/aldeas/sunagakure.png')";
       infoBasicaNinja()
      }else if(aNacimientoPJ.value === "Iwagakure"){
       document.getElementById("aldeaPNG").style.backgroundImage = "url('img/aldeas/iwagakure.png')";
       infoBasicaNinja()
      }else if(aNacimientoPJ.value === "Otogakure"){
       document.getElementById("aldeaPNG").style.backgroundImage = "url('img/aldeas/otogakure.png')";
       infoBasicaNinja()
      }else if(aNacimientoPJ.value === "Reongakure"){
       document.getElementById("aldeaPNG").style.backgroundImage = "url('img/aldeas/reongakure.png')";
       infoBasicaNinja()
      }else if(aNacimientoPJ.value === "Yukigakure"){
       document.getElementById("aldeaPNG").style.backgroundImage = "url('img/aldeas/yukigakure.png')";
       infoBasicaNinja()
      }

}


function obtencionImagenesPersonajes(){
const imgFicha = document.getElementById("imgFichaInput").files[0];
const imgFichaCompa1 = document.getElementById("imgFichaCompa1Input").files[0];
const imgFichaCompa2 = document.getElementById("imgFichaCompa2Input").files[0];
const imgFichaCompa3 = document.getElementById("imgFichaCompa3Input").files[0];

const readerFicha = new FileReader();
const readerFichaCompa1 = new FileReader();
const readerFichaCompa2 = new FileReader();
const readerFichaCompa3 = new FileReader();

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
}
 


let btnsubmit = document.getElementById("submitGeneralFicha");

btnsubmit.addEventListener("click", function(){
    infoBasicaNinja();
    aldeaIcono();
    obtencionImagenesPersonajes();

})




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
        categories: ['Fuerza', 'V. Movimiento', 'V. Técnica', 'Reflejo', 'Destreza'],
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
        max: 1000,
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical'
    },

    series: [{
        name: '',
        data: [0,0,0,0,0],
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
    const destreza = (parseInt(inputFuerzaChart.value) + parseInt(inputReflejoChart.value) + parseInt(inputVMovChart.value) + parseInt(inputVTecChart.value)) / 4;

var chart = Highcharts.charts[0];
chart.series[0].update({
data: [
parseFloat(inputFuerzaChart.value),
parseFloat(inputVMovChart.value),
parseFloat(inputVTecChart.value),
parseFloat(inputReflejoChart.value),
parseFloat(destreza),
]
});
}





const capturarImagenBtn = document.getElementById("capturarImagen");
const miDiv = document.getElementById("fondoFichaTotal");

let scale = window.devicePixelRatio;
let width = miDiv.offsetWidth;
let height = miDiv.offsetHeight;

capturarImagenBtn.addEventListener("click", () => {
    html2canvas(miDiv,  {
            scale:4,
            scale: scale,
            width: width,
            height: height,
            y: 1000,
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








