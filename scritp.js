const TEXTOCC = document.getElementById("textocc");
const BOTON = document.getElementById("boton");
const INPUT= document.getElementById("entrada");
// esta parte no le entiendo muy bien
BOTON.addEventListener("click",()=>{
    if (INPUT.value == ''){
      console.log('vacio')
    }
    // luego de poner la primera condicion de error aplicamos la segunda que seria el algoritmo de holliday restigiando correctamente los valores que acepta dicho algorimo
    
    else if(INPUT.value<=30){
    //  ahora llamamos a la funcion que va a tomar la variable "entrada"
   
    TEXTOCC.innerHTML = algoritmoHolliday()
    
    }else if (INPUT.value >30){

    }
//    TEXTOCC.innerHTML = INPUT.value + "cc/h";
   TEXTOCC.style.display = "block";
});

// en donde dice entrada va la variable que va a ejecutar la funcion (el argumento)

function algoritmoHolliday(entrada) { 
    let resto = peso;
    let flujo = 0;
    if (resto>20){
        let aux = resto-20;
        flujo += aux*1;
        resto -= aux;
    } 
    if (resto>10){
        let aux = resto-10;
        flujo += aux*2;
        resto -= aux;
    }
    flujo += resto*4;
    return flujo;
}