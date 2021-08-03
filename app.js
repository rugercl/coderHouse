alert("Sistema Municipal para solicitar licencia de conducir");
const nombre = prompt("Ingrese su nombre");
const edad  = parseInt(prompt("Ingrese su Edad"));

if(edad>=18 && edad<=60){
    alert(nombre + ", Puedes solicitar licencia de conducir en esta Municipalidad");
} else if(edad>=15 && edad<18){
    alert(nombre + ", Puedes solicitar licencia de conducir en esta Municipalidad, con un tutor que te acompañe");
}else if(edad>=1){
    alert(nombre + ", No tienes los requisitos para obtener una licencia");
}else{
    alert(nombre + ", Ingrese un numero valido o distinto de cero(0)");
}
