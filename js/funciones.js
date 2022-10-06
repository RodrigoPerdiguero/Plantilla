
//Variables
let numeroI = 0;
let resultadoI = 0;
let operacionI = 0;
let numCalc = 0;
let lista = document.getElementById("operacion");
//alert("No furulo cagüen todo lo que se menea");

//Ejercicio de pruebas...

/*operacion.addEventListener("change",calcular,false);
function calcular(event) {
    operacionI=event.target.value;
    alert(OperacionI);
}*/
/*
operacion.addEventListener("change",calcular,false);
function calcular() {

    operacionI=operacion.value;
    alert(OperacionI);
    numeroI=parseInt(dato.value);
    resultadoI = numeroI*2;
    resultado=resultadoI;
}*/


//Ejercicio final
operacion.addEventListener("change", calcular, false);
function calcular() {
    operacionI = operacion.value;
    numeroI = parseInt(dato.value);
//Con switch
    switch (operacionI) {
        case '1':
            //Convertimos decimal a binario
            numCalc = numeroI.toString(2);
            resultado.value = numCalc;
            break;
        case '2':
            //Convierte decimal a octal
            numCalc = numeroI.toString(8);
            resultado.value = numCalc;
            break;

        case '3':
            //Convierte decimal a hexadecimal
            numCalc = numeroI.toString(16);
            resultado.value = numCalc;
            break;

        case '4':
            //Convierte binario a decimal
            numCalc = parseInt(numeroI, 2);
            resultado.value = numCalc;
            break;

        case '5':
            //Convierte octal a decimal
            numCalc = parseInt(numeroI, 8);
            resultado.value = numCalc;
            break;

        case '6':
            //Convierte hexadecimal a decimal
            numeroI = dato.value;
            numCalc = parseInt(numeroI, 16);
            resultado.value = numCalc;
            break;

        default:
            //Codigo muerto debido a cotas de select
            resultado.value = "Error en el switch";
            break;
    }


//Mismo codigo que switch pero con estructura if-else
/*
    if (operacionI == 1) {
        //Convertimos decimal a binario
        numCalc = numeroI.toString(2);
        resultado.value = numCalc;
    } else if (operacionI == 2) {
        //Convierte decimal a octal
        numCalc = numeroI.toString(8);
        resultado.value = numCalc;
    } else if (operacionI == 3) {
        //Convierte decimal a hexadecimal
        numCalc = numeroI.toString(16);
        resultado.value = numCalc;
    } else if (operacionI == 4) {
        //Convierte binario a decimal
        numCalc = parseInt(numeroI, 2);
        resultado.value = numCalc;
    } else if (operacionI == 5) {
        //Convierte octal a decimal
        numCalc = parseInt(numeroI, 8);
        resultado.value = numCalc;
    } else if (operacionI == 6) {
        //Convierte hexadecimal a decimal
        numeroI = dato.value;
        numCalc = parseInt(numeroI, 16);
        resultado.value = numCalc;
    }
*/
}