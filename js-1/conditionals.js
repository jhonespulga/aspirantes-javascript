/*En un archivo llamado conditionals.js Escribre una función calcularColor que recibe un número como
 argumento y retorna un string de acuerdo al número:
1-Si el número es 1 retorna "El color es negro".
2-Si el número es 2 retorna "El color es blanco".Si el número es 3 retorna "El color es azul".
3-De lo contrario retorna "El color es verde".
El problema es que la función tiene algunos errores y no está funcionando. Tu misión es corregirla
para que funcione correctamente según lo anterior.*/

function calcularColor (color){
    if (color === 1){
        return "El color es negro"
    }else if(color === 2){
        return "El color es blanco"
    }else if(color === 3){
        return "El color es azul"
    }
    return "El color es verde";
}
console.log(calcularColor(9));