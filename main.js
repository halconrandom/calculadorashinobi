// PARA CONFIGURAR TAIJUTSU
let btnGolpes = document.getElementById('golpes');
btnGolpes.onclick = function(){clickGolpes()}
let btnVolver = document.getElementById('volver');
btnVolver.onclick = () => {window.location.reload();}


function clickGolpes(){
        document.getElementById('JavaBoxIndex').style.display = 'none';
        document.getElementById('labelsInputFuerza').style.display = 'flex';
        document.getElementById('insideBoxIndex').style.backgroundColor = 'rgba(37, 38, 39,0.8)';
}


let btnSubmit = document.getElementById('calcularTotalFuerza');
btnSubmit.onclick = function(){calculoSubmitFuerza()}



function calculoSubmitFuerza(){
    let fuerzaPJ = document.getElementById("inputReceptor").value
    let fuerzaEnemigo = document.getElementById("inputFuerza").value
    localStorage.setItem("repoInputReceptor", fuerzaPJ);
    localStorage.setItem("repoInputFuerzaEnemiga", fuerzaEnemigo);
    if (document.getElementById("radioFuerzaNormal").checked){
        let totalDañoFuerza = ((fuerzaEnemigo - fuerzaPJ) * 2);
        if (totalDañoFuerza < 0) totalDañoFuerza = 0;
        document.getElementById('resultadoFuerza').innerHTML = "El daño total a tu personaje tras recibir "+fuerzaEnemigo+" KG de fuerza es de: <br> " +totalDañoFuerza +" KG de daño total.";
        return;
    }else if (document.getElementById("radioFuerza1.5").checked){
        let totalDañoFuerza = ((fuerzaEnemigo - fuerzaPJ) * 1.5);
        if (totalDañoFuerza < 0) totalDañoFuerza = 0;
        document.getElementById('resultadoFuerza').innerHTML = "El daño total a tu personaje tras recibir "+fuerzaEnemigo+" KG de fuerza es de: <br> " +totalDañoFuerza +" KG de daño total.";
        return;
    }else if (document.getElementById("radioFuerza1.25").checked){
        let totalDañoFuerza = ((fuerzaEnemigo - fuerzaPJ) * 1.25);
        if (totalDañoFuerza < 0) totalDañoFuerza = 0;
        document.getElementById('resultadoFuerza').innerHTML = "El daño total a tu personaje tras recibir "+fuerzaEnemigo+" KG de fuerza es de: <br> " +totalDañoFuerza +" KG de daño total.";
        return;
    }

}

document.getElementById('buttonRecuperar').onclick = function (){
    document.getElementById("inputReceptor").value = localStorage.getItem("repoInputReceptor")
    fuerzaEnemigo = document.getElementById("inputFuerza").value = localStorage.getItem("repoInputFuerzaEnemiga")
};



// ESTE DE ACÁ ABAJO ES PARA CONFIGURAR TECNICA


let btnTecnicas = document.getElementById('chakra');
btnTecnicas.onclick = function(){clickChakra()}
let btnVolverTecnica = document.getElementById('volverTecnica');
btnVolverTecnica.onclick = () => {window.location.reload();}

function clickChakra(){
        document.getElementById('JavaBoxIndex').style.display = 'none';
        document.getElementById('labelsInputTecnica').style.display = 'flex';
        document.getElementById('insideBoxIndex').style.backgroundColor = 'rgba(37, 38, 39,0.8)';
}


let btnSubmitChakra = document.getElementById('calcularTotalTecnica');
btnSubmitChakra.onclick = function(){calculoSubmitChakra()}

