alert("Bienvenidos al sistema de ingreso al PUB");
let cRechazos=0;
let cMujeres=0;
let cHombres=0;
let sexo;
do{

    let edad = parseInt(prompt("Ingrese su edad"));
    if(edad<18){
        alert("No tienes permitido ingresar al PUB");
        cRechazos++;
    }else{
        do{
            sexo=prompt("Ingrese sexo [M para Mujer | H para Hombres]").toLowerCase();
            if((sexo !="m") &&(sexo != "h"))
            {
                alert("Sexo ingresado no válido. Intentelo nuevamente")
            }
        }while((sexo !="m") &&(sexo != "h"));
        if(sexo=="m"){
            cMujeres++;
        }else{
            cHombres++
        }
    }
    seguir = prompt("Deseas seguir ingresando personas al PUB[s|n]").toLowerCase();
    if((seguir!="s") && (seguir!="n")){
        alert("Respuesta inválida. Debe ingresar [s|n].");
    }
}while(seguir=="s");

alert("ESTADISTICAS DE INGRESOS: " 
+ "Ingresos de Hombres: " + cHombres + ", Ingresos de Mujeres: " 
+ cMujeres + " y los Rechazados son: " + cRechazos)
