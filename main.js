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

function calcularTotalFuerza() {
    const fuerzaPJ = parseInt(document.getElementById("inputReceptor").value);
    const fuerzaEnemigo = parseInt(document.getElementById("inputFuerza").value);
    const calcularDanio = getCalcularDanio();
  
    const totalDañoFuerza = calcularDanio(fuerzaPJ, fuerzaEnemigo);
    const dañoTotal = Math.max(totalDañoFuerza, 0);
  
    document.getElementById('resultadoFuerza').innerHTML = `El daño total a tu personaje tras recibir ${fuerzaEnemigo} KG de fuerza es de: <br> ${dañoTotal} KG de daño total.`;
  
    localStorage.setItem("repoInputReceptor", fuerzaPJ);
    localStorage.setItem("repoInputFuerzaEnemiga", fuerzaEnemigo);
  }
  
  function getCalcularDanio() {
    if (document.getElementById("radioFuerzaNormal").checked) {
      return (fuerzaPJ, fuerzaEnemigo) => (fuerzaEnemigo - fuerzaPJ) * 2;
    } else if (document.getElementById("radioFuerza1.5").checked) {
      return (fuerzaPJ, fuerzaEnemigo) => (fuerzaEnemigo - fuerzaPJ) * 1.5;
    } else if (document.getElementById("radioFuerza1.25").checked) {
      return (fuerzaPJ, fuerzaEnemigo) => (fuerzaEnemigo - fuerzaPJ) * 1.25;
    } else {
      return () => 0;
    }
  }
  
  const btnSubmit = document.getElementById('calcularTotalFuerza');
  btnSubmit.addEventListener('click', calcularTotalFuerza);



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


const calcularDañoTecnica = (chakraTecnicaEnemigo) => {
    if (document.getElementById("radioChakraNormal").checked) {
      return document.getElementById("radioBloqueo").checked ? chakraTecnicaEnemigo * 0.4 : parseInt(chakraTecnicaEnemigo) * 0.5;
    } else if (document.getElementById("radioSenjutsu").checked) {
      let calculo_tecnica = parseInt(chakraTecnicaEnemigo) * 0.5;
      let totalDañotecnica = parseInt(chakraTecnicaEnemigo) + parseInt(calculo_tecnica);
      return document.getElementById("radioBloqueo").checked ? totalDañotecnica * 2 * 0.4 : totalDañotecnica * 2;
    }
  }
  
  const calculoSubmitChakra = () => {
    let chakraPJ = document.getElementById("inputReceptorTecnica").value;
    let chakraTecnicaEnemigo = document.getElementById("inputTecnica").value;
    localStorage.setItem("repoInputReceptorTecnica", chakraPJ);
    localStorage.setItem("repoInputTecnicaEnemiga", chakraTecnicaEnemigo);
    
    let calculo_tecnica = calcularDañoTecnica(chakraTecnicaEnemigo);
    let totalDañotecnica = parseInt(chakraTecnicaEnemigo) + parseInt(calculo_tecnica);
    let totalDañoChakra = parseInt(chakraPJ) - parseInt(totalDañotecnica);
    if (totalDañoChakra < 0) totalDañoChakra = 0;
    
    let totalDañoTexto = document.getElementById("radioSenjutsu").checked ? "U/S" : "U/C";
    let textoResultado = `El total de daño de la técnica del rival es de ${totalDañotecnica} ${totalDañoTexto}. Tu chakra restante es de ${totalDañoChakra} ${totalDañoTexto}`;
    document.getElementById('resultadoTecnica').innerHTML = textoResultado;
  }
  
  let btnSubmitChakra = document.getElementById('calcularTotalTecnica');
  btnSubmitChakra.addEventListener("click", calculoSubmitChakra);
  

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
