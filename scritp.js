const TEXTOCC = document.getElementById("textocc");
const TEXTOCC2 = document.getElementById("textocc2");
const TEXTOCC3 = document.getElementById("textocc3");
const ERROR = document.getElementById("errormensaje");
const BOTON = document.getElementById("boton");
const INPUT = document.getElementById("entrada");
// esta parte es para poner un escuchador de varios tipos de casos.
BOTON.addEventListener("click", () => {
  if (INPUT.value == "") {
    ERROR.style.display = "block";
    TEXTOCC.style.display = "none";
    TEXTOCC2.style.display = "none";
    TEXTOCC3.style.display = "none";
  } else if (INPUT.value <= 30) {
    let holly = algoritmoHolliday(INPUT.value);
    TEXTOCC.innerHTML = holly[0] + "cc";
    TEXTOCC.style.display = "block";
    TEXTOCC2.innerHTML = holly[1];
    TEXTOCC2.style.display = "block";
    TEXTOCC3.innerHTML = holly[2];
    TEXTOCC3.style.display = "block";
    ERROR.style.display = "none";
  } else {
    let sc = superficie(INPUT.value);
    TEXTOCC.innerHTML = sc[0];
    TEXTOCC.style.display = "block";
    TEXTOCC2.innerHTML = sc[1];
    TEXTOCC2.style.display = "block";
    ERROR.style.display = "none";
  }
  //    TEXTOCC.innerHTML = INPUT.value + "cc/h";
});

// en donde dice entrada va la variable que va a ejecutar la funcion (el argumento)

function algoritmoHolliday(peso) {
  let resultado;
  if (peso <= 10) {
    resultado = peso * 100;
  } else if (peso > 10 && peso <= 20) {
    resultado = 1000 + (peso - 10) * 50;
  } else {
    resultado = 1500 + (peso - 20) * 20;
  }
  return [
    resultado,
    (resultado / 24).toFixed(2),
    ((resultado / 24) * 1.5).toFixed(2),
  ];
}
function superficie(peso) {
  let superficieCorporal = (peso * 4 + 7) / (peso + 90);
  return [
    (superficieCorporal * 1500).toFixed(2),
    (superficieCorporal * 2000).toFixed(2),
  ];
}
