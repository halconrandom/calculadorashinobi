let respuesta = prompt ("Bienvenido a la calculadora de daño \nIngrese que desea calcular (Golpes) (Tecnicas)") 

while (respuesta.toLowerCase() != "Golpes" || respuesta.toLowerCase() != "Tecnicas" ){
    if (respuesta == "golpes"){
        alert ("Los golpes y/o patadas dados con fuerza son multiplicados x2. El calculo se realiza restando la fuerza del golpe a la fuerza tuya, posteriormente añadiendo la multiplicacion para definir cuanto daño te realizo.")
        let fuerzaPJ = prompt ("Ingrese la fuerza de tu personaje")
        let fuerzaEnemigo = prompt ("Ingrese la fuerza del golpe recibido")
        let totalDañoFuerza = ((fuerzaEnemigo - fuerzaPJ) * 2)
        alert ("El daño total a tu personaje tras recibir "+fuerzaEnemigo+" KG de fuerza es de " +totalDañoFuerza +" KG de daño total.")
        break;
    } else if (respuesta == "tecnicas"){
        alert ("Actualmente el daño que se recibe dependerá de cuanto chakra te es golpeado. Ese nivel de poder que te golpea se aumenta un 50% de la base y el resultado final sería lo que te quita.")
        let chakraPJ = prompt ("Ingrese la cantidad de chakra restante de tu personaje")
        let chakraEnemigo = prompt ("Ingrese la cantidad de chakra de la tecnica que te golpea.")
        let calculo_tecnica = (chakraEnemigo * 0.5)
        let totalDañotecnica = (parseInt(chakraEnemigo) + parseInt(calculo_tecnica))
        let totalDañoChakra = (chakraPJ - totalDañotecnica)
        alert ("El total de daño de la tecnica del rival es de " + totalDañotecnica + " U/C. \nTu chakra restante es de "+ totalDañoChakra + "U/C")
        break;
    } else {
        respuesta = prompt ("No podemos calcular eso, solo golpes o tecnicas \n ¿Que desea calcular?")
    }
}






