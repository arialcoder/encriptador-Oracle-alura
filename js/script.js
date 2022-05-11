/*
Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

*/
const inputText = document.querySelector(".input-text");

const munecoImg = document.getElementById ('munecoImg');

const mensaje = document.querySelector(".text-area");
mensaje.style.display='none';

const btnCopy = document.getElementById('btn-copy');
btnCopy.style.display="none";

const errorMsg = document.querySelector('#error');
errorMsg.style.visibility ='hidden';

const imagenText = document.querySelector('.banner-text');

inputText.addEventListener('change',mensajeError);
inputText.addEventListener('focus', ocultarError);

function btnEncriptar(){

     if(validarCadena(inputText.value)){
        const textoEncriptado = encriptar((inputText.value).trim());
        mensaje.value = "";
        mensaje.value = textoEncriptado;
        mensaje.style.display='block';
        btnCopy.style.display='block';
        inputText.value = "";
        inputText.focus();
        ocultarImagen();
     }
}

function validarCadena(cadena){

  let esValida = false;
  if(!inputText.value.length==0){
    const regex = /^[a-z\s\.,]*$/;
      if(regex.test((inputText.value).trim())){
       esValida = true;
       console.log("validando cadena...")
       return true;
      }else{
        alert("Debe ingresar solo letras minusculas y sin acéntos")
      }
  }else{
    errorMsg.style.visibility ='visible';
    console.log("cadena vacia")
  }
}

function ocultarImagen(){

  munecoImg.style.visibility='hidden';
  errorMsg.style.visibility ='hidden';
  imagenText.style.visibility='hidden';
}



function ocultarError(){
  errorMsg.style.visibility ='hidden';
}

function mensajeError(){
  if(inputText.value.length == 0){
    errorMsg.style.visibility ='visible';
  }else {
    errorMsg.style.visibility='hidden'
    errorMsg.style.display="none";
  }
}


function encriptar(stringEncriptar){
    let arrCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]

    stringEncriptar = stringEncriptar.toLowerCase();
    //console.log(stringEncriptar);

    for(let i=0; i<arrCodigo.length; i++){
        if(stringEncriptar.includes(arrCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(arrCodigo[i][0], arrCodigo[i][1])
        }
    }
    return stringEncriptar;

}

function btnDesencriptar(){

  if(validarCadena(inputText.value)){
     const textoDesencriptado = decodificar(inputText.value);
    mensaje.value = textoDesencriptado;
    inputText.value = "";
    inputText.focus();
    ocultarImagen();
  }

}

function decodificar(stringDecodificar){
    let arrDeco = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]

    stringDecodificar = stringDecodificar.toLowerCase();
    console.log(stringDecodificar);

    for(let i=0; i<arrDeco.length; i++){
        if(stringDecodificar.includes(arrDeco[i][0])){
            stringDecodificar = stringDecodificar.replaceAll(arrDeco[i][0], arrDeco[i][1])
        }
    }
    return stringDecodificar;
}


function copiarTexto(){

    navigator.clipboard.writeText(mensaje.value);
    mensaje.select();
    alert("Mensaje copiado: " + mensaje.value);
}
