let nombre = prompt(" Ingrese su nombre: ");
let curso = prompt(" Ingrese curso online que esta realizando: ");
let tiempo = parseInt(prompt(" Cuantos minutos diarios invertiras en el curso de Javascript: "));

var dias = 16;
let mensaje = nombre + ", tus minutos diarios a parte del tiempo invertido en el curso de " + curso + " , seran de " + tiempo + " minutos " +
              " los que al término de este serán " + (dias*tiempo)/60 + " hrs. " +
              " , quizas podrias mejorarlos ";

alert(mensaje);
