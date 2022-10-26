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