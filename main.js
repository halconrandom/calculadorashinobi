// PARA CONFIGURAR TAIJUTSU


let btnGolpes = document.getElementById('golpes');
btnGolpes.onclick = function(){clickGolpes()}
let btnVolver = document.getElementById('volver');
btnVolver.onclick = () => {window.location.reload();}


function clickGolpes(){
        document.getElementById('golpes').style.display = 'none';
        document.getElementById('chakra').style.display = 'none';
        document.getElementById('titulo').innerHTML = 'Introduce los datos solicitados';
        document.getElementById('labelsInputFuerza').style.display = 'flex';
}


let btnSubmit = document.getElementById('calcularTotalFuerza');
btnSubmit.onclick = function(){calculoSubmitFuerza()}

function calculoSubmitFuerza(){
    let fuerzaPJ = document.getElementById("inputReceptor").value
    let fuerzaEnemigo = document.getElementById("inputFuerza").value
    let totalDañoFuerza = ((fuerzaEnemigo - fuerzaPJ) * 2);
    if (totalDañoFuerza < 0) totalDañoFuerza = 0;
    document.getElementById('resultadoFuerza').innerHTML = "El daño total a tu personaje tras recibir "+fuerzaEnemigo+" KG de fuerza es de: <br> " +totalDañoFuerza +" KG de daño total.";
}


// ESTE DE ACÁ ABAJO ES PARA CONFIGURAR TECNICA


let btnTecnicas = document.getElementById('chakra');
btnTecnicas.onclick = function(){clickChakra()}
let btnVolverTecnica = document.getElementById('volverTecnica');
btnVolverTecnica.onclick = () => {window.location.reload();}

function clickChakra(){
        document.getElementById('golpes').style.display = 'none';
        document.getElementById('chakra').style.display = 'none';
        document.getElementById('titulo').innerHTML = 'Introduce los datos solicitados';
        document.getElementById('labelsInputTecnica').style.display = 'flex';
}


let btnSubmitChakra = document.getElementById('calcularTotalTecnica');
btnSubmitChakra.onclick = function(){calculoSubmitChakra()}

function calculoSubmitChakra(){
    let chakraPJ = document.getElementById("inputReceptorTecnica").value
    let chakraTecnicaEnemigo = document.getElementById("inputTecnica").value
    let calculo_tecnica = (chakraTecnicaEnemigo * 0.5)
    let totalDañotecnica = (parseInt(chakraTecnicaEnemigo) + parseInt(calculo_tecnica))
    let totalDañoChakra = (chakraPJ - totalDañotecnica)
    if (totalDañoChakra < 0) totalDañoChakra = 0;
    document.getElementById('resultadoTecnica').innerHTML = "El total de daño de la tecnica del rival es de " + totalDañotecnica + " U/C. \nTu chakra restante es de "+ totalDañoChakra + "U/C";
}

















// let respuesta = prompt ("Bienvenido a la calculadora de daño \nIngrese que desea calcular (Golpes) (Tecnicas)") 

// while (respuesta.toLowerCase() != "Golpes" || respuesta.toLowerCase() != "Tecnicas" ){
//     if (respuesta == "golpes"){
//         alert ("Los golpes y/o patadas dados con fuerza son multiplicados x2. El calculo se realiza restando la fuerza del golpe a la fuerza tuya, posteriormente añadiendo la multiplicacion para definir cuanto daño te realizo.")
//         let fuerzaPJ = prompt ("Ingrese la fuerza de tu personaje")
//         let fuerzaEnemigo = prompt ("Ingrese la fuerza del golpe recibido")
//         let totalDañoFuerza = ((fuerzaEnemigo - fuerzaPJ) * 2)
//         alert ("El daño total a tu personaje tras recibir "+fuerzaEnemigo+" KG de fuerza es de " +totalDañoFuerza +" KG de daño total.")
//         break;
//     } else if (respuesta == "tecnicas"){
//         alert ("")
//         let chakraPJ = prompt ("Ingrese la cantidad de chakra restante de tu personaje")
//         let chakraEnemigo = prompt ("Ingrese la cantidad de chakra de la tecnica que te golpea.")
//         let calculo_tecnica = (chakraEnemigo * 0.5)
//         let totalDañotecnica = (parseInt(chakraEnemigo) + parseInt(calculo_tecnica))
//         let totalDañoChakra = (chakraPJ - totalDañotecnica)
//         alert ("El total de daño de la tecnica del rival es de " + totalDañotecnica + " U/C. \nTu chakra restante es de "+ totalDañoChakra + "U/C")
//         break;
//     } else {
//         respuesta = prompt ("No podemos calcular eso, solo golpes o tecnicas \n ¿Que desea calcular?")
//     }
// }