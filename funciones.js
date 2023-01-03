
var message_content = document.getElementById("message-content");
var encriptar = document.getElementById("encriptar");
var desencriptar = document.getElementById("desencriptar");
var copiar = document.getElementById("copiar-texto");

var mensaje_descifrado = document.getElementById("descifrado");
message_content.focus();


var vocales_norm = ["a","e","i","o","u"];
var vocales_encrip = [/a/g,/e/g,/i/g,/o/g,/u/g];

var vocalesEncriptados_norm = ["ai","enter","imes","ober","ufat"];
var vocalesEncriptados_encrip = [/ai/g,/enter/g,/imes/g,/ober/g,/ufat/g];

var contenido_mensaje;


if(!encriptar.onclick){
    document.getElementById("message-displayed").style.display = "none";
}


function encriptar_texto(){
    if(message_content.value != ""){
        contenido_mensaje = message_content.value;

        //funcion para encriptar el mensaje
        encriptar_mensaje(contenido_mensaje);
        message_content.value = "";
        document.getElementById("message-displayed").style.display = "flex";
        document.getElementById("doll-show").style.display = "none";
    }else{
       alert("completa el espacio")
    }
}

function encriptar_mensaje(texto){
    for (let i = 1; i < 5; i++) {
        texto = texto.replace(vocales_encrip[i], vocalesEncriptados_norm[i]);
    }
    //para la a
    texto = texto.replace(vocales_encrip[0], vocalesEncriptados_norm[0]);

    mensaje_descifrado.innerHTML = texto;
}

function desencriptar_texto(){
    if(message_content.value != ""){

        //funcion para descencriptar el mensaje
        contenido_mensaje = message_content.value;
        descencriptar_mensaje(contenido_mensaje);
        message_content.value = "";
        document.getElementById("message-displayed").style.display = "flex";
        document.getElementById("doll-show").style.display = "none";
    }else{
       alert("completa el espacio")
    }
}

function descencriptar_mensaje(texto){
    for (let i = 0; i < 5; i++) {
        texto = texto.replace(vocalesEncriptados_encrip[i], vocales_norm[i]); 
    }
    mensaje_descifrado.innerHTML = texto;
}

function copiar_cifrado(){
    var mensaje_oculto = document.createElement("input");
    mensaje_oculto.setAttribute("value",mensaje_descifrado.innerHTML);
    document.body.appendChild(mensaje_oculto);
    mensaje_oculto.select();
    document.execCommand("copy");
    document.body.removeChild(mensaje_oculto);
    alert("copiado")
}


encriptar.onclick = encriptar_texto;
desencriptar.onclick = desencriptar_texto;
copiar.onclick = copiar_cifrado;