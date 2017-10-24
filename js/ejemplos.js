function validar(){
  var error=false;
  var cajas = document.getElementsByClassName('caja');
      for (var i=0;i<cajas.length;i++) {
        if(cajas[i].value.length<=0){
            cajas[i].classList.add('caja-error');
            error=true;
        }else
        {
          cajas[i].classList.remove('caja-error');
        }
      }
      return error;
}

function sumar(){
  if(validar()){
    alert('Por favor llene todas las cajas para poder sumar');
  }else{
          var cajas = document.getElementsByClassName('caja');
          var suma = 0;

              for (var i=0;i<cajas.length;i++) {
                var num = parseInt(cajas[i].value);
                suma= suma + num;
              }

              // for (var ncaja in cajas) {
              //   if (cajas.hasOwnProperty(ncaja)) {
              //     var num = parseInt(cajas[ncaja].value);
              //     suma = suma +num;
              //   }
              // }

          alert('La suma es: ' + suma);
        }
}
