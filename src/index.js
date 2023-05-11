import validator from './validator.js';

document.getElementById("idbotonRealizarPago").addEventListener("click", function() {
  const numTarjeta = document.getElementById("idnumTarjeta").value; 
  valida(numTarjeta);
  mask(numTarjeta);
});


function valida(numTarjeta) { 

  const nombre = document.getElementById("idnombre").value; 
  const fechaCaducidad = document.getElementById("idfechaCaducidad").value; 
  const cvv = document.getElementById("idcvv").value; 


  const tarjetaLimpia = limpiaYvalidaNum(numTarjeta,nombre,fechaCaducidad,cvv);

  if(tarjetaLimpia !== 0){

    const RespValida = validator.isValid(tarjetaLimpia);

    if (RespValida!==true){
      document.getElementById("msg_g").style.display="none";
      document.getElementById("msg_m").style.display="none";
      document.getElementById("msg_b").style.display="";
      document.getElementById("msg_b").innerHTML = "Número inválido.";
   
    }else{
      document.getElementById("msg_b").style.display="none";
      document.getElementById("msg_m").style.display="none";
      document.getElementById("msg_g").style.display="";
      document.getElementById("msg_g").innerHTML = "Se realizó el pago.";
    }
     
  }else{
    document.getElementById("msg_g").style.display="none";
    document.getElementById("msg_b").style.display="none";
    document.getElementById("msg_m").style.display="";
    document.getElementById("msg_m").innerHTML="Verifique los datos ingresados";
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
function limpiaYvalidaNum (num,nom,fv,cvv) {

  const vfv = fv.split("/");
  
  const expRegSoloNum = "^[0-9]+$"; //expresion regular que verifica que sean solo numeros
  const numSinEspacios = num.replace(/\s/g, ''); // remplaza los espacios por ´´ de manera global
  const anio = new Date().getFullYear().toString().substr(-2);

  if (numSinEspacios.match(expRegSoloNum) !== null && nom !== "" && vfv[1] >=anio && cvv !== ""){
    return numSinEspacios;

  }else { return 0;}
}



