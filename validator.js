

const validator = {

  isValid(numtarjeta) {
    let total=0,totalPar=0, totalImpar=0;
    const numTarjetaRevesa = reversaNum(numtarjeta);//solo invierte en numtarjeta
    const doubles = numTarjetaRevesa.map(function(x) { return x * 2;}); // funcion map para el array numtarjetareversa que recorre y multiplica sus valores por 2
    const pares = posPares(numTarjetaRevesa);
    const impares = posImpares(doubles);
   
    for(const i of pares) totalPar+=parseInt(i);
    for(const j of impares) totalImpar+=parseInt(j);

    total=totalPar+totalImpar;


    if(total%10 === 0){
      return true;
    }else{
      return false;
    }

  },
  maskify(numtarjeta) {

    //console.log(numtarjeta);

    const numTarjetaUltDigit = numtarjeta.substr(-4);
    const maskingCharacters = numtarjeta.slice(0,-4).replace(/\w/g, '#');

    //return numtarjeta.slice(0,-4).replace(/\d/g, "#") + numtarjeta.substr(-4);

    return `${maskingCharacters}${numTarjetaUltDigit}`;
   
  }


};
/**
*Funcion que realiza la reversa del numeroTarjeta y lo convierte en array -_-
*/
function reversaNum (num){
  const arrayNT1 = num.split("");
  const reversaNum = arrayNT1.reverse().join();
  const arrayNT2 = reversaNum.split(",");
  const arr = Array.from(arrayNT2);
  return arr;
}



/**
*Funcion que filtra el array y toma las posiciones pares y suma las posiciones del elemento mayor a 10
*/
function posImpares(num){
  const arr = [...num]; //convierte num en un arreglo
  const arrFiltrado = arr.filter((num, index) => index % 2 !== 0)
  
  arrFiltrado.forEach((numero, index, arreglo) => { //recorre el arreglo filtrado por impares y preguntas si el elemento es mayor a 9 
    if(numero>9){
      arreglo[index] = parseInt(String(numero).charAt(0))+parseInt(String(numero).charAt(1));//sobreescribe elemento, charAt solo se utiliza para cadenas
      return  arrFiltrado[index]; //retorna en arreglo/index y sigue recorriendo el array
    }else{ return false;}//sino salta y sigue recorriendo
  });

  return arrFiltrado;
}
/**
*Funcion que filtra el array y toma las posiciones impares
*/
function posPares(arreglo){
  const arr = [...arreglo]; //convierte num en un arreglo
  const arrFiltrado = arr.filter((num, index) => index % 2 === 0)//filtra los pares
  return arrFiltrado
}


  



export default validator;