function calculoSubmitChakra(){
    let chakraPJ = document.getElementById("inputReceptorTecnica").value
    let chakraTecnicaEnemigo = document.getElementById("inputTecnica").value
    localStorage.setItem("repoInputReceptorTecnica", chakraPJ);
    localStorage.setItem("repoInputTecnicaEnemiga", chakraTecnicaEnemigo);
    if (document.getElementById("radioChakraNormal").checked){
        if(document.getElementById("radioBloqueo").checked){
            let calculo_tecnica = (chakraTecnicaEnemigo * 0.4)
            let totalDañoChakra = (chakraPJ - calculo_tecnica)
            if (totalDañoChakra < 0) totalDañoChakra = 0
            document.getElementById('resultadoTecnica').innerHTML = "El total de daño de la tecnica del rival es de " + calculo_tecnica + " U/C. \nTu chakra restante es de "+ totalDañoChakra + "U/C";
            return;
        }else{
            let calculo_tecnica = (chakraTecnicaEnemigo * 0.5)
            let totalDañotecnica = (parseInt(chakraTecnicaEnemigo) + parseInt(calculo_tecnica))
            let totalDañoChakra = (chakraPJ - totalDañotecnica)
            if (totalDañoChakra < 0) totalDañoChakra = 0
            document.getElementById('resultadoTecnica').innerHTML = "El total de daño de la tecnica del rival es de " + totalDañotecnica + " U/C. \nTu chakra restante es de "+ totalDañoChakra + "U/C";
            return;
        } 
    }else if (document.getElementById("radioSenjutsu").checked){
        if(document.getElementById("radioBloqueo").checked){
            let calculo_tecnica = (chakraTecnicaEnemigo * 0.5)
            let totalDañotecnica = (parseInt(chakraTecnicaEnemigo) + parseInt(calculo_tecnica))
            let calculo_senjutsu = (totalDañotecnica * 2)
            let calculo_total_senjutsu = (calculo_senjutsu * 0.4)
            let totalDañoChakra = (chakraPJ - calculo_total_senjutsu)
            if (totalDañoChakra < 0) totalDañoChakra = 0
            document.getElementById('resultadoTecnica').innerHTML = "El total de daño de la tecnica del rival es de " + calculo_total_senjutsu + " U/S. \nTu chakra restante es de "+ totalDañoChakra + "U/C";
            return;
        }else{
            let calculo_tecnica = (chakraTecnicaEnemigo * 0.5)
            let totalDañotecnica = (parseInt(chakraTecnicaEnemigo) + parseInt(calculo_tecnica))
            let calculo_senjutsu = (totalDañotecnica * 2)
            let totalDañoChakra = (chakraPJ - calculo_senjutsu)
            if (totalDañoChakra < 0) totalDañoChakra = 0
            document.getElementById('resultadoTecnica').innerHTML = "El total de daño de la tecnica del rival es de " + calculo_senjutsu + " U/S. \nTu chakra restante es de "+ totalDañoChakra + "U/C";
            return;
        } 
    }
}

document.getElementById('buttonRecuperarChakra').onclick = function (){
    document.getElementById("inputReceptorTecnica").value = localStorage.getItem("repoInputReceptorTecnica")
    fuerzaEnemigo = document.getElementById("inputTecnica").value = localStorage.getItem("repoInputTecnicaEnemiga")
};



// ESTE DE ACÁ ABAJO ES PARA CONFIGURAR RESISTENCIA DE CHAKRA


let btnResistenciaChakra = document.getElementById('resistenciaChakra');
btnResistenciaChakra.onclick = function(){clickResistenciaChakra()}
let btnVolverResistenciaChakra = document.getElementById('volverresistenciaChakra');
btnVolverResistenciaChakra.onclick = () => {window.location.reload();}

function clickResistenciaChakra(){
    document.getElementById('JavaBoxIndex').style.display = 'none';
    document.getElementById('labelsInputResistenciaChakra').style.display = 'flex';
    document.getElementById('insideBoxIndex').style.backgroundColor = 'rgba(37, 38, 39,0.8)';
}


let btncalcularResistenciaChakra = document.getElementById('calcularTotalResistenciaChakra');
btncalcularResistenciaChakra.onclick = function(){calculoSubmitResistenciaChakra()}

function calculoSubmitResistenciaChakra(){
let chakraPJTotalResistencia = document.getElementById("inputChakraTotalResistencia").value
let chakraPJRestanteResistencia = document.getElementById("inputChakraRestanteResistencia").value


let chakraResistencia35 = (chakraPJTotalResistencia*0.35)
let chakraResistencia15 = (chakraPJTotalResistencia*0.15)
let chakraResistencia05 = (chakraPJTotalResistencia*0.05)


if(chakraPJRestanteResistencia <= 0){
    document.getElementById('resultadoResistenciaChakra').innerHTML = 'Tu personaje le queda 0% de Chakra por lo que quedas inconsciente a no ser que poseas alguna técnica o habilidad que lo evite. No podrás recargar chakra estando en este estado y si sigues recibiendo daño, corres el riesgo de morir.';
    return;
}else if(chakraPJRestanteResistencia <= chakraResistencia05){
    document.getElementById('resultadoResistenciaChakra').innerHTML = 'Tu personaje le queda 5% de Chakra (o menos) por lo que estás tan exhausto que no puedes ni moverte. Tu unica salvación si tienes la oportunidad es recargar chakra';
}else if(chakraPJRestanteResistencia <= chakraResistencia15){
    document.getElementById('resultadoResistenciaChakra').innerHTML = 'Tu personaje le queda 15% de Chakra (o menos) por lo que estás muy cansado. Tu fuerza se reduce un 15%.';
}else if(chakraPJRestanteResistencia <= chakraResistencia35){
    document.getElementById('resultadoResistenciaChakra').innerHTML = 'Tu personaje le queda 35% de Chakra (o menos) por lo que empiezas a sentirte agotado. Tu velocidad de movimiento se reduce un 10% y tus reflejos un 5%, provocando que tu percepcion se vuelve dificultosa y tus pasos sean más pesados.';
}else{
    document.getElementById('resultadoResistenciaChakra').innerHTML = 'Tu personaje aún tiene bastante chakra por lo que no tiene problemas de ningun tipo para continuar.';
}
}

// 
// 
// De aquí para abajo es para trabajar cosas simples del boton Ficha, para más info revisar el chart.js 
// 
// 