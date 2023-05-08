import validator from './validator.js';

document.getElementById("idbotonRealizarPago").addEventListener("click", function() {
  const numTarjeta = document.getElementById("idnumTarjeta").value; 
  valida(numTarjeta);
  mask(numTarjeta);
});


function valida(numTarjeta) { 

  const tarjetaLimpia = limpiaYvalidaNum(numTarjeta);

  if(tarjetaLimpia !== 0){

    const RespValida = validator.isValid(tarjetaLimpia);

    if (RespValida!==true){
      document.getElementById("msg").innerHTML = "Número inválido.";
    }else{
      document.getElementById("msg").innerHTML = "Se realizó el pago.";
    }
     
  }else{
    document.getElementById("msg").innerHTML = "Número inválido.";
  }
 
  
} 

//document.getElementById("idbotonRealizarPago").addEventListener("click", mask);

function mask(numTarjeta){
  const tarjetamask = validator.maskify(numTarjeta);
  document.getElementById("idnumTarjeta").value = tarjetamask; 
}

/**
    * funcion que limpia el numero de tarjeta para no tener espacios y validar tamaño
    */
function limpiaYvalidaNum (num) {
  const expRegSoloNum = "^[0-9]+$"; //expresion regular que verifica que sean solo numeros
  const numSinEspacios = num.replace(/\s/g, ''); // remplaza los espacios por ´´ de manera global
 
  if (numSinEspacios.match(expRegSoloNum) !== null ){
    return numSinEspacios;
  }else { return 0;}
}



