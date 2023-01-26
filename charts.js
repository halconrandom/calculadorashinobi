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
btnsubmit.addEventListener("click", function() {
   if (opcionesAldea.value === "noelegir") {
     alert("Estas eligiendo una opción no válida");
     return;
   } else(opcionesAldea.value === "aldeaCR");{
     document.getElementById("aldeaPNG").style.backgroundImage = "url('img/aldeas/konoha.png')";
     nombrePJFicha.innerHTML = document.getElementById('nombrePJ').value
     usuarioFicha.innerHTML = document.getElementById('nombreUser').value
     clanFicha.innerHTML = document.getElementById('Clan').value
     rangoFicha.innerHTML = document.getElementById('Rango').value
     tipoChakraFicha.innerHTML = document.getElementById('ChakraInicial').value
     return;
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


const uploadButton = document.getElementById("submitGeneralFicha");
const imageInput = document.getElementById("imgFichaInput");

uploadButton.addEventListener("click", () => {
  const file = imageInput.files[0];
  if (!file) {
    alert("Por favor selecciona una imagen");
    return;
  }

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    const base64Image = reader.result;
    localStorage.setItem("imagenFicha", base64Image);
  };
});


document.getElementById('submitGeneralFicha').onclick = function (){
    let base64Image = localStorage.getItem("imagenFicha");
    document.getElementById('imgFicha').style.backgroundImage = "url(" + base64Image + ")";
 };



 const clearStorageButton = document.getElementById("clear-storage-button");
 clearStorageButton.addEventListener("click", () => {
     localStorage.removeItem("imagenFicha");
     alert("El almacenamiento local ha sido limpio");
 });
 




 






















