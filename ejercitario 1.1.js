/* Variables y tipo de datos
Lee las instrucciones de cada comentario y escribí el código para realizar la tarea */


//Crea una variable numero y asígnale un valor de tipo number. porque usa var para poner variable y luego let?
var a = 1;
//Crea una variable texto y asígnale un valor de tipo string.
let variableletras= "acd"

//Crea una variable verdadero y asígnale un valor de tipo boolean que represente una afirmación verdadera.
    let variabletrue= true
    variabletrue= true

//Crea una variable falso y asígnale un valor de tipo boolean que represente una afirmación falsa.
    let variableflasa= false

//Crea una variable nulo y asígnale un valor de tipo null.
     let nullo= null

//Crea una variable indefinido y asígnale un valor de tipo undefined.
    let indefinido= undefined

//Crea una variable arreglo y asígnale un arreglo con varios valores de diferentes tipos de datos.
    let arreglo= [ variableflasa, variabletrue, variableletras, a]

//Imprime en la consola el valor de la variable número y el tipo de dato que almacena.
   console.log(a, typeof a)

//Imprime en la consola el valor de la variable texto y el tipo de dato que almacena.
  console.log( variableletras, typeof variableletras)

//Imprime en la consola el valor de la variable verdadero y el tipo de dato que almacena.
  console.log(variabletrue,typeof variabletrue)

//Imprime en la consola el valor de la variable falso y el tipo de dato que almacena.
     console.log( variableflasa, typeof variableflasa)

//Imprime en la consola el valor de la variable nulo y el tipo de dato que almacena.
    console.log(null, typeof nullo)

//Imprime en la consola el valor de la variable indefinido y el tipo de dato que almacena.
    console.log(indefinido, typeof indefinido)

//Imprime en la consola el valor de la variable arreglo y el tipo de dato que almacena.
   console.log(arreglo, typeof arreglo)


/*Decisiones en javascript (if,if else, switch)*/

//Escribe un programa que tome un número como entrada y muestre un mensaje en la consola indicando si es mayor, menor o igual a 10.
  let numero=prompt('¿numero?');
   if(numero> 10){
     console.log( "Es menor")
   }
   else if( numero<10){
      console.log( "Es menor")
   }
   else{
    console.log( "Es igual")
   }
//Escribe un programa que solicite al usuario que ingrese un número y verifique si es par o impar.

   let variablenumeropar=prompt('¿numero?')
     if( variablenumeropar%2==0){
        console.log( "El  numero sugerido es par")
     }
     else{
        console.log( "El numero sugerido es impar")
     }
    
//Escribe un programa que solicite al usuario que ingrese una letra y verifique si es una vocal o una consonante.
   let caracter=prompt('Introducir Letra')
   caracter.length=1
   caracter=caracter.toLowerCase()
   if(caracter==="a"||
   caracter==="e"||
   caracter==="i"||
   caracter==="o"||
   caracter==="u"){
    console.log("La letra es una vocal :D")
   }
   else{
    console.log("La letra no es una voal :c")
   }

//Escribe un programa que solicite al usuario que ingrese una letra y verifique si es una vocal o una consonante.
while (true) {
   console.log(1)
}





//Escribe un programa que solicite al usuario que ingrese una edad y verifique si es mayor o menor de edad.
let numero=prompt('¿Edad?');
   if(numero>= 18){
     console.log( "Es mayor")
   }
   else {
      console.log( "Es menor")
   }
   // para limitar y restringir caracter y demas investigar while



//Escribe un programa que solicite al usuario que ingrese un número del 1 al 7 y muestre un mensaje en la consola indicando el día de la semana correspondiente.




//Funciones

//Escribe una función que tome dos números como argumentos y devuelva su suma.

//Escribe una función que tome un número como argumento y devuelva true si es par o false si es impar.

//Escribe una función que tome un array de números como argumento y devuelva la suma de sus elementos.

//Escribe una función que tome un array de strings como argumento y devuelva la longitud del string más largo.

//Escribe una función que tome un objeto como argumento y devuelva un array con los valores de todas sus propiedades.





//Vectores

//Escribe una función que tome un array de números como argumento y devuelva el número más grande.

//Escribe una función que tome un array de números como argumento y devuelva un array con los números ordenados de menor a mayor.

//Escribe una función que tome dos arrays como argumentos y devuelva un array que contenga los elementos comunes entre ambos.

//Escribe una función que tome un array de strings como argumento y devuelva un nuevo array que contenga los strings convertidos a mayúsculas.

//Escribe una función que tome un array de números como argumento y devuelva un nuevo array que contenga la suma acumulativa de sus elementos.




//Bucles

//Escribe un bucle for que imprima en la consola los números del 1 al 10.

//Escribe un bucle while que imprima en la consola los números del 1 al 5.

//Crea un vector con los números del 1 al 5. Escribe un bucle for que imprima en la consola cada uno de los elementos del vector.

//Crea una función que reciba un número n y devuelva la suma de todos los números del 1 al n. Utiliza un bucle for para calcular la suma y muestra el resultado en la consola.

//Crea una función que reciba un vector y devuelva la suma de todos sus elementos. Utiliza un bucle while para calcular la suma y muestra el resultado en la consola.





//DOM y eventos

//Crea un archivo HTML con un botón y un div vacío. Usa JavaScript para agregar un mensaje al div cuando se hace clic en el botón.

//Crea una función que cambie el color de fondo de un elemento HTML a rojo cuando el mouse se mueve sobre él. Agrega esta función como un listener de evento para el div del ejercicio anterior.

//Crea una función que cambie el tamaño de fuente de un elemento HTML cuando se presiona una tecla en el teclado. Agrega esta función como un listener de evento para el div del ejercicio anterior.

//Crea una función que cambie el contenido de un elemento HTML cuando se hace doble clic sobre él. Agrega esta función como un listener de evento para el div del ejercicio anterior.

//Crea una función que cambie la imagen de fondo de un elemento HTML cuando se carga la página. Agrega esta función como un listener de evento para el body del documento.
