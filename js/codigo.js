
function mensaje(){
  alert('Mensaje desde otro archio!');
}

function saludar(){
var nombre=
 document.getElementById('nombre').value;
var salida = document.getElementById('texto');
salida.innerHTML=nombre;
colorear();
}

function colorear(){
  // var parrafos = document.getElementsByTagName('header');
  var parrafos = document.getElementsByClassName('parrafo');
  for(var i=0;i<parrafos.length;i++){
    parrafos[i].style.backgroundColor="yellow";
  }
}

function asignarEventos(){
var boton = document.querySelector('.mensaje');
boton.addEventListener('click',mostrarMensaje,false);
}
function mostrarMensaje(){
  alert('Este click fue asignado de forma dinamica');
}
